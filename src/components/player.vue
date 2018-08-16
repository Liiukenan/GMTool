<template>
    <div class="box">
    	<div class="title">
			玩家信息查询
		</div>
		<div class="title-box">
			<span>账号类型:</span>
			<select class="form-inline gift-seek" required="required">
				<option v-for="item in uidType" :value="item.name">{{item.title}}</option>
			</select>
			<input type="text" name="" id="input" class="form-control" value="" required="required" pattern="" title="">
			<a href="javascript:void(0)" class="btn btn-success seek-btn" @click="">
				<i class="iconfont icon-fangdajing"></i>
				<span>查询</span>
			</a>
		</div>
		<div class="account-main">
			<div class="table-responsive  playerInfo">
				<div class="account-list">
					礼包列表
				</div>
				<table class="table">
					<tbody>
						<tr>
							<th v-for="item in playerInfo">{{item.title}}</th>
						</tr>
						<tr>
							<td v-for="item in playerInfo">1</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="table-responsive  playerInfo col-md-6" style="padding-right:5px;">
				<div class="account-list">
					资源列表
				</div>
				<table class="table">
					<tbody>
						<tr>
							<th v-for="item in resource">{{item.title}}</th>
						</tr>
						<tr>
							<td v-for="item in resource">1</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="table-responsive  playerInfo col-md-6" style="padding-left:5px;">
				<div class="account-list">
					战斗信息
				</div>
				<table class="table">
					<tbody>
						<tr>
							<th v-for="item in sctInfo">{{item.title}}</th>
						</tr>
						<tr>
							<td v-for="item in sctInfo">1</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="clearit"></div>
			<div class="table-responsive  playerInfo">
				<div class="account-list">
					功能船等级
				</div>
				<table class="table">
					<tbody>
						<tr>
							<th v-for="item in bortlevel">{{item.title}}</th>
						</tr>
						<tr>
							<td v-for="item in bortlevel">1</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="table-responsive  playerInfo">
				<div class="account-list">
					战舰等级
				</div>
				<table class="table">
					<tbody>
						<tr>
							<th v-for="item in warShipLevel">{{item.title}}</th>
						</tr>
						<tr>
							<td v-for="item in warShipLevel">1</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script type="ecmascript-6">
    export default{
    	data(){
    		return{
				uidType:[
					{title:'uid',name:'sailcraft'},
					{title:'泰奇id',name:'uq'}
				],
    			playerInfo:[
    				{title:'uid'},
    				{title:'泰奇id'},
    				{title:'用户名'},
    				{title:'建号时间'},
    				{title:'平台'},
    				{title:'渠道'},
    				{title:'客户端语言'},
    				{title:'最近下线时间'},
    				{title:'玩家等级'},
    				{title:'经验值'},
    				{title:'联赛等级'},
    				{title:'奖杯数'},
    				{title:'解锁战舰数'},
    				{title:'充值金额'}
    			],
    			resource:[
    				{title:'充值GEM数量'},
    				{title:'系统GEM数量'},
    				{title:'金币数量'},
    				{title:'海晶石数量'}
    			],
    			sctInfo:[
    				{title:'PVP战斗次数'},
    				{title:'胜利次数'}
    			],
    			bortlevel:[
    				{title:'母舰'},
    				{title:'商船'},
    				{title:'能量船'},
    				{title:'科技船'},
    				{title:'公会船'},
    				{title:'探险船1'},
    				{title:'探险船2'},
    			],
    			warShipLevel:[
    				{title:'战舰编号'},
    				{title:'战舰名称'},
    				{title:'战舰等级'}
    			]
    		}
    	}
    }
</script>

<style rel="stylesheet" lang="scss">
	@import "../assets/css/main.scss";
	.box{
		.account-main{
			.playerInfo{
				position:static;
				margin-bottom:10px;
				&.col-md-6{
					width:50%;
					float:left;
					padding:0;

				}
				.account-list{
				height:50px;
				line-height:50px;
				color:#fff;
				background:rgba(0,0,0,0.3);
				font-size:14px;
				padding-left:15px;
			}
			table{
				margin-bottom:0px;
				background:rgba(0,0,0,0.3);
				margin-top:1px;
				tr{
					th{
						font-size:14px;
					}
					td,th{
						border:none;
						text-align:center;
						border:1px solid rgba(255,255,255,0.2);
						vertical-align: middle;
						a{
							color:#fff;
						}

					}
				}
			}

			}
		}
	}
</style>