//your JS code here. If required.

let statusEle = document.getElementById('status');
let enterBtnEle = document.getElementById('enterBtn');

enterBtnEle.addEventListener('click',enteredMetaverse);

function enteredMetaverse(){
	statusEle.innerHTML = "<h1>Entered Metaverse</h1>";
	
}