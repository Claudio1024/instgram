function new_post(Padre)
{
  var elemento=document.createElement('p'); 
  var texto=document.createTextNode('Hola Mundo');
  elemento.appendChild(texto);
  var obj=document.getElementById('comentario');
  obj.appendChild(elemento);
}
