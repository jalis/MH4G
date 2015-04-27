var watk;
var eatk;
var sharp;
var esharp;
var affinity;

var au;
var expert;
var stinger;
var charm;

var hitzone;
var ehitzone;

var defense;
var rage;
var stat;

var motion;
var emotion;
var connect;
var special1;
var special2;
var especial;

var rdmg;
var edmg;
var dmgm;

var dmg;

var tempsharp;

function initialize() {
	watk=Number(document.getElementById("watk").value);
	eatk=Number(document.getElementById("eatk").value);
	tempsharp=document.getElementById("sharpness").value.split(";");
	sharp=Number(tempsharp[0]);
	esharp=Number(tempsharp[1]);
	affinity=document.getElementById("affinity").value;

	au=Number(document.getElementById("au").value);
	charm=Number(document.getElementById("charm").value);
	stinger=document.getElementById("stinger").checked;
	expert=Number(document.getElementById("expert").value);
	tempseau=document.getElementById("seau").value.split(";");
	seau=Number(tempseau[0]);
	seauf=Number(tempseau[1]);
	eau=Number(document.getElementById("eau").value);

	hitzone=Number(document.getElementById("hitzone").value/100);
	ehitzone=Number(document.getElementById("ehitzone").value/100);

	defense=Number(document.getElementById("defense").value);
	rage=Number(document.getElementById("rage").value);
	stat=Number(document.getElementById("stat").value);

	motion=Number(document.getElementById("motion").value/100);
	emotion=Number(document.getElementById("emotion").value/100);
	connect=Number(document.getElementById("connect").value);
	special1=Number(document.getElementById("special1").value);
	special2=Number(document.getElementById("special2").value);
	especial=Number(document.getElementById("especial").value);

	updateRaw();
	updateEle();
	updateDef();

	calcDamage();

//	alert("Initialized!\nVariables:\n"+watk+"\n"+eatk+"\n"+sharp+"\n"+esharp+"\n"+affinity+"\n"+au+"\n"+fau+"\n"+expert+"\n"+stinger+"\n"+charm+"\n"+seau+"\n"+eau+"\n"+hitzone+"\n"+ehitzone+"\n"+defense+"\n"+rage+"\n"+stat+"\n"+motion+"\n"+emotion+"\n"+connect+"\n"+special1+"\n"+special2+"\n"+especial);
}
function calcDamage() {
	dmg=Math.floor((rdmg+edmg)*dmgm);
	document.getElementById("damagedone").value=dmg;
}
function updateRaw() {
	var crit;
	var stinger_special;
	if(stinger && hitzone>=45) {
		crit=(15+expert+affinity)/100;
		stinger_special=1.05;
	}
	else {
		crit=(expert+affinity)/100;
		stinger_special=1;
	}
	if(crit>1) {
		crit=1;
	}
	rdmg=(watk+au+charm)*sharp*(1+0.25*crit)*motion*connect*special1*special2*hitzone*stinger_special;
	document.getElementById("rawdamage").value=String(rdmg.toFixed(3));
}
function updateEle() {
	if(eatk===0) {
		edmg=0;
	}
	else {
		edmg=(eatk+seauf)*esharp*emotion*ehitzone*especial*seau*eau;
	}
	document.getElementById("eledamage").value=String(edmg.toFixed(3));
}
function updateDef() {
	dmgm=defense*rage*stat;
	document.getElementById("damagemod").value=String(dmgm.toFixed(3));
}
