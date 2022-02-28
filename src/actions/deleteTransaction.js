export const deleteTransaction = (id, accountId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/accounts/${accountId}/transactions/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(account => {
            if (account.error) {
                alert(account.error)
            } else {
                dispatch({type: 'DELETE_TRANSACTION', payload: account})
            }
        }
    )
}
}