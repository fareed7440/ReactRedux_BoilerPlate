
import ActionType from './actionType';
import * as DB from '../../firebase/firebase'
import axios from 'axios';
const arr = [];
function deleteRequest(_id){
console.log('iddd',_id)
         return dispatch => {
        dispatch(DelRequest());
       axios.delete('http://localhost:8081/api/bears/:bear_id',_id , {
  headers: {
    'Content-Type': 'application/json'
  }
})


  
      .then(function (response) {
        console.log("delete", response._id);
           dispatch(DelRequestSuccess(response._id))
      })
      .catch(function (error) {
        console.log(error);
      });
 

   

    }}


function DelRequest() {
    return {
        type: ActionType.DELETE_TODO
    }
}
function DelRequestSuccess(_id) {
    return {
        type: ActionType.DELETE_TODO_SUCCESS,
       _id
}
}

export default deleteRequest;