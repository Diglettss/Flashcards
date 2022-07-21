const db = require("../db")
const bcrypt = require("bcrypt")
const {UnauthorizedError, BadRequestError} = require("../utils/errors")
const { BCRYPT_WORK_FACTOR } = require("../config")

class User{
    static async makePublicUser(user){
        return{
            id: user.id,
            email: user.email,
            username: user.username,
            firstName: user.first_name,
            lastName: user.last_name,
            createdAt: user.created_at,
            
        }
    }

    static async login(credentials){
        const requiredFields = ["email", "password"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })
        const user = await User.fetchUserByEmail(credentials.email)
        if(user){
            const isValid = await bcrypt.compare(credentials.password, user.password)
            if(isValid){
                return User.makePublicUser(user)
            }
        }
        throw new UnauthorizedError("Invalid email or password")
    }

    static async register(credentials){
        const requiredFields = ["email", "username", "firstName", "lastName", "password"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        if(credentials.email.indexOf("@") <= 0){
            throw new BadRequestError("Invalid email")
        }

        const existingUser = await User.fetchUserByEmail(credentials.email)
        if(existingUser){
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }

        const lowercasedEmail = credentials.email.toLowerCase()
        const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)


        const result = await db.query(
            ` INSERT INTO users (
                email,
                username,
                password,
                first_name,
                last_name
                )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, username, first_name, last_name, email, created_at, updated_at
            `,
            [lowercasedEmail, credentials.username, hashedPassword, credentials.firstName, credentials.lastName]
        )

        const user = result.rows[0]
        return User.makePublicUser(user)
        
    }

    static async fetchUserByEmail(email) {
        if(!email){
            throw new BadRequestError("No email provided")
        }
        const query = `SELECT * FROM users WHERE email = $1`
        const result = await db.query( query, [email.toLowerCase()])
    
        const user = result.rows[0]
    
        return user
    }


}

module.exports = User