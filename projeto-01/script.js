function toggleMode(){
  const html = document.documentElement;

  html.classList.toggle('light'); //Procura a propriedade e troca ela, colocando ou removendo

  //Pegar a tag img
  const img = document.querySelector('#profile img');

  if(html.classList.contains('light')){
    img.setAttribute('src','./assets/avatar-light.png'); /*Aqui pode mudar a imagem */
    img.setAttribute('alt','Imagem de Douglas sorrindo com Camisa Azul '); /*Aqui pode mudar a imagem */
  }else{
    img.setAttribute('src','./assets/avatar.png')
  }

  
}