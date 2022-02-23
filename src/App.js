import React from 'react';
import {connect} from 'react-redux'
import {fetchBankAccounts} from './actions/fetchBankAccouns'

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchBankAccounts({type: 'FETCH_BANK_ACCOUNTS', payload: {name: 'Checking'}})
  }


  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     bankAccounts: state.bankAccounts
//   }
// }

export default connect(null, {fetchBankAccounts})(App);
