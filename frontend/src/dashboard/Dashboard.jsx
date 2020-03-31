import React, { Component } from 'react'

import PageHeader from '../common/template/PageHeader'

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <PageHeader name='Dashboard' small='beta version' />
                <p>Dashboard</p>
            </div>
        )
    }
}

