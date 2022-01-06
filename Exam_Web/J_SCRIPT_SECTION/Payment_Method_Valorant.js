const items_1 =document.getElementsByClassName('Currency_Container');
/*FOR occupied content*/
    for (i=0; i<items_1.length; i++){
        items_1[i].addEventListener('click', function(){
            this.classList.toggle('active')
        })
    }
    function option_1(){
        let Option_1 = document.getElementById('Option_1').innerHTML;
        document.getElementById('Default').innerHTML= Option_1;
        let Original = document.getElementById("Default").innerHTML; 
        document.getElementById("Amount").setAttribute("placeholder", "Amount in Peso" );
        if (Original == Option_1){ 
            var a = document.getElementById("Amount").value;
            var result = a * 8;
            document.getElementById("Equivalent_Item").value = result +" " + "Points";
            document.getElementById("Amount").oninput = option_1;
        }
    }
    function option_2(){
        let Option_2 = document.getElementById('Option_2').innerHTML;
        document.getElementById('Default').innerHTML= Option_2;
        let Original = document.getElementById("Default").innerHTML; 
        document.getElementById("Amount").setAttribute("placeholder", "Amount in USD" );
        if(Original == Option_2){
            var a = document.getElementById("Amount").value;
            var result = a * 60;
            document.getElementById("Equivalent_Item").value = result +" " + "Points";
            document.getElementById("Amount").oninput= option_2;
        }
    }
    document.getElementById("Date").value = new Date().toString();
    function Result(){
        let Res=document.getElementById("Equivalent_Item").value;
        document.getElementById("Date").disabled = false;
        if(confirm("Click Okay to  Purchase:" + " " + Res)){
            alert("Transaction Completed");
        }else{
            alert("Transaction Canceled");
        }
    }