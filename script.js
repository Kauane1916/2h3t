let num1 = "";
let num2 = "";
let valor = "";
let temPonto = false;
let executa = "";
mensagem = (msg) => console.log(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
juros_simples = (c,j) => mult(c,div(j,100));
montante_juros_simples = (c,j) => soma(juros_simples(c,j),c);

mostrar_display = (msg)=>{
 document.getElementById("resultado").value = msg;
}

function digitando (tecla) {
  if(tecla == "."){
    if(!temPonto){
      valor += tecla;
      mostrar_display(valor);
      temPonto = true;
    }
    return;
  }
  valor += tecla;
  mostrar_display(valor);
}
function operacao(op){
 executa = op;
 num1 = valor;
 valor = "";
}

function calcula(){
  if(executa != ""){
    num2 = valor;
    if(executa == "soma") mostrar_display(soma(Number(num1),Number(num2)));
    if(executa == "sub") mostrar_display(sub(num1,num2));
    if(executa == "div") mostrar_display(div(num1,num2));
    if(executa == "mult") mostrar_display(mult(num1,num2));
    num1 = "";
    num2 = "";
    valor = "";
    temPonto = false;
    executa = "";
  }
}

mensagem(soma(15,soma(11,soma(4,7))));
mensagem(sub(18,7));
mensagem(soma(2,div(2,2)));
mensagem(juros_simples(420,18))
mensagem(montante_juros_simples(420,18));



