const sampleMixin = {
  data(){
    return {
      btnText:'Go to Home'
    }
  },
  created(){
    console.log('created hook');
  },
  methods:{
    goToHome(){
      console.log('log from mixin....');
    }
  }
};
export default sampleMixin;
