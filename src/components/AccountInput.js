import React from 'react';
import {connect} from 'react-redux'
import {newAccount} from '../actions/newAccount'

class AccountInput extends React.Component {

    state = {
        name: '',
        account_type: '', 
        starting_balance: '', 
        low_balance_alert: ''
    }

    receiveInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.account_type]: event.target.value,
            [event.target.starting_balance]: event.target.value,
            [event.target.low_balance_alert]: event.target.value
        })
    }

    listenSubmit = (event) => {
        event.preventDefault()
        this.props.newAccount(this.state)
        this.setState({
            name: '',
            account_type: '', 
            starting_balance: '', 
            low_balance_alert: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.listenSubmit}>
                    <label>Account Name: </label>
                    <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.receiveInput}/><br></br>
                    <label>Account Type: </label>
                    <select id="account-type" name="account_type" onChange={this.receiveInput}>
                    <option value="Checkings">Checkings</option>
                    <option value="Savings">Savings</option>
                    <option value="Credit">Credit</option>
                    </select><br></br>
                    <label>Starting Balance: </label>
                    <input type='text' placeholder='Starting Balance' name='starting_balance' value={this.state.starting_balance} onChange={this.receiveInput}/><br></br>
                    <label>Low Balance Alert: </label>
                    <input type='text' placeholder='Low Balance Alert' name='low_balance_alert' value={this.state.low_balance_alert} onChange={this.receiveInput}/><br></br>
                    <input type='submit'/><br></br>
                </form><br></br>
            </div>
        )
    }
}

export default connect(null, {newAccount})(AccountInput);