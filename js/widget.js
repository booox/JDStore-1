// JavaScript Document


var hxsd_widget={
	//选项卡
"myTab":function (id,auto){
	//点击li 切换ac
	var tab=document.getElementById(id);
	var tabList=tab.getElementsByTagName('ul')[0];
	var aLi=tabList.getElementsByTagName('li');
	var aTabItem=tab.getElementsByClassName('tabItem');
	
	var n=0;//自动运行用的计数器
	
	var timer;  //定时器对象
	
	function changeTab(){//切换标签
		for(var j=0; j<aLi.length; j++){
			aLi[j].className='';
			aTabItem[j].style.display='none';
		};
		//指定n显示
		aLi[n].className='ac';
		aTabItem[n].style.display='block';
	};
	
	
	
	//点击切换---------------------------------------
	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;//发牌照
		
		aLi[i].onclick=function(){
			
			n=this.index;//调整计数器
			//所有的li去掉ac
			
			changeTab();
			
			/*for(var j=0; j<aLi.length; j++){
				aLi[j].className='';
				aTabItem[j].style.display='none';
			};
			//this加上ac
			
			this.className='ac';
			aTabItem[this.index].style.display='block';*/
		};
	};
	
	if(auto){
		//自动切换---------------------------------
		function autoRun(){
			timer=setInterval(function(){
				//计数器自动累加
				n++;
				//当n>aLi.length n=0
				if(n==aLi.length){
					n=0;
				};
				changeTab();
			},1000);
		};
		
		autoRun();
		
		//鼠标进入tab，暂定自动运行-------------------------
		tab.onmouseover=function(){
			clearInterval(timer);
		};
		
		//鼠标离开tab，重新开始自动运行-------------------------
		tab.onmouseout=function(){
			//重新启动定时器
			autoRun();
		}
	};
},


//幻灯片
"slide":function (id,showNum){
	var oDiv=document.getElementById(id);
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.children;
	
	var pBtn=oDiv.children[0];
	var nBtn=oDiv.children[1];
	
	var iNow=0;
	
	//图片宽度
	var li_w=hxsd_tools.getStyle(aLi[0],"width");
	
	//设置ul宽度
	oUl.style.width=li_w*aLi.length+'px';
	
	//页面内插入按钮-------------------------------------
	var ol=document.createElement('ol');
	for(var i=0; i<aLi.length; i++){
		ol.innerHTML+='<li>'+ (showNum ? i+1 :"")+'</li>';
	};
	oDiv.appendChild(ol);
	
	var aBtn=ol.children;
	aBtn[0].className="ac";
	
	//切换按钮--------------------------------------------
	function change(n){
		//改变按钮
		for(var k=0; k<aBtn.length; k++){
			aBtn[k].className='';
		};
		aBtn[n].className="ac";
		
		//移动ul
		hxsd_tools.move(oUl,{"left":-li_w*iNow});
	};
	
	
	for(var i=0; i<aBtn.length; i++){
		aBtn[i].index=i;
		aBtn[i].onclick=function(){
			iNow=this.index;
			change(iNow);
		};
	};
	
	//左右切换-----------------------------------------	
	pBtn.onclick=function(){
		iNow--;
		if(iNow<0){
			iNow=0;
		};
		change(iNow);
	};
	
	nBtn.onclick=function(){
		iNow++;
		if(iNow>=aLi.length-1){
			iNow=aLi.length-1
		};
		change(iNow);
	};
	
	//自动运行-----------------------------------------
	function autorun(){
		oDiv.timer=setInterval(function(){
			iNow++;
			if(iNow==aLi.length){
				iNow=0
			};
			change(iNow);
		},1000);
	};
	
	autorun();
	
	oDiv.onmouseover=function(){
		clearInterval(oDiv.timer);
	};
	
	oDiv.onmouseout=function(){
		autorun();
	};
}


};










