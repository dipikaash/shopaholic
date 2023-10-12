import Header from "./Header";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
    <div className="container">
    <Header />
    <div className="body">
        <Outlet />
    </div>
</div>)
}

export default Home;