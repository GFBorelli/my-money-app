import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import dashboardReducer from '../dashboard/dashboardReducer'
import tabsReducer from '../common/tabs/tabsReducers'
import billingCycleReducers from '../billingCycle/billingCycleReducers'
import authReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tabs: tabsReducer,
    billingCycle: billingCycleReducers,
    form: formReducer,
    toastr: toastrReducer,
    auth: authReducer
})

export default rootReducer