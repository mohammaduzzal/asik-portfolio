import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-[calc(100vh-243px)]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;