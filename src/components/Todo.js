import React,{Component}from 'react';
import TodoItems from './TodoItems'
import PropTypes from 'prop-types'

class Todo extends Component{
    // markComplete=()=>{
    //     console.log('----At Todo.js----')
    // }
    render(){
       
        return this.props.todos.map((todo)=>(
            <TodoItems key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        
        ));
    }
}
Todo.propTypes={
    todos:PropTypes.array.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired

}

export default Todo;