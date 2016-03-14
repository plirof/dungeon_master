function monster(xnsew, xposition, xislocked, xref_useskey)

monster.prototype.openmonster = function(x,y)
{
	try {
		clearInterval(curmap[x][y].monster.monstertimer)
	} 
	catch (ex) {
		dbg(ex);
	}
	if (curmap[x][y].monster.position > 0) {
		curmap[x][y].monster.monstertimer = setInterval(function(){
			curmap[x][y].monster.position = curmap[x][y].monster.position - 30;
			updateMonster();
			if (curmap[x][y].monster.position - 30 < 0) {
			
				curmap[x][y].monster.position = 0;
				updateMonster();
				
				clearInterval(curmap[x][y].monster.monstertimer);
				curmap[x][y].monster.monstertimer = null;
			}
		}, 250)
	}
}
	
monster.prototype.closemonster = function(x,y)
{

	try {clearInterval(curmap[x][y].monster.monstertimer)}catch (ex){}
	if (curmap[x][y].monster.position != 166)
	{

		curmap[x][y].monster.monstertimer = setInterval(function()
		{
			curmap[x][y].monster.position = curmap[x][y].monster.position + 30;
			updateMonster();
			if (curmap[x][y].monster.position +30 > 166  )
			{
				
				curmap[x][y].monster.position = 166 ;
				updateMonster();
				clearInterval(curmap[x][y].monster.monstertimer);
				curmap[x][y].monster.monstertimer = null;
			}
			
			
			}, 250)
		
	}

		
}

monster.prototype.openclose = function (x,y)
{
	//PlaySound("sounds/Monster4.mp3");
	if (curmap[x][y].monster.position > 0)
	{
		curmap[x][y].monster.openmonster(x,y);
	}
	else {curmap[x][y].monster.closemonster(x,y);}
	
}

monster.prototype.manualposition = function(x,y,pos)
{
	{
		try {
			clearInterval(curmap[x][y].monster.monstertimer)
		} 
		catch (ex) {
			dbg(ex);
		}
		if (curmap[x][y].monster.position > pos) {
			curmap[x][y].monster.monstertimer = setInterval(function(){
				curmap[x][y].monster.position = curmap[x][y].monster.position - 30;
				updateMonster();
				if (curmap[x][y].monster.position - 30 < pos) {
					curmap[x][y].monster.position = pos;
					updateMonster();
					clearInterval(curmap[x][y].monster.monstertimer);
					curmap[x][y].monster.monstertimer = null;
				}
			}, 250)
		}
		
		if (curmap[x][y].monster.position < pos) {
		
			curmap[x][y].monster.monstertimer = setInterval(function(){
				curmap[x][y].monster.position = curmap[x][y].monster.position + 30;
				updateMonster();
				if (curmap[x][y].monster.position + 30 > pos) {
				
					curmap[x][y].monster.position = pos;
					updateMonster();
					clearInterval(curmap[x][y].monster.monstertimer);
					curmap[x][y].monster.monstertimer = null;
				}
			}, 250)
		}
	}
}