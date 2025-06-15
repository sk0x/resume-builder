import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { LandingPage, LoginPage, NotFoundPage,  SignUpPage } from "./pages"
import RootLayout from "./layouts/RootLayout"
function App() {
    return (
        <Router>
            <Routes>
                {/* Public pages */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route element={<RootLayout/>}>
                    <Route path="/" element={<LandingPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes >
        </Router >
    )
}

export default App
