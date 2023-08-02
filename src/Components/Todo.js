import React, { Component } from 'react';

class Todo extends Component {
    constructor(){
        super();
        this.state={
            Task:[{
                task:"i am task",
                id:"1"
            }],
            currTask:""
        }
    }
    handleChange =(e)=>{ 
        console.log(e.target.value);
        this.setState({ //arrow func use krne ki wjah se hi this.setState use kr pa rhe hn 
            currTask:e.target.value
            
        })
    }
    handleSubmit =()=>{
        this.setState({
            Task:[...this.state.Task,{task:this.state.currTask,id:this.state.Task.length+1}],
            currTask:''
        })
    }
    handleDelete =(id)=>{
        let narr= this.state.Task.filter((taskObj)=>{
            return taskObj.id!=id
        }
        )
        this.setState({Task:[...narr]})
    }
    render() {
        
        //    console.log("render is called"); as state changes render func is called 
        return (
            <>
                <input type="text" onChange={this.handleChange} value={this.state.currTask}></input>
                <button onClick={this.handleSubmit}>submit</button>
                <ul>
                    {
                        this.state.Task.map((taskObj)=>(
                         
                           <li>
                                {taskObj.task}
                                <button onClick={()=>this.handleDelete(taskObj.id)}>delete</button> 
                                  

                           </li>
                           
                        ))
                    }
                </ul>
            </>
            
        );
    }
}

// export const arr=[1,2,3,3]; simple export me destructure krenge

export default Todo;