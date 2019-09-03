export default{
  data(){
    return{
      id: this.$route.params.id
    }
  },
  watch: {
    '$route': function (val) {
      this.id = val.params.id;
    },
    
  }
}
