import Header from "./Components/Header.jsx";
import { Outlet } from "react-router";

function App() {
    return (
        <div className="bg-black">
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
