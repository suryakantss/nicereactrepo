import { useState } from "react";
import { Comment } from "./comment";

export default function Blog() {
    let [cmts,setCmts] = useState([]);
    function add(c){
        setCmts([...cmts,c.current.value]);
        c.current.value='';
    }
    return (
        <div>
            <h3>Spring AI</h3>
            <h4>Author : John</h4>
            <p>
                Spring AI is an application framework designed for AI engineering, extending the principles of the Spring ecosystem, such as portability and modular design, into the realm of Artificial Intelligence. Its primary goal is to simplify the development of AI-powered applications for Java developers, allowing them to integrate AI capabilities into their existing Spring applications without requiring extensive machine learning expertise.
            </p>
            <ol>
            {cmts.map(c => <li>{c}</li>)}
            </ol>
           <Comment add={add}></Comment>
        </div>
    )
}