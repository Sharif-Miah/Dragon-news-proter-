import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import ListGropIconsLink from './ListGropIconsLink/ListGropIconsLink';
import RightCarosel from './RightCarosel/RightCarosel';


const RightSiteNav = () => {
    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button className='mb-3' variant="outline-primary"><FaGoogle></FaGoogle> Sign In with google</Button>
                    <Button variant="outline-secondary"><FaGithub /> Sign In with Github</Button>
                </ButtonGroup>
            </div>
            <div className='mt-3'>
                <h3 className='mt-4'>Find Us On</h3>
                <ListGropIconsLink />
            </div>
            <div>
                <RightCarosel />
            </div>

        </div>

    );
};

export default RightSiteNav;