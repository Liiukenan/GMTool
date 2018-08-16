<template>
    <div class="box">
    	<div class="title">
			系统管理
			<a href="javascript:void(0)" class="account" @click="withdrawalshow">
				<span>刷新</span>
			</a>
		</div>
    	<div class="account-main">
			<div class="table-responsive user-table withTable-main" :class="{'withTable':withShow}">
				<div class="account-list">
					停服开服
				</div>
				<table class="table">
					<tbody>
						<tr>
							<th>服务器名称</th>
							<th>状态</th>
							<th>操作</th>
						</tr>
						<tr>
							<td>SailCraft测试服</td>
							<td>{{serverText}}</td>
							<td>
								<!-- <a href="javascript:void(0)" @click="stopServer()" class="redact" :class="{'grayBg':gray,'greenBg':green}">{{serverText}}</a> -->
								<a href="javascript:void(0)" @click="stopServer(0)" class="redact greenBg">开服</a><!-- 0 开服 -->
								<a href="javascript:void(0)" @click="stopServer(1)" class="redact">停服</a><!-- 1 停服 -->
								<a href="javascript:void(0)" @click="stopServer(2)" class="redact grayBg">灰度</a><!-- 2 灰度 -->
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="user-table with-main" :class="{'withDrawal':!withShow}">
				<div class="account-list">
					停服截止时间
				</div>
				<div class="send-content">
					<form class="send-form">
						<label>截止时间</label>
						<span style="color:#FF9933; margin:0 10px;" v-show="this.info.departure">*请输入发送时间</span>
						<!-- <span style="color:#FF9933; margin:0 10px;">{{EndTime}}</span> -->
						<input type="text" class="form-control input-text" id="departure" />
					</form>
					<div class="send-form send-btn">
					  	<button type="button" class="btn btn-warning" @click="closeServies(1)">确定</button>
					  	<button type="button" class="btn btn-success" @click="closeServies(0)">关闭</button>
			   		</div>
				</div>

			</div>
		</div>
    </div>
</template>

<script type="ecmascript-6">
	import {serviceHOST,formatTime,format} from '../base.js';
	import laydate from 'layui-laydate';
	export default{
		data(){
			return{
				gray:false,
				green:false,
				serverText:'停服',
				whiteFlag:0,
				withShow:false,
				info:{
    				departure:false,
				},
				EndTime:''
			}
		},
    	mounted(){
			this.myAjax();
			let UTC=this;
			laydate.render({ 
				elem: '#departure',
				type: 'datetime',
				calendar: true,//是否显示公历节日
				done: function(value){
					UTC.EndTime=format(formatTime(value));
					console.log(UTC.EndTime);
				},
			});
    	},
		methods:{
			withdrawalshow(){
				this.myAjax()
			},
			myAjax(){
				this.$http.post(serviceHOST("mntn"), {
					"op":"gsmi",
				})
				.then((response)=> {
					//alert('请求成功');
					var data=response.data;
					var whiteFlag=JSON.stringify(data.data.game_maintain_flag);
					//alert(whiteFlag)
					if(whiteFlag==0){
						this.serverText='开服';
					}else if(whiteFlag==1){
						this.serverText='停服';
					}else if(whiteFlag==2){
						this.serverText='灰度';
					}
				})
				.catch(function (error) {
					alert('网络错误');
				});
			},
			stopServer(whiteFlag){
				if(whiteFlag=="0"){//开服
					//alert("开服")
					this.$http.post(serviceHOST("mntn"), {
						"op":"cess",
						"server_flag":"start_server",
					})
					.then((response)=> {
						if(response.data.ret=="0"){
							alert("开服成功");
							this.myAjax();
						}else if(response.data.ret=="-1"){
							alert("请先完成灰度操作，然后再进行开服");
						}else{
							alert("开服失败");
						}
					})
					.catch(function (error) {
						alert('网络错误');
					});
				}else if(whiteFlag=="1"){//停服
					//alert("停服")
					this.withShow=true;
				}else if(whiteFlag=="2"){//灰度
					//alert("灰度")
					this.$http.post(serviceHOST("mntn"), {
						"op":"cess",
						"server_flag":"gray_server",
					})
					.then((response)=> {
						if(response.data.ret=="0"){
							alert("灰度成功");
							this.myAjax();
						}else{
							alert("灰度失败");
						}
					})
					.catch(function (error) {
						alert('网络错误');
					});
				}
			},

			closeServies(obj){
				if(obj==0){
					this.withShow=false;
					this.info.departure=false;
				}else if(obj==1){
					let nowTime=parseInt(new Date().getTime()/1000);
					let departure=document.getElementById('departure').value;
					if(departure.length==0){
						this.info.departure=true;
						return
					}else{
						this.info.departure=false;
					}
					let startTime=formatTime(departure)
					if(startTime>nowTime){
						this.$http.post(serviceHOST("mntn"), {
							"op":"cess",
							"server_flag":"stop_server",
							"deadline":startTime,
						})
						.then(response=> {
							if(response.data.ret==0){
								alert('停服成功');
								this.withShow=false;
								this.myAjax();
							}else{
								alert('停服失败');
							}
						}).catch(function (error) {
							alert('网络错误');
						});
					}else{
						alert('停服日期不得早于当前日期');
					}
				}
			}
		}
	}
</script>

<style rel="stylesheet" lang="scss">
	@import "../assets/css/main.scss";
	.box{
		.user-table{
			color:#fff;
			.redact{
				background:#d9544f;
				display:inline-block;
				width:80px;
				height:25px;
				border-radius:5px;
				line-height:25px;

			}
			table tr td {
				.grayBg{
					background:#666;
					color:#fff;
				}
				.greenBg{
					color:#fff;
					background:#4cae4c;
				}
			}
		}
		.account-main{
			.withTable-main,.with-main{
	    		transform:scale(1,1);
	    		transition:all 0.5s;
	    	}
	    	.withTable,.withDrawal{
				transform:scale(0,0);
	    	}
		}
	}
</style>