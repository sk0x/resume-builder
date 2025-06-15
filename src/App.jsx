import { HashRouter, Routes, Route } from "react-router-dom"
import { LandingPage, LoginPage, NotFoundPage,  SignUpPage } from "./pages"
import RootLayout from "./layouts/RootLayout"

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route element={<RootLayout/>}>
                    <Route path="/" element={<LandingPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes >
        </HashRouter>
    )
}

export default App
