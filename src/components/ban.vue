<template>
    <div class="box">
    	<div class="title">
    		暂停 | 解封
    	</div>
    	<div class="title-box">
			<span>账号类型:</span>
			<select class="form-inline gift-seek" required="required">
				<option v-for="item in playerstatus" :value="item.name">{{item.title}}</option>
			</select>
			<form class="form-inline plant send-form diamone-date">
				<label>uid：</label>
				<input type="text" class="form-control input-text" placeholder="查询特定uid账号时填写">
			</form>
			<a href="javascript:void(0)" class="btn btn-success seek-btn">
				<i class="iconfont icon-fangdajing"></i>
				<span>查询</span>
			</a>
			<a href="javascript:void(0)" class="btn btn-danger seek-btn">
				<i class="iconfont icon-icon--"></i>
				<span>禁言</span>
			</a>
			<a href="javascript:void(0)" class="btn btn-success seek-btn">
				<i class="iconfont icon-fayan"></i>
				<span>解除禁言</span>
			</a>
			<a href="javascript:void(0)" class="btn btn-danger seek-btn">
				<i class="iconfont icon-jinzhi"></i>
				<span>封停</span>
			</a>
			<a href="javascript:void(0)" class="btn btn-success seek-btn">
				<i class="iconfont icon-ai52"></i>
				<span>解除封停</span>
			</a>
    	</div>
    	<div class="account-main">
    		<div class="table-responsive user-table">
				<div class="account-list">
					玩家状态列表
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
    				{title:'平台'},
    				{title:'渠道'},
    				{title:'uid'},
    				{title:'角色姓名'},
    				{title:'状态'}
    			],
				playerstatus:[
					{title:'全部账号',name:'all'},
					{title:'封停',name:'ban'},
					{title:'禁言',name:'shutup'},
				]
    		}
    	}
    }
</script>

<style rel="stylesheet" lang="scss">
	@import "../assets/css/main.scss";
</style>