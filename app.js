function main(){
    const inputEmail= document.querySelector("#email");
    const inputNombre= document.querySelector("#nombre");
    const picURL=document.querySelector("#picURL")
    const textoCambiante=document.querySelector("#textoUnico");
    const h1Titulo=document.querySelector("h1");
    const imagenCambiante=document.querySelector("#imagenCambiante");
    console.log(inputEmail.value+"\n"+inputNombre.value+"\n"+textoCambiante.textContent+"\n"+picURL.value);
    textoCambiante.innerHTML=`Hola ${inputNombre.value} - tu email es ${inputEmail.value}`;
    textoCambiante.style.color="#00FFB1";
    textoCambiante.style.backgroundColor="#0000BB";
    textoCambiante.style.border="2px solid black";
    let randomR=Math.floor(Math.random()*256);
    let randomG=Math.floor(Math.random()*256);
    let randomB=Math.floor(Math.random()*256);
    h1Titulo.style.color=`rgb(${randomR},${randomG},${randomB})`;
    document.querySelector("body").style.backgroundColor = `rgb(${randomG},${randomB},${randomR})`;
    imagenCambiante.src=`${picURL.value}`;
    imagenCambiante.alt="Nueva imagen"

}
