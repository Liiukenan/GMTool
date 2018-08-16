<template>
    <div class="box">
    	<div class="title">
			系统管理
			<a href="javascript:void(0)" class="account" @click="withdrawalshow">
				<span>刷新</span>
			</a>
		</div>
		<div class="account-main">
			<div class="table-responsive user-table">
				<div class="account-list">
					配置白名单
				</div>
				<div class="send-content">
					<form class="send-form">
						<label style="font-size:14px;">请填入欲生效的白名单用户的泰奇id(之前的白名单会被覆盖，注："泰奇id之间以逗号,隔开。"):</label>
						<span style="color:#FF9933; margin:0 10px;" v-show="infoUid">*请输入泰奇id</span>
					    <textarea class="form-control input-text" v-model="whiteList" ></textarea>
					</form>
					<div class="send-form send-btn">
					  	<button type="button" class="btn btn-success" @click="whitlModify(0)">修改</button>
					  	<button type="button" class="btn btn-warning" @click="whitlModify(1)">清理</button>
			   		</div>
				</div>
			</div>
		</div>
    </div>
</template>


<script type="ecmascript-6">
	import {serviceHOST} from '../base.js';
	export default{
		data(){
			return{
				withShow:false,
				whiteFlag:'',
				whiteList:[],
				infoUid:false,
				infoLength:''
			}
		},
    	mounted(){
    		this.myAjax();
    	},
		methods:{
			withdrawalshow(){
				this.myAjax();
			},
			myAjax(){
				this.$http.post(serviceHOST("mntn"), {
					"op":"gwlt",
				})
				.then((response)=> {
					//alert('请求成功');
					var whiteFlag=JSON.stringify(response.data.data.white_flag);
					//alert(whiteFlag)
					if(whiteFlag==1){
						var DATA=new Array(response.data.data.white_list);
						this.whiteList=DATA.join(",");
					}else if(whiteFlag==0){
						this.whiteList="";
					}else{
						alert('网络错误');
					}
					//alert(whiteFlag)
				})
				.catch(function (error) {
					alert('网络错误');
				});
			},
			whitlModify(obj){
				
				var undata=[];
				if(obj==0){
					// uids判定
					var uidsArr=[];
					var whiteList=this.whiteList;
					var myuids=[];
					if(this.whiteList.length!=0){
						uidsArr=this.whiteList.split(',');
						this.infoUid=false;
					}else{
						this.infoUid=true;
					}
					for(var x of uidsArr){
						myuids.push(x);
					}
					undata={"op": "swlt","white_list":myuids}
				}else if(obj==1){
					undata={"op": "cwlt"}
				}
				if(!this.infoUid){
					this.$http.post(serviceHOST("mntn"),undata)
					.then((response)=> {
						alert('发送成功');
						this.myAjax();
					})
					.catch(function (error) {
						alert('网络错误');
					}); 
				}
				
			}
		}
	}
</script>

<style rel="stylesheet" lang="scss">
    @import "../assets/css/main.scss";
</style>