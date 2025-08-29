import { useState } from "react";
import { CompA } from "./compa/compa";
import { CompB } from "./compb/compb";
export default function Parent(){
    let [data,setData] = useState();
     function send(txt){
        setData(txt);
    }
    return (
        <div>
        <CompA process={send}></CompA>
        <hr />
        <CompB data={data}></CompB>
        </div>
    )
}