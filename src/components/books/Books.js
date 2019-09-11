import sampleMixin from '../../mixins/sample-mixin';
export default{
  data(){
    return{
      id: this.$route.params.id
    }
  },
  mixins:[sampleMixin],
  methods:{
    goToHome(){
      this.$router.push('/')
    }
  }
}
