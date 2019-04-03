let initialState = {
    users: []
}


export default function manageUsers(state = initialState, action){
    switch(action.type){
        case 'ADD_USER':
            let newState = {users: state.users.concat(action.user)}
            return newState
        default:
            return state
    }
}
