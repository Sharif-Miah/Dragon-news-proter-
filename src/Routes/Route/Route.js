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
                loader: () => fetch('http://localhost:5000/news'),
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <News></News>
            }
        ]
    }
])