<template>
    <div class="box">
    	<div class="title">
			公告配置
			<a href="javascript:void(0)" class="account" @click="noticeshow" v-if="showList">
				<i class="iconfont icon-jiahao"></i>
				<span>添加公告</span>
			</a>
		</div>
		<div class="account-main" >
			<div class="table-responsive user-table noticebox" :class="{'notice-show':noticeShow}">
				<div class="account-list">
					邮件列表
				</div>
				<table class="table">
					<tbody>
						<tr>
							<!-- <th v-for="item in emailList.title">{{item.cont}}</th> -->
							<th>序号</th>								
							<th>平台</th>
							<th>渠道</th>
							<th>标题</th>
							<th>标签</th>
							<th>语种</th>
							<th>状态</th>
							<th>生效日期</th>
							<th>失效日期</th>
							<th>添加时间</th>
							<th>添加人</th>
							<th>操作</th>
						</tr>
						<tr>
							<!-- <td>139</td>
							<td>all_platform</td>
							<td title="all">all</td>
							<td title="测试全平台公告2">测试全平台公告2</td>
							<td>notice</td>
							<td title="en">en</td>
							<td>无效
							</td>
							<td title="2017-10-12 15:13:29">10-12 15:13:29</td>
							<td title="2017-10-12 15:24:33">10-12 15:24:33</td>
							<td title="2017-10-12 15:18:18">10-12 15:18:18</td>
							<td>管理员</td>
							<td>
								<a href="javascript:void(0)" @click="noticeshow">详情</a> |
								<a href="javascript:void(0)">删除</a>
							</td> -->
						</tr>
					</tbody>
				</table>
				<div style="width: 100%;height: 200px;text-align: center; line-height: 200px; font-size: 25px; background:rgba(0, 0, 0, 0.3);" rowspan="12">暂无公告</div>
			</div>
			<div class="addEmail user-table noticemain" :class="{'notice-main':noticemainShow}">
				<div class="account-list">
					新增公告
				</div>
				<div class="send-content">
					<form class="form-inline plant send-form" v-for="(item,index) in plant">
					    <label>{{item.title}}：</label>
					    <select name=""  class="form-control form-input" required="required" v-model="item.selected" @change="handlue(index)">
					    	<option v-for="x in item.select" :value="x.name">{{x.title}}</option>
					    </select>
					</form>
					<form class="form-inline plant send-form">
						<button type="button" class="btn form-input add-language" @click="addServies">+ 新增</button>
					</form>
					<div class="clearit"></div>
					<form class="form-inline plant send-form">
						<label>发送时间：</label>
						<!-- <span style="color:#FF9933; margin:0 10px;">{{startTime}}</span> -->
						<input type="text" class="form-control input-text" id="departure" />
						<span style="color:#FF9933; margin:0 10px;" v-show="this.info.departure">*请输入发送时间</span>
					</form>
					<form class="form-inline plant send-form">
						<label>失效时间：</label>
						<!-- <span style="color:#FF9933; margin:0 10px;">{{endTime}}</span> -->
						<input type="text" class="form-control input-text" id="failure" />
						<span style="color:#FF9933; margin:0 10px;" v-show="this.info.failure">*请输入失效时间</span>
					</form>
					<div class="clearit"></div>
					<form class="form-inline send-form plant">
					    <label>类型：</label>
					    <select  class="form-control form-input" required="required" v-model="announcementType" @change="selectType">
					    	<option value="inform">通知公告</option>
					    	<option value="activity">活动公告</option>
					    </select>
					</form>
					<form class="form-inline send-form plant" v-show="activity">
					    <label>跳转到活动界面：</label>
					    <select name=""  class="form-control form-input" required="required">
					    	<option value="android">breakout</option>
					    </select>
					</form>
					<div class="clearit"></div>
					<div class="addEmailContent" v-for="(item,index) in emailContent">
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
							<button type="button" class="btn form-input delete-language" @click="deleteContent(index)" v-show="index!=0">删除</button>
						</form>
						<div class="clearit"></div>
						<form class="form-group send-form">
							<label>内容</label>
							<span style="color:#FF9933; margin:0 10px;" v-show="item.cs">*请输入内容</span>
							<textarea class="form-control input-text" v-model="item.content"></textarea>
						</form>
						<form class="form-group send-form" v-show="!activity">
							<label>跳转链接</label>
							<input type="text" class="form-control input-text"  v-model="item.hyperlinks">
						</form>
					</div>
					
					<div class="send-form send-btn">
						<button type="button" class="btn btn-success" @click="sendNotice">发送</button>
						<button type="button" class="btn btn-warning" @click="cancelNotice">取消</button>
					</div>
				</div>
			</div>

			<div class="user-table addMain" :class="{'add-servies':serviesShow}">
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
    			noticeShow:true,
    			showList:true,
    			serviesShow:false,
    			langShow:false,
    			noticemainShow:false,
    			emailList:{	
    				title:[
    					{cont:'序号'},
						{cont:'平台'},
						{cont:'渠道'},
						{cont:'标题'},
						{cont:'标签'},
						{cont:'语种'},
						{cont:'状态'},
						{cont:'生效日期'},
						{cont:'失效日期'},
						{cont:'添加时间'},
						{cont:'添加人'},
						{cont:'操作'}
    				]

				},
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
				//serverNum:'',
				serverNum:'',
				serverArr:[],
    			announcementType:'inform',
    			activity:false,
				serverShow:false,

				noticeType:0,  //0是通知公告 1是活动公告
				AllServer:true,//是否为全部服务器
				channelId:"allChannel",
				platform:"allPlatform",
				isJumpMode:0,
				mode:"breakout",
				links:0,
				
    			info:{
    				departure:false,
    				failure:false,
    				uid:false,
    				title:false,
    				language:false,
    				content:false
    			},
				infoLength:[],
				startTime:'',
				endTime:''
    		}
		},
		mounted(){
			//console.log(this.announcementType);
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
			
			let UTC=this;
			laydate.render({ 
				elem: '#departure',
				type: 'datetime',
				calendar: true,//是否显示公历节日
				done: function(value){
					UTC.startTime=format(formatTime(value));
					console.log(UTC.startTime);
				},
			});
			laydate.render({ 
				elem: '#failure',
				type: 'datetime',
				calendar: true,//是否显示公历节日
				done: function(value){
					UTC.endTime=format(formatTime(value));
					console.log(UTC.endTime);
				},
			});
		},
    	methods:{
    		noticeshow(){
    			this.noticeShow=false;
    			this.noticemainShow=true;
				this.showList=false;
			},
			
    		sendNotice(){
				var hyperlinks={};
    			var title={};
    			var content={};
				var languageArr=[];
				this.infoLength=[];
				for(var x of this.emailContent){
    				if(x.hyperlinks){
    					this.links=1;
    					hyperlinks[x.name]=x.hyperlinks;
					};
					if(x.title.length==0){
						x.ts=true;
						this.infoLength.push(x.ts);
    				}else{
						x.ts=false;
					};
    				if(x.content.length==0){
    					x.cs=true;
						this.infoLength.push(x.cs);
    				}else{
						x.ts=false;
					};
    				title[x.name]=x.title;
    				content[x.name]=x.content;
					// 是否有重复语言选择
    				languageArr.push(x.name);
				}
				// 时间判定
				var departure=document.getElementById('departure').value;
				var failure=document.getElementById('failure').value;
				if(departure.length==0 && this.allServer==false){
    				this.info.departure=true;
    			}else{
    				this.info.departure=false;
    			}
				this.infoLength.push(this.info.departure);
				
    			if(failure.length==0 && this.allServer==false){
    				this.info.failure=true;
					this.infoLength.push(this.info.failure);
				}else{
					this.info.failure=false;
				};
				this.startTime=format(formatTime(departure),2);
				this.endTime=format(formatTime(failure),2);
    			if(this.arrRepeat(languageArr)){
    				alert('语言重复，请重新选择！');
    				return;
				};
				
				for(var x of this.infoLength){
					if(x){
						return;
					}
				};
				var undata={
					"op":"ptne",
					"type":"notice",
					"notice_type":this.noticeType,  //0是通知公告 1是活动公告
					"is_all_server":this.AllServer,//是否为全部服务器
					"server_ids":this.serverArr,//各个服务器（数组）
					"channel_id":this.channelId,
					"platform":this.platform,
					"title":title,
					"content":content,
					"is_jump_mode":this.isJumpMode,
					"mode":this.mode,//活动
					"is_have_hyperlinks":this.links,
					"start_time":formatTime(departure),
    				"end_time":formatTime(failure),
					"hyperlinks":hyperlinks
				}
				this.$http.post(serviceHOST("mail"), undata)
				.then((response)=> {
					//alert(response.data.ret)
					if(response.data.ret=="0"){
						alert('发送成功');
						this.noticeShow=true;
						this.noticemainShow=false;
						this.showList=true;
					}else{
						alert('网络错误');
					};
				})
				.catch(function (error) {
					alert('网络错误');
				});
			},
			
    		cancelNotice(){
    			this.noticeShow=true;
    			this.noticemainShow=false;
				this.showList=true;
				location.reload();
			},
			
    		selectType(){//0是通知公告 1是活动公告
    			if(this.announcementType=='activity'){
					this.noticeType=1;
    				this.activity=true;
    			}else if(this.announcementType=='inform'){
					this.noticeType=0;
    				this.activity=false;
    			}
			},
			
    		addServies(){
    			this.noticemainShow=false;
    			this.serviesShow=true;
			},
			
    		sendaddServies(){
    			this.serviesShow=false;
    			this.noticeShow=false;
    			this.noticemainShow=true;
    			if(this.serverArr.length>0){
    				this.plant[2].selected='otherServer';
    			}
			},

    		canceladdServies(){
    			this.serviesShow=false;
    			this.noticeShow=false;
    			this.noticemainShow=true;
    			this.serverArr=[];
			},
			
			// 选择服务器
    		handlue(index){
    			if(this.plant[index].selected=="allServer"){
    				this.allServer=true;
    			}else{
    				this.allServer=false;
    			}
    			if(index==0){
    				this.platform=this.plant[0].selected;
    			}
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
				};

				//alert(this.emailContent.length+"-"+content.language.length)
				if(this.emailContent.length<=content.language.length){
					this.emailContent.push(content);
				}else{
					alert("添加的板块数量已超出语言的数量");
				};
			},

			deleteContent(index){
				this.emailContent.splice(index,1);
			},

    		chooseLanguage(index){
    			console.log(this.emailContent[index].name);
    			
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
    	}
    }
</script>

<style rel="stylesheet" lang="scss">
@import "../assets/css/main.scss";
@import "../assets/css/style.scss";
    .account-main{
    	.noticebox{
    		transform:scale(0,0);
    		transition:all 0.5s;
    		&.notice-show{
				transform:scale(1,1);
    		}
    	}
    	.noticemain{
    		transform:scale(0,0);
    		transition:all 0.5s;
    		&.notice-main{
				transform:scale(1,1);
    		}
    	}
    	.addMain{
    		transform:scale(0,0);
    		transition:all 0.5s;
    		&.add-servies{
				transform:scale(1,1);
    		}
    	}
    	.addLang{
    		transform:scale(0,0);
    		transition:all 0.5s;
    		&.add-lang{
				transform:scale(1,1);
    		}
    	}
		.addEmailContent{
			border:1px solid rgba(255,255,255,0.2);
			margin:15px;
		}
    }
</style>