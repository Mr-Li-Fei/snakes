import _ from "lodash";
import './style.css';
// import myImage from "./icon.jpg";
import printMe from './print.js';
import show from './show.js';

function component() {
    const div = document.createElement("div");
    const button = document.createElement('button');
    const button1 = document.createElement('button');
    
    div.innerHTML = _.join(["I am Feifei Li", "so handome"]);
    div.classList.add('hello');
    
    // var myIcon = new Image();
    // myIcon.src = myImage;

    button.innerHTML = "click me";
    button1.innerHTML = "client one";
    button.onclick = printMe;
    button1.onclick = show;

    // div.appendChild(myIcon);
    div.appendChild(button);

    return div;
}

document.body.appendChild(component());
