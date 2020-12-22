import React,{Component} from 'react'
import PropTypes from 'prop-types'

export  class TodoItems extends Component {
    // getStyle=()=>{

    //     if(this.props.todo.completed){
    //         return{
    //             textDecoration:'line-through'
    //         }
    
    //     }
    //     else{
    //         return{
    //             textDecoration:'none'
    //         }
    
    //     }
    // }
    getStyle=()=>{
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed ? 'line-through':'none'
        }
    }
    // markComplete=(e)=>{
    //     console.log(this.props)
    // }
    render(){
        const {id,title}=this.props.todo
        return (
            <div style={this.getStyle()}>
               
                <p> 
                    <input type='checkbox' onChange={this.props.markComplete.bind(this,id)} /> { ' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                    </p>
                    
            </div>
        );
    }
    

    }
   TodoItems.propTypes={
       todo:PropTypes.object.isRequired,
       markComplete:PropTypes.func.isRequired,
       delTodo:PropTypes.func.isRequired
   }
   const btnStyle={
       background:'#ff0000',
       color:'#fff',
       padding:'5px 9px',
       borderRadius:'50%',
       border:'none',
       cursor:'pointer',
       float:'right'

   }

//    const itemStyle={
//        backgroundColor:'#f4f4f4'
//    }
export default TodoItems;