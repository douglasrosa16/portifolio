function toggleMode(){
  const html = document.documentElement;

  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }else{
  //   html.classList.add('light')
  // }

  html.classList.toggle('light'); //Procura a propriedade e troca ela, colocando ou removendo
}