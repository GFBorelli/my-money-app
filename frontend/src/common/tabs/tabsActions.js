export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabsId) {
    const tabsToShow = {}
    tabsId.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TABS_SHOWED',
        payload: tabsToShow
    }
}

export function submitColor(color) {
    return {
        type: 'SUBMIT_COLOR',
        payload: color
    }
}

export function submitLabel(label) {
    return {
        type: 'SUBMIT_LABEL',
        payload: label
    }
}
