<template>
	<div class="box">
		<div class="title">
			钻石消耗存留
		</div>
		<div class="title-box">
			<span>钻石类型:</span>
			<select class="form-inline gift-seek" required="required">
				<option v-for="item in diamondType" :value="item.name">{{item.title}}</option>
			</select>
			<input type="text" name="" id="input" class="form-control" value="" required="required" pattern="" title="">
			<form class="form-inline plant send-form diamone-date">
				<label>开始时间：</label>
				<input type="date" class="form-control input-text">
			</form>
			<form class="form-inline plant send-form diamone-date">
				<label>结束时间：</label>
				<input type="date" class="form-control input-text">
			</form>
			<a href="javascript:void(0)" class="btn btn-success seek-btn">
				<i class="iconfont icon-fangdajing"></i>
				<span>查询</span>
			</a>
		</div>
		<div class="account-main">
			<div class="table-responsive user-table send-table">
				<div class="account-list">
					钻石消耗存留表
				</div>
				<table class="table">
					<tbody>
							<tr>
								<th v-for="item in tableContent">
									{{item.title}}
								</th>
							</tr>
							<tr>
								<td v-for="item in tableContent">
									<!-- {{item.cont}} -->1
								</td>
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
				tableContent:[
					{title:'事件',cont:''},
					{title:'状态',cont:''},
					{title:'钻石类型',cont:''},
					{title:'钻石变化',cont:''},
					{title:'次数',cont:''}
				],
				diamondType:[
					{title:'所有类别',name:"all"},
					{title:'充值增加',name:"pay"},
					{title:'系统增加',name:"sys"},
					{title:'GM增加',name:"gm"},
					{title:'购买减少',name:"buy"},
					{title:'退单减少',name:"refund"}
				]
			}
		}
	}
</script>

<style rel="stylesheet" lang="scss">
@import "../assets/css/main.scss";
	.title{
		>span{
			margin-left:15px;
		}
		.gift-seek{
			background:rgba(0,0,0,0.3);
			box-shadow:none;
			border:none;
			border-radius:5px;
			height:30px;
			line-height:30px;
			padding:0 12px;
			option{
				background:none;
				border:none;
			}
		}
		input{
			display:inline-block;
			width:200px;
			background:rgba(0,0,0,0.3);
			border:none;
			height:30px;
			color:#fff;
			box-shadow:none;

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
		.diamone-date{
			display:inline-block;
			margin-left:15px;
		}
	}
</style>