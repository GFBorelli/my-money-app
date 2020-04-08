import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showRemove } from './billingCycleActions'

import { Table, Button } from 'react-bootstrap'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'

class BillingCycleList extends Component {

    componentDidMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <Button variant='warning' onClick={() => this.props.showUpdate(bc)}> <FaPencilAlt /> </Button>{' '}
                    <Button variant='danger' onClick={() => this.props.showRemove(bc)}> <FaTrashAlt /> </Button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div className='ml-4 mr-4'>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showRemove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)