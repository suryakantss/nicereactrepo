import React, { createRef } from "react";

export class CalcClass extends React.Component {
    n1ref = createRef();
    n2ref = createRef();
    state = {res:''};
    doAdd = ()=>{
        this.setState({res:parseInt(this.n1ref.current.value)+parseInt(this.n2ref.current.value)});
       
    }
    render() {
        return (
            <>
                <h3> Calculator (Class Comp)</h3>
                <div>
                    <label>#1</label>
                    <input type="text" name='n1' ref={this.n1ref}></input>
                </div>
                <div>
                    <label>#2</label>
                    <input type="text" name='n2' ref={this.n2ref}></input>
                </div>
                <div>
                    {this.state.res}
                </div>
                <div>
                    <button onClick={this.doAdd}>Add</button>
                </div>
            </>
        )
    }
}
