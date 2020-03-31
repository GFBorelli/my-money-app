import React from 'react'
import { Route, Redirect, HashRouter } from 'react-router-dom'

import BillingCycle from '../billingCycle/BillingCycle'
import Dashboard from '../dashboard/Dashboard'

export default props => (
    <HashRouter>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/dashboard' />
    </HashRouter>
)