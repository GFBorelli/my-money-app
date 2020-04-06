import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import dashboardReducer from '../dashboard/dashboardReducer'
import tabsReducer from '../common/tabs/tabsReducers'
import billingCycleReducers from '../billingCycle/billingCycleReducers'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tabs: tabsReducer,
    billingCycle: billingCycleReducers,
    form: formReducer
})

export default rootReducer