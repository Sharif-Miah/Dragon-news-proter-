import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    const { title, image_url, details, category_id } = news;
    console.log(news);
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    <p>{details}</p>
                </Card.Text>
                <Button variant="primary"><Link to={`/category/${category_id}`} className='text-white text-decoration-none'>Go to category News</Link></Button>
            </Card.Body>
        </Card>
    );
};

export default News;