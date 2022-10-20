import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa';

const ListGropIconsLink = () => {
    return (
        <ListGroup>
            <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaTwitter /> Teitter</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaGithub /> Github</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
            <ListGroup.Item className='mb-2'>Terms And Condition</ListGroup.Item>
        </ListGroup>
    );
};

export default ListGropIconsLink;