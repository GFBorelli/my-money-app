import React from 'react'

export default props => (
    <div className='pageHeader pb-2 mt-4 mb-2 border-bottom'>
        <h3 className='ml-4'>{props.name} <small>{props.small}</small></h3>
    </div>
)