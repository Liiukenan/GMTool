<template>
	<div class="box">
		 <div class="title">
    		玩家退单
   		 </div>
   		 <div class="title-box">
				<form class="form-inline plant send-form diamone-date">
					<input type="text" class="form-control input-text" placeholder="请输入订单号">
				</form>
				<form class="form-inline plant send-form diamone-date">
					<input type="text" class="form-control input-text" placeholder="请输入uin">
				</form>
				<a href="javascript:void(0)" class="btn btn-success seek-btn">
					<i class="iconfont icon-fangdajing"></i>
					<span>提交</span>
				</a>
    	</div>
    	<div class="account-main">
    		<div class="table-responsive user-table">
				<div class="account-list">
					退单历史记录
				</div>
				<table class="table">
					<tbody>
						<tr>
							<th v-for="item in player">{{item.title}}</th>
						</tr>
						<tr>
							<td v-for="item in player">1</td>
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
    			player:[
    				{title:'时间'},
    				{title:'记录'}
    			]
    		}
    	}
    }
</script>

<style rel="stylesheet" lang="scss">
	@import "../assets/css/main.scss";
</style>