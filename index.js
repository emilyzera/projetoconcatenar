var js_nome;
var js_sobrenome;
var js_nomecompleto;

function concatena() {
  js_nome = document.Formconcatena.f_nome.value;
  js_sobrenome = document.Formconcatena.f_sobrenome.value;

  /*processamento de dados */
  js_nomecompleto = js_nome + "" + js_sobrenome;

  /*saidas de dados ;*/
  window.alert("ola" + js_nomecompleto);
}
