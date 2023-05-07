/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cambiarColor() {
document.querySelector('#id5').style.background = 'blue';
document.querySelector('#id4').style.background = 'green';
document.querySelector('#id3').style.background = 'orange';
document.querySelector('#id2').style.background = 'violet';
document.querySelector('#id1').style.background = 'red';
}

function factoral(n) {
    var total = 1;
    for ( q=1;q<=n;q++ ) {
        total = total * q;
    }
    return total;
}

function euler() {
    var a =  document.getElementById('numero').innerHTML ;
    var e = 0;
    for (i = 0; i < 100; i++) {
        e = ((a**i)/factoral(i))+e;        
    }
    document.write(e); 
}
    
function seno() {
    var a =  document.getElementById('numero').innerHTML ;
    var s = 0;
    for (j = 0; j < 70; j++) {
        s = ((((-1)**j)*(a**((2*j)+1)))/factoral((2*j)+1))+s;  
    } 
    document.write(s); 
}

function coseno() {
    var a =  document.getElementById('numero').innerHTML ;
    var c = 0;
    for (f = 0; f < 70; f++) {
        c = (((((-1)**f)*(a**(2*f)))/factoral(2*f))+c);        
    }   
    document.write(c); 
}


