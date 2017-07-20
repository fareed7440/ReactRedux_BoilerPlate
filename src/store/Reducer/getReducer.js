import ActionType from '../Action/actionType'


const initialState = {};
function getReducer(state = initialState, action) {
    switch (action.type) {
  case ActionType.GET_TODO_SUCCESS:
   return {... state ,getsReducer:action.data}
 
         default: return state
    }
}
export default getReducer;