import {RouterProvider,createBrowserRouter,Outlet } from "react-router-dom";
import LoginRegister from "./componnets/login";
import { useState } from "react";
import Home from "./componnets/Home";
import About from "./componnets/About"
import Contact from "./componnets/Contact";
import Service from "./componnets/Service";
import Navbar from "./componnets/Navbar";
import ProtectedRoute from "./ProtectedRoute";
function Layout() {
return (
<>
<Navbar />
<main style={{ minHeight: "100vh", marginTop: "1rem" }}>
<Outlet />
</main>
</>
)
}
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const[redirectPath,setRedirectPath]=useState("/services");
    const handleLogin = () => {
        setIsAuthenticated(true);
    };
    const handleLogout = () => {
        setIsAuthenticated(false);
    };
    const router=createBrowserRouter([{
path: '/',
element: <Layout handleLogout={handleLogout}
isAuthenticated={isAuthenticated} />,
children: [
{ index: true, element: <Home /> },
{ path: 'about', element: <About /> },
{ path: 'login', element: <LoginRegister onLogin={handleLogin}
redirectPath={redirectPath} /> },
{ path: 'contact', element: <Contact /> },
{ path: 'services', element: <ProtectedRoute
isAuthenticated={isAuthenticated} element={<Service/> }
path={setRedirectPath} /> }
]
}])
return (
<>
<RouterProvider router={router} />
</>
);
}
export default App;