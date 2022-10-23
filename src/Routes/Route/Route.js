import { createBrowserRouter } from "react-router-dom";
import Home from "../../component/Home/Home";
import Login from "../../component/Login/Login";
import PriveteRoute from "../../component/PriveteRoute/PriveteRoute";
import Register from "../../component/Register/Register";
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
                loader: () => fetch('https://dragon-news-server-blond.vercel.app/news'),
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://dragon-news-server-blond.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`https://dragon-news-server-blond.vercel.app/news/${params.id}`),
                element: <PriveteRoute><News></News></PriveteRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])