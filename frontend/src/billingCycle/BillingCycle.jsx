import React, { Component } from 'react'

import PageHeader from '../common/template/PageHeader'
import Tabs from '../common/tabs/Tabs'

class BillingCycle extends Component {

    render() {
        return (
            <div>
                <PageHeader name='Ciclos de Pagamentos' />
                <Tabs />
            </div>
        )
    }
}

export default BillingCycle