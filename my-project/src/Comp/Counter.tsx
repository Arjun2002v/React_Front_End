import React, { useState } from "react"

const Counter:React.FC = () =>{

const [add ,setAdd] = useState<number>(0);

const adds = ():void =>{setAdd((pre)=>pre+1)}
const decree = () :void =>{setAdd((prev)=>prev>0?prev-1:0)}
const reset = ():void =>{setAdd(0)}

   
    return(
        <React.Fragment>
            <button onClick={adds}>Add</button>
            <button onClick={decree}>Minus</button>
            <button onClick={reset}>Reset</button>
       
                <div>Counter:{add}</div>
           
                </React.Fragment>

    )
}

export default Counter;