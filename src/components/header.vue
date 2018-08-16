<template>
    <div class="header">
		<nav class="navbar" role="navigation">
		<div class="container-fluid navbar-inner">
		</div>
		</nav>
		<div class="navbar-header">
				<a class="navbar-brand" href="#">SailCraft后台管理系统</a>
		</div>
	</div>
</template>

<script type="ecmascript-6">

</script>

<style rel="stylesheet" lang="scss">
	.header{
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 100;
		.navbar{
			border-radius: 0px;
			background:rgba(0,0,0,0.3);
		}
		.navbar-header{
			position:absolute;
			left:0;
			top:0;
			a{
				color:#fff;
			}
		}
	}
</style>