import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabsActions'

import { Nav } from 'react-bootstrap'
import { FaBars, FaPlus, FaPencilAlt, FaTrashAlt } from 'react-icons/fa'

class Tabs extends Component {


    render() {
        const handleSelect = (eventKey) => this.props.selectTab(eventKey)

        const visibleList = this.props.tabs.visible['list']
        const visibleTabList = visibleList ? '' : 'd-none'

        const visibleAdd = this.props.tabs.visible['add']
        const visibleTabAdd = visibleAdd ? '' : 'd-none'

        const visibleEdit = this.props.tabs.visible['edit']
        const visibleTabEdit = visibleEdit ? '' : 'd-none'

        const visibleRemove = this.props.tabs.visible['remove']
        const visibleTabRemove = visibleRemove ? '' : 'd-none'

        return (
            <Nav className='ml-4 mr-4' variant="tabs" defaultActiveKey="list" onSelect={handleSelect}>
                <Nav.Item className={visibleTabList}>
                    <Nav.Link eventKey="list"><FaBars /> Listar</Nav.Link>
                </Nav.Item>
                <Nav.Item className={visibleTabAdd}>
                    <Nav.Link eventKey="add"><FaPlus /> Incluir</Nav.Link>
                </Nav.Item >
                <Nav.Item className={visibleTabEdit}>
                    <Nav.Link eventKey="edit"><FaPencilAlt /> Alterar</Nav.Link>
                </Nav.Item>
                <Nav.Item className={visibleTabRemove}>
                    <Nav.Link eventKey="remove"><FaTrashAlt /> Excluir</Nav.Link>
                </Nav.Item>
            </Nav >
        )
    }
}

const mapStateToProps = state => ({ tabs: state.tabs })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Tabs)