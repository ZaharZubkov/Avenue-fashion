let counter = document.querySelector('.product-description-select-list-counter__input');
let counterValue = 1;
counter.setAttribute('value', counterValue);
document.querySelector('.product-description-select-list-counter__plus').onclick = function () {
	if (counterValue < 10) {
		counter.setAttribute('value', counterValue+=1);
	}
	else {
		counter.setAttribute('value', counterValue);
	}
}
document.querySelector('.product-description-select-list-counter__minus').onclick = function () {
	if (counterValue > 1) {
		counter.setAttribute('value', counterValue-=1);
	}
	else {
		counter.setAttribute('value', counterValue);
	}
}
new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});
