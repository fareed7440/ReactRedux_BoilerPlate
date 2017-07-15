import ActionType from './actionType';
import * as DB from '../../firebase/firebase'
import axios from 'axios';


function signupRequest(userData) {
    console.log('dataaaaaa', userData)
    return dispatch => {
        dispatch(SignupRequest());

        // axios.get('http://localhost:8081/api/')
        //   .then(function (response) {
        //     console.log(response);
        //   })
        axios.post('http://localhost:8081/signup', {
            name: userData.name,
            email: userData.email,
            password : userData.password
        }, {
                'Access-Control-Allow-Origin': '*'
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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
        type: ActionType.SIGNUPREQUEST
    }
}
function SignupRequestSuccess(data) {
    return {
        type: ActionType.SIGNUPREQUESTSUCCESS,
        data
    }
}
function SignupRequestFailed() {
    return {
        type: ActionType.SIGNUPREQUESTFAILED
    }
}


export default signupRequest;