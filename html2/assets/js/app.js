'use strict';

/* ===== Enable Bootstrap Popover (on element  ====== */

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

/* ==== Enable Bootstrap Alert ====== */
var alertList = document.querySelectorAll('.alert')
alertList.forEach(function (alert) {
  new bootstrap.Alert(alert)
});


/* ===== Responsive Sidepanel ====== */
const sidePanelToggler = document.getElementById('sidepanel-toggler'); 
const sidePanel = document.getElementById('app-sidepanel');  
const sidePanelDrop = document.getElementById('sidepanel-drop'); 
const sidePanelClose = document.getElementById('sidepanel-close'); 

window.addEventListener('load', function(){
	responsiveSidePanel(); 
});

window.addEventListener('resize', function(){
	responsiveSidePanel(); 
});


function responsiveSidePanel() {
    let w = window.innerWidth;
	if(w >= 1200) {
	    // if larger 
	    //console.log('larger');
		sidePanel.classList.remove('sidepanel-hidden');
		sidePanel.classList.add('sidepanel-visible');
		
	} else {
	    // if smaller
	    //console.log('smaller');
	    sidePanel.classList.remove('sidepanel-visible');
		sidePanel.classList.add('sidepanel-hidden');
	}
};

sidePanelToggler.addEventListener('click', () => {
	if (sidePanel.classList.contains('sidepanel-visible')) {
		console.log('visible');
		sidePanel.classList.remove('sidepanel-visible');
		sidePanel.classList.add('sidepanel-hidden');
		
	} else {
		console.log('hidden');
		sidePanel.classList.remove('sidepanel-hidden');
		sidePanel.classList.add('sidepanel-visible');
	}
});



sidePanelClose.addEventListener('click', (e) => {
	e.preventDefault();
	sidePanelToggler.click();
});

sidePanelDrop.addEventListener('click', (e) => {
	sidePanelToggler.click();
});



/* ====== Mobile search ======= */
//搜索框，已被删除，此处js无效


// const searchMobileTrigger = document.querySelector('.search-mobile-trigger');
// const searchBox = document.querySelector('.app-search-box');

// searchMobileTrigger.addEventListener('click', () => {

// 	searchBox.classList.toggle('is-visible');
	
// 	let searchMobileTriggerIcon = document.querySelector('.search-mobile-trigger-icon');
	
// 	if(searchMobileTriggerIcon.classList.contains('fa-search')) {
// 		searchMobileTriggerIcon.classList.remove('fa-search');
// 		searchMobileTriggerIcon.classList.add('fa-times');
// 	} else {
// 		searchMobileTriggerIcon.classList.remove('fa-times');
// 		searchMobileTriggerIcon.classList.add('fa-search');
// 	}
	
		
	
// });



//导航栏，active类随点击变化
//1.获取元素
let lis=document.querySelectorAll('.app-nav .nav-item .nav-link')
// console.log(lis);
lis.forEach(link=>{
	link.addEventListener('click',function(e){
		e.preventDefault()
		document.querySelector('.active').classList.remove('active')
		this.classList.add('active')

		// let href=this.
		console.log(this.href)
		window.location.href=this.href
	})
})


//所有的a标签不调转
// const arr_a = document.getElementsByTagName('a');
// for (let i = 0; i < arr_a.length; i++) {
// 	// console.log(arr_a[i].href)

// 	arr_a[i].href="notifications.html"
// }

