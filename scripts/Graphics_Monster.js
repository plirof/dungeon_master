function updateMonster(){
	clear_monster();
	var frntx;
	var frnty;
	var leftx;
	var lefty;
	var ritex;
	var ritey;
	
	switch(curDir) {
		case 0: frntx =  0; frnty = -1; leftx = -1; lefty =  0; ritex = +1; ritey =  0; break;
		case 1: frntx = +1; frnty =  0; leftx =  0; lefty = -1; ritex =  0; ritey = +1; break;
		case 2: frntx =  0; frnty = +1; leftx = +1; lefty =  0; ritex = -1; ritey =  0; break;
		case 3: frntx = -1; frnty =  0; leftx =  0; lefty = +1; ritex =  0; ritey = -1; break;
	}

	//front 1
	try {
		switch(curmap[curX + frntx][curY + frnty].type) {
			case 3:
				$('.monsterFront1_inner').css('background-image', 'url(\'' + curmap[curX + frntx][curY + frnty].monster.innerGraphic + '\')');
				disblock('.monsterFront1');
				disblock('.monsterFront1_inner');
				disblock('.monsterFront1_button');
				$('.monsterFront1_inner').css('height', curmap[curX + frntx][curY + frnty].monster.position + 'px');
				$('.monsterFront1_button').click(function() {
					curmap[curX + frntx][curY + frnty].monster.openclose(curX + frntx, curY + frnty);
				});
			break;
			default:
				hideblock('.monsterFront1');
				hideblock('.monsterFront1_inner');
				hideblock('.monsterFront1_button');
				clearevents('.monsterFront1_button');
		}
	}
	catch (err) {
	}

	//front 2
	try {
		switch(curmap[curX + frntx * 2][curY + frnty * 2].type) {
			case 3:
				$('.monsterFront2_inner').css('background-image', 'url(\'' + curmap[curX + frntx * 2][curY + frnty * 2].monster.innerGraphic2 + '\')');
				disblock('.monsterFront2');
				disblock('.monsterFront2_inner');
				$('.monsterFront2_inner').css('height', (curmap[curX + frntx * 2][curY + frnty * 2].monster.position * 0.67) + 'px');
			break;
			default:
				hideblock('.monsterFront2');
				hideblock('.monsterFront2_inner');
		}
	}
	catch (err) {
	}
    
	//right 1
	try {
		switch(curmap[curX + ritex + frntx][curY + ritey + frnty].type) {
			case 3:
				$('.monsterSide1_2_inner').css('background-image', 'url(\'' + curmap[curX + ritex + frntx][curY + ritey + frnty].monster.innerGraphic + '\')');
				disblock('.monsterSide1_2');
				disblock('.monsterSide1_2_inner');
				$('.monsterSide1_2_inner').css('height', curmap[curX + ritex + frntx][curY + ritey + frnty].monster.position + 'px');
			break;
			default:
				hideblock('.monsterSide1_2');
				hideblock('.monsterSide1_2_inner');
		}
	}
	catch (err) {
	}

	//right 2
	try {
		switch(curmap[curX + ritex + frntx * 2][curY + ritey + frnty * 2].type) {
			case 3:
				$('.monsterSide2_2_inner').css('background-image', 'url(\'' + curmap[curX + ritex + frntx * 2][curY + ritey + frnty * 2].monster.innerGraphic2 + '\')');
				disblock('.monsterSide2_2');
				disblock('.monsterSide2_2_inner');
				$('.monsterSide2_2_inner').css('height', (curmap[curX + ritex + frntx * 2][curY + ritey + frnty * 2].monster.position * 0.67) + 'px');
			break;
			default:
				hideblock('.monsterSide2_2');
				hideblock('.monsterSide2_2_inner');
		}
	}
	catch (err) {
	}
    
	//left 1
	try {
		switch(curmap[curX + leftx + frntx][curY + lefty + frnty].type) {
			case 3:
				$('.monsterSide1_1_inner').css('background-image', 'url(\'' + curmap[curX + leftx + frntx][curY + lefty + frnty].monster.innerGraphic + '\')');
				disblock('.monsterSide1_1');
				disblock('.monsterSide1_1_inner');
				$('.monsterSide1_1_inner').css('height', curmap[curX + leftx + frntx][curY + lefty + frnty].monster.position + 'px');
			break;
			default:
				hideblock('.monsterSide1_1');
				hideblock('.monsterSide1_1_inner');
		}
	}
	catch (err) {
	}

	//left 2
	try {
		switch(curmap[curX + leftx + frntx * 2][curY + lefty + frnty * 2].type) {
			case 3:
				$('.monsterSide2_1_inner').css('background-image', 'url(\'' + curmap[curX + leftx + frntx * 2][curY + lefty + frnty * 2].monster.innerGraphic2 + '\')');
				disblock('.monsterSide2_1');
				disblock('.monsterSide2_1_inner');
				$('.monsterSide2_1_inner').css('height', (curmap[curX + leftx + frntx * 2][curY + lefty + frnty * 2].monster.position * 0.67) + 'px');
			break;
			default:
				hideblock('.monsterSide2_1');
				hideblock('.monsterSide2_1_inner');
		}
	}
	catch (err) {
	}
}

function clear_monster(){
	$('div[class*=monster]').css('display', 'none');
	clearevents('.monsterFront1_button');
}