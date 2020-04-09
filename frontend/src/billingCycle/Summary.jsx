import React, { Component } from 'react'

import ValueBox from '../common/widget/ValueBox'

import { CardDeck } from 'react-bootstrap'
import { FaPiggyBank, FaCreditCard, FaBalanceScale } from 'react-icons/fa'

export default class Summary extends Component {
    render() {

        const { credit, debit } = this.props

        return (
            <div>
                <h4>Resumo</h4>
                <CardDeck>
                    <ValueBox classname='ml-1 mr-1' value={`R$ ${credit}`} bg='success' text='Total de Créditos' icon={<FaPiggyBank size='8vh' />} />
                    <ValueBox classname='ml-1 mr-1' value={`R$ ${debit}`} bg='danger' text='Total de Débitos' icon={<FaCreditCard size='8vh' />} />
                    <ValueBox classname='ml-1 mr-1' value={`R$ ${credit - debit}`} bg='primary' text='Valor Consolidado' icon={<FaBalanceScale size='8vh' />} />
                </CardDeck>
            </div>
        )
    }
}
