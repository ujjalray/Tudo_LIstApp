import React, { Component } from 'react'
import { FaRegTimesCircle } from "react-icons/fa";
import './App.css'

export default class Todolist extends Component {
    
    delate=()=>
    {
         console.log("helo");

    }

    render() {
        return (
            <div className="Todo_list_class_main">
                   
            <table>
                 <tr>
                     <td className="Todo_list_name"><FaRegTimesCircle onClick={()=>
                    
                        {this.props.itemDelate (this.props.id)}
               
                    
                    } /></td> 
                    yu
                     <td><li className="Todo_list_name_item" >{this.props.name}</li></td>
                        
                  </tr>
            </table>  

                 
            </div>
        )
    }
}
