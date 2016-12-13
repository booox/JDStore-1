// JavaScript Document
//---详情页--商品列表切换-----
function datails_product_list_tabToggle(){
		var oUl=document.getElementById('tabList');
		var aLi=oUl.getElementsByTagName('li');
		var tabCont=document.getElementById('p_cont_item');
		var aDiv=tabCont.getElementsByTagName('div');
		var abigImg=document.getElementsByClassName('bigImg');
		
		for(var k=0;k<aLi.length;k++){
			//发牌照
			aLi[k].index=k;
			//点击每一个tab 选项 绑定事件进行点击
			aLi[k].onmouseover=function(){
				//清掉所有ac 以及所有样式
				for(var n=0;n<aLi.length;n++){
					aLi[n].className=' ';
					aDiv[n].style.display='none';
					abigImg[n].style.display='none';	
				};
				//this上加ac
				this.className='li_border';
				aDiv[this.index].style.display='block';	
				abigImg[this.index].style.display='block';	
				
			};
		};	
			
	
}
//------详情页商品列表放大镜区域------------
function zoom(){
		var oDiv1=document.getElementById('p_cont_item');
	var oDiv2=document.getElementById('p_cont_item_zoom');
	var abigImg=document.getElementsByClassName('bigImg');
	var aInput=document.getElementsByTagName('input');
	var oSpan=oDiv1.getElementsByTagName('span')[0];
	
	
	oDiv1.onmousemove=function(ev){
		oSpan.style.display=oDiv2.style.display='block';
		
		var oEv=ev||event;
		
		//获取滚动条  chrome不识别 documentElement.scrollTop
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		
		//鼠标在span的中心位置
		var l=oEv.clientX-oDiv1.offsetLeft-oSpan.offsetWidth/2; 
		var t=oEv.clientY+scrollTop-oDiv1.offsetTop-oSpan.offsetHeight/2;
		
		
		//限制范围 
		if(l<0)l=0;
		if(l>=oDiv1.offsetWidth-oSpan.offsetWidth){
			l=oDiv1.offsetWidth-oSpan.offsetWidth;
		}

		if(t<0)t=0;
		if(t>=oDiv1.offsetHeight-oSpan.offsetHeight){
			t=oDiv1.offsetHeight-oSpan.offsetHeight;
		}
		oSpan.style.left=l+'px';
		oSpan.style.top=t+'px';	
		
		
		var l_rate=l / (oDiv1.offsetWidth-oSpan.offsetWidth);
		var t_rate=t / (oDiv1.offsetHeight-oSpan.offsetHeight);
		
		for(var i=0;i<abigImg.length;i++){
			abigImg[i].style.left= (oDiv2.offsetWidth-abigImg[i].offsetWidth)*l_rate +'px'; //外box 减 内部大图片，为负值
			abigImg[i].style.top= (oDiv2.offsetHeight-abigImg[i].offsetHeight)*t_rate +'px';
		}
		
	};
	
	oDiv1.onmouseout=function(){
		oSpan.style.display=oDiv2.style.display='none';	
	};
		
};
//----详情页配送范围选择------
function details_deliver(){
	var address_wrap=document.getElementById('addressWrap');
	var customer_address=document.getElementById('myAddress');
	var customer_deliver=document.getElementById('myDeliver')
	var my_no_watch_bar=document.getElementById('noWatchBar');
	var address_list=customer_deliver.getElementsByTagName('ul')[0];
			//鼠标移入
			address_wrap.onmouseover=function(){
					address_list.style.display='block';                    
					my_no_watch_bar.className='no_watch_bar';
			};
			//鼠标移出
			address_wrap.onmouseout=function(){
					address_list.style.display='none';
					my_no_watch_bar.className='';
			};
};
//---点击切换右下方小三角-----
function show_sanjiao(){
	var all_size=document.getElementById('allSize');
	var aLi=all_size.getElementsByTagName('li');
	var aSpan=all_size.getElementsByTagName('span');
	
	//for循环
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;//发牌照
		aLi[i].onmousedown=function(){
			for(var j=0;j<aLi.length;j++){
				aSpan[j].style.display='none';
			};	
			aSpan[this.index].style.display='block';
		};	
	};
};
//---点击按钮增加增加购物车数量---
function addSumToCart(){
	var my_text=document.getElementById('myText');
	var my_plus=document.getElementById('plus');
	var my_min=document.getElementById('min');
	
	//--设置初始值
	var n=1;
	my_plus.onclick=function(){
		n++;
		my_min.className='none';
		my_text.innerHTML=n;	
		
	};
	my_min.onclick=function(){
		n--;
	    my_text.innerHTML=n;
		if(n<=1){
			my_text.innerHTML=1;
			my_min.className='min_bg';
			n=1;//拨一下指针重新到
		};
     };	
};
window.onload=function(){
	datails_product_list_tabToggle();
	zoom();
	details_deliver();
	show_sanjiao();
	addSumToCart();
		
};