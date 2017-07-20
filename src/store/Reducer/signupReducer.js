import ActionType from '../Action/actionType'


const initialState = {};
function todooReducer(state = initialState, action) {
    switch (action.type) {
  case ActionType.ADD_TODO_SUCCESS:
   return {... state ,todoReducer:action.data}
 
  
        // case ActionType.ADD_TODO_SUCCESS: {
        //     var state3 = Object.assign({},...state , {todoR : action})
        //     // var state1 = Object.assign({}, state, { todoReducer: action.data })
        //     state = state3
        //     return state,
         

        //     console.log("reduASASASAScer state", state)
        // }
         default: return state
    }
}
export default todooReducer;