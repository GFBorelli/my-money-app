import React from 'react'

import { MdDashboard } from 'react-icons/md'
import { FaDollarSign, FaEdit } from 'react-icons/fa'
import { Nav, NavItem, NavLink, Dropdown } from 'react-bootstrap'

export default props => (
    <Nav variant="pills" defaultActiveKey="#home" className="flex-column">
        <Nav.Link href="#home"><MdDashboard /> Dashboard</Nav.Link>
        <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}><FaEdit/> Cadastro</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#billingCycles"><FaDollarSign/>Ciclo de Pagamentos</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>;
    </Nav>
)