import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = (props) => {

    return (
        <div>
            <Link to='/accounts' style={{paddingRight: '10px', paddingLeft: '10px'}}>Accounts </Link>
            <Link to='/accounts/new'>Add Account </Link>
        </div>
    )
}

export default Navigation