import React from 'react';
import Account from './Account'

const Accounts = (props) => {
    console.log(props)
    return (
        <div>
            {props.accounts.map(account => <li key={account.id}>{account.name} - {account.starting_balance}</li>)}
        </div>
    )
}

export default Accounts;