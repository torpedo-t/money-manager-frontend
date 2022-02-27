import React from 'react';
import {Route, Link} from 'react-router-dom';
import Account from './Account'

const Accounts = (props) => {
    // console.log(props)
    return (
        <div>
            {props.accounts.map(account => 
            <li key={account.id}>
                <Link to={`accounts/${account.id}`}>{account.name}</Link>
            </li> )}
        </div>
    )
}

export default Accounts;