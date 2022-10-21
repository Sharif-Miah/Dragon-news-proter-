import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllNewsSummery from '../../Pages/Sheard/AllNewsSummery/AllNewsSummery';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h1>Home page: {allNews.length}</h1>
            <div>
                {
                    allNews.map(news => <AllNewsSummery
                        key={news._id} news={news}
                    />)
                }
            </div>
        </div>
    );
};

export default Home;