
export default {
  props:{
    pInfo:{
      default:{
        "imgUrl": "",
        "name": "",
        "price": ""
      },
      type:Object
    }
  },
  data(){
    return{
      imgSRC: '../assets/iconfinder.png'
    }
  },
  methods:{
    addToCart(data){
      console.log(data);
    }
  }
}
