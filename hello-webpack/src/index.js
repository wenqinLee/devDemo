import _ from 'lodash';
import './style.css';
import Icon from './hat.png';
import Data from './data.xml';
import printMe from './print.js'


function component(){
    var element = document.createElement('div');

    element.innerHTML   =   _.join(['Hello','webpack']);
    element.classList.add('hello');
    
    // var myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);
    console.log(Data);
    
    var btn = document.createElement('button');
    btn.innerHTML  = 'Click me and check the console！';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());

if (module.hot){
    module.hot.accept('./print.js',function(){
        console.log('Accepting the updated printMe module!');
        printMe();
    });
}