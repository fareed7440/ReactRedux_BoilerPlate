import ActionType from './actionType';
import * as DB from '../../firebase/firebase'
import axios from 'axios';

const arr = [];
function todoRequst(data) {
   // const  assign = data.data;
    console.log('dataaaaaa', data)
    return dispatch => {
        dispatch(SignupRequest());



//  axios.post('http://localhost:8081/api/bears', data, headers)

//             .then((response) => {
//                 dispatch({type: FOUND_USER, data: response.data[0]})
//             })
//             .catch((error) => {
//                 dispatch({type: ERROR_FINDING_USER})
//             })


          axios.post('http://localhost:8081/api/bears',data, Headers,{
         
        'Access-Control-Allow-Origin': '*',
       
      })
      
      .then(function (response) {
          dispatch({
            type:ActionType.ADD_TODO_SUCCESS, data : response.data[0]
          })
        console.log("postttttttt", response);
              
        // arr.push(assign);
        // console.log('arrr', arr)

      })

      .catch(function (error) {
        console.log(error);
      });
  
  

console.log('arrr', arr)

// axios.get('http://localhost:8081/user', {
//       headers: {
//         'Content-Type': 'application/xml, text/xml',
//         'Accept': 'application/xml, text/plain, * / *'
//       },
//       type: TodoListAction.ADD_TODO,
//       payload: {
//         text: todoItemDescription,

//         completed: false
//       }


//     })
//       .then(function (response) {
//         console.log("gettttttttttttttttt", response);

//       })
//       .catch(function (error) {
//         console.log(error);
//       });

       dispatch(TodoRequestSuccess(data));




            //         }
            // axios.get('http://localhost:8081/api/')
            //   .then(function (response) {
            //     console.log(response);
            //   })

            // DB.auth.createUserWithEmailAndPassword(userData.email, userData.password).then((data) => {
            //     const userRef = DB.database.ref('SignUpUser' + data.uid);
            //     userRef.set({
            //         uid: data.uid,
            //         name: userData.name,
            //         email: data.email
            //     },
            //         signupSuccess => {
            //             dispatch(SignupRequestSuccess({
            //                 uid: data.uid,
            //                 name: userData.name,
            //                 email: data.email
            //             }));
            //             alert(' you have Successfully SignUp');

            //         }


            //     )
            // }).catch((Error) => {
            //     console.log(' error', Error)
            //     alert('create error')
            //     dispatch(SignupRequestFailed(Error))

            // })


        }
    }

  

function SignupRequest() {
    return {
        type: ActionType.ADD_TODO
    }
}
function TodoRequestSuccess(data) {
    return {
        type: ActionType.ADD_TODO_SUCCESS,
        data
    }
}

export default todoRequst;