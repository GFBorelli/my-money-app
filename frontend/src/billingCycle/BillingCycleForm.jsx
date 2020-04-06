import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { init } from './billingCycleActions'

import { Form, Button, Col } from 'react-bootstrap'

class BillingCycleForm extends Component {
    render() {
        const ReduxFormControl = ({ input, meta, ...props }) => {
            return <Form.Control {...props} {...input} />
        }
        const { handleSubmit } = this.props
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

                    <Button variant="primary" type='submit'>Submit</Button>{' '}
                    <Button variant="secondary" onClick={() => this.props.init()}>Cancelar</Button>
                </Form>
            </div>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)