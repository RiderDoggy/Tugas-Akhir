import logo_desa from "../assets/logo-kabupaten.png"
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom';
import '../style/header.css'


const header = () => {
  const activeLink = 'me-4 nav-link actives'
  const normalLink = 'me-4 nav-link'
    return (

      <Navbar bg="light" expand="lg" className='bg-body-tertiary sticky-top'>
        <Container className="navbarBrand-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-responsive-button"/>
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-responsive-body">
          <Navbar.Brand href="#" className="ms-5">
            <img
              src={logo_desa}
              className="d-inline-block align-text-left me-4 ms-5 logo"
              alt="desa tanjungsari"
            />
            Desa Tanjungsari
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink to='/'
            className={({isActive})=> (isActive ? activeLink : normalLink)}>
            Beranda
            </NavLink>
            <NavLink to='/profiledesa'
            className={({isActive})=> (isActive ? activeLink : normalLink)}>
            Profil Desa
            </NavLink>
            <NavLink to='/umkm'
            className={({isActive})=> (isActive ? activeLink : normalLink)}>
            UMKM
            </NavLink>
          </Nav>
        </Navbar.Collapse>    
        </Container> 
    </Navbar>
    )
}

export default header;