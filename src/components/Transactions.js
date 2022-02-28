import React from 'react';

const Transactions = (props) => {

    return (
        <div>
            {props.transactions && props.transactions.map(transaction =>
                <li key={transaction.id}>{transaction.transaction_type} - {transaction.amount} - {transaction.memo}</li>
                )}
        </div>
    )
}

export default Transactions