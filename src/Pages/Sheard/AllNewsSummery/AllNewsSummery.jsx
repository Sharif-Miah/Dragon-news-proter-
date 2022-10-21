import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaShareAlt } from 'react-icons/fa';


const AllNewsSummery = ({ news }) => {
    const { _id, image_url, details, title, total_view, rating, author } = news;
    console.log(news);
    return (
        <Card className="mt-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image roundedCircle style={{ width: '45px' }} src={author.img}></Image>
                    <div className='ms-3'>
                        <h5 className='mb-0'><small>{author.name}</small></h5>
                        <p className='mt-0'>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaBookmark className='me-2'></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p> :
                            <p>{details}</p>
                    }
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default AllNewsSummery;