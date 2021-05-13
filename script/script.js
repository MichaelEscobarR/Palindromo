function palindromo(string) {
    
    string = document.getElementById("palabra").value;

    var regulares= /[\W_]/g;
    var minus = string.toLowerCase().replace(regulares,"");

    var rever = minus.split("").reverse().join("");

    if (rever === minus){
        document.getElementById("resultado").value = rever;
        document.getElementById("comprobación").value = "Sí lo es";
    }else{
        document.getElementById("resultado").value = rever;
        document.getElementById("comprobación").value = "No lo es";
        
    }
}