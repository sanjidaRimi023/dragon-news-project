import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home"
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts/>,
        children: [
            {
                path: '',
                element:<Home/>
            },
            {
                path: '/category/:id',
                element:<CategoryNews/>
            }
        ]
        
    },
    {
        path: '/auth',
        element: <h1>auth section</h1>

    },
    {
        path: '/news',
        element: <h1>news section</h1>

    },
    {
        path: '/*',
        element: <h1>error 404</h1>

    }
   
])

export default router