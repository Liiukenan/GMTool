<template>
	<div class="box">
		<div class="title">
			用户管理
			<a href="javascript:void(0)" class="account" @click="userlist()" v-show="!listShow">
				<i class="iconfont icon-jiahao"></i>
				<span>新建账号</span>
			</a>
		</div>
		<div class="account-main">
			<div class="table-responsive user-table user-review" :class="{'listActive':listShow}">
				<div class="account-list">
					{{listTitle}}
				</div>
				<table class="table">
					<tbody>
							<tr>
								<th>账号</th>
								<th>姓名</th>
								<th>权限</th>
								<th>操作</th>
							</tr>
							<tr v-for="x in userInfo">
								<td>{{x.account}}</td>
								<td>{{x.name}}</td>
								<td :title="x.setting">{{x.setting}}</td>
								<td>
									<a href="javascript:void(0)">{{x.open}}</a> | 
									<a href="javascript:void(0)">{{x.close}}</a>
								</td>
							</tr>
					</tbody>
				</table>
			</div>
			<div class="account-box" :class="{accountSetting:listShow}">
				<form onsubmit="return false;">
				  <div class="form-group">
				    <label for="exampleInputEmail1">账号</label>
				    <input type="text" class="form-control" id="exampleInputEmail1">
				  </div>
				  <div class="form-group">
				    <label for="userName">姓名</label>
				    <input type="password" class="form-control" id="userName">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword">密码</label>
				    <input type="password" class="form-control" id="exampleInputPassword">
				  </div>
				  <div class="form-group userSetting">
				  	<label v-for="(item) in userSetting" class="checkbox-inline">
						<input type="checkbox">
						<span>{{item.setting}}</span>
					</label>
				  </div>
				  <button class="btn btn-success" @click="saveUser()">保存</button>
				  <button class="btn btn-danger" @click="closeUser()">关闭</button>
				</form>

			</div>
		</div>
	</div>
</template>

<script type="ecmascript-6">
	export default{
		name:'user',
		data(){
			return{
				listShow:false,
				listTitle:'账号列表',
				userInfo:[
					{account:'zhengyu',name:'刘宇',setting:'用户管理，系统管理，活动管理，充值数据，数据报表，玩家管理',open:'修改',close:'删除'},
					{account:'zhengyu',name:'刘宇',setting:'用户管理，系统管理，活动管理，充值数据，数据报表，玩家管理',open:'修改',close:'删除'},
					{account:'zhengyu',name:'刘宇',setting:'用户管理，系统管理，活动管理，充值数据，数据报表，玩家管理',open:'修改',close:'删除'},
					{account:'zhengyu',name:'刘宇',setting:'用户管理，系统管理，活动管理，充值数据，数据报表，玩家管理',open:'修改',close:'删除'},
					{account:'zhengyu',name:'刘宇',setting:'用户管理，系统管理，活动管理，充值数据，数据报表，玩家管理',open:'修改',close:'删除'}
				],
				userSetting:[
					{setting:'用户管理'},
					{setting:'系统管理'},
					{setting:'活动管理'},
					{setting:'充值数据'},
					{setting:'数据报表'},
					{setting:'玩家管理'}
				]
			}
		},
		methods:{
			userlist(){
				this.listShow=true;
				this.listTitle='新建账号';
			},
			saveUser(){
				this.listShow=false;
				this.listTitle='账号列表';
			},
			closeUser(){
				this.listShow=false;
				this.listTitle='账号列表';
			}
		}
	}
</script>

<style rel="stylesheet" lang="scss">
@import "../assets/css/main.scss";
	.box{
		.title{
			.account{
				display:block;
				font-size:14px;
				color:#fff;
				height:35px;
				float:right;
				outline:none;
				margin-right:15px;
				.iconfont{
					margin-right:5px;
					display:inline-block;
					vertical-align:top;

				}
			}
		}
		.account-list{
			height:50px;
			line-height:50px;
			color:#fff;
			background:rgba(0,0,0,0.3);
			font-size:14px;
			padding-left:15px;
		}
		.account-main{
			.user-table{
				&.user-review{
					opacity:1;
					z-index:200;
					transform:scale(1,1);
					transition:all 0.5s;
				}
				&.listActive{
					transform:scale(0,0);
					opacity:0;
					z-index:100;
				}
			}
			.account-box{
				background:rgba(0,0,0,0.3);
				position:absolute;
				left:0;
				top:0;
				width:100%;
				padding:15px;
				color:#fff;
				font-size:14px;
				transform:scale(0,0);
				opacity:0;
				z-index:100;
				transition:all 0.5s;
				&.accountSetting{
				transform:scale(1,1);
					opacity:1;
					z-index:200;
				}
				.form-group{
					>input{
						background:rgba(0,0,0,0.3);
						color:#fff;
						border:none;
						box-shadow:none;
					}
				}
				.userSetting{
					border-bottom:1px solid rgba(255,255,255,0.3);
					padding-bottom:15px;
					.checkbox-inline{
						margin-right:15px;
						input{
							margin-top:1px;
						}
					}
				}
				button{
					margin-right:15px;
					box-shadow:none;
					outline:none;
				}
			}
		}
	}
</style>