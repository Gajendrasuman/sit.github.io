z = 0;
nav = (n)=>{
    z == 0 ? (document.querySelector('nav').setAttribute('class', 'nav'), z = 1) : (document.querySelector('nav').removeAttribute('class'), z = 0);
}