<template>
	<div class="aside"  onsubmit="return false;" v-if="isAccount">
		<ul class="aside-list">
			<li v-for="(x,index) in dataset">
				<a href="javascript:void(0)" class="title" @click="showList(index)">
					<i class="iconfont  icon-before" :class="x.icon"></i>
						{{x.title}}
					<i class="iconfont icon-jiantou icon-after" :class="{'icon-move':x.listShow}"></i>
				</a>
				<ul class="listNum" :class="{'icon-move':x.listShow}">
					<router-link tag="li" v-for="(item,index) in x.child" :to="item.link" :key="index">
						<a href="javascript:void(0)" class="title-list">
								<i class="iconfont icon-jiantou icon-after"></i>
								{{item.title}}
						</a>
					</router-link>
				</ul>
			</li>
        </ul>
	</div>
</template>

<script type="ecmascript-6">
    export default{
    	name:'asideLeft',
    	data(){
    		return{
    			dataset:[
	    			{
	    				id:0,
			        	title:'用户管理',
			        	icon:'icon-yonghu',
			        	child:[{title:'账号列表',link:'/user'}],
			        	listShow:false
			        },
			        {
			        	id:1,
			        	title:'系统管理',
			        	icon:'icon-xitong',
			        	child:[
			        		{title:'停服开服',link:'/withDrawal'},
			                {title:'白名单',link:'/whiteList'}
			                ],
			            listShow:false
			        },
					{
						id:2,
						title:'活动管理',
						icon:'icon-huodong',
						child:[
							{title:'发送邮件 | 道具',link:'/openService'},
							{title:'公告配置',link:'/notice'},
							{title:'玩家退单',link:'/chargeback'},
							{title:'礼包查询',link:'/gift'}
						],
						listShow:false
					},
			         // {
			         // 	title:'充值数据',
			         // 	icon:'icon-chongzhi',
			         // 	child:[
			         //         {title:'白名单',link:'/warship'}
			         //     ],
			         //     listShow:false
			         // },
					{
						id:3,
						title:'数据报表',
						icon:'icon-icon-p_mrpbaobiao',
						child:[
							{title:'钻石消耗存留',link:'/diamond'}
						],
						listShow:false
					},
					{
						id:4,
						title:'玩家管理',
						icon:'icon-zixunguanlizixunfuwuguanli',
						child:[
							{title:'玩家信息',link:'/player'},
							{title:'玩家钻石变化',link:'/diamondChange'},
							{title:'封停 | 解封',link:'/ban'},
						],
						listShow:false
					},
                ],
				isAccount:true,
    		}
		},
		
    	mounted(){
    		var pathname=this.$route.path;
			if(pathname=='/login'){
                this.isAccount=false;
            }else{
				 this.isAccount=true;
				for(var x of this.dataset){
					for(var item of x.child){
						if(pathname==item.link){
							this.dataset[x.id].listShow=true;
						}
					}
				}
			}
		},
		
    	methods:{
    		showList(index){
    			for(var x of this.dataset){
    				x.listShow=false;
    			}
    			this.dataset[index].listShow=!this.dataset[index].listShow;
    		}
    	}
    }
</script>

<style rel="stylesheet" lang="scss">
	.aside{
		width: 200px;
		position: fixed;
		top: 52px;
		bottom: 0px;
		left: 0px;
		.aside-list{
			overflow:hidden;
			>li{
				border-bottom:1px solid rgba(255,255,255,0.3);
			}
			.title{
				transition: background 0.3s,color 0.3s;
				-webkit-transition: background 0.3s,color 0.3s;
				color: #fff;
				display:block;
				padding:0 20px;
				height:48px;
				line-height:48px;
				font-size: 14px;
				color: #fff;
				.icon-after{
					float: right;
					font-size: 12px;
					transition: transform 0.5s;
					-webkit-transition: transform 0.5s;
					color: #fff;
					transform: rotate(0deg);
					transition:all 0.3s;
				}
				.icon-move{
					transform: rotate(90deg);
				}
				.icon-before{
					float: left;
					font-size: 16px;
					color: #fff;
					margin-right: 15px;
					color: #fff;

				}
			}
			.listNum{
				height:0;
				max-height:0;
				overflow:hidden;
				transition:all 1s;
				&.icon-move{
					height:auto;
					max-height:300px;
				}
				li{
					&.list-active{
						background:rgba(0,0,0,0.3);
					}
					height: 48px;
					line-height: 48px;
					.icon-after{
						float: left;
						margin-right: 15px;
						color: #fff;
						font-size:12px;
					}
					>a{
						display:block;
						width:100%;
						padding:0px 0px 0px 50px;
						font-size:12px;
						color:#fff;
					}
					&:hover{
						cursor:pointer;
						background: rgba(0,0,0,0.3);
					}
					&:hover{
						a,.icon-after{
							color:#fff;
						}
					}
					&.list-active{
						.icon-after,a{
							color: #fff;
						}
					}
					.listNum{
						a{
							display: block;
							width: 100%;
						}
					}
					.active{
						color: #fff;
					}
				}
			}
		}
	}
</style>