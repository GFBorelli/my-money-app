import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { Form, Button, Col } from 'react-bootstrap'

class BillingCycleForm extends Component {
    render() {
        const ReduxFormControl = ({input, meta, ...props}) => {
            return <Form.Control {...props} {...input} />
        };
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

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)