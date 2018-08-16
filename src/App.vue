<template>
  <div id="app">
    <v-header>
    </v-header>
    <v-aside>
    </v-aside>
    <div class="main">
      <transition :name="transitionName">
        <router-view class="child-view">
        </router-view>
      </transition>
    </div>
    <div class="bk" id="particles">
    </div>
    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
  </div>
</template>

<script>
import header from '@components/header.vue';
import aside from '@components/aside.vue';
import 'bootstrap/dist/css/bootstrap.css';
export default{
  name:'app',
  data(){
    return{
      transitionName:'slide-left'
    }
  },
  components:{
    'v-header':header,
    'v-aside':aside
  },
  mounted(){
   
  },
  watch:{
     '$route' (to, from) {
      let isBack=this.$router.isBack;
       if(to.path == '/'){
        this.transitionName = 'slide-right';
       }else{
        this.transitionName = 'slide-left';
       }
       this.$router.isBack=false;
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet">
@import "./assets/css/basic.css";
  .bk{
    background:url('./assets/images/bg.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position:fixed;
    z-index: -1;
    width:100%;
    height:100%;
    left: 0;
    top: 0;
    // -webkit-filter: blur(10px); /* Chrome, Opera */
    //    -moz-filter: blur(10px);
    //     -ms-filter: blur(10px);    
    //         filter: blur(10px);    


    //          -webkit-filter: grayscale(100%);
    // -moz-filter: grayscale(100%);
    // -ms-filter: grayscale(100%);
    // -o-filter: grayscale(100%);
    
    // filter: grayscale(100%);
  
    // filter: gray;

  }

.main{
    margin-top:70px;
    position:relative;
    width:85%;
    margin-left:200px;
  }
@media screen and (max-width: 1200px) {
   .main{
      width:80%;
   }
}
  
  .child-view {
    opacity:1;
    -webkit-transform: translate(0px, 0);
    transform: translate(0px, 0);
    transition: all 0.5s;
    position:absolute;
    width:100%;
    padding:0 30px;
  }
  .slide-left-enter, .slide-right-leave-active {
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
    opacity: 0;
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px 0);
  }
</style>
