let images = ['card0','card1','card2','card3','card4','card5','card6','card7','card8','card9','card0','card1','card2','card3','card4','card5','card6','card7','card8','card9','card3','card4','card3','card4'];
document.getElementById('right-audio').volume = 0.1;
document.getElementById('wrong-audio').volume = 0.1;
document.getElementById('victory-audio').volume = 0.1;
let i, j, subCard, curent = null, subCurent, score = 0, width, timeS, timeM, second, minute, clear, timeLose;
// Khai báo hàm trộn bài
let shuffle = function(array) {

	for (i=0; i<array.length; i++) {
		j = Math.ceil(Math.random() * (array.length -1 - i) + i);
		subCard = array[i];
		array[i] = array[j];
		array[j] = subCard;
	}
	return array;
}
// Kết thúc hàm trộn bài

	// Khai báo hàm lật và so sánh card
function compare(card) {
	$(card).children('.back').toggleClass('flip');
	$(card).children('.front').toggleClass('faceDown');
	$(card).css('pointer-events', 'none');
	if (curent == null) {
		curent = `#${$(card).attr('id')}`;
	} else {
		$('.card').css('pointer-events', 'none');
		subCurent = curent;
		curent = null;
		setTimeout(function() {
				$('.card').css('pointer-events', 'auto');
			},1000);
		if ($(subCurent).children('.back').html() == $(card).children('.back').html()) {
			$(card).css('visibility', 'hidden');
			$(subCurent).css('visibility', 'hidden');
			document.getElementById('right-audio').play();
			score++;
		} else {
			setTimeout(function() {
				$(card).children('.back').toggleClass('flip');
				$(card).children('.front').toggleClass('faceDown');
				$(subCurent).children('.back').toggleClass('flip');
				$(subCurent).children('.front').toggleClass('faceDown');
			},1000);
			document.getElementById('wrong-audio').play();
		}
	}
		
}
	// end hàm so sánh

	// Khởi tạo hàm chạy ProgressBar
function move() {
	width = 100 - 100 * score/12;
	$('#myBar').css('width', width + '%');
}
	// end hàm progressBar

	// Khởi tạo hàm chạy clock
function clock() {
	timeS = 0, timeM = 1;
	$('#minute').html('01');
	$('#second').html('00');
	minute = setInterval(function(){
		timeM = 0;
    	$('#minute').html('0'+timeM);
    	clearInterval(minute);
	}, 1000);
	second = setInterval(function(){
		if (timeS > 0) {
			timeS--;
		} else {
			timeS = 59;
		}
		if (timeS <10) {
			$('#second').html('0'+timeS);
		} else {
    		$('#second').html(timeS);
    	}
    	
	}, 1000);
	clear = setTimeout(function(){
		clearInterval(second);
	},61000);
}

// Khởi tạo hàm khi thua cuộc
function lose() {
	timeLose = setTimeout(function(){
		if (score < 12) {
			$('.modal-content h2').html('BẠN ĐÃ THUA CUỘC :(');
			$('#ok').css('display', 'block');
			$('#myModal').css('display', 'block');
			$('.wrap').css('display', 'none');
			$('.card').css('pointer-events', 'none');
			$('#ok').on('click', function() {
				$('#myModal').css('display', 'none');
				$('.wrap').css('display', 'flex');
				$('#ok').css('display', 'none');
			});
		}

	},61000);
}

$(document).ready(function() {
		// Hiện popup bắt đầu game
	$('.modal-content h2').html('BẠN ĐÃ SẴN SÀNG THỬ THÁCH?');
	$('#myModal').css('display', 'block');
	$('.wrap').css('display', 'none');
	$('#start').css('display', 'block');
	$('#start').on('click', function() {
		$('#myModal').css('display', 'none');
		$('.wrap').css('display', 'flex');
		$('#start').css('display', 'none');
		// trộn bài:
		shuffle(images);
		for (i=0; i<24; i++) {
			$($('.back img')[i]).removeAttr('src');
			$($('.back img')[i]).attr('src', `img/${images[i]}.jpg`);
		}
		// end trộn bài

		// Khởi tạo show bài ban đầu
		$('.card').css('pointer-events', 'none');
	
		setTimeout(function() {
			$('.back').toggleClass('flip');
			$('.front').toggleClass('faceDown');
		}, 1000);
		setTimeout(function() {
			$('.back').removeClass('flip');
			$('.front').removeClass('faceDown');
			clearInterval(minute);
			clearInterval(second);
			clearTimeout(clear);
		}, 3000);
		setTimeout(function() {
			$('.card').css('pointer-events', 'auto');
			lose();
			clock();
		},3500);
		// end hiệu ứng show card
		
		
		
	});
	$('.card').on('click', function() {
		compare(this);
		move();
		if (score == 12) {
			clearInterval(minute);
			clearInterval(second);
			clearTimeout(timeLose);
			document.getElementById('victory-audio').play();
			$('.modal-content h2').html('VICTORY');
			$('#ok').css('display', 'block');
			$('#myModal').css('display', 'block');
			$('.wrap').css('display', 'none');
			$('#ok').on('click', function() {
				$('#myModal').css('display', 'none');
				$('.wrap').css('display', 'flex');
				$('#ok').css('display', 'none');
			});
		}
	});
	$('#reload').on('click', function() {
		$('.modal-content h2').html('BẠN ĐÃ SẴN SÀNG THỬ THÁCH?');
		$('#myModal').css('display', 'block');
		$('.wrap').css('display', 'none');
		$('#start').css('display', 'block');
		$('.card').removeAttr('style');
		clearTimeout(timeLose);
		clearInterval(minute);
		clearInterval(second);
		clearTimeout(clear);
		$('.back').removeClass('flip');
		$('.front').removeClass('faceDown');
		score = 0;
		curent = null;
		move();
	});
	
});
