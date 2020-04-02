import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from '../common/tabs/tabsActions'

import PageHeader from '../common/template/PageHeader'
import Tabs from '../common/tabs/Tabs'
import TabContent from '../common/tabs/TabContent'

class BillingCycle extends Component {

    componentDidMount() {
        this.props.selectTab('list')
    }

    render() {
        return (
            <div>
                <PageHeader name='Ciclos de Pagamentos' />
                <Tabs />
                <TabContent id='list'><h1>listar</h1></TabContent>
                <TabContent id='add'><h1>add</h1></TabContent>
                <TabContent id='edit'><h1>editar</h1></TabContent>
                <TabContent id='remove'><h1>remover</h1></TabContent>
            </div>
        )
    }
}

const mapStateToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(null, mapStateToProps)(BillingCycle)