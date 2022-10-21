import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllNewsSummery from '../Sheard/AllNewsSummery/AllNewsSummery';

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h1>Category page {categoryNews.length}</h1>
            {
                categoryNews.map(news => <AllNewsSummery
                    key={news._id}
                    news={news}
                >

                </AllNewsSummery>)
            }
        </div>
    );
};

export default Category;