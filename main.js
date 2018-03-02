var dispDiv = document.getElementById('display'),
		st1 = document.getElementById('st1'),
		st2 = document.getElementById('st2'),
		imgSrc = null,
		stInput = document.getElementById('stickerUrl'),
		stSize = document.getElementById('stickerHeight'),
		stC = document.getElementById('cursor');

document.getElementById('bgcolor').addEventListener('change', function() {
	dispDiv.style.backgroundColor = this.value;
	
});

st1.addEventListener('click', function() {
	changeImage(this);
});

st2.addEventListener('click', function() {
	changeImage(this);
});

dispDiv.addEventListener('click', function(ev) {
	var newImg = document.createElement('img');
	newImg.src = imgSrc;
	newImg.className = 'displayStickers';
	dispDiv.appendChild(newImg);
	
	newImg.style.left = ev.pageX - (newImg.width / 2) + 'px';
	newImg.style.top = ev.pageY - (newImg.width / 2) + 'px';
	
});

stInput.addEventListener('keyup', function(ev) {
	if (ev.keyCode == 13) {
		var newSticker = document.createElement('img');
		newSticker.src = stInput.value;
		newSticker.className = 'stickers';
		document.getElementById('stickers').appendChild(newSticker);
		stInput.value = '';
		newSticker.addEventListener('click', function() {
			
			changeImage(this);
		});
	}
});

stSize.addEventListener('keyup', function(ev) {
	if (ev.keyCode == 13) {
		interactionElem = dispDiv.lastChild
		interactionElem.style.width = parseInt(stSize.value) + 'px';
		interactionElem.style.height = parseInt(stSize.value) + 'px';
	}
});

dispDiv.addEventListener('mousemove', function(ev) {
	stC.style.top = ev.pageY - (stC.width / 2) + 'px';
	stC.style.left = ev.pageX - (stC.width / 2) + 'px';
});

function changeImage(el) {
	imgSrc = el.src;
	stC.src = el.src;
}
