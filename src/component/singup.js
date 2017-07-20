import React from 'react'
import './signup.css'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            items : []
        }
        this.addTodo = this.addTodo.bind(this);
  // this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);


    }
      handleInput = (event) => {
        const target =event.target;
        const value =target.type ==='checkbox' ? target.checked : target.value;
        const name =target.name;
        this.setState({
            [name]: value
        })
    }


 addTodo = (event) => {
     event.preventDefault();
       const data = this.refs.addTodo.value.trim()
       const id = Date.now();
       var obj = {
           data:data,
           id:id
       }
        this.setState((prevState) => ({
      items: prevState.items.concat(obj),
      text: ''
    }));

   this.props.AddTodo(obj)


    }

    //   componentDidMount() {
    //        this.props.AddTodo();
    //        console.log('ffffffffff', this.props.AddTodo())
    //     }

    render() {
         const viewtodo = this.props && this.props.todos && this.props.todos.todoReducer ? this.props.todos.todoReducer : [];
        console.log('todooo', viewtodo);
        console.log('propss',)


        return (
            <div>
<form className = 'forms' onSubmit ={this.addTodo} >
                <input
                className = "centerd"
                    name='name'
                    ref="addTodo"
                    type='text'
                    onChange={this.handleInput}

                />
                <br/>
                <button type ='submit'> Add Todo</button>  {''}
                  <button onClick={this.props.getData}> get Todo</button>
</form>
                <div>
                    <h1>todo list</h1><br/><br/>
              <ol>
        {viewtodo.map(item => (
          <li key={item.id}>{item.data}</li>
        ))}
      </ol>
      

                </div>
            </div>

        )
    }


}


export default AddTodo;