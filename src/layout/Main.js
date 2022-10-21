import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sheard/Footer/Footer';
import Header from '../Pages/Sheard/Header/Header';
import LeftSiteNav from '../Pages/Sheard/LeftSiteNave/LeftSiteNav';
import RightSiteNav from '../Pages/Sheard/RightSiteNav/RightSiteNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSiteNav></LeftSiteNav>
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3' className='d-none d-lg-block'>
                        <RightSiteNav></RightSiteNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;