import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'

import { Table, Form, Button } from 'react-bootstrap'
import { FaPlus, FaRegClone, FaTrashAlt } from 'react-icons/fa'

class ItemList extends Component {

    add(index, item = {}) {
        this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
    }

    remove(index) {
        if (this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }

    renderRows() {
        const ReduxFormControl = ({ input, meta, ...props }) => {
            if (this.props.tabSelected !== "remove") {
                return <Form.Control {...props} {...input} />
            } else {
                return <Form.Control readOnly {...props} {...input} />
            }
        }

        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${this.props.field}[${index}].name`} component={ReduxFormControl} placeholder='digite um nome' /></td>
                <td><Field name={`${this.props.field}[${index}].value`} component={ReduxFormControl} placeholder='digite um valor' /></td>
                <td className={this.props.showStatus ? '' : 'd-none'}><Field name={`${this.props.field}[${index}].status`} component={ReduxFormControl} placeholder='digite um status' /></td>
                <td className={this.props.tabSelected !== 'remove' ? '' : 'd-none'}>
                    <Button onClick={() => this.add(index + 1)}><FaPlus /></Button>{' '}
                    <Button onClick={() => this.add(index + 1, item)} variant='warning'><FaRegClone /></Button>{' '}
                    <Button onClick={() => this.remove(index)} variant='danger'><FaTrashAlt /></Button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div className='mt-4 mb-4 border-bottom'>
                <h4>{this.props.label}</h4>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th className={this.props.showStatus ? '' : 'd-none'}>Status</th>
                            <th className={`table-actions ${this.props.tabSelected !== 'remove' ? '' : 'd-none'}`}>Ações</th>
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

const mapStateToProps = state => ({ tabSelected: state.tabs.selected })
const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ItemList)