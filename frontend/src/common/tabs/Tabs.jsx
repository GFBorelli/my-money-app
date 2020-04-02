import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabsActions'

import { Nav } from 'react-bootstrap'
import { FaBars, FaPlus, FaPencilAlt, FaTrashAlt } from 'react-icons/fa'

class Tabs extends Component {


    render() {
        const handleSelect = (eventKey) => this.props.selectTab(eventKey)
        return (
            <Nav className='ml-4 mr-4' justify variant="tabs" defaultActiveKey="list" onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link eventKey="list"><FaBars /> Listar</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="add"><FaPlus /> Incluir</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="edit"><FaPencilAlt /> Alterar</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="remove"><FaTrashAlt /> Excluir</Nav.Link>
                </Nav.Item>
            </Nav >
        )
    }
}

const mapStateToProps = state => ({ eventKey: state.selectedTab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Tabs)