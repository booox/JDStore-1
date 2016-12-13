//-------------送达北京（全国地区）----------------
function deliver(){
	 var myCity=document.getElementsByClassName('dropdown');
		var destination=document.getElementsByClassName('destination')[0];
		var shelter=document.getElementById('shelterId')
		var arrow=document.getElementById('arrowId')
		for(var i=0;i<myCity.length;i++){
			//鼠标移入
			myCity[i].onmouseover=function(){
				var thisSubMenu=this.getElementsByTagName('ul')[0];
				if(thisSubMenu){
					thisSubMenu.style.display='block';
					thisSubMenu.className='dropdown_layer layer_border_color';
					destination.className='destination bg destination_border_color';
					shelter.className='shelter';
					arrow.className='arrow';
				}
			};
			//鼠标移出
			myCity[i].onmouseout=function(){
				var thisSubMenu=this.getElementsByTagName('ul')[0];
				if(thisSubMenu){
					thisSubMenu.style.display='none';
					destination.className='destination';
					shelter.className='';
					arrow.className='';
				}
			};
		};
};
//-----------------关注京东----
function  focusOn(){
		var attention=document.getElementsByClassName('attention');
		var oLi =attention[0].getElementsByTagName('li')[0];
		var square=document.getElementById('square')
		for(var j=0;j<attention.length;j++){
			//鼠标移入
			attention[j].onmouseover=function(){
				var thisSubMenu=this.getElementsByTagName('div')[0];
				if(thisSubMenu){
					thisSubMenu.style.display='block';
					oLi.className='active_bg last bg li_border_color';
					thisSubMenu.className='qrcode qrcode_border_color';
					square.className='arrow';
				};
			};
			//鼠标移出
			attention[j].onmouseout=function(){
				var thisSubMenu=this.getElementsByTagName('div')[0];
				if(thisSubMenu){
					thisSubMenu.style.display='none';
					oLi.className='';
					square.className='';
				};
			};
		};
};

//-------------icon区域 tab 切换----------------
function tab_change(){
		var tabA=document.getElementById('tabA');
		var oUl=document.getElementById('tab_list');
		var aLi=oUl.getElementsByTagName('li');
		var tabCont=document.getElementById('tabContA');
		var aDiv=tabCont.getElementsByTagName('div');
		
		for(var k=0;k<aLi.length;k++){
			//发牌照
			aLi[k].index=k;
			//点击每一个tab 选项 绑定事件进行点击
			aLi[k].onmouseover=function(){
				//清掉所有ac 以及所有样式
				for(var n=0;n<aLi.length;n++){
					aLi[n].className=' ';
					aDiv[n].style.display='none';	
				};
				//this上加ac
				this.className='ac';
				aDiv[this.index].style.display='block';		
			};
		};
}
// ---------------------幻灯片开始-------------
function slideMove(){
		var oDiv=document.getElementById('slideBox');
	var aBtn=oDiv.getElementsByTagName('ol')[0].children;
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.children;
	
	var iNow=0;
	
	var pBtn=document.getElementById('prevBtn');
	var nBtn=document.getElementById('nextBtn');
	
	
	
	//图片宽度
	var li_w=hxsd_tools.getStyle(aLi[0],"width");
	
	//设置ul宽度
	oUl.style.width=li_w*aLi.length+'px';
	
	//切换按钮----
	for(var i=0; i<aBtn.length; i++){
		aBtn[i].index=i;
		aBtn[i].onclick=function(){
			for(var j=0; j<aBtn.length; j++){
				aBtn[j].className='';
			};
			this.className="slide_ac";
			
			iNow=this.index;
			
			//oUl移动
			hxsd_tools.move(oUl,{"left":-li_w*this.index});
		};
	};
	
	//左右切换----
	
	//切换按钮方法
	function changeBtn(n){
		for(var k=0; k<aBtn.length; k++){
			aBtn[k].className='';
		};
		aBtn[n].className="slide_ac";
	};
	

	pBtn.onclick=function(){
		iNow--;
		if(iNow<0){
			iNow=0;
		};
		//oUl移动
		hxsd_tools.move(oUl,{"left":-li_w*iNow});
		
		//改变按钮
		changeBtn(iNow);
	};
	
	nBtn.onclick=function(){
		iNow++;
		
		if(iNow>=aLi.length-1){
			iNow=aLi.length-1
		}
		//oUl移动
		hxsd_tools.move(oUl,{"left":-li_w*iNow});
		
		//改变按钮
		changeBtn(iNow);
	};
	
};
//----------popup弹出------------------
function myPop(){
	var oMenu=document.getElementById('myWrap');
	var aLi=oMenu.getElementsByTagName('li');
	var oMenuCont=document.getElementById('myPopup');
	var aDl=oMenuCont.getElementsByClassName('section');
	var leave_menu=null;//离开右侧 回到左侧
	
	//删除所有li上的ac
	function del_li_ac(){
		for(var i=0; i<aLi.length; i++){
			aLi[i].className="";
		};
	}
	
	
	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;//发牌照
		
		aLi[i].onmouseover=function(){
			clearTimeout(leave_menu);
			oMenuCont.style.display="block";
			del_li_ac();//删除所有li上的ac  
			this.className="popup_ac";//自己增加ac
			
			
			//显示相对应的内容(就是选项卡的原理)
			for(var i=0; i<aDl.length; i++){
				aDl[i].style.display="none";
			};
			aDl[this.index].style.display="block";
		};
		
		aLi[i].onmouseout=function(){
			clearTimeout(leave_menu);
			leave_menu=setTimeout(function(){
				oMenuCont.style.display="none";
				del_li_ac();//删除所有li上的ac  
			},100)
		};
	};
	
	oMenuCont.onmouseenter=function(ev){
		clearTimeout(leave_menu);
		this.style.display="block";
	};
	
	
	oMenuCont.onmouseleave=function(){
			del_li_ac();//删除所有li上的ac  
			this.style.display="none";
	};
	
};
//-----floorTab切换------------------------
	function floorTab(){
		var oUl=document.getElementById('myFloorTitle');
		var aLi=oUl.getElementsByTagName('li');
		var aCat=document.getElementsByClassName('myFloorCat');
		
		for(var k=0;k<aLi.length;k++){
			//发牌照
			aLi[k].index=k;
			//点击每一个tab 选项 绑定事件进行点击
			aLi[k].onmouseover=function(){
				//清掉所有ac 以及所有样式
				for(var n=0;n<aLi.length;n++){
					aLi[n].className=' ';
					aCat[n].style.display='none';	
				};
				//this上加ac
				this.className='myAc';
				aCat[this.index].style.display='block';		
			};
	 };
			
};
//----文档加载---------
window.onload=function(){
		deliver();
		focusOn();	
	    tab_change();
	    slideMove();	
        myPop();
		floorTab();
};