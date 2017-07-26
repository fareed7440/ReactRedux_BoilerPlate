import todoRequst from '../store/Action/action'
import getRequest from '../store/Action/getAction'
import deleteRequest from '../store/Action/deleteAction'
import { connect } from 'react-redux'
import AddTodo from '../component/singup'


function mapStateToProps(state) {
    console.log('state', state)
    return {
       todos: state.todooReducer.data,
       getdata : state.getReducer,
       delete : state.deleteReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
     AddTodo : (text) => dispatch(todoRequst(text)),
     getData : (data)=>dispatch(getRequest(data)),
     deleteData : (_id)=>dispatch(deleteRequest(_id))

    }

}

const TodoCon = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default TodoCon;