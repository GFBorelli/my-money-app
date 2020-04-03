import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList } from './billingCycleActions'
import { selectTab, showTabs } from '../common/tabs/tabsActions'

import PageHeader from '../common/template/PageHeader'
import Tabs from '../common/tabs/Tabs'
import TabContent from '../common/tabs/TabContent'
import BillingCycleList from './BillingCycleList'

class BillingCycle extends Component {

    componentDidMount() {
        this.props.selectTab('list')
        this.props.showTabs('list', 'add')

    }

    render() {
        return (
            <div>
                <PageHeader name='Ciclos de Pagamentos' />
                <Tabs />
                <TabContent id='list'><BillingCycleList/></TabContent>
                <TabContent id='add'><h1>add</h1></TabContent>
                <TabContent id='edit'><h1>editar</h1></TabContent>
                <TabContent id='remove'><h1>remover</h1></TabContent>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getList, selectTab, showTabs }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)