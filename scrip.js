
document.getElementById("b_modo").addEventListener('click', function(){
    if(document.getElementById('estilo').getAttribute('href') == "C:\Users\Marco\Desktop\HTML\Final\light.css" ){
        document.getElementById('estilo').setAttribute('href', "C:\Users\Marco\Desktop\HTML\Final\dark.css");
        document.getElementById('b_modo').innerHTML = 'Cambiar al modo claro';
        console.log("Se cambio al modo oscuro");
    }else{
        document.getElementById('estilo').setAttribute('href', "C:\Users\Marco\Desktop\HTML\Final\light.css");
        document.getElementById('b_modo').innerHTML = 'Cambiar al modo oscuro';
        console.log("Se cambio al modo claro.");
    }
});