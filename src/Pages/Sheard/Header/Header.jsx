import { Button } from 'bootstrap';
import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/ProviderContext';
import LeftSiteNav from '../LeftSiteNave/LeftSiteNav';
import RightSiteNav from '../RightSiteNav/RightSiteNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const HandleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => {
                console.error(error);
            })
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-5'>
            <Container>
                <Navbar.Brand><Link to='/' className='text-decoration-none text-white'>News Portal </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" >
                            {
                                user?.uid ?
                                    <>
                                        <span className='mt-2'>{user.displayName}</span>
                                        <button onClick={HandleLogOut} className='mx-2 text-white bg-primary'>Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link className='text-decoration-none text-white me-3' to='/login'>Login</Link>
                                        <Link className='text-decoration-none text-white' to='/register'>Register</Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                    <Image roundedCircle style={{ height: '40px' }} src={user.photoURL}></Image>
                                    :
                                    <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSiteNav></LeftSiteNav>
                    </div>
                    <div className='d-lg-none'>
                        <RightSiteNav></RightSiteNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;