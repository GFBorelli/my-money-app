import React from 'react'
import { Route, Redirect, Switch } from 'react-router'

import Dashboard from '../dashboard/Dashboard'
import BillingCycle from '../billingCycle/BillingCycle'

export default props => (
    <div>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)