//IMC = peso /altura²
function calcular(){    
    var altura = $('#altura').val();
    var peso = $('#peso').val();
    if (altura =="" || peso=="") {
        alert('Digite sua altura e o peso para continuar')
    } 
    else{
        altura= altura.replace(',','.');
        peso = peso.replace(',', '.');
    
        var imc = peso/(altura*altura);   
      
        $('#altura').val("");
        $('#peso').val("");

        if (imc<16) {
            var traducao = 'Baixo peso muito grave';
        } else if(imc >=16 && imc <16.99){
            var traducao = 'Baixo peso grave';
        } else if(imc >=17 && imc <18.49){
            var traducao = 'Baixo peso';
        } else if(imc >=18.50 && imc< 24.99){
            var traducao = 'peso normal';
        } else if(imc>=35 && imc<39.99){
            var traducao = 'obsedidade grau II';
        }
            
        $('#resultado').val("SEU IMC É: "+imc+"kg/m²"+traducao);
    }

   

}