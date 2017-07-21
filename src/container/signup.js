import todoRequst from '../store/Action/action'
import getRequest from '../store/Action/getAction'
import { connect } from 'react-redux'
import AddTodo from '../component/singup'


function mapStateToProps(state) {
    console.log('state', state)
    return {
       todos: state.todooReducer.data,
       getdata : state.getReducer
       
    }
}

function mapDispatchToProps(dispatch) {
    return {
     AddTodo : (text) => dispatch(todoRequst(text)),
     getData : (data)=>dispatch(getRequest(data))

    }

}

const TodoCon = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default TodoCon;