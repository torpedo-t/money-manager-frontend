import React from 'react'
import TransactionsContainer from '../containers/TransactionsContainer'

const Account = (props) => {

    let account = props.accounts[props.match.params.id - 1]
    // let account = props.accounts.filter(account => account.id === props.match.params.id)[0]
    console.log(account)


    return (
        <div>
            <center>
            <h3>
            {account ? account.name : null} - {account? account.account_type : null} - {account ? account.starting_balance : null} 
            </h3>
            <TransactionsContainer account={account}/>
            </center>
        </div>
    )
}

export default Account;