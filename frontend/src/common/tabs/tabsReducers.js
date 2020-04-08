const INITIAL_STATE = { selected: '', visible: {}, submitLabel: 'Incluir', submitColor: 'primary' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, selected: action.payload }
        case 'TABS_SHOWED':
            return { ...state, visible: action.payload }
        case 'SUBMIT_COLOR':
            return { ...state, submitColor: action.payload }
        case 'SUBMIT_LABEL':
            return { ...state, submitLabel: action.payload }
        default:
            return state
    }
}