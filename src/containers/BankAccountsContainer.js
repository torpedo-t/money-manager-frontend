import React from 'react';
import {connect} from 'react-redux'

import {fetchBankAccounts} from '../actions/fetchBankAccounts'
import BankAccounts from '../components/BankAccounts';
import BankAccountInput from '../components/BankAccountInput'

class BankAccountsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBankAccounts()
    }

    render() {
        return (
            <div>
                <BankAccountInput/>
                <BankAccounts bank_accounts={this.props.bank_accounts}/>
            </div>
        )
}
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        bank_accounts: state.bank_accounts
    }
}

export default connect(mapStateToProps, {fetchBankAccounts})(BankAccountsContainer);