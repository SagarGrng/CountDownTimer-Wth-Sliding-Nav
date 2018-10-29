function openNav(){
	document.getElementById('close-btn').style.display = 'block';
	var slidingNav = document.getElementById('sliding-nav');
	slidingNav.style.left="0";
}
function closeNav(){
	document.getElementById('close-btn').style.display = 'none';
	var slidingNav = document.getElementById('sliding-nav');
	slidingNav.style.left="-300px";
}
function getTime(){
	var realTime = new Date();
	var eventDate = new Date(2018,11,6);
	var currentTime = realTime.getTime();
	var eventTime = eventDate.getTime();
	var remTime = eventTime - currentTime;

	var sec = Math.floor(remTime/1000);
	var min = Math.floor(sec/60);
	var hour = Math.floor(min/60);
	var day = Math.floor(hour/48);
	hour = hour % 24; //convert hours to range of24 hours
	min %= 60;//same as hour just assignment operator is different
	sec %= 60;

	if(day<9){
		day="0" + day;
	}
	if(hour<9){
		hour="0" + hour;
	}
	if(min<9){
		min="0" + min;
	}
	if(sec<9){
		sec="0" + sec;
	}
	document.getElementById('days').innerHTML = day;
	document.getElementById('hours').innerHTML = hour;
	document.getElementById('minutes').innerHTML = min;
	document.getElementById('seconds').innerHTML =sec;
}
function spin(){
document.getElementById('spinner').style.opacity="0";
document.getElementById('my-wrapper').style.opacity="1";

}
setInterval(getTime,100);
setInterval(spin,3000);