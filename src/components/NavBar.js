import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const NavBar = (props) => {
    return (
        <>
            <Navbar bg={props.mode} variant={props.mode}>
                <Container>
                    <Navbar.Brand as={Link} to="/home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>

                    <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Dark Mode"
                    className={`text-${props.mode==='light'?'dark':'light'}`}
                    onClick={props.toogleMode}
                />
                </Container>

               
            </Navbar>


        </>
    )
}

NavBar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string,

};

NavBar.defaultProps = {
    title: "This is default title",
    about: "This is default about"
}