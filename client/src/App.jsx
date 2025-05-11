import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import { AboutPage, DashboardPage, LandingPage, LoginPage, NotFoundPage, ResumeEditPage, SignUpPage, TemplatesPage } from "./pages"
import RootLayout from "./layouts/RootLayout"
import DashboardLayout from "./layouts/DashboardLayout"
function App() {
    return (
        <Router>
            <Routes>
                {/* Public pages */}
                <Route element={<RootLayout/>}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/templates" element={<TemplatesPage />} />
                    {/* Private */ }
                    <Route element={<DashboardLayout/>}>
                        <Route path="/resume/:resumeId" element={<ResumeEditPage/>}/>
                        <Route path="/dashboard" element={<DashboardPage/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes >
        </Router >
    )
}

export default App
