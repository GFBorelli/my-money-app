import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init, create, update, remove } from './billingCycleActions'

import PageHeader from '../common/template/PageHeader'
import Tabs from '../common/tabs/Tabs'
import TabContent from '../common/tabs/TabContent'
import BillingCycleList from './BillingCycleList'
import BillingCycleForm from './BillingCycleForm'

class BillingCycle extends Component {

    componentDidMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <PageHeader name='Ciclos de Pagamentos' />
                <Tabs />
                <TabContent id='list'><BillingCycleList /></TabContent>
                <TabContent id='add' ><BillingCycleForm onSubmit={this.props.create} /></TabContent>
                <TabContent id='edit'><BillingCycleForm onSubmit={this.props.update} /></TabContent>
                <TabContent id='remove'><BillingCycleForm onSubmit={this.props.remove} /></TabContent>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update, remove }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)