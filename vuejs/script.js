let app = new Vue({
  el : '#app',
  data:{
    nome: 'Thiago'
  },
  updated:function(){
    alert(this.nome);
  }
});
