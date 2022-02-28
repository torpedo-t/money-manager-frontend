import React from 'react';
import {connect} from 'react-redux'
import {newTransaction} from '../actions/newTransaction';

class TransactionInput extends React.Component {

    state = {
        transaction_type: 'Withdraw',
        amount: '', 
        memo: ''
    }

    receiveInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.newTransaction(this.state, this.props.account.id)
        this.setState({
            transaction_type: 'Withdraw',
            amount: '', 
            memo: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Transaction Type: </label>
                <select name="transaction_type" value={this.state.transaction_type} onChange={this.receiveInput}>
                    <option>Withdraw</option>
                    <option>Deposit</option>
                </select><br></br>
                <label>Amount: </label>
                <input type="text" name="amount" value={this.state.amount} onChange={this.receiveInput}/><br></br>
                <label>Memo: </label>
                <input type="text" name="memo" value={this.state.memo} onChange={this.receiveInput}/><br></br>
                <input type="submit"/>
                </form><br></br>
            </div>
        )
    }
}

export default connect(null, {newTransaction})(TransactionInput)