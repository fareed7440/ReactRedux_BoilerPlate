
import ActionType from './actionType';
import * as DB from '../../firebase/firebase'
import axios from 'axios';
const arr = [];
function getRequest(){

         return dispatch => {
        dispatch(GetRequest());
         axios.get('http://localhost:8081/api/get', {
             
      headers: {
        'Content-Type': 'application/xml, text/xml',
        'Accept': 'application/xml, text/plain, * / *'
      },


    })
      .then(function (response) {
        console.log("gettttttttttttttttt", response.data);
           dispatch(GetRequestSuccess(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
 

   

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