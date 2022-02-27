export default function bankAccountReducer(state = {bank_accounts: []}, action) {
    switch (action.type) {
        case 'FETCH_BANK_ACCOUNTS':
            return {bank_accounts: action.payload}
        case 'ADD_ACCOUNT':
            return {...state, bank_accounts: [...state.bank_accounts, action.payload]}
        default:
            return state
    }
}