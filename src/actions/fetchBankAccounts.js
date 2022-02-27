
export function fetchBankAccounts() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/bank_accounts')
    .then(response => response.json())
    .then(bankAccounts => dispatch({
        type: 'FETCH_BANK_ACCOUNTS', 
        payload: bankAccounts
    }))
    }
}