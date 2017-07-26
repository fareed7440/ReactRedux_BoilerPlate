import ActionType from '../Action/actionType'


const initialState = {};
function deleteReducer(state = initialState, action) {
    switch (action.type) {
  case ActionType.DELETE_TODO_SUCCESS:
   return {... state ,deleteReq:action.data}
 
         default: return state
    }
}
export default deleteReducer;