import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/image 14.png";
import search from "../assets/carbon_search.png";
import cart from "../assets/Group 8.png";
import { Badge } from "@mui/material";
import { useCart } from "../context/cartContext";

function Header() {
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="bg-[#4D0000FD]">
      <div className="h-[35px] flex justiy-between items-center text-white p-2">
        <p className="sm:text-[12px] text-[11px] flex-1 text-center">
          Contact Us :- (000) 123-4567
        </p>
        <div className="flex mr-[100px]">
          <img src={search} alt="search-icon" className="mx-1" />
          {cartItems.length > 0 ? (
            <Link to="/cart">
              <Badge badgeContent={totalQuantity} color="secondary">
                <img src={cart} alt="cart-icon" />
              </Badge>
            </Link>
          ) : (
            <img src={cart} alt="cart-icon" />
          )}
        </div>
      </div>
      <Navbar expand="lg" className="font-body min-h-[10vh] text-[18px]">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" className="w-[138px]" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto text-white active:text-white"
              variant="underline"
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <NavDropdown
                title="Watches"
                className="custom-dropdown"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/watches/rolex">
                  Rolex
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/watches/patek-phillips">
                  Patek Phillips
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/watches/rado">
                  Rado
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/watches/seiko">
                  seiko
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="custom-dropdown"
                title="Jewelery"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/jewelery/rings">
                  Studs
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/jewelery/studs">
                  Earrings
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/jewelery/earrings">
                  Diamond Rings
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/jewelery/bracelet">
                  Bracelet
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/jewelery/chains">
                  Chains
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/trade-sell">
                Trade & Sell
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link}>Logout</Nav.Link>
              <Nav.Link as={Link} to="/profile">
                My Account
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
