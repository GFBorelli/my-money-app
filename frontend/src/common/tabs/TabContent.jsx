import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TabContent extends Component {
    render() {
        const selected = this.props.tabs.selected === this.props.id
        return (
            <div id={this.props.id} className={selected ? '' : 'text-hide'}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({ tabs: state.tabs })
export default connect(mapStateToProps)(TabContent)