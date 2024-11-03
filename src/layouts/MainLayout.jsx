import toast, { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const MainLayout = () => {
    return (
        <div className="">
            <Toaster></Toaster>
            <div className="h-16">
                <NavBar></NavBar>
            </div>
            <div className="min-h-[calc(100vh-288px)] p-12 container mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;