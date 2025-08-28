import { useRef, useState } from "react";

export default function Movies(){
    let mref = useRef();
    let [mlist,setMlist] = useState(['John Carter','Battle Ship','Bee Keeper']);

    function addMovie(){
      setMlist([...mlist,mref.current.value]);
       console.log(mlist);

    }
    return (
        <div>
            <h3>Movies</h3>
            <input type="text" name="m" ref={mref}></input>
            <button onClick={addMovie}>Add</button>
            <ol>
                {mlist.map(m => <li key={m}>{m}</li>)}
            </ol>
        </div>
    )
}