import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { create, update } from './billingCycleActions'
import { selectTab, showTabs } from '../common/tabs/tabsActions'

import PageHeader from '../common/template/PageHeader'
import Tabs from '../common/tabs/Tabs'
import TabContent from '../common/tabs/TabContent'
import BillingCycleList from './BillingCycleList'
import BillingCycleForm from './BillingCycleForm'

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
                <TabContent id='list'><BillingCycleList /></TabContent>
                <TabContent id='add' ><BillingCycleForm onSubmit={this.props.create} /></TabContent>
                <TabContent id='edit'><BillingCycleForm onSubmit={this.props.update} /></TabContent>
                <TabContent id='remove'><h1>remover</h1></TabContent>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ create, update, selectTab, showTabs }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)