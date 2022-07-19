import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import MySetPage from "../MySetPage/MySetPage.jsx";
import CreateSetPage from "../CreateSetPage/CreateSetPage.jsx";
import * as React from "react"
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPage from '../LoginPage/LoginPage'
import RegistrationPage from '../RegistrationPage/RegistrationPage'
import NotFound from '../NotFound/NotFound'
import apiClient from "../../../services/apiClient"
import { AuthContextProvider, useAuthContext } from "../../../contexts/auth"
import { useEffect,  } from 'react'
import Flashcard from "../Flashcard/Flashcard.jsx";


export default function AppContainer () {
  return (
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  )
}

function App() {
  const {user, setUser, error, setError} = useAuthContext();
  
  useEffect(() => {
    const fetchUser = async () => {
      const {data, err} = await apiClient.fetchUserFromToken()
      if (data) setUser(data.user)
      if (err) setError(err)
    }

    const token = localStorage.getItem("flashcard_token");
    if(token) {
      apiClient.setToken(token)
      fetchUser()
    }
  }, [])

  return (
    <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/mysets" element={<MySetPage />} />
                    <Route path="/create" element={<CreateSetPage />} />
                    <Route path="/flashcard" element={<Flashcard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App
