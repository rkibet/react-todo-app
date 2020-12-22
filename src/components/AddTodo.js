import React,{ Component } from "react";
import PropTypes from 'prop-types'

export class AddTodo extends Component{
    state={
        title:''
    }
    onChange=(e)=>this.setState({title: e.target.value});
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.AddTodo(this.state.title)
        this.setState({title:''})

    }
    render(){
        return(
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input 
                    type='text' 
                    name='add' 
                    placeholder='Add Todo'
                    style={{flex:'10',padding:'5px'}}
                    value={this.state.title}
                    onChange={this.onChange}
                    />


                <button 
                     type='submit'
                     className='btn'
                     style={{flex:'1'}}
                     >Submit</button>
            </form>   
        );
    }
}
AddTodo.protoTypes={
    AddTodo:PropTypes.object.isRequired
}

export default AddTodo;