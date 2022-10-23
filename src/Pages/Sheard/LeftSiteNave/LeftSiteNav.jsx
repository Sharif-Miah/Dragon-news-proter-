import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSiteNav = () => {
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        fetch('https://dragon-news-server-blond.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setcategories(data))
    }, [])
    return (
        <div>
            <h4>LeftSiteNav {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSiteNav;