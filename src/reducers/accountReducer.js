export default function accountReducer(state = {accounts: []}, action) {
    // debugger;
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return {accounts: action.payload}
        case 'ADD_ACCOUNT':
            return {...state, accounts: [...state.accounts, action.payload]}
        case 'ADD_TRANSACTION':
        let accountsA = state.accounts.map(account => {
            if (account.id === action.payload.id) {
                return action.payload
            } else {
                return account
            }
        })
        return {...state, accounts: accountsA}
        case 'DELETE_TRANSACTION':
            // debugger;
            let accountsD = state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                } else {
                    return account
                }
            })
            return {...state, accounts: accountsD}
        default:
            return state
    }
}