const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''
    };
  },
  methods:{
    confirmInput(){
      this.confirmedName= this.name;
    },
    submitForm(event){
      // event.preventDefault();
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    add(num){
      this.counter= this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
