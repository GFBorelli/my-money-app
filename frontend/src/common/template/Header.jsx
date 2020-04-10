import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from '../../auth/authActions'

import { Navbar, Nav, NavItem, NavLink, Dropdown } from 'react-bootstrap'
import { FaMoneyBillAlt, FaDollarSign, FaEdit } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { GiExitDoor } from 'react-icons/gi'


class Header extends Component {
    render() {
        const { name } = this.props.user
        if (!this.props.user) return false
        return (

            < Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
                <Navbar.Brand href="#dashboard">
                    <FaMoneyBillAlt /> <b>Money </b>Manager
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#dashboard"><MdDashboard /> Dashboard</Nav.Link>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}><FaEdit /> Cadastro</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#billingCycles"><FaDollarSign />Ciclo de Pagamentos</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>;
                    </Nav>
                    <Nav>
                        <Navbar.Text >Usuário: {name}</Navbar.Text>
                        <Nav.Link href="#" onClick={this.props.logout}><GiExitDoor size='1.8rem' /> Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Header)