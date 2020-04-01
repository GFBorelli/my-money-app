import React, { Component } from 'react'

import PageHeader from '../common/template/PageHeader'
import ValueBox from '../common/widget/ValueBox'

import { CardDeck } from 'react-bootstrap'
import { FaCreditCard, FaBalanceScale, FaPiggyBank } from 'react-icons/fa'

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <PageHeader name='Dashboard' small='beta version' />
                <CardDeck>
                    <ValueBox classname='ml-5' value='R$ 10' bg='success' text='Total de Créditos' icon={<FaPiggyBank size='10vh' />} />
                    <ValueBox value='R$ 10' bg='danger' text='Total de Débitos' icon={<FaCreditCard size='10vh' />} />
                    <ValueBox classname='mr-5' value='R$ 10' bg='primary' text='Valor Consolidado' icon={<FaBalanceScale size='10vh' />} />
                </CardDeck>
            </div>
        )
    }
}

