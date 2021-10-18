new Vue({
  el:'#section',
  data:{
      p1: '',
      p2: 0,
      p3: '',
      p4: '',
      p5: '',
      p5s: []
  },
  methods:{
      add(){
          this.p5s.push(this.p5);
          this.p5='';
      }
  }
 
});
