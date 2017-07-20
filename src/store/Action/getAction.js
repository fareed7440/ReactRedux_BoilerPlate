
import ActionType from './actionType';
import * as DB from '../../firebase/firebase'
import axios from 'axios';
const arr = [];
function getRequest(data){
    console.log('datqq',data)
         return dispatch => {
        dispatch(GetRequest());
         axios.get('http://localhost:8081/api/bears', {
      headers: {
        'Content-Type': 'application/xml, text/xml',
        'Accept': 'application/xml, text/plain, * / *'
      },


    })
      .then(function (response) {
        console.log("gettttttttttttttttt", response);

      })
      .catch(function (error) {
        console.log(error);
      });
      arr.push(data);
console.log('arrr', arr)

    dispatch(GetRequestSuccess(arr))

    }}


function GetRequest() {
    return {
        type: ActionType.GET_TODO
    }
}
function GetRequestSuccess(data) {
    return {
        type: ActionType.GET_TODO_SUCCESS,
        data
    }
}


export default getRequest;