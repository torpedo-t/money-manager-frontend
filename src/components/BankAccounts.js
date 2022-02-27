import React from 'react';

const BankAccounts = (props) => {
    return (
        <div>
            {props.bank_accounts.map(bankAccount => <li key={bankAccount.id}> {bankAccount.name} - {bankAccount.account_type} - {bankAccount.starting_balance}</li>)}
        </div>
    )
}

export default BankAccounts;