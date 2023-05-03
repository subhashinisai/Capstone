

import { useState } from "react";
import { Example } from "./example";

import {  Successbox } from "./SuccesBox";
export const Home = () =>{
    function disapper(){
        document.getElementById('failure').style.display = "none";
        
    }
   
    const handlesubmit = (event)=>{
          event.preventDefault();
          const val = document.getElementById('inputquery').value;
          if(val==='failure'){
          document.getElementById('failure').style.display="flex";

          document.getElementById('failure').style.flexDirection="column";

          document.getElementById('failure').style.alignItems="center";

          document.getElementById('failure').style.marginTop="185px";
          document.getElementById('failure').style.backgroundColor="#ffbf07";

          document.getElementById('failure').style.justifyContent="center";

          document.getElementById('failure').style.height="100px";

          document.getElementById('failure').style.width="350px";

          document.getElementById('failure').style.marginLeft="42%";

          document.getElementById('failure').style.color="black";


          document.getElementById('failure').style.border="2px solid black";

         
          }

          if(val==='success'){
            document.getElementById('success').style.display="block";
          }

          document.getElementById('inputquery').value='';
    }
    return(


        <div className="home">
          
           <Example/>
           <form onSubmit={handlesubmit} className='query'>
                <input placeholder="type your query" id = 'inputquery' />
                <button >send</button>
           </form>    
            <div className="failurebox" id="failure">
              <div>
                invalid query
             </div>
              <div>
                please try again
              </div>
             <button  id="goback" onClick={disapper}>
                go back
              </button>
            </div>     

            <div className="Successbox" id="success">
            < Successbox/>
            </div>     

          
        </div>
    )
}