function bandeira(pais){
  return `<img src="paises/${pais}.png">`;
}

Vue.component("pais", {
  props: ['bandeira', 'continente'],
  template:'<p v-html="bandeira + continente"></p>'
});

let app = new Vue({
  el : '#app',
  data: {
    argentina :bandeira('argentina'),
    brazil    :bandeira('brazil'),
    china     :bandeira('china'),
    uk        :bandeira('uk'),
    usa       :bandeira('usa')
  },
  methods:{
    // paises:function (){
    //   return [
    //     {bandeira:this.argentina, continente:'América do Sul'},
    //     {bandeira:this.brazil, continente:'América do Sul'},
    //     {bandeira:this.china, continente:'Ásia'},
    //     {bandeira:this.uk, continente:'Europa'},
    //     {bandeira:this.usa, continente:'América do Norte'},
    //   ];
    // }
  }
});
