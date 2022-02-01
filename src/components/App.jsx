import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"; 

const App = () => 
  
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className= "dictionary">  
      
        {emojipedia.map(emoji => 
          <div className ="term" key ={emoji.id} >
              
            <Entry emj = {emoji.emoji} 
              name = {emoji.name} 
              desc = {emoji.meaning} />
              
              
          </div>
        )}
      </dl>  
      
    </div>
  ;


export default App;
