import App from "@/App";
import MainLayout from "@/MainLayout/MainLayout";
import Portfolio from "@/pages/Portfolio";
import Team from "@/pages/Team";
import Work from "@/pages/Work";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path : '/',
        Component : MainLayout,
        children :[
            {
                index :true,
                Component :App
            },
            {
                path : "/team",
                Component :Team
            },
            {
                path : "/portfolio",
                Component :Portfolio
            },
            {
                path : "/work",
                Component :Work
            }
        ]
    }

])

export default router;