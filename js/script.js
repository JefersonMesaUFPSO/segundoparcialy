
var showText = document.getElementById('show-text-1').value;
var showText2 = document.getElementById('show-text-2').value;
function validateInput(){

    let input1 = document.getElementById('input-text1').value;
    let input2 = document.getElementById('input-text2').value;
    let input3 = document.getElementById('input-text3').value;
    let input4 = document.getElementById('input-text4').value;
    let button = document.getElementById('send-button');
    if ( input1.length > 5 || input2.length > 5 || input3.length > 5 || input4.length > 5) {
        let nombreCompleto= input1 + " " + input2 + " " + input3 + " " + input4;
        let nombresUnidos =  nombreCompleto.trim();
        
        Swal.fire("" + nombreCompleto.toUpperCase());

        let splitNombres = nombresUnidos.slice()
        for (let i= 0; i < nombresUnidos.length; i++) {
            console.log(splitNombres[i] + " " + [i]);
        }
        console.log("En total hay" + nombresUnidos.length + " letras")

        

    } else if(input1.length < 5 || input2.length < 5 || input3.length < 5 || input4.length < 5) {
        Swal.fire({
            icon: "error",
            title: "",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        document.getElementById('input-text1').style.borderColor = "red";
        document.getElementById('input-text2').style.borderColor = "red";
        document.getElementById('input-text3').style.borderColor = "red";
        document.getElementById('input-text4').style.borderColor = "red";
    }

}

function limpiar() {
    let input1 = document.getElementById('input-text1').value = "";
    let input2 = document.getElementById('input-text2').value= "";
    let input3 = document.getElementById('input-text3').value= "";
    let input4 = document.getElementById('input-text4').value= "";
}

