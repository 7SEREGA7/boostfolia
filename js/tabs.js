let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');
let tab4 = document.getElementById('tab4');
let tab5 = document.getElementById('tab5');

let tabContent1 = document.getElementById('tabContent1');
let tabContent2 = document.getElementById('tabContent2');
let tabContent3 = document.getElementById('tabContent3');
let tabContent4 = document.getElementById('tabContent4');
let tabContent5 = document.getElementById('tabContent5');


tab1.onclick = function() {
	tabContent1.classList.remove("hide");
	tabContent2.classList.add('hide');
	tabContent3.classList.add('hide');
	tabContent4.classList.add('hide');
	tabContent5.classList.add('hide');
}
tab2.onclick = function() {
	tabContent1.classList.add("hide");
	tabContent2.classList.remove('hide');
	tabContent3.classList.add('hide');
	tabContent4.classList.add('hide');
	tabContent5.classList.add('hide');
}
tab3.onclick = function() {
	tabContent1.classList.add("hide");
	tabContent2.classList.add('hide');
	tabContent3.classList.remove('hide');
	tabContent4.classList.add('hide');
	tabContent5.classList.add('hide');
}
tab4.onclick = function() {
	tabContent1.classList.add("hide");
	tabContent2.classList.add('hide');
	tabContent3.classList.add('hide');
	tabContent4.classList.remove('hide');
	tabContent5.classList.add('hide');
}
tab5.onclick = function() {
	tabContent1.classList.add("hide");
	tabContent2.classList.add('hide');
	tabContent3.classList.add('hide');
	tabContent4.classList.add('hide');
	tabContent5.classList.remove('hide');
}