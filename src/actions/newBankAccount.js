export const newBankAccount = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/bank_accounts', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(bankAccount => dispatch({type: 'ADD_ACCOUNT', payload: bankAccount}))
    }
}