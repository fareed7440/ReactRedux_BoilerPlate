import signupRequest from '../store/Action/action'
import { connect } from 'react-redux'
import SignUp from '../component/singup'


function mapStateToProps(state) {
    console.log('state', state)
    return {
      
    }
}

function mapDispatchToProps(dispatch) {
    return {
      

    }

}

const SignUpCon = connect(mapStateToProps, mapDispatchToProps)(SignUp)

export default SignUpCon;