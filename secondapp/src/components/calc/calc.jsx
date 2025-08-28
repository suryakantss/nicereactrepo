import { useEffect, useRef, useState } from "react";

export default function Calc() {
    let n1ref = useRef();
    let n2ref = useRef();
    let [msg, setMsg] = useState('');

    useEffect(() => {
        console.log('calc ...mounted');
    }, []);

    useEffect(() => {
        console.log('calc ...updated');
    }, [msg]);

    useEffect(() => {
        return () => {
            console.log('calc ...unmounted');
        }
    }, []);


    /*
    function doAdd(e){
        alert(e.type);
        alert(e.target.textContent)
    }*/

    
    function doAdd() {
        setMsg(parseInt(n1ref.current.value) + parseInt(n2ref.current.value));
    }
    return (
        <>
            <h3> Calculator (Fun Comp)</h3>
            <div>
                <label>#1</label>
                <input type="text" name='n1' ref={n1ref}></input>
            </div>
            <div>
                <label>#2</label>
                <input type="text" name='n2' ref={n2ref}></input>
            </div>
            <div>
                {msg}
            </div>
            <div>
                <button onClick={doAdd}>Add</button>
            </div>
        </>
    )
}