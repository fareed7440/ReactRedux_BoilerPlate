import ActionType from './actionType';
import * as DB from '../../firebase/firebase'
import axios from 'axios';

const arr = [];
function todoRequst(data) {
    console.log('dataaaaaa', data)
    return dispatch => {
        dispatch(SignupRequest());
          axios.post('http://localhost:8081/api/bears', {
data
    }, {   
        'Access-Control-Allow-Origin': '*'
      })
      
      .then(function (response) {
        console.log("postttttttt", response);
      })

      .catch(function (error) {
        console.log(error);
      });
  
  
arr.push(data);
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

       dispatch(TodoRequestSuccess(arr));




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