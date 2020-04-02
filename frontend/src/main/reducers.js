import { combineReducers } from 'redux'

import dashboardReducer from '../dashboard/dashboardReducer'
import tabsReducer from '../common/tabs/tabsReducers'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tabs: tabsReducer
})

export default rootReducer