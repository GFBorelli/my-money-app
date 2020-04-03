import { combineReducers } from 'redux'

import dashboardReducer from '../dashboard/dashboardReducer'
import tabsReducer from '../common/tabs/tabsReducers'
import billingCycleReducers from '../billingCycle/billingCycleReducers'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tabs: tabsReducer,
    billingCycle: billingCycleReducers
})

export default rootReducer