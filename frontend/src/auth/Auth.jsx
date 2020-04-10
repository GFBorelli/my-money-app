import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login, signup } from './authActions'
import Messages from '../common/msg/Messages'

import { Container, Card, Form, Button } from 'react-bootstrap'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = { loginMode: true }
    }

    changeMode() {
        this.setState({ loginMode: !this.state.loginMode })
    }

    onSubmit(values) {
        const { login, signup } = this.props
        this.state.loginMode ? login(values) : signup(values)
    }


    render() {
        const ReduxFormControl = ({ input, meta, ...props }) => {
            return <Form.Control {...props} {...input} />
        }
        const { loginMode } = this.state
        const { handleSubmit } = this.props
        return (
            <div>
                <Container className='mt-5'>
                    <h3>Money Manager</h3>
                    <Card bg='light' text='dark' className="mt-5">
                        <Card.Header>Faça seu login</Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit(value => this.onSubmit(value))}>
                                <Form.Group className={!loginMode ? '' : 'd-none'}>
                                    <Form.Label>Nome</Form.Label>
                                    <Field name='name' type='input' component={ReduxFormControl} placeholder='digite seu nome' />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Field name='email' type='email' component={ReduxFormControl} placeholder='digite seu email' />
                                    <Form.Text className="text-muted">
                                        Seus dados não serão compartilhados.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Senha</Form.Label>
                                    <Field name='password' type='password' component={ReduxFormControl} placeholder='digite sua senha' />
                                </Form.Group>

                                <Form.Group className={!loginMode ? '' : 'd-none'}>
                                    <Form.Label>Confirmação da senha</Form.Label>
                                    <Field name='confirm_password' type='password' component={ReduxFormControl} placeholder='digite sua senha novamente' />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    {loginMode ? 'Entrar' : 'Registrar'}
                                </Button>
                            </Form>
                            <br />
                            <a onClick={() => this.changeMode()}>
                                {!loginMode ? 'Novo usuário? Clique aqui!' : 'Ja é cadastrado? Clique aqui!'}
                            </a>
                            <Messages />
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup },
    dispatch)

export default connect(null, mapDispatchToProps)(Auth)