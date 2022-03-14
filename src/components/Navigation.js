import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = (props) => {

    return (
        <div>
            <center>
            <img src="https://www.girlscoutshop.com/site/Product_Images/61201_main-01.default.jpg" alt="Money Manager" width="375" height="375"></img>
            </center>
            <center>
            <Link to="/" style={{paddingLeft: '7.5px'}}>Home </Link>
            <Link to='/accounts' style={{paddingRight: '7.5px', paddingLeft: '7.5px'}}>View Accounts </Link>
            <Link to='/accounts/new'>Add Account </Link>
            </center>

        </div>
    )
}

export default Navigation