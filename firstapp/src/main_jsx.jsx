import React from 'react'
import { createRoot } from 'react-dom/client'

//jsx
let dv = <div>
         <h3>Hello World!!</h3>
         <h3>Welcome to React!!</h3>
         </div>;

createRoot(document.getElementById('root')).render(dv);
