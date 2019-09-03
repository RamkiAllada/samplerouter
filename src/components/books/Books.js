export default{
  data(){
    return{
      id: this.$route.params.id
    }
  },
  methods:{
    goToHome(){
      this.$router.push('/')
    }
  }
}
