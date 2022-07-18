import "./App.css";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import NotFound from "../NotFound/NotFound.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthContextProvider, useAuthContext } from "../contexts/Auth";

export default function AppContainer() {
  return (
      <AuthContextProvider>
                  <App />
      </AuthContextProvider>
  );
}


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}