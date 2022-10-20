import { createBrowserRouter } from "react-router-dom";
import Home from "../../component/Home/Home";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import News from "../../Pages/News/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                element: <News></News>
            }
        ]
    }
])