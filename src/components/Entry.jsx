import React from "react";

const Entry =  (props) => 
        <div>
        <dt>
            <span className="emoji" role="img" aria-label={props.name}>
                {props.emj}
            </span>
            <span>{props.name}</span>
         </dt>
            <dd>
            {props.desc}
            </dd>
        </div>;    
   
 

export default Entry;