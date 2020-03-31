import React from 'react'
import { Navbar, Nav, NavItem, NavLink, Dropdown } from 'react-bootstrap'
import { FaMoneyBillAlt, FaDollarSign, FaEdit } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'

export default props => (
    <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
            <FaMoneyBillAlt /> <b>My </b>Money
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" defaultActiveKey="#home">
                <Nav.Link href="#home"><MdDashboard /> Dashboard</Nav.Link>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}><FaEdit /> Cadastro</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#billingCycles"><FaDollarSign />Ciclo de Pagamentos</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>;
    </Nav>
        </Navbar.Collapse>
    </Navbar>
)

