import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init } from './billingCycleActions'
import ItemList from './ItemList'

import { Form, Button, Row, Col } from 'react-bootstrap'

class BillingCycleForm extends Component {
    render() {

        const ReduxFormControl = ({ input, meta, ...props }) => {
            if (this.props.tabSelected !== "remove") {
                return <Form.Control {...props} {...input} />
            } else {
                return <Form.Control readOnly {...props} {...input} />
            }
        }

        const { handleSubmit, credits, debits } = this.props

        return (
            <div className='ml-4 mr-4 mt-3'>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group className='col-7' as={Col} >
                            <Form.Label>Nome</Form.Label>
                            <Field name='name' component={ReduxFormControl} />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Mês</Form.Label>
                            <Field name='month' component={ReduxFormControl} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Ano</Form.Label>
                            <Field name='year' component={ReduxFormControl} />
                        </Form.Group>
                    </Form.Row>

                    <Row>
                        <Col xs={12} sm={6}>
                            <ItemList label='Créditos' field='credits' list={credits} />
                        </Col>
                        <Col xs={12} sm={6}>
                            <ItemList label='Débitos' field='debits' list={debits} />
                        </Col>
                    </Row>

                    <Button variant={this.props.submitColor} type='submit'>{this.props.submitLabel}</Button>{' '}
                    <Button variant="secondary" onClick={() => this.props.init()}>Cancelar</Button>
                </Form>
            </div >
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debits: selector(state, 'debits'),
    tabSelected: state.tabs.selected,
    submitColor: state.tabs.submitColor,
    submitLabel: state.tabs.submitLabel
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)