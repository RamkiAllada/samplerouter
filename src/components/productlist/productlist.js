import axios from 'axios';
import product from '../product/product.vue';
export default {
  components:{
    product
  },
  data(){
    return {
      products:[]
    }
  },
  mounted(){
    axios.get('http://dummy.restapiexample.com/api/v1/employees').
    then(res=>{
      // console.log(res.data)
      this.products = res.data;
    })
  }
}
