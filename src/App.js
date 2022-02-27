import React from 'react';
// import {connect} from 'react-redux'
import BankAccountsContainer from './containers/BankAccountsContainer'


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <BankAccountsContainer/>
      </div>
    );
  }
}


export default (App);
