import React from 'react'
import { createRoot } from 'react-dom/client'
//React Element
let hd1 = React.createElement('h3',null,'Hello World!!!');
let hd2 = React.createElement('h3',null,'Welcome to React!!!');
let dv = React.createElement('div',null,hd1,hd2);

createRoot(document.getElementById('root')).render(dv);
