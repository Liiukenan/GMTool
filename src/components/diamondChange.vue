<template>
    <div class="box">
    	<div class="title">
    		玩家钻石变化
    	</div>
    	<div class="title-box">
			<span>钻石类型:</span>
			<select class="form-inline gift-seek" required="required">
				<option v-for="item in consumeType" :value="item.name">{{item.title}}</option>
				<!-- <option value="">所有类别</option>
				<option value="">请选择礼包类型</option>
				<option value="">请选择礼包类型</option>
				<option value="">请选择礼包类型</option>
				<option value="">请选择礼包类型</option>
				<option value="">请选择礼包类型</option> -->
			</select>
			<input type="text" name="" id="input" class="form-control" value="" required="required" pattern="" title="">
			<form class="form-inline plant send-form diamone-date">
				<label>开始时间：</label>
				<input type="text" class="form-control input-text">
			</form>
			<form class="form-inline plant send-form diamone-date">
				<label>结束时间：</label>
				<input type="text" class="form-control input-text">
			</form>
			<a href="javascript:void(0)" class="btn btn-success seek-btn">
				<i class="iconfont icon-fangdajing"></i>
				<span>查询</span>
			</a>
		</div>
    	<div class="account-main">
			<div class="table-responsive">
				<div class="account-list">
					玩家钻石消耗明细
				</div>
				<table class="table">
					<tbody>
						<tr>
							<th v-for="item in playerDimaond">{{item.title}}</th>
						</tr>
						<tr>
							<td v-for="item in playerDimaond">1</td>
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
    			playerDimaond:[
    				{title:'事件时间'},
    				{title:'uid'},
    				{title:'角色名称'},
    				{title:'时间类型'},
    				{title:'状态'},
    				{title:'钻石类型'},
    				{title:'变化数量'},
    				{title:'变化前'},
    				{title:'变化后'}
				],
				consumeType:[
					{title:'所有类别',name:'all'},
					{title:'充值钻石',name:'purchaseGem'},
					{title:'系统钻石',name:'systemGem'}
				]
    		}
    	}
    }
</script>

<style rel="stylesheet" lang="scss">
	@import "../assets/css/main.scss";
    .box{
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
</style>