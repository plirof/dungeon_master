function door(xnsew, xposition, xislocked, xref_useskey)

door.prototype.opendoor = function(x,y)
{
	try {
		clearInterval(curmap[x][y].door.doortimer)
	} 
	catch (ex) {
		dbg(ex);
	}
	if (curmap[x][y].door.position > 0) {
		curmap[x][y].door.doortimer = setInterval(function(){
			curmap[x][y].door.position = curmap[x][y].door.position - 30;
			updateDoor();
			if (curmap[x][y].door.position - 30 < 0) {
			
				curmap[x][y].door.position = 0;
				updateDoor();
				
				clearInterval(curmap[x][y].door.doortimer);
				curmap[x][y].door.doortimer = null;
			}
		}, 250)
	}
}
	
door.prototype.closedoor = function(x,y)
{

	try {clearInterval(curmap[x][y].door.doortimer)}catch (ex){}
	if (curmap[x][y].door.position != 166)
	{

		curmap[x][y].door.doortimer = setInterval(function()
		{
			curmap[x][y].door.position = curmap[x][y].door.position + 30;
			updateDoor();
			if (curmap[x][y].door.position +30 > 166  )
			{
				
				curmap[x][y].door.position = 166 ;
				updateDoor();
				clearInterval(curmap[x][y].door.doortimer);
				curmap[x][y].door.doortimer = null;
			}
			
			
			}, 250)
		
	}

		
}

door.prototype.openclose = function (x,y)
{
	PlaySound("sounds/Door4.mp3");
	if (curmap[x][y].door.position > 0)
	{
		curmap[x][y].door.opendoor(x,y);
	}
	else {curmap[x][y].door.closedoor(x,y);}
	
}

door.prototype.manualposition = function(x,y,pos)
{
	{
		try {
			clearInterval(curmap[x][y].door.doortimer)
		} 
		catch (ex) {
			dbg(ex);
		}
		if (curmap[x][y].door.position > pos) {
			curmap[x][y].door.doortimer = setInterval(function(){
				curmap[x][y].door.position = curmap[x][y].door.position - 30;
				updateDoor();
				if (curmap[x][y].door.position - 30 < pos) {
					curmap[x][y].door.position = pos;
					updateDoor();
					clearInterval(curmap[x][y].door.doortimer);
					curmap[x][y].door.doortimer = null;
				}
			}, 250)
		}
		
		if (curmap[x][y].door.position < pos) {
		
			curmap[x][y].door.doortimer = setInterval(function(){
				curmap[x][y].door.position = curmap[x][y].door.position + 30;
				updateDoor();
				if (curmap[x][y].door.position + 30 > pos) {
				
					curmap[x][y].door.position = pos;
					updateDoor();
					clearInterval(curmap[x][y].door.doortimer);
					curmap[x][y].door.doortimer = null;
				}
			}, 250)
		}
	}
}