<template>
    <div class="box" id="box">
    	<div class="title">
			发送邮件 | 道具
			<ul class="sendEmail addEmail">
				<li v-for="(item,index) in send">
					<a href="javascript:void(0)" @click="sendProp(index)">
						<i class="iconfont icon-jiahao"></i>
						<span style="vertical-align:top;">{{item.title}}</span>
					</a>
				</li>
			</ul>
			<span class="account">
				<span>新增邮件:</span>
			</span>
		</div>
		<div class="account-main">
			<div class="table-responsive user-table send-table" :class="{'send-show':emailList}">
				<div class="account-list">
					邮件列表
				</div>
				<table class="table">
					<tbody>
							<tr>
								<th>邮件id</th>
								<th>邮件标题</th>
								<th>发送人</th>
								<th>发送时间</th>
								<th>邮件类型</th>
								<th>管理</th>
							</tr>
							<!-- <tr>
								<td>171012185412</td>
								<td>1</td>
								<td>管理员</td>
								<td>2017-10-12</td>
								<td>个人邮件</td>
								<td>
									<a href="javascript:void(0)">详情</a> |
									<a href="javascript:void(0)">删除</a>
								</td>
							</tr>
							<tr>
								<td>171012185412</td>
								<td>1</td>
								<td>管理员</td>
								<td>2017-10-12</td>
								<td>个人邮件</td>
								<td>
									<a href="javascript:void(0)">详情</a> |
									<a href="javascript:void(0)">删除</a>
								</td>
							</tr>
							<tr>
								<td>171012185412</td>
								<td>1</td>
								<td>管理员</td>
								<td>2017-10-12</td>
								<td>个人邮件</td>
								<td>
									<a href="javascript:void(0)">详情</a> |
									<a href="javascript:void(0)">删除</a>
								</td>
							</tr>
							<tr>
								<td>171012185412</td>
								<td>1</td>
								<td>管理员</td>
								<td>2017-10-12</td>
								<td>个人邮件</td>
								<td>
									<a href="javascript:void(0)">详情</a> |
									<a href="javascript:void(0)">删除</a>
								</td>
							</tr> -->
					</tbody>
				</table>
				<div style="width: 100%;height: 200px;text-align: center; line-height: 200px; font-size: 25px; background:rgba(0, 0, 0, 0.3);" rowspan="12">暂无邮件</div>
			</div>
			<div class="user-table email-list" :class="{'email-show':send[0].listShow}">
				<div class="account-list">
					{{send[0].title}}
				</div>
				<div class="send-content">
					<form class="form-inline plant send-form">
						<label>发送时间：</label>
						<!-- <span style="color:#FF9933; margin:0 10px;" v-show="american.departure.show">({{american.departure.time}})</span> -->
						<input type="text" id="departure" class="form-control input-text card">
						<span style="color:#FF9933; margin:0 10px;" v-show="this.info.departure">*请输入发送时间</span>
					</form>
					<form class="form-inline plant send-form">
						<label>失效时间：</label>
						<!-- <span style="color:#FF9933; margin:0 10px;"  v-show="american.failure.show">({{american.failure.time}})</span> -->
						<input type="text" id="failure" class="form-control input-text card">
						<span style="color:#FF9933; margin:0 10px;" v-show="this.info.failure">*请输入失效时间</span>
					</form>
					<div class="clearit"></div>
					<form class="form-group send-form">
						<label>uid</label><span style="color:#FF9933; margin:0 10px;" v-show="this.info.uid">*请输入uid</span>
						<textarea class="form-control input-text" placeholder="多个uid以,分隔" v-model="uids"></textarea>
					</form>
					<div class="addEmailContent" v-for="(item,index) in emailContent">
						<form class="form-group send-form" autocomplete="off">
							<label>链接</label>
							<input type="text" class="form-control input-text"  v-model="item.hyperlinks" >
						</form>
						<form class="form-inline send-form email-title">
							<label>标题：</label>
							<input type="text" class="form-control input-text" v-model="item.title">
							<span style="color:#FF9933; margin:0 10px;" v-show="item.ts">*请输入标题</span>
						</form>
						<form class="form-inline send-form email-title">
							<label>语言：</label>
							<select name=""  class="form-control form-input" required="required" v-model="item.name" @change="chooseLanguage(index)">
							   <option  v-for="(x,index) in item.language" :value="x.name">{{x.title}}</option>
							</select>
							<button type="button" class="btn form-input add-language" @click="addContent">+ 新增</button>
							<button type="button" class="btn form-input delete-language" v-if="index!=0" @click="deleteContent(index)">删除</button>
							
						</form>
						<div class="clearit"></div>
						<form class="form-group send-form">
							<label>内容</label>
							<span style="color:#FF9933; margin:0 10px;" v-show="item.cs">*请输入内容</span>
							<textarea class="form-control input-text" v-model="item.content" ></textarea>
						</form>
					</div>

					<div class="table-responsive send-form">
						<div style="color:#FF9933;margin-bottom:10px;">要修改的内容总和一次性最多4个</div>
						<table class="table">
							<tbody>
								<tr>
									<th>类型</th>
									<th></th>
								</tr>
								<tr v-for="(item,index) in props">
					  			<td style="vertical-align:top;">
					  				<select class="form-control no-bg gem-bg" required="required" v-model="item.selected" @change="genre(index)">
					  					<option v-for="x in item.propCont" :value="x.name">{{x.title}}</option>
					  				</select>
					  			</td>
					  			<td>
					  				<div class="table-responsive" :class="{'active':item.propCont[0].propShow}">
					  					<table class="table">
					  						<tr style="width:100%;">
							  					<td class="prop-number">钻石:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].gem">
							  					</td>
							  				</tr>
							  				<tr>
							  					<td class="prop-number">金币:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].gold">
							  					</td>
							  				</tr>
							  				<tr style="width:100%;">
							  					<td class="prop-number">石头:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].stone">
							  					</td>
							  				</tr>
							  				<tr>
							  					<td class="prop-number">木材:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].wood">
							  					</td>
							  				</tr>
							  				<tr>
							  					<td class="prop-number">航海币:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].honor">
							  					</td>
							  				</tr>
							  				<tr>
							  					<td class="prop-number">钢铁:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].iron">
							  					</td>
							  				</tr>
							  				<tr>
							  					<td class="prop-number">舰魂:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].shipsoul">
							  					</td>
							  				</tr>
					  					</table>
					  				</div>
					  				<div class="table-responsive" :class="{'active':item.propCont[1].propShow}">
					  					<table class="table">
					  						<tr style="width:100%;">
							  					<th class="prop-number">id:</th>
							  					<th class="prop-number">
							  						数量:
							  					</th>
							  				</tr>
							  				<tr>
							  					<td><input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[1].propId"></td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[1].propNum">
							  					</td>
							  				</tr>
					  					</table>
					  				</div>
					  				<div class="table-responsive" :class="{'active':item.propCont[2].propShow}">
					  					<table class="table">
					  						<tr style="width:100%;">
							  					<th class="prop-number">id:</th>
							  					<th class="prop-number">
							  						数量:
							  					</th>
							  				</tr>
							  				<tr>
							  					<td><input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[2].cardId"></td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[2].cardNum">
							  					</td>
							  				</tr>
					  					</table>
					  				</div>
					  			</td>
					  		</tr>
							</tbody>
						</table>
					</div>
					<div class="send-form send-btn">
						<button type="button" class="btn btn-success" @click="sendEmailPerson">发送</button>
						<button type="button" class="btn btn-warning" @click="cancelEmail">取消</button>
					</div>
				</div>
			</div>
			<div class="user-table ditch-list" :class="{'ditch-show':send[1].listShow}">
				<div class="account-list">
					{{send[1].title}}
				</div>
				<div class="send-content">
					<form class="form-inline plant send-form" v-for="(item,index) in plant">
					    <label>{{item.title}}：</label>
					    <select name=""  class="form-control form-input" required="required" v-model="item.selected" @change="handlue(index)">
					    	<option v-for="x in item.select" :value="x.name">{{x.title}}</option>
					    </select>
					</form>
					<form class="form-inline plant send-form">
						<button type="button" class="btn form-input add-language" @click="unfold">+ 展开</button>
					</form>
					<div class="clearit"></div>
					<form class="form-inline plant send-form">
						<label>发送时间：</label>
						<!-- <span style="color:#FF9933; margin:0 10px;" v-show="american.departure1.show">({{american.departure1.time}})</span> -->
						<input type="text" id="departure1" class="form-control input-text card">
						<span style="color:#FF9933; margin:0 10px;" v-show="this.info.departure">*请输入发送时间</span>
					</form>
					<form class="form-inline plant send-form">
						<label>失效时间：</label>
						<!-- <span style="color:#FF9933; margin:0 10px;" v-show="american.failure1.show">({{american.failure1.time}})</span> -->
						<input type="text" id="failure1" class="form-control input-text card">
						<span style="color:#FF9933; margin:0 10px;" v-show="this.info.failure">*请输入失效时间</span>
					</form>
					<div class="clearit"></div>
				 <div class="addEmailContent" v-for="(item,index) in emailContent">
						<form class="form-group send-form" autocomplete="off">
							<label>链接</label>
							<input type="text" class="form-control input-text"  v-model="item.hyperlinks" >
						</form>
						<form class="form-inline send-form email-title">
							<label>标题：</label>
							<input type="text" class="form-control input-text" v-model="item.title">
							<span style="color:#FF9933; margin:0 10px;" v-show="item.ts">*请输入标题</span>
						</form>
						<form class="form-inline send-form email-title">
							<label>语言：</label>
							<select name=""  class="form-control form-input" required="required" v-model="item.name" @change="chooseLanguage(index)">
							   <option  v-for="(x,index) in item.language" :value="x.name">{{x.title}}</option>
							</select>
							<button type="button" class="btn form-input add-language" @click="addContent">+ 新增</button>
							<button type="button" class="btn form-input delete-language" @click="deleteContent(index)" v-if="index!=0">删除</button>
							
						</form>
						<div class="clearit"></div>
						<form class="form-group send-form">
							<label>内容</label>
							<span style="color:#FF9933; margin:0 10px;" v-show="item.cs">*请输入内容</span>
							<textarea class="form-control input-text" v-model="item.content" ></textarea>
						</form>
					</div>
				  <div class="clearit"></div>
				 
				  <div class="table-responsive send-form">
						<div style="color:#FF9933;margin-bottom:10px;">要修改的内容总和一次性最多4个</div>
						<table class="table">
							<tbody>
								<tr>
									<th>类型</th>
									<th></th>
								</tr>
								<tr v-for="(item,index) in props">
					  			<td style="vertical-align:top;">
					  				<select class="form-control no-bg gem-bg" required="required" v-model="item.selected" @change="genre(index)">
					  					<option v-for="x in item.propCont" :value="x.name">{{x.title}}</option>
					  				</select>
					  			</td>
					  			<td>
					  				<div class="table-responsive" :class="{'active':item.propCont[0].propShow}">
					  					<table class="table">
					  						<tr style="width:100%;">
							  					<td class="prop-number">钻石:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].gem">
							  					</td>
							  				</tr>
							  				<tr>
							  					<td class="prop-number">金币:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].gold">
							  					</td>
							  				</tr>
							  				<tr style="width:100%;">
							  					<td class="prop-number">石头:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].stone">
							  					</td>
							  				</tr>
							  				<tr>
							  					<td class="prop-number">木材:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].wood">
							  					</td>
							  				</tr>
							  				<tr>
							  					<td class="prop-number">航海币:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].honor">
							  					</td>
							  				</tr>
							  				<tr>
							  					<td class="prop-number">钢铁:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].iron">
							  					</td>
							  				</tr>
							  				<tr>
							  					<td class="prop-number">舰魂:</td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[0].shipsoul">
							  					</td>
							  				</tr>
					  					</table>
					  				</div>
					  				<div class="table-responsive" :class="{'active':item.propCont[1].propShow}">
					  					<table class="table">
					  						<tr style="width:100%;">
							  					<th class="prop-number">id:</th>
							  					<th class="prop-number">
							  						数量:
							  					</th>
							  				</tr>
							  				<tr>
							  					<td><input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[1].propId"></td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[1].propNum">
							  					</td>
							  				</tr>
					  					</table>
					  				</div>
					  				<div class="table-responsive" :class="{'active':item.propCont[2].propShow}">
					  					<table class="table">
					  						<tr style="width:100%;">
							  					<th class="prop-number">id:</th>
							  					<th class="prop-number">
							  						数量:
							  					</th>
							  				</tr>
							  				<tr>
							  					<td><input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[2].cardId"></td>
							  					<td>
							  						<input type="text" name=""  class="form-control gem-bg" value="" required="required" pattern="" title="" v-model="item.propCont[2].cardNum">
							  					</td>
							  				</tr>
					  					</table>
					  				</div>
					  			</td>
					  		</tr>
							</tbody>
						</table>
					</div>

				  <div class="send-form send-btn">
				  	<button type="button" class="btn btn-success" @click="sendEmail">发送</button>
				  	<button type="button" class="btn btn-warning" @click="cancelEmail">取消</button>
				  </div>
				</div>
			</div>
			<!-- <div class="addEmail user-table platform-list" :class="{'platform-show':send[2].listShow}">
				<div class="account-list">
					{{send[1].title}}
				</div>
				<div class="send-content">
				 <form class="form-inline send-form">
					  <div class="form-group">
					    <label for="exampleInputName2">平台：</label>
					    <select class="form-control form-input">
					    	<option value="ios">ios</option>
					    	<option value="android">android</option>
					    </select>
					  </div>
					</form>
				  <form class="form-inline send-form email-title">
				    <label>邮件标题：</label>
				    <input type="text" class="form-control input-text">
				  </form>
				  <form class="form-inline send-form email-title">
				    <label>语言：</label>
				    <select name=""  class="form-control form-input" required="required">
				    	<option value="英语">英语</option>
				    </select>
				    <button type="button" class="btn form-input add-language">+ 新增</button>
				  </form>
				  <div class="clearit"></div>
				  <form class="form-group send-form">
				    <label>链接</label>
				    <input type="text" class="form-control input-text">
				  </form>
				  <form class="form-group send-form">
				    <label>邮件内容</label>
				    <textarea class="form-control input-text"></textarea>
				  </form>
				  <div class="send-form send-btn">
				  	<button type="button" class="btn btn-success" @click="sendEmail">发送</button>
				  	<button type="button" class="btn btn-warning" @click="cancelEmail">取消</button>
				  </div>

				</div>
			</div> -->
			<div class="user-table addMain server-list" :class="{'server-show':serverShow}">
				<div class="account-list">
					新增服务器
				</div>
				<div class="send-content">
					<div class="clearbox">
						<form class="form-inline plant send-form" v-for="item in serverNum">
							<div class="checkbox">
								<label>
									<input type="checkbox" class="checkbox-center" v-model="serverArr" :value="item">
									<span class="checkbox-center">{{item}}服</span>
								</label>
							</div>
						</form>
					</div>
					<div class="send-form send-btn">
					  	<button type="button" class="btn btn-success" @click="sendaddServies">确定</button>
					  	<button type="button" class="btn btn-warning" @click="canceladdServies">取消</button>
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
    			plant:[
	    			{title:'平台',select:[{name:"allPlatform",title:'所有平台'},{name:"ios",title:'ios'},{name:"android",title:'android'}],selected:'allPlatform'},
	    			{title:'渠道',select:[{name:"allChannel",title:'所有渠道'}],selected:'allChannel'},
	    			{title:'服务器',select:[{name:"allServer",title:'全部服务器'},{name:"otherServer",title:'部分服务器'}],selected:'allServer'},
    			],
    			isHave:0,
    			gemCount:'',
    			goldCount:'',
    			stoneCount:'',
    			woodCount:'',
    			honorCount:"",
				shipsoulCount:"",
				ironCount:"",
    			cardArr:[],
    			propsArr:[],
    			uids:[],
    			props:[
    				{
						selected:'resource',
						propCont:[
							{
								title:'资源',
	    						name:'resource',
	    						propShow:false,
	    						gem:"",
				    			gold:"",
				    			stone:"",
				    			wood:"",
				    			honor:"",
				    			shipsoul:"",
				    			iron:""

	    					},
	    					{
	    						title:'道具',
	    						name:'props',
	    						propShow:true,
	    						propNum:'',
	    						propId:'',

	    					},
	    					{
	    						title:'船卡',
	    						name:'battleship_cards',
	    						propShow:true,
	    						cardNum:'',
	    						cardId:''
	    					}
						],

							
					},
					{
						selected:'resource',
						propCont:[
							{
								title:'资源',
	    						name:'resource',
	    						propShow:false,
	    						gem:"",
				    			gold:"",
				    			stone:"",
				    			wood:"",
				    			honor:"",
				    			shipsoul:"",
				    			iron:""

	    					},
	    					{
	    						title:'道具',
	    						name:'props',
	    						propShow:true,
	    						propNum:'',
	    						propId:'',

	    					},
	    					{
	    						title:'船卡',
	    						name:'battleship_cards',
	    						propShow:true,
	    						cardNum:'',
	    						cardId:''
	    					}
						],
							
					},
					{
						selected:'resource',
						propCont:[
							{
								title:'资源',
	    						name:'resource',
	    						propShow:false,
	    						gem:"",
				    			gold:"",
				    			stone:"",
				    			wood:"",
				    			honor:"",
				    			shipsoul:"",
				    			iron:""

	    					},
	    					{
	    						title:'道具',
	    						name:'props',
	    						propShow:true,
	    						propNum:'',
	    						propId:'',

	    					},
	    					{
	    						title:'船卡',
	    						name:'battleship_cards',
	    						propShow:true,
	    						cardNum:'',
	    						cardId:''
	    					}
						],
							
					},
					{
						selected:'resource',
						propCont:[
							{
								title:'资源',
	    						name:'resource',
	    						propShow:false,
	    						gem:"",
				    			gold:"",
				    			stone:"",
				    			wood:"",
				    			honor:"",
				    			shipsoul:"",
				    			iron:""

	    					},
	    					{
	    						title:'道具',
	    						name:'props',
	    						propShow:true,
	    						propNum:'',
	    						propId:'',

	    					},
	    					{
	    						title:'船卡',
	    						name:'battleship_cards',
	    						propShow:true,
	    						cardNum:'',
	    						cardId:''
	    					}
						],
							
					}

    			],
    			platform:'allPlatform',
    			emailContent:[
    				{
    					name:'en',
    					title:'',
    					content:'',
    					hyperlinks:'',
    					ts:false,
    					cs:false,
    					language:[
		    				{
		    					name:'en',
		    					title:'英文',
		    					titleCont:'',
		    					content:''
		    				}
    					]
    				}
    			],
    			american:{

    				departure:{
    					time:'',
    					show:false
    				},
    				failure:{
    					time:'',
    					show:false
    				},
    				departure1:{
    					time:'',
    					show:false
    				},
    				failure1:{
    					time:'',
    					show:false
    				},

    			},
    			serverArr:[],
    			allServer:true,
    			emailList:false,
    			serverNum:'',
    			send:[
	    			{
	    				title:'按特定uid发送',
	    				listShow:false
	    			},
	    			{
	    				title:'按平台或服务器发送',
	    				listShow:false
	    			}
    			],
    			serverShow:false,
    			links:0,
    			info:{
    				departure:false,
    				failure:false,
    				uid:false,
    				title:false,
    				language:false,
    				content:false
    			},
    			infoLength:[]
    		}
    	},
    	mounted(){
    		var self=this;
    		this.$http.post(serviceHOST('mail'), {
				"op": "gsil"
			})
			.then(response=> {
				this.serverNum=response.data.data.server_ids;
				this.serverNum.sort(function(a,b){
				return a-b;
			})                   
			}).catch(function (error) {

			});
            laydate.render({
				elem: '#departure',
				type:'datetime',
				calendar: true,//是否显示公历节日
				done: function(value, date, endDate){
					self.american.departure.time=format(formatTime(value));
					self.american.departure.show=true;
				}


			});

            laydate.render({
				elem: '#failure',
				type:'datetime',
				calendar: true,//是否显示公历节日
				done: function(value){
					self.american.failure.time=format(formatTime(value));
					self.american.failure.show=true;
				}
			});
           	laydate.render({
				elem: '#departure1',
				type:'datetime',
				calendar: true,//是否显示公历节日
				done: function(value){
					self.american.departure1.time=format(formatTime(value));
					self.american.departure1.show=true;
				}
			});
    		laydate.render({
				elem: '#failure1',
				type:'datetime',
				calendar: true,//是否显示公历节日
				done: function(value){
					self.american.failure1.time=format(formatTime(value));
					self.american.failure1.show=true;
				}
			});
            
    	},
    	methods:{
    		sendProp(index){
    			this.emailList=true;
    			this.serverShow=false;
    			for(var x of this.send){
    				x.listShow=false;
    			}
    			this.send[index].listShow=true;
    		},
    		countNum(myArr){
    			var count=0;
    			for(var x of myArr){
    				if(x){
    					count+=parseInt(x);
    				}
    			}
    			return count;
    		},
    		// 判断是否有重复元素
    		arrRepeat(arr){
					var arrStr = JSON.stringify(arr),str;
				for (var i = 0; i < arr.length; i++) {
					if (arrStr.indexOf(arr[i]) != arrStr.lastIndexOf(arr[i])){
					return true;
				}
				};
					return false;
			},

    		sendEmailPerson(){
				this.$http.post(serviceHOST('mail'),this.sendJson('uid','departure','failure'))
				.then(response=> {
					if(response.data.ret=="0"){
					alert('发送成功')
					// location.reload(); 
					}      
				}).catch(function (error) {

				});
			},
			
    		addContent(){
    			var content={
    					name:'zh-Hans',
    					title:'',
    					content:'',
    					hyperlinks:'',
    					ts:false,
    					cs:false,
    					language:[
							{
								name:'zh-Hans',
								title:'简体中文',
								titleCont:'',
								content:''
							},
							{
								name:'zh-Hant',
								title:'繁体中文',
								titleCont:'',
								content:''
							},
							{
								name:'fr',
								title:'法语',
								titleCont:'',
								content:''
							},
							{
								name:'de',
								title:'德语',
								titleCont:'',
								content:''
							},
							{
								name:'ru',
								title:'俄语',
								titleCont:'',
								content:''
							},
							{
								name:'es',
								title:'西班牙语',
								titleCont:'',
								content:''
							},
							{
								name:'pt',
								title:'葡萄牙语',
								titleCont:'',
								content:''
							},
							{
								name:'th',
								title:'泰语',
								titleCont:'',
								content:''
							},
							{
								name:'vi',
								title:'越南语',
								titleCont:'',
								content:''
							},
							{
								name:'id',
								title:'印尼语',
								titleCont:'',
								content:''
							}
    					]
    				}
    			if(this.emailContent.length<=content.language.length){
					this.emailContent.push(content);
				}else{
					alert("添加的板块数量已超出语言的数量")
				}
    		},
    		chooseLanguage(index){
    			console.log(this.emailContent[index].name);
    			
    		},
    		deleteContent(index){
    			// 删除语言
    			this.emailContent.splice(index,1);
    		},
    		// 发送的数据
    		sendJson(category,dateId1,dateId2){
    			this.infoLength=[];

    			// uids判定
				
				if(category=='uid'){
					var uidsArr=[];
					if(this.uids.length!=0){
	    				uidsArr=this.uids.split(',');
	    				this.info.uid=false;
	    			}else{
	    				this.info.uid=true;
	    			}

	    			this.infoLength.push(this.info.uid);

	    			var myuids=[];
	    			for(var x of uidsArr){
	    				myuids.push(parseInt(x));
	    			}
				}
    			
				// 时间判定
    			var departure=document.getElementById(dateId1).value;
    			var failure=document.getElementById(dateId2).value;
    			if(departure.length==0 && (this.allServer==false || category=='uid')){
    				this.info.departure=true;
    			}else{
    				this.info.departure=false;
    			}
    			this.infoLength.push(this.info.departure);
    			if(failure.length==0 && (this.allServer==false || category=='uid')){
    				this.info.failure=true;
    			}else{
    				this.info.failure=false;
    			}
    			this.infoLength.push(this.info.failure);

    			var hyperlinks={};
    			var title={};
    			var content={};
    			var languageArr=[];
    			for(var x of this.emailContent){
    				if(x.hyperlinks){
    					this.links=1;
    					hyperlinks[x.name]=x.hyperlinks;
    				}

    				if(x.title.length==0){
    					x.ts=true;
    				}else{
    					x.ts=false;
    				}
    				this.infoLength.push(x.ts);
    				if(x.content.length==0){
    					x.cs=true;
    				}else{
    					x.cs=false;
    				}
    				
    				this.infoLength.push(x.cs);
    				title[x.name]=x.title;
    				content[x.name]=x.content;

    				// 是否有重复语言选择
    				languageArr.push(x.name);
    				
    			}
    			
    			if(this.arrRepeat(languageArr)){
    				alert('语言重复，请重新选择！')
    				return;
    			
    			}



    			// 是否有资源
    			for(var j of this.props){
    				for(var x of j.propCont){
	    				for(var item in x){
	    					if(item !='title'){
	    						if(item !='name'){
	    							if(item !='propShow'){
	    								if(item !='propId'){
	    									if(item !='cardId'){
	    										if(x[item].length!=0){
	    											this.isHave=1;
	    										}
	    									}
	    								}
	    							}
	    						}
	    					}
	    				}
	    			}
    			}


    			// 资源获取值
    			var gemArr=[];
    			var stoneArr=[];
    			var goldArr=[];
    			var woodArr=[];
    			var propsArr=[];
    			var cardArr=[];
    			var honorArr=[];
				var shipsoulArr=[];
				var ironArr=[];
    			for(var item of this.props){
    				var gem=item.propCont[0].gem;
    				var stone=item.propCont[0].stone;
    				var gold=item.propCont[0].gold;
    				var wood=item.propCont[0].wood;
    				var honor=item.propCont[0].honor;
    				var shipsoul=item.propCont[0].shipsoul;
    				var iron=item.propCont[0].iron;

    				var propNum=item.propCont[1].propNum;
    				var cardNum=item.propCont[2].cardNum;
    				var propId=item.propCont[1].propId;
    				var cardId=item.propCont[2].cardId;


    				gemArr.push(gem);
    				stoneArr.push(stone);
    				goldArr.push(gold);
    				woodArr.push(wood);
    				honorArr.push(honor);
    				shipsoulArr.push(shipsoul);
    				ironArr.push(iron);
    				var propsObj={
						        "protype_id": parseInt(propId),
						        "count": parseInt(propNum)
						    }
					var cardObj={
						        "protype_id": parseInt(cardId),
						        "count": parseInt(cardNum)
						    } 
					if(propNum){
    					propsArr.push(propsObj);
    				}
					if(cardNum){
						cardArr.push(cardObj);
					}
					
    			}
    			this.propsArr=propsArr;
    			this.cardArr=cardArr;
    			this.gemCount=this.countNum(gemArr);
    			this.stoneCount=this.countNum(stoneArr);
    			this.goldCount=this.countNum(goldArr);
    			this.woodCount=this.countNum(woodArr);
    			this.honorCount=this.countNum(honorArr);
    			this.shipsoulCount=this.countNum(shipsoulArr);
    			this.ironCount=this.countNum(ironArr);


    			var resources={};
    			if(this.gemCount!=0){
    				resources.gem=this.gemCount;
    			}
    			if(this.stoneCount!=0){
    				resources.stone=this.stoneCount;
    			}
    			if(this.goldCount!=0){
    				resources.gold=this.goldCount;
    			}
    			if(this.woodCount!=0){
    				resources.wood=this.woodCount;
    			}
    			if(this.honorCount!=0){
    				resources.honor=this.honorCount;
    			}
    			if(this.shipsoulCount!=0){
    				resources.shipsoul=this.shipsoulCount;
    			}
    			if(this.ironCount!=0){
    				resources.iron=this.ironCount;
    			}


    			// 判定资源数量
    			var count=0;
    			var propsNum=0;
    			for(var x in resources){
    				count++;
    			}
    			propsNum=count+this.propsArr.length+this.cardArr.length;
    			if(propsNum>4){
    				alert('一次修改类型最多只能有4项');
    			}

    			for(var x of this.infoLength){
						if(x){
							return;
						}
					}
				var commonality={};
				if(formatTime(departure) && formatTime(failure)){
					commonality.start_time=formatTime(departure);
					commonality.end_time=formatTime(failure);
				}
    			commonality={
    				"op":"ppcm",
    				"type":"public",
    				"is_all_server":this.allServer,
    				"server_ids":this.serverArr,
    				"channel_id": "allChannel",
    				"platform": this.platform,
    				"is_have_hyperlinks": this.links,
					"hyperlinks": hyperlinks,
					"title": title,
					"content": content,
					"is_have_attachment":this.isHave,
					"attachment": { 
						"resources": resources,
						"props": this.propsArr,
						"battleship_cards":this.cardArr
					},
    			};
    			var personObj={
					"op": "pplm",
					"type": "personal",
					"uins": myuids,
					"title": title,
					"content": content,
					"is_have_attachment": this.isHave,
					"attachment": {
						"resources": resources,
						"props": this.propsArr,
						"battleship_cards":this.cardArr
					},
					"start_time":formatTime(departure),
    				"end_time":formatTime(failure),
					"is_have_hyperlinks": this.links,
					"hyperlinks":hyperlinks
					}
    			
				
				if(category=='plant'){
					return commonality;
				}
				
				if(category=='uid'){
					return personObj;
				}



			},
			
    		sendEmail(){
    			// this.emailList=false;
    			// for(var x of this.send){
    			// 	x.listShow=false;
    			// }
    			this.$http.post(serviceHOST('mail'),this.sendJson('plant','departure1','failure1'))
				.then(response=> {
					if(response.data.ret=="0"){
						alert('发送成功')
						// location.reload();
					}
				}).catch(function (error) {

				});
			},
			
    		cancelEmail(){
    			// this.emailList=false;
    			// for(var x of this.send){
    			// 	x.listShow=false;
    			// }
    			location.reload();
    		},

    		// 选择服务器
    		handlue(index){
    			if(this.plant[index].selected=="allServer"){
    				this.serverArr=[];
    				this.allServer=true;
    			}else{
    				this.allServer=false;
    			}
    			if(index==0){
    				this.platform=this.plant[0].selected;
    			}
			},
			
    		// 选择类型
    		genre(index){
    			for(var x of this.props[index].propCont){
    				x.propShow=true;
    				if(this.props[index].selected==x.name){
    					x.propShow=false;
    				}
    				for(var item in x){
    					if(item !='title'){
    						if(item !='name'){
    							if(item !='propShow'){
    								x[item]='';
    							}
    						}
    					}
    				}
    			}
			},
			
    		unfold(){
    			this.send[0].listShow=false;
    			this.send[1].listShow=false;
    			this.serverShow=true;
			},
			
    		sendaddServies(){
    			this.serverShow=false;
    			this.send[1].listShow=true;
    			if(this.serverArr.length>0){
    				this.plant[2].selected='otherServer';
    			}
			},
			
    		canceladdServies(){
    			this.serverArr=[];
    			this.emailList=true;
    			this.serverShow=false;
    			for(var x of this.send){
    				x.listShow=false;
    			}
    			this.send[1].listShow=true;
    		},

    	}
    }
</script>

<style rel="stylesheet" lang="scss">
    @import "../assets/css/main.scss";
	.box{
		.title{
			.sendEmail{
				float:right;
				li{
					float:left;
					margin-right:15px;
					a{
						color:#fff;
					}
				}
				&.addEmail{
					display:block;
				}
			}
		}
		.user-table{
			.redact{
				background:#d9544f;
				display:inline-block;
				width:80px;
				height:25px;
				border-radius:5px;
				line-height:25px;
			}
			.prop-number{
				padding:10px 20px;
			}
			.send-content{
				.card{
					background: rgba(0, 0, 0, 0.3);
				    border: none;
				    -webkit-box-shadow: none;
				    box-shadow: none;
				    color: #fff;
				    resize: none;
				    height: 30px;
				    line-height: 30px;
					color:#fff;
					border-radius:4px;
				}
				.laydate-time-list ol li{
					color:#333;
				}
			}
			&.send-table{
				transform:rotateY(0deg);
				opacity:1;
				z-index:100;
				transition:all 0.5s;

			}
			&.send-show{
				transform:rotateY(180deg);
				opacity:0;
				z-index:10;
				visibility:hidden;
			}
			&.email-list,&.ditch-list,&.server-list{
				transform:rotateY(-180deg);
				transition:all 0.5s;
				opacity:0;
				z-index:10;
				visibility:hidden;
			}
			&.email-show,&.ditch-show,&.server-show{
				transform:rotateY(0deg);
				opacity:1;
				z-index:100;
				visibility:visible;
			}
			.addEmailContent{
				border:1px solid rgba(255,255,255,0.2);
				margin:15px;

			}
			.active{
				display:none;
			}

		}
	}
</style>