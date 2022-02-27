import React from 'react';
import {connect} from 'react-redux'
// import { Route, Routes } from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts';
import AccountInput from '../components/AccountInput'

class AccountsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchAccounts()
    }

    render() {
        return (
            <div>
            <AccountInput/>
            <Accounts accounts={this.props.accounts}/>
            {/* <Routes>
            <Route path='/accounts/new' component={AccountInput}/>
            <Route path='/accounts' render={() => <Accounts accounts={this.props.accounts} />} />
            </Routes> */}
            </div>
        )
}
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer);