import React from 'react'
import './signup.css'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            items: []
        }
        this.addTodo = this.addTodo.bind(this);
        // this.refreshPage = this.refreshPage.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    refreshPage() {
        window.location.reload();
    }
    componentDidMount() {
        this.props.getData()
        console.log('didmount', this.props.getData)
    }
    handleInput = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }


    addTodo = (event) => {
        event.preventDefault();
        const data = this.refs.addTodo.value.trim()
        const id = Date.now();
        var obj = {
            data: data,
            id: id
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
        //  const viewtodo = this.props && this.props.todos && this.props.todos.todoReducer ? this.props.todos.todoReducer : [];
        //  console.log('sendData', viewtodo)
        // JSON.parse(viewtodo)
        const alldata = this.props && this.props.getdata && this.props.getdata.getsReducer ? this.props.getdata.getsReducer : [];
        console.log('todooo', alldata)




        return (
            <div>
                <form className='forms' onSubmit={this.addTodo} >
                    <input
                        className="centerd"
                        name='name'
                        ref="addTodo"
                        type='text'
                        onChange={this.handleInput}

                    />
                    <br />
                    <button type='submit'  > Add Todo</button>  {''}
                    {/*<button onClick={this.props.getData}> get Todo</button>*/}
                </form>
                <div>
                    <h1>todo list</h1><br /><br />
                    <ol>
                        {alldata.map(item => (
                            <li key={item.id}>{item.data}</li>
                        ))}
                    </ol>


                </div>
            </div>

        )
    }


}


export default AddTodo;