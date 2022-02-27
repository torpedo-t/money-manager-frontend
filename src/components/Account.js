import React from 'react'
import {Redirect} from 'react-router-dom'
import TransactionsContainer from '../containers/TransactionsContainer'

const Account = (props) => {

    let account = props.accounts[props.match.params.id - 1]
    console.log(account)


    return (
        <div>
        <h3>
            {account ? account.name : null} - {account? account.account_type : null} - {account ? account.starting_balance : null} 
        </h3>
        <TransactionsContainer account={account}/>
        </div>
    )
}

export default Account;