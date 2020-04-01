import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'

import PageHeader from '../common/template/PageHeader'
import ValueBox from '../common/widget/ValueBox'

import { CardDeck, Container } from 'react-bootstrap'
import { FaCreditCard, FaBalanceScale, FaPiggyBank } from 'react-icons/fa'

class Dashboard extends Component {

    componentDidMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debit } = this.props.summary || {}
        return (
            <div>
                <PageHeader name='Dashboard' small='beta version' />
                <Container>
                    <CardDeck>
                        <ValueBox classname='ml-1 mr-1' value={`R$ ${credit}`} bg='success' text='Total de Créditos' icon={<FaPiggyBank size='8vh' />} />
                        <ValueBox classname='ml-1 mr-1' value={`R$ ${debit}`} bg='danger' text='Total de Débitos' icon={<FaCreditCard size='8vh' />} />
                        <ValueBox classname='ml-1 mr-1' value={`R$ ${credit - debit}`} bg='primary' text='Valor Consolidado' icon={<FaBalanceScale size='8vh' />} />
                    </CardDeck>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)