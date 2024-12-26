import Header from "./Components/Header.jsx";
import { Outlet} from "react-router"

function App() {
    
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}

export default App;
