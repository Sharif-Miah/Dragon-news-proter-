import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Context/ProviderContext';
import ListGropIconsLink from './ListGropIconsLink/ListGropIconsLink';
import RightCarosel from './RightCarosel/RightCarosel';

const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider()

const RightSiteNav = () => {

    const { providerLogin, githubProviderLogin } = useContext(AuthContext);

    const googleHandler = () => {
        providerLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const githubHandler = () => {
        githubProviderLogin(gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button onClick={googleHandler} className='mb-3' variant="outline-primary"><FaGoogle></FaGoogle> Sign In with google</Button>
                    <Button onClick={githubHandler} variant="outline-secondary"><FaGithub /> Sign In with Github</Button>
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