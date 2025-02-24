import { Outlet, useLocation, useNavigate } from "react-router";


export default function Layout() {

    const navigate = useNavigate()
    const { pathname } = useLocation()
    const showButton = pathname !== "/"
    const handleclick = () => navigate("/")

    return(
        <>
            <header>
                <h1>Logo</h1>
            </header>
            <Outlet />
            {showButton && <button onClick={handleclick}>Voltar</button>}
            <footer>
                <h3>My footer</h3>
            </footer>
        </>
    )
}