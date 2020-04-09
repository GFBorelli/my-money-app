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
                <TabContent id='add' >
                    <BillingCycleForm
                        onSubmit={this.props.create}
                        submitLabel='Adicionar'
                        tabSelected='add'
                        submitColor='primary'
                    />
                </TabContent>

                <TabContent id='edit'>
                    <BillingCycleForm
                        onSubmit={this.props.update}
                        submitLabel='Editar'
                        tabSelected='edit'
                        submitColor='warning'
                    />
                </TabContent>

                <TabContent id='remove'>
                    <BillingCycleForm
                        onSubmit={this.props.remove}
                        submitLabel='Excluir'
                        tabSelected='remove'
                        submitColor='danger'
                    />
                </TabContent>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update, remove }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)