export function selectTab(selectedTab) {
    return {
        type: 'TAB_SELECTED',
        payload: selectedTab
    }
}