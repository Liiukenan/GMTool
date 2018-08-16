<template>
    <div class="box gift">
    	<div class="title">
			礼包查询
			<a href="javascript:void(0)" class="account" @click="addGift(2)" v-if="titleShow">
				<i class="iconfont icon-huiyuanlibao"></i>
				<span>新建礼包</span>
			</a>
			<select class="form-inline gift-seek" required="required">
				<option v-for="item in giftType" :value="item.name">{{item.title}}</option>
			</select>
			<a href="javascript:void(0)" class="btn btn-success seek-btn">
				<i class="iconfont icon-fangdajing"></i>
				<span>查询</span>
			</a>
		</div>
		<div class="account-main">
			<div class="table-responsive user-table add-main" :class="{listShow:giftContent[0].giftShow}">
				<div class="account-list">
					礼包列表
				</div>
				<table class="table">
					<tbody>
						<tr>
							<th v-for="item in tableTitle">
								{{item.title}}
							</th>
						</tr>
						<tr>
							<td>171012185412</td>
							<td>1</td>
							<td>管理员</td>
							<td>2017-10-12</td>
							<td>个人邮件</td>
							<td>
								<a href="javascript:void(0)" @click="addGift(1)">编辑</a> |
								<a href="javascript:void(0)">发布</a> |
								<a href="javascript:void(0)">删除</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="user-table gift-main" :class="{redact:giftContent[1].giftShow}">
				<div class="account-list">
					新建礼包
				</div>
				<div class="send-content">
				 <form class="form-group send-form">
				    <label>邮件内容</label>
				    <textarea class="form-control input-text"></textarea>
				  </form>
				  <form class="form-inline  send-form gift-choose">
					    <label>平台：</label>
					    <select name=""  class="form-control form-input" required="required">
					    	<option value="android" >所有平台</option>
					    </select>
					</form>
					<form class="form-inline send-form gift-choose">
					    <label>服务器：</label>
					    <select name=""  class="form-control form-input" required="required">
					    	<option value="android">全服</option>
					    </select>
					    <button type="button" class="btn form-input add-language" @click="unfold">+ 展开</button>
					</form>
					<div class="clearit"></div>
					<form class="form-inline send-form gift-choose">
						<label>开始时间：</label>
						<input type="text" class="form-control input-text">
					</form>
					<form class="form-inline send-form gift-choose">
						<label>结束时间：</label>
						<input type="text" class="form-control input-text">
					</form>
					<div class="clearit"></div>
					<form class="form-inline send-form gift-choose">
					    <label>礼包类型：</label>
					    <select name=""  class="form-control form-input" required="required">
					    	<option value="android">请选择礼包类型</option>
					    </select>
					</form>
					<div class="clearit"></div>


				  <div class="table-responsive send-form">
				  	<table class="table">
				  		<tbody>
					  		<tr>
					  			<th>道具id</th>
					  			<th>数量</th>
					  		</tr>
					  		<tr>
					  			<td>
					  				<select class="form-control no-bg gem-bg" required="required">
					  					<option value="">
					  						钻石或gem
					  					</option>
					  				</select>
					  			</td>
					  			<td>
					  				<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="">
					  			</td>
					  		</tr>
				  		</tbody>
				  	</table>
				  </div>
				   <div class="send-form send-btn">
					  	<button type="button" class="btn btn-success" @click="giftList()">发送</button>
					  	<button type="button" class="btn btn-warning" @click="giftList()">取消</button>
		   			</div>
				</div>
			</div>
			<div class="user-table gift-main" :class="{serviceList:giftContent[2].giftShow}">
				<div class="account-list">
					礼包列表
				</div>
				<div class="send-content">
					<div class="checkbox checkList">
						<label class="gift-checkbox" v-for="item in giftCheckbox">
							<input type="checkbox" value="">
							<span>{{item.title}}</span>
						</label>
					</div>
					<div class="send-form send-btn">
					  	<button type="button" class="btn btn-success" @click="addGift(1)">确定</button>
					  	<button type="button" class="btn btn-warning" @click="addGift(0)">取消</button>
		   			</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script type="ecmascript-6">
    export default{
    	name:'gift',
    	data(){
    		return{
				giftType:[
					{title:'批次',name:'batchId'},
					{title:'CDKey',name:'cdk'}
				],
    			titleShow:true,
    			giftContent:[
    				{giftShow:false},
    				{giftShow:false},
    				{giftShow:false}
    			],
    			tableTitle:[
    				{title:'礼包id'},
    				{title:'礼包类型'},
    				{title:'开始时间'},
    				{title:'截止时间'},
    				{title:'创建人'},
    				{title:'管理'}
    			],
    			giftCheckbox:[
    				{title:'1区'},
    				{title:'2区'},
    				{title:'3区'},
    				{title:'4区'}
    			]
    		}
    	},
    	methods:{
    		giftList(){
    			for(var x of this.giftContent){
    				x.giftShow=false;
    			}
    			this.titleShow=true;
    		},
    		addGift(index){
    			if(index==2){
    				this.titleShow=false;
    				this.giftContent.forEach((item,key)=>{
	    				if(key==0 || key==1){
	    					this.giftContent[key].giftShow=true;
	    				}else{
	    					this.giftContent[key].giftShow=false;
	    				}
    				})

    			}else{
    				this.giftContent.forEach((item,key)=>{
	    				if(key==0 || key==1){
	    					this.giftContent[key].giftShow=true;
	    				}else{
	    					this.giftContent[key].giftShow=false;
	    				}
    				})
    				if(index==1){

    				}else{

    				}
    			}
    		},
    		unfold(){
    			this.giftContent.forEach((item,key)=>{
    				if(key==0 || key==2){
    					this.giftContent[key].giftShow=true;
    				}else{
    					this.giftContent[1].giftShow=false;
    				}
    			})
    		}
    	}
    }
</script>

<style rel="stylesheet" lang="scss">
	@import "../assets/css/main.scss";
	.gift{
		.title{
			.gift-seek{
				background:rgba(0,0,0,0.3);
				box-shadow:none;
				border-radius:5px;
				height:30px;
				line-height:30px;
				margin-left:15px;
				padding:0 12px;
				option{
					background:none;
					border:none;
				}
			}
			.seek-btn{
				color:#fff;
				width:80px;
				height:30px;
				padding:0 12px;
				line-height:30px;
				margin-left:15px;
				border:none;
				text-align:left;
				i{
					vertical-align:top;
					margin-right:5px;
					display:inline-block;
				}
			}
		}
		.add-main{
			opacity:1;
			transition:all 0.5s;
			transform:rotateY(0deg);
			z-index:200
		}
		.listShow{
			opacity:0;
			transform:rotateY(180deg);
			z-index:0;
		}
		.gift-main{
			opacity:0;
			transition:all 0.5s;
			transform:rotateY(-180deg);
			z-index:0;
		}
		.redact,.serviceList{
			transform:rotateY(0deg);
			opacity:1;
			z-index:200;
		}
		.send-content{
			.gift-choose{
				float:left;
			}
			.checkList{
				.gift-checkbox{
					margin-left:15px;
					input{
						 -webkit-appearance: none;
						  -moz-appearance:none;
						  appearance:none;
						  background: rgba(0,0,0,0.3);
						  width:14px;
						  height:14px;
						  display:inline-block;
						  outline:none;
						  cursor:pointer;
					}
					input:checked{
						background:rgba(0,0,0,0.3) url('../assets/images/right.png') no-repeat center;
						background-size:80%;
					}
					span{
						line-height:22px;
					}
				}
			}
		}
	}
</style>