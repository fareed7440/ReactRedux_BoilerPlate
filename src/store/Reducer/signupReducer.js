import ActionType from '../Action/actionType'


const initialState = {};
function SignupReducer(state = initialState, action) {
    switch (action.type) {
        case ActionType.SIGNUPREQUESTSUCCESS: {
            var state1 = Object.assign({}, state, { signup: action.data })
            state = state1
            return state
        }
        default: return state
    }
}
export default SignupReducer;