import React,{ useState } from 'react'
import './App.css';
import Todolist from './Todolist';

 const App=()=>
 {
     const [list, setslist] = useState("");
     const [item, setitem] = useState([]);
     

     var onlisst=(e)=>
     {
           setslist(e.target.value);
     }

     const onitem=()=>
     {
         
           setitem((old)=>
           {
                return [...old,list];
                
           });
           setslist("");

     }

     const delate=(id)=>
     { 
          setitem((old)=>
           {
                return old.filter((arr,i)=>
                {
                     return i!==id;
                })
                
           });
      
     }
    

    

    return(

      <div className="main_div">
        
            <div className="center_div">
            
                <h1 className="center_div_text">ToDo list</h1>
                <input type="text" placeholder="Add a item" onChange={onlisst} value={list} className="center_div_text_input"/>
                <button className="center_div_button" onClick={onitem}>+</button>
            
                 
                <ol className="center_div_list">
                {item.map((itemv,i)=>{
                 
                   return  <Todolist 
                   key={i} 
                   id={i}
                   
                   name={itemv} itemDelate={delate} />;
                 
                 })}

                 </ol>
            
            </div>        
         
        </div>

    )
 }
 export default App;