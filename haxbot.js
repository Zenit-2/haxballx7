// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

/* VARIABLES */

/* ROOM */

const roomName = "[🏆] 𝗙𝘂𝘁𝘀𝗮𝗹 𝘅𝟳 𝗙𝗖 🎉";
const botName = "𝗙𝗖";
const maxPlayers = 30;
const roomPublic = true;
const geo = [{"code": "ni", "lat": -34.6, "lon": -58.4}]; // Geo

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

const adminPassword = "fc_adminnx7_";

const vipPassword = "fc_passwordvip";

const playersToSetVIP = 28;
const playersToSetPublic = 27;

const scoreLimitPractice = 0;
const timeLimitPractice = 0;

const scoreLimitx3 = 3;
const timeLimitx3 = 3;

const scoreLimitx4 = 3;
const timeLimitx4 = 4;

const scoreLimitx5 = 3;
const timeLimitx5 = 5;

const scoreLimitx7 = 3;
const timeLimitx7 = 7;

const frasesgoles = [" Mira que te como dijó ", " ¡Vestite que no se puede jugar desnudo en la cancha ", " Apareciendo cuando mas se le necesita, el amo y señor de haxball ", " estás on fire 🔥🔥🔥 ", " Increible el golazo de ", " Futbol champagne señores! de parte de ", " ¡BARRILETE COSMICO! ¿De que planeta viniste? ", " Impresionante definicion de ", " Que locura de gol acaba de hacer "];

const frasesasis = [" 🔥🔥¡Y el pase milimetrico de ", " ¡Y donde pone el ojo pone el pase ", " ¡con tremendo pase de ", " ¡asistencia fenomenal de ", " ¡pase milimetrico de "];

const frasesautogol = [" ¡Prende el monitor! ", " Para que te trajeee ", " ¡El troll de troles es ", " ¡Increible lo que hace este muchacho, pero sería mejor hacerlo en el arco contrario ", " ¡Genial ahora en el otro arco ", " ¡Se equivoco de arco ", " ¡Para el otro lado "];

var isTimeAddedShown = false;
var isTimeAddedShowndos = false;
var isTimeAddedShowntres = false;
var isTimeAddedShowncuatro = false;
var isTimeAddedShowncinco = false;
var isTimeAddedShownseis = false;
var isTimeAddedShownquince = false;
var isTimeAddedShownsiete = false;
room.setTeamsLock(true);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;

var practiceMap = '{"name":"FutsalPracticebyFC","width":648,"height":270,"spawnDistance":350,"bg":{"type":"hockey","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[/*0*/{"x":550,"y":240,"trait":"ballArea"},/*1*/{"x":550,"y":-240,"trait":"ballArea"},/*2*/{"x":0,"y":270,"trait":"kickOffBarrier"},/*3*/{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},/*4*/{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},/*5*/{"x":0,"y":-270,"trait":"kickOffBarrier"},/*6*/{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},/*7*/{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},/*8*/{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},/*9*/{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},/*10*/{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},/*11*/{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},/*12*/{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},/*13*/{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},/*14*/{"x":-550,"y":80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,80]},/*15*/{"x":-550,"y":240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},/*16*/{"x":-550,"y":-80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},/*17*/{"x":-550,"y":-240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},/*18*/{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*19*/{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*20*/{"x":550,"y":80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","pos":[700,80]},/*21*/{"x":550,"y":240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea"},/*22*/{"x":550,"y":-240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},/*23*/{"x":550,"y":-80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]},/*24*/{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},/*25*/{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},/*26*/{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*27*/{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*28*/{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},/*29*/{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},/*30*/{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},/*31*/{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},/*32*/{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},/*33*/{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},/*34*/{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},/*35*/{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},/*36*/{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},/*37*/{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},/*38*/{"x":-557.5,"y":80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},/*39*/{"x":-557.5,"y":240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},/*40*/{"x":-557.5,"y":-240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},/*41*/{"x":-557.5,"y":-80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},/*42*/{"x":557.5,"y":-240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},/*43*/{"x":557.5,"y":-80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},/*44*/{"x":557.5,"y":80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},/*45*/{"x":557.5,"y":240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},/*46*/{"x":0,"y":-80,"bCoef":0.1,"trait":"line"},/*47*/{"x":0,"y":80,"bCoef":0.1,"trait":"line"},/*48*/{"x":-550,"y":-80,"bCoef":0.1,"trait":"line"},/*49*/{"x":-550,"y":83,"bCoef":0.1,"trait":"line"},/*50*/{"x":550,"y":-80,"bCoef":0.1,"trait":"line"},/*51*/{"x":550,"y":80,"bCoef":0.1,"trait":"line"},/*52*/{"x":-240,"y":224,"bCoef":0.1,"trait":"line"},/*53*/{"x":-240,"y":256,"bCoef":0.1,"trait":"line"},/*54*/{"x":-120,"y":224,"bCoef":0.1,"trait":"line"},/*55*/{"x":-120,"y":256,"bCoef":0.1,"trait":"line"},/*56*/{"x":240,"y":224,"bCoef":0.1,"trait":"line"},/*57*/{"x":240,"y":256,"bCoef":0.1,"trait":"line"},/*58*/{"x":120,"y":224,"bCoef":0.1,"trait":"line"},/*59*/{"x":120,"y":256,"bCoef":0.1,"trait":"line"},/*60*/{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},/*61*/{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},/*62*/{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},/*63*/{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},/*64*/{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90},/*65*/{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90},/*66*/{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},/*67*/{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},/*68*/{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90},/*69*/{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90},/*70*/{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},/*71*/{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},/*72*/{"x":556,"y":123,"bCoef":0.1,"trait":"line"},/*73*/{"x":575,"y":123,"bCoef":0.1,"trait":"line"},/*74*/{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},/*75*/{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},/*76*/{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},/*77*/{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},/*78*/{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},/*79*/{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},/*80*/{"x":381,"y":240,"bCoef":0.1,"trait":"line"},/*81*/{"x":381,"y":256,"bCoef":0.1,"trait":"line"},/*82*/{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},/*83*/{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},/*84*/{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90},/*85*/{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90},/*86*/{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90},/*87*/{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90},/*88*/{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},/*89*/{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},/*90*/{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},/*91*/{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},/*92*/{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},/*93*/{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},/*94*/{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180},/*95*/{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},/*96*/{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180},/*97*/{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},/*98*/{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},/*99*/{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180},/*100*/{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},/*101*/{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},/*102*/{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180},/*103*/{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},/*104*/{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180},/*105*/{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},/*106*/{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},/*107*/{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180},/*108*/{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},/*109*/{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},/*110*/{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},/*111*/{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},/*112*/{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},/*113*/{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},/*114*/{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},/*115*/{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},/*116*/{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},/*117*/{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},/*118*/{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},/*119*/{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},/*120*/{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},/*121*/{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},/*122*/{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},/*123*/{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},/*124*/{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},/*125*/{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},/*126*/{"x":-553,"y":80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,80]},/*127*/{"x":-553,"y":240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},/*128*/{"x":-553,"y":-80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},/*129*/{"x":-553,"y":-240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},/*130*/{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*131*/{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*132*/{"x":-550,"y":243,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*133*/{"x":550,"y":243,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*134*/{"x":553,"y":80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","pos":[700,80]},/*135*/{"x":553,"y":240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea"},/*136*/{"x":553,"y":-240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},/*137*/{"x":553,"y":-80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]},/*138*/{"x":-550,"y":-243,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*139*/{"x":550,"y":-243,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*140*/{"x":-551,"y":85,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},/*141*/{"x":-550,"y":-240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},/*142*/{"x":-551,"y":-3,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},/*143*/{"x":-550,"y":-3,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},/*144*/{"x":552,"y":-81,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},/*145*/{"x":552,"y":79,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"F8F8F8","cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"F8F8F8","cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":0},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":54,"v1":55,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":56,"v1":57,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":58,"v1":59,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":60,"v1":61,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":62,"v1":63,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":65,"v1":64,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":66,"v1":67,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":63,"v1":67,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":69,"v1":68,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":70,"v1":71,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":72,"v1":73,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":85,"v1":84,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":87,"v1":86,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":88,"v1":89,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":90,"v1":91,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":95,"v1":94,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":94,"v1":95,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":97,"v1":96,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":96,"v1":97,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":99,"v1":98,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":101,"v1":100,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":103,"v1":102,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":102,"v1":103,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":105,"v1":104,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":104,"v1":105,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":107,"v1":106,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":106,"v1":107,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":109,"v1":108,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":111,"v1":110,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":110,"v1":111,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":113,"v1":112,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":115,"v1":114,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":114,"v1":115,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":117,"v1":116,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":119,"v1":118,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":118,"v1":119,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":121,"v1":120,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":123,"v1":122,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":125,"v1":124,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":124,"v1":125,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":126,"v1":127,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":-553},{"v0":128,"v1":129,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":-553},{"v0":132,"v1":133,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":243},{"v0":134,"v1":135,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":553},{"v0":136,"v1":137,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":553},{"v0":138,"v1":139,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-243},{"v0":140,"v1":141,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":142,"v1":143,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":-550,"y":-3},{"v0":144,"v1":145,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":553}],"goals":[],"discs":[{"radius":3,"invMass":0,"pos":[-550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-642,"bCoef":0.1},{"normal":[-1,0],"dist":-644,"bCoef":0.1},{"normal":[1,0],"dist":-642,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"normal":[-1,0],"dist":-643,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","dist":-549,"normal":[-1,0],"_selected":true},{"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","dist":-548,"normal":[1,0],"_selected":true}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.5},"ballPhysics":{"radius":6.3,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFCC00"}}';

var x3Map = '{"name":"Training Futsal from HaxMaps","width":420,"height":200,"spawnDistance":170,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75,"cornerRadius":0},"vertexes":[{"x":-370,"y":170,"trait":"ballArea"},{"x":-370,"y":64,"trait":"ballArea","bCoef":1.5},{"x":-370,"y":-64,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"trait":"ballArea"},{"x":370,"y":64,"trait":"ballArea"},{"x":370,"y":-64,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":0,"y":75,"trait":"kickOffBarrier"},{"x":0,"y":-75,"trait":"kickOffBarrier"},{"x":-380,"y":-64,"trait":"goalNet"},{"x":-400,"y":-44,"trait":"goalNet"},{"x":-400,"y":44,"trait":"goalNet"},{"x":-380,"y":64,"trait":"goalNet"},{"x":380,"y":-64,"trait":"goalNet"},{"x":400,"y":-44,"trait":"goalNet"},{"x":400,"y":44,"trait":"goalNet"},{"x":380,"y":64,"trait":"goalNet"},{"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","x":357,"y":143},{"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","x":329,"y":165},{"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","x":-359,"y":139},{"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","x":-342,"y":161},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-170,"y":-199},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-171,"y":-175},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-147,"y":-175},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-146,"y":-196},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-140,"y":-194},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-106,"y":-194},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-136,"y":-175},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-105,"y":-174},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-94,"y":-173},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-83,"y":-197},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-74,"y":-172},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-89,"y":-182},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-70,"y":-182},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-27,"y":-196},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-28,"y":-175},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-25,"y":-197},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-11,"y":-174},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":5,"y":-198},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":3,"y":-173},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":28,"y":-198},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":19,"y":-174},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":32,"y":-200},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":38,"y":-173},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":23,"y":-183},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":36,"y":-184},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":51,"y":-198},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":50,"y":-174},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":70,"y":-174},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":83,"y":-172},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":94,"y":-199},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":102,"y":-172},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":88,"y":-182},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":101,"y":-183},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":116,"y":-173},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":118,"y":-199},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":137,"y":-187},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":120,"y":-181},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":132,"y":-174},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-53,"y":-173},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-50,"y":-198},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-65,"y":-198},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-36,"y":-198},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-213,"y":-59,"curve":0},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":198,"y":-58,"curve":0},{"bCoef":0.5,"trait":"goalPost","x":191,"y":-15},{"bCoef":0.5,"trait":"goalPost","x":-213,"y":-15},{"bCoef":1.5,"trait":"goalPost","x":-354,"y":67,"cMask":["blue"],"vis":false,"curve":0},{"bCoef":0.4,"trait":"goalPost","x":-383,"y":-53,"cMask":["blue"]},{"x":-379,"y":57,"bCoef":0.1,"cMask":["blue"]},{"bCoef":1.5,"trait":"goalPost","x":-360,"y":-59},{"bCoef":0.1,"cMask":["blue"],"trait":"goalNet","x":-356,"y":-62,"vis":false,"curve":0},{"bCoef":0.7,"trait":"goalPost","x":400,"y":-8},{"bCoef":0.5,"trait":"goalPost","x":-103,"y":123,"vis":true,"curve":0,"color":"FF0000","cMask":["blue"]},{"bCoef":0.5,"trait":"goalPost","x":-23,"y":80,"vis":true,"color":"CCFFFF","curve":0,"cMask":["blue"]},{"cMask":["blue"],"x":-227,"y":74,"vis":true},{"cMask":["blue"],"x":-151,"y":71,"vis":true},{"cMask":["blue"],"x":-164,"y":115,"vis":true,"color":"FF0000"},{"x":-76,"y":78,"vis":true,"color":"CCFFFF","cMask":["blue"]},{"cMask":["blue"],"x":-156,"y":52},{"cMask":["blue"],"x":-178,"y":67},{"cMask":["blue"],"x":-115,"y":140,"curve":0,"color":"FF0000"},{"x":-121,"y":121,"color":"FF0000","cMask":["blue"]},{"x":-42,"y":88,"color":"CCFFFF","cMask":["blue"]},{"x":-40,"y":70,"color":"CCFFFF","curve":0,"cMask":["blue"]}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":11,"v1":12,"trait":"goalNet","curve":-90},{"v0":12,"v1":13,"trait":"goalNet"},{"v0":13,"v1":14,"trait":"goalNet","curve":-90},{"v0":15,"v1":16,"trait":"goalNet","curve":90},{"v0":16,"v1":17,"trait":"goalNet"},{"v0":17,"v1":18,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","v0":19,"v1":20},{"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","v0":21,"v1":22},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":23,"v1":24},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":24,"v1":25},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":25,"v1":26},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":27,"v1":28},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":28,"v1":29},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":29,"v1":30},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":31,"v1":32},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":32,"v1":33},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":34,"v1":35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":36,"v1":37},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":38,"v1":39},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":39,"v1":40},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":40,"v1":41},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":42,"v1":43},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":44,"v1":45},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":46,"v1":47},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":48,"v1":49},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":49,"v1":50},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":51,"v1":52},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":52,"v1":53},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":54,"v1":55},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":56,"v1":57},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":57,"v1":58},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":58,"v1":59},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":59,"v1":60},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":61,"v1":62},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":62,"v1":63},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":62,"v1":64},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":65,"v1":66,"curve":0},{"vis":true,"color":"FFCCCC","bCoef":0.5,"trait":"goalPost","v0":67,"v1":68},{"vis":false,"color":"FF0000","bCoef":1.5,"trait":"goalPost","v0":69,"v1":1},{"vis":false,"color":"FF0000","bCoef":1.5,"cMask":["blue"],"v0":71,"v1":70},{"curve":0,"vis":false,"bCoef":0.1,"cMask":["blue"],"trait":"goalNet","v0":69,"v1":73},{"curve":-10.3888578155,"vis":false,"color":"FFCCCC","bCoef":0.4,"v0":70,"v1":70},{"curve":108.499642901,"vis":true,"cMask":["blue"],"v0":77,"v1":78},{"curve":-82.4347091068,"vis":true,"cMask":["blue"],"v0":79,"v1":75,"color":"FF0000"},{"curve":0,"vis":true,"v0":80,"v1":76,"color":"CCFFFF","cMask":["blue"]},{"curve":-45.4288247063,"vis":true,"cMask":["blue"],"v0":78,"v1":81},{"curve":37.4960747959,"vis":true,"cMask":["blue"],"v0":78,"v1":82},{"curve":0,"vis":true,"cMask":["blue"],"v0":75,"v1":83,"color":"FF0000"},{"curve":0,"vis":true,"v0":75,"v1":84,"color":"FF0000","cMask":["blue"]},{"curve":0,"vis":true,"v0":76,"v1":85,"color":"CCFFFF","cMask":["blue"]},{"curve":0,"vis":true,"v0":76,"v1":86,"color":"CCFFFF","cMask":["blue"]}],"goals":[{"p0":[-370,64],"p1":[-370,-64],"team":"red"},{"p0":[370,64],"p1":[370,-64],"team":"blue"},{"team":"blue","p0":[358,143],"p1":[327,165]},{"team":"red","p0":[-357,141],"p1":[-363,131]},{"p0":[-361,134],"p1":[-338,165],"team":"red"}],"discs":[{"pos":[-370,64],"trait":"goalPost","color":"FFCCCC","bCoef":0.6},{"pos":[-371,-66],"trait":"goalPost","color":"FFCCCC","bCoef":0.8},{"pos":[370,64],"trait":"goalPost","color":"FF0000"},{"pos":[370,-64],"trait":"goalPost","color":"CCCCFF"},{"radius":8,"invMass":0,"pos":[365,137],"color":"CCCCFF","bCoef":0.5,"trait":"goalPost"},{"radius":8,"invMass":0,"color":"CCCCFF","bCoef":0.5,"trait":"goalPost","pos":[324,167]},{"radius":8,"invMass":0,"color":"CCCCFF","bCoef":0.5,"trait":"goalPost","pos":[-367,134]},{"radius":8,"invMass":0,"pos":[-335,170],"color":"CCCCFF","bCoef":0.5,"trait":"goalPost"},{"radius":13.0384048104,"invMass":0,"pos":[-189,-120],"color":"CCCCFF","bCoef":0.5,"trait":"goalPost"},{"invMass":0,"color":"CCCCFF","bCoef":0.5,"trait":"goalPost","pos":[-121,-117],"radius":12.0415945788},{"radius":12.0415945788,"invMass":0,"pos":[-53,-113],"color":"CCCCFF","bCoef":0.5,"trait":"goalPost"},{"radius":12.0415945788,"invMass":0,"color":"CCCCFF","bCoef":0.5,"trait":"goalPost","pos":[14,-112]},{"radius":12.0415945788,"invMass":0,"color":"CCCCFF","bCoef":0.5,"trait":"goalPost","pos":[85,-118]},{"radius":12.0415945788,"invMass":0,"color":"CCCCFF","bCoef":0.5,"trait":"goalPost","pos":[153,-118]},{"radius":12.0415945788,"invMass":0,"color":"CCCCFF","bCoef":0.5,"trait":"goalPost","pos":[232,-123]},{"radius":12.0415945788,"invMass":0,"color":"CCCCFF","bCoef":0.5,"trait":"goalPost","pos":[307,-123]},{"invMass":0.01,"color":"FF0000","bCoef":1.5,"trait":"goalPost","pos":[-369,0],"radius":12.3693168769,"damping":1.002},{"radius":8,"invMass":0,"pos":[-180,93],"color":"FF0000","bCoef":0.5,"trait":"goalPost"},{"radius":8,"invMass":0,"pos":[39,66],"color":"FF0000","bCoef":0.5,"trait":"goalPost"},{"radius":8,"invMass":0,"color":"FF0000","bCoef":0.5,"trait":"goalPost","pos":[-27,111]},{"radius":8,"invMass":0,"color":"FF0000","bCoef":0.5,"trait":"goalPost","pos":[34,130]},{"radius":8,"invMass":0,"color":"FF0000","bCoef":0.5,"trait":"goalPost","pos":[-117,98]},{"radius":8,"invMass":0,"color":"FF0000","bCoef":0.5,"trait":"goalPost","pos":[129,138]},{"radius":8,"invMass":0,"pos":[82,102],"color":"FF0000","bCoef":0.5,"trait":"goalPost"},{"radius":8,"invMass":0,"color":"FF0000","bCoef":0.5,"trait":"goalPost","pos":[119,62]},{"radius":8,"invMass":0,"color":"FF0000","bCoef":0.5,"trait":"goalPost","pos":[159,88]},{"radius":12.0415945788,"invMass":0,"pos":[281,110],"color":"000000","bCoef":2,"trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-170,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.1},{"normal":[0,-1],"dist":-200,"bCoef":0.1},{"normal":[1,0],"dist":-420,"bCoef":0.1},{"normal":[-1,0],"dist":-420,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';

var x4Map = '{"name":"𝗘𝘀𝘁𝗮𝗱𝗶𝗼𝗢𝗳𝗶𝗰𝗶𝗮𝗹𝗽𝗼𝗿𝗺𝗴𝗿𝘅","canBeStored":true,"width":765,"height":350,"bg":{"type":"hockey"},"vertexes":[/*0*/{"x":0,"y":-350,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/*1*/{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/*2*/{"x":-700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"FF0000","pos":[-700,-80]},/*3*/{"x":-735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"FF0000","pos":[-700,-80]},/*4*/{"x":-735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"FF0000","pos":[-700,80]},/*5*/{"x":-700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"FF0000","pos":[-700,80]},/*6*/{"x":700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"0023FF","pos":[700,-90]},/*7*/{"x":735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"0023FF","pos":[700,-90]},/*8*/{"x":735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"0023FF","pos":[700,80]},/*9*/{"x":700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"0023FF","pos":[700,80]},/*10*/{"x":-700,"y":90,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FF0000","pos":[-700,80]},/*11*/{"x":-700,"y":320,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*12*/{"x":-700,"y":-90,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FF0000","pos":[-700,-80]},/*13*/{"x":-700,"y":-320,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*14*/{"x":-700,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*15*/{"x":700,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*16*/{"x":700,"y":90,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80],"color":"0023FF"},/*17*/{"x":700,"y":320,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*18*/{"x":700,"y":-320,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*19*/{"x":700,"y":-90,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"0023FF","pos":[700,-90]},/*20*/{"x":-700,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*21*/{"x":700,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*22*/{"x":-706.5,"y":90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"FF0000"},/*23*/{"x":-706.5,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},/*24*/{"x":-706.5,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},/*25*/{"x":-706.5,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"FF0000"},/*26*/{"x":706.5,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},/*27*/{"x":706.5,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-90],"color":"0023FF"},/*28*/{"x":706.5,"y":90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80],"color":"0023FF"},/*29*/{"x":706.5,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},/*30*/{"x":-700,"y":-90,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"FF0000"},/*31*/{"x":-700,"y":90,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"FF0000"},/*32*/{"x":700,"y":-90,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"0023FF","pos":[700,-90]},/*33*/{"x":700,"y":90,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"0023FF"},/*34*/{"x":-700,"y":280,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},/*35*/{"x":-480,"y":60,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},/*36*/{"x":-700,"y":-280,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},/*37*/{"x":-480,"y":-60,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},/*38*/{"x":700,"y":280,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},/*39*/{"x":480,"y":70,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"0023FF","curve":93.241608812827},/*40*/{"x":700,"y":-280,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},/*41*/{"x":480,"y":-70,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"0023FF","curve":-93.241608812827},/*42*/{"x":480,"y":70,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":0},/*43*/{"x":480,"y":-70,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":0},/*44*/{"x":480,"y":1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"0023FF"},/*45*/{"x":480,"y":-1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"0023FF"},/*46*/{"x":480,"y":3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"0023FF"},/*47*/{"x":480,"y":-3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"0023FF"},/*48*/{"x":480,"y":2,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"0023FF"},/*49*/{"x":-480,"y":1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"FF0000"},/*50*/{"x":-480,"y":-1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"FF0000"},/*51*/{"x":-480,"y":3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"FF0000"},/*52*/{"x":-480,"y":-3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"FF0000"},/*53*/{"x":-480,"y":2,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"FF0000"},/*54*/{"x":-700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"FF0000","pos":[-700,-80],"vis":false},/*55*/{"x":-735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"FF0000","pos":[-700,-80],"vis":false},/*56*/{"x":-735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"FF0000","pos":[-700,80],"vis":false},/*57*/{"x":-700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"FF0000","pos":[-700,80],"vis":false},/*58*/{"x":700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"0023FF","pos":[700,-90],"vis":false},/*59*/{"x":735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"0023FF","pos":[700,-90],"vis":false},/*60*/{"x":735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"0023FF","pos":[700,80],"vis":false},/*61*/{"x":700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"0023FF","pos":[700,80],"vis":false},/*62*/{"x":-765.1,"y":15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"pos":[-770.1,0]},/*63*/{"x":-735,"y":15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"color":"FF0000"},/*64*/{"x":-765.1,"y":-15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"pos":[-770.1,0]},/*65*/{"x":-735,"y":-15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"color":"FF0000"},/*66*/{"x":735,"y":-15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"color":"0023FF"},/*67*/{"x":765.1,"y":-15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"pos":[770.1,0]},/*68*/{"x":735,"y":15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"color":"0023FF"},/*69*/{"x":765.1,"y":15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"pos":[770.1,0]},/*70*/{"x":0,"y":320,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/*71*/{"x":0,"y":350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/*72*/{"x":0,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*73*/{"x":0,"y":-90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*74*/{"x":0,"y":90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*75*/{"x":0,"y":-90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*76*/{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},/*77*/{"x":0,"y":90,"cMask":[],"color":"939393"},/*78*/{"x":0,"y":90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*79*/{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},/*80*/{"x":0,"y":90.71794871794872,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*81*/{"x":0,"y":-90.71794871794872,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*82*/{"x":0,"y":90.71794871794872,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*83*/{"x":0,"y":-90.71794871794872,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*84*/{"x":0,"y":91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*85*/{"x":0,"y":-91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*86*/{"x":0,"y":91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*87*/{"x":0,"y":-91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*88*/{"x":0,"y":-91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":93.241608812827},/*89*/{"x":0,"y":91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-93.241608812827},/*90*/{"x":0,"y":-91,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*91*/{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},/*92*/{"x":0,"y":91,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*93*/{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},/*94*/{"x":-706.5,"y":90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"FF0000"},/*95*/{"x":-706.5,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},/*96*/{"x":-706.5,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},/*97*/{"x":-706.5,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"FF0000"},/*98*/{"x":706.5,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},/*99*/{"x":706.5,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-90],"color":"0023FF"},/*100*/{"x":706.5,"y":90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80],"color":"0023FF"},/*101*/{"x":706.5,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},/*102*/{"x":-735,"y":-350,"bCoef":0.5,"cMask":["red","blue"]},/*103*/{"x":-735,"y":350,"bCoef":0.5,"cMask":["red","blue"]},/*104*/{"x":735,"y":350,"bCoef":0.5,"cMask":["red","blue"]},/*105*/{"x":735,"y":-350,"bCoef":0.5,"cMask":["red","blue"]},/*106*/{"x":-0.6505369938427,"y":90.95465763683406,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*107*/{"x":-0.6505369938427,"y":-89.00213903605642,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*108*/{"x":-0.6505369938427,"y":90.95465763683406,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*109*/{"x":-0.6505369938427,"y":-89.00213903605642,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*110*/{"x":-0.7232568860606743,"y":86.0073021995592,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*111*/{"x":-0.7232568860606743,"y":-84.30895179442639,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*112*/{"x":-0.7232568860606743,"y":86.0073021995592,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*113*/{"x":-0.7232568860606743,"y":-84.30895179442639,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*114*/{"x":-0.809522640554488,"y":80.13838055338022,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*115*/{"x":-0.809522640554488,"y":-78.74154339994371,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*116*/{"x":-0.809522640554488,"y":80.13838055338022,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*117*/{"x":-0.809522640554488,"y":-78.74154339994371,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*118*/{"bCoef":0.1,"cMask":["wall"],"x":-58.64166495512634,"y":-53.175350882093234,"color":"939393"},/*119*/{"bCoef":0.1,"cMask":["wall"],"x":-33.8307150620987,"y":-47.78166612273941,"color":"939393"},/*120*/{"bCoef":0.1,"cMask":["wall"],"x":-3.086711933781892,"y":-54.79345630989937,"color":"939393"},/*121*/{"bCoef":0.1,"cMask":["wall"],"x":10.397499964602718,"y":-32.67934879654866,"color":"939393"},/*122*/{"bCoef":0.1,"cMask":["wall"],"x":-3.086711933781892,"y":-11.104609759133329,"color":"939393"},/*123*/{"bCoef":0.1,"cMask":["wall"],"x":-33.29134658616332,"y":-19.19513689816408,"color":"939393"},/*124*/{"bCoef":0.1,"cMask":["wall"],"x":-28.95294797537871,"y":-44.529821398259394,"color":"939393"},/*125*/{"bCoef":0.1,"cMask":["wall"],"x":-5.337989050729524,"y":-49.91568922317938,"color":"939393"},/*126*/{"bCoef":0.1,"cMask":["wall"],"x":5.019449074116602,"y":-32.92949069843172,"color":"939393"},/*127*/{"bCoef":0.1,"cMask":["wall"],"x":-5.337989050729524,"y":-16.35758969867795,"color":"939393"},/*128*/{"bCoef":0.1,"cMask":["wall"],"x":-28.538650450384864,"y":-22.572052573585594,"color":"939393"},/*129*/{"bCoef":0.1,"cMask":["wall"],"x":-23.29778675921276,"y":-40.75971392081542,"color":"939393"},/*130*/{"bCoef":0.1,"cMask":["wall"],"x":-7.948063458190758,"y":-44.26052800701339,"color":"939393"},/*131*/{"bCoef":0.1,"cMask":["wall"],"x":-1.2157286770407496,"y":-33.21949896592742,"color":"939393"},/*132*/{"bCoef":0.1,"cMask":["wall"],"x":-7.948063458190758,"y":-22.447763316087446,"color":"939393"},/*133*/{"bCoef":0.1,"cMask":["wall"],"x":-23.028493367966693,"y":-26.487164184777413,"color":"939393"},/*134*/{"bCoef":0.1,"cMask":["wall"],"x":-18.486712082024912,"y":-37.70900450284285,"color":"939393"},/*135*/{"bCoef":0.1,"cMask":["wall"],"x":-9.825082505019692,"y":-39.68446388005461,"color":"939393"},/*136*/{"bCoef":0.1,"cMask":["wall"],"x":-6.026122164227919,"y":-33.454168921156075,"color":"939393"},/*137*/{"bCoef":0.1,"cMask":["wall"],"x":-9.825082505019692,"y":-27.375832375889253,"color":"939393"},/*138*/{"bCoef":0.1,"cMask":["wall"],"x":-18.334753668393244,"y":-29.655208580364306,"color":"939393"},/*139*/{"bCoef":0.1,"cMask":["wall"],"x":10.936868440538095,"y":-76.90756382325009,"color":"939393"},/*140*/{"bCoef":0.1,"cMask":["wall"],"x":-10.841211502798409,"y":46.784937115255055,"color":"939393"},/*141*/{"bCoef":0.1,"cMask":["wall"],"x":7.1346345023234,"y":20.87687098937728,"color":"939393"},/*142*/{"bCoef":0.1,"cMask":["wall"],"x":32.00348373101125,"y":28.11552139351749,"color":"939393"},/*143*/{"bCoef":0.1,"cMask":["wall"],"x":36.593082559603765,"y":53.14008767638626,"color":"939393"},/*144*/{"bCoef":0.1,"cMask":["wall"],"x":8.832380641928397,"y":67.53175237888709,"color":"939393"},/*145*/{"bCoef":0.1,"cMask":["wall"],"x":-5.046442920847778,"y":45.897377006837225,"color":"939393"},/*146*/{"bCoef":0.1,"cMask":["wall"],"x":8.76109096714436,"y":25.99697838840937,"color":"939393"},/*147*/{"bCoef":0.1,"cMask":["wall"],"x":27.86325051961479,"y":31.55710116260402,"color":"939393"},/*148*/{"bCoef":0.1,"cMask":["wall"],"x":31.388594547374204,"y":50.77886946683654,"color":"939393"},/*149*/{"bCoef":0.1,"cMask":["wall"],"x":10.065156842493117,"y":61.83333655716329,"color":"939393"},/*150*/{"bCoef":0.1,"cMask":["wall"],"x":1.6718669038512775,"y":44.868362006140316,"color":"939393"},/*151*/{"bCoef":0.1,"cMask":["wall"],"x":10.64676393104614,"y":31.93310290416218,"color":"939393"},/*152*/{"bCoef":0.1,"cMask":["wall"],"x":23.063167640151942,"y":35.54718270738872,"color":"939393"},/*153*/{"bCoef":0.1,"cMask":["wall"],"x":25.354641258195603,"y":48.041332105139844,"color":"939393"},/*154*/{"bCoef":0.1,"cMask":["wall"],"x":11.494406750022893,"y":55.226735713852236,"color":"939393"},/*155*/{"bCoef":0.1,"cMask":["wall"],"x":7.281763458339138,"y":43.87723731654312,"color":"939393"},/*156*/{"bCoef":0.1,"cMask":["wall"],"x":12.346169637970597,"y":36.578055394712614,"color":"939393"},/*157*/{"bCoef":0.1,"cMask":["wall"],"x":19.352568873823078,"y":38.61742899796187,"color":"939393"},/*158*/{"bCoef":0.1,"cMask":["wall"],"x":20.64561470114773,"y":45.66769901526428,"color":"939393"},/*159*/{"bCoef":0.1,"cMask":["wall"],"x":12.824482371536005,"y":49.72231962303773,"color":"939393"},/*160*/{"bCoef":0.1,"cMask":["wall"],"x":38.053767417921556,"y":-24.959486093658818,"color":"939393"},/*161*/{"bCoef":0.1,"cMask":["wall"],"x":39.54402733569867,"y":4.570925076202384,"color":"939393"},/*162*/{"bCoef":0.1,"cMask":["wall"],"x":60.43818418846064,"y":6.677833104085571,"color":"939393"},/*163*/{"bCoef":0.1,"cMask":["wall"],"x":74.64941646255942,"y":-14.238800038084722,"color":"939393"},/*164*/{"bCoef":0.1,"cMask":["wall"],"x":61.14895079765635,"y":-36.80196880797294,"color":"939393"},/*165*/{"bCoef":0.1,"cMask":["wall"],"x":41.79707774509096,"y":-22.1532708458745,"color":"939393"},/*166*/{"bCoef":0.1,"cMask":["wall"],"x":42.94177014570238,"y":0.5295087483667186,"color":"939393"},/*167*/{"bCoef":0.1,"cMask":["wall"],"x":58.99090511956302,"y":2.1478583929726347,"color":"939393"},/*168*/{"bCoef":0.1,"cMask":["wall"],"x":69.90677918517514,"y":-13.918540977100198,"color":"939393"},/*169*/{"bCoef":0.1,"cMask":["wall"],"x":59.53685628314812,"y":-31.249670611941873,"color":"939393"},/*170*/{"bCoef":0.1,"cMask":["wall"],"x":46.13697815565302,"y":-18.899815042974573,"color":"939393"},/*171*/{"bCoef":0.1,"cMask":["wall"],"x":46.881028216050424,"y":-4.156008306717757,"color":"939393"},/*172*/{"bCoef":0.1,"cMask":["wall"],"x":57.31296594905986,"y":-3.104081037723893,"color":"939393"},/*173*/{"bCoef":0.1,"cMask":["wall"],"x":64.40828409170774,"y":-13.547240628271222,"color":"939393"},/*174*/{"bCoef":0.1,"cMask":["wall"],"x":57.6678342053902,"y":-24.812474890918363,"color":"939393"},/*175*/{"bCoef":0.1,"cMask":["wall"],"x":49.7032148562896,"y":-16.06451438778283,"color":"939393"},/*176*/{"bCoef":0.1,"cMask":["wall"],"x":50.1230716760853,"y":-7.744794872323602,"color":"939393"},/*177*/{"bCoef":0.1,"cMask":["wall"],"x":56.0096651111406,"y":-7.15120734196282,"color":"939393"},/*178*/{"bCoef":0.1,"cMask":["wall"],"x":60.01345177734906,"y":-13.04413311091451,"color":"939393"},/*179*/{"bCoef":0.1,"cMask":["wall"],"x":56.20991219864133,"y":-19.40094387340825,"color":"939393"},/*180*/{"bCoef":0.1,"cMask":["wall"],"x":-76.98019313692936,"y":20.178761845118906,"color":"939393"},/*181*/{"bCoef":0.1,"cMask":["wall"],"x":-71.0471399016402,"y":3.458339091122023,"color":"939393"},/*182*/{"bCoef":0.1,"cMask":["wall"],"x":-49.472400864224824,"y":6.69454994673433,"color":"939393"},/*183*/{"bCoef":0.1,"cMask":["wall"],"x":-40.8425052492587,"y":30.966131363826573,"color":"939393"},/*184*/{"bCoef":0.1,"cMask":["wall"],"x":-52.7086117198371,"y":47.68655411782346,"color":"939393"},/*185*/{"bCoef":0.1,"cMask":["wall"],"x":-69.96840294976936,"y":37.97792155098657,"color":"939393"},/*186*/{"bCoef":0.1,"cMask":["wall"],"x":-72.44417589718435,"y":20.88751453882907,"color":"939393"},/*187*/{"bCoef":0.1,"cMask":["wall"],"x":-68.0703785880575,"y":8.561358485835175,"color":"939393"},/*188*/{"bCoef":0.1,"cMask":["wall"],"x":-52.165661100323426,"y":10.947066108995273,"color":"939393"},/*189*/{"bCoef":0.1,"cMask":["wall"],"x":-45.80377410522977,"y":28.839873282696118,"color":"939393"},/*190*/{"bCoef":0.1,"cMask":["wall"],"x":-54.55136872348356,"y":41.16602933569002,"color":"939393"},/*191*/{"bCoef":0.1,"cMask":["wall"],"x":-67.27514271367082,"y":34.00890646620968,"color":"939393"},/*192*/{"bCoef":0.1,"cMask":["wall"],"x":-67.93340652273672,"y":21.59232225358651,"color":"939393"},/*193*/{"bCoef":0.1,"cMask":["wall"],"x":-65.11018618607622,"y":13.635974032088784,"color":"939393"},/*194*/{"bCoef":0.1,"cMask":["wall"],"x":-54.84393041640174,"y":15.17591239753996,"color":"939393"},/*195*/{"bCoef":0.1,"cMask":["wall"],"x":-50.737428108531894,"y":26.725450138423763,"color":"939393"},/*196*/{"bCoef":0.1,"cMask":["wall"],"x":-56.38386878185289,"y":34.6817983599215,"color":"939393"},/*197*/{"bCoef":0.1,"cMask":["wall"],"x":-64.59687339759252,"y":30.06198326356798,"color":"939393"},/*198*/{"bCoef":0.1,"cMask":["wall"],"x":-64.12022580828621,"y":22.188131740219404,"color":"939393"},/*199*/{"bCoef":0.1,"cMask":["wall"],"x":-62.60778634221806,"y":17.925802335845628,"color":"939393"},/*200*/{"bCoef":0.1,"cMask":["wall"],"x":-57.10800646560673,"y":18.750769317337316,"color":"939393"},/*201*/{"bCoef":0.1,"cMask":["wall"],"x":-54.90809451496221,"y":24.93802167852509,"color":"939393"},/*202*/{"bCoef":0.1,"cMask":["wall"],"x":-57.93297344709841,"y":29.200351082898877,"color":"939393"},/*203*/{"bCoef":0.1,"cMask":["wall"],"x":-62.33279734838752,"y":26.725450138423763,"color":"939393"},/*204*/{"bCoef":0.1,"cMask":["wall"],"x":58.401294322851854,"y":-51.01787697835168,"color":"939393"},/*205*/{"bCoef":0.1,"cMask":["wall"],"x":70.80676926936565,"y":30.966131363826573,"color":"939393"},/*206*/{"bCoef":0.1,"cMask":["wall"],"x":55.704451943174924,"y":55.23771278091883,"color":"939393"},/*207*/{"bCoef":0.1,"cMask":["wall"],"x":-6.322922789394167,"y":78.9699257220757,"color":"939393"},/*208*/{"bCoef":0.1,"cMask":["wall"],"x":-43.53934762893559,"y":66.02508229962652,"color":"939393"},/*209*/{"bCoef":0.1,"cMask":["wall"],"x":-76.98019313692936,"y":-21.3526108019056,"color":"939393"},/*210*/{"x":-703,"y":-89,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FF0000","pos":[-700,-80]},/*211*/{"x":-703,"y":90,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FF0000","pos":[-700,80]},/*212*/{"x":-703,"y":320,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*213*/{"x":-703,"y":-90,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FF0000","pos":[-700,-80]},/*214*/{"x":-703,"y":-320,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*215*/{"x":703,"y":90,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80],"color":"0023FF"},/*216*/{"x":703,"y":320,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*217*/{"x":703,"y":-320,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*218*/{"x":703,"y":-90,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"0023FF","pos":[700,-90]},/*219*/{"x":-700,"y":-323,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*220*/{"x":700,"y":-323,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*221*/{"x":-700,"y":323,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*222*/{"x":700,"y":323,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff"}],"segments":[{"v0":0,"v1":1,"vis":false,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":2,"v1":3,"curve":0,"color":"FF0000","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,-80],"y":-90},{"v0":3,"v1":4,"curve":0,"color":"FF0000","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","x":-735},{"v0":4,"v1":5,"curve":0,"color":"FF0000","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,80],"y":90},{"v0":6,"v1":7,"curve":0,"color":"0023FF","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[700,-90],"y":-90},{"v0":7,"v1":8,"curve":0,"color":"0023FF","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","x":735},{"v0":8,"v1":9,"curve":0,"color":"0023FF","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[700,80],"y":90},{"v0":10,"v1":11,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":12,"v1":13,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":14,"v1":15,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":16,"v1":17,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":18,"v1":19,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":20,"v1":21,"curve":0,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":22,"v1":23,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":24,"v1":25,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":26,"v1":27,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":28,"v1":29,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":30,"v1":31,"curve":0,"vis":true,"color":"FF0000","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-550},{"v0":32,"v1":33,"curve":0,"vis":true,"color":"0023FF","bCoef":0.1,"cMask":["wall"],"trait":"line","x":550},{"v0":34,"v1":35,"curve":-93.241608812827,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":36,"v1":37,"curve":93.241608812827,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":35,"v1":37,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-480},{"v0":38,"v1":39,"curve":93.241608812827,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":40,"v1":41,"curve":-93.241608812827,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":42,"v1":43,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":480},{"v0":45,"v1":44,"curve":180,"vis":true,"color":"0023FF","bCoef":0.1,"cMask":["wall"],"trait":"line","x":480},{"v0":44,"v1":45,"curve":180,"vis":true,"color":"0023FF","bCoef":0.1,"cMask":["wall"],"trait":"line","x":480},{"v0":47,"v1":46,"curve":180,"vis":true,"color":"0023FF","bCoef":0.1,"cMask":["wall"],"trait":"line","x":480},{"v0":46,"v1":47,"curve":180,"vis":true,"color":"0023FF","bCoef":0.1,"cMask":["wall"],"trait":"line","x":480},{"v0":50,"v1":49,"curve":180,"vis":true,"color":"FF0000","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-480},{"v0":49,"v1":50,"curve":180,"vis":true,"color":"FF0000","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-480},{"v0":52,"v1":51,"curve":180,"vis":true,"color":"FF0000","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-480},{"v0":51,"v1":52,"curve":180,"vis":true,"color":"FF0000","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-480},{"v0":54,"v1":55,"curve":0,"vis":false,"color":"FF0000","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,-80],"y":-90},{"v0":55,"v1":56,"curve":0,"vis":false,"color":"FF0000","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","x":-735},{"v0":56,"v1":57,"curve":0,"vis":false,"color":"FF0000","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,80],"y":90},{"v0":58,"v1":59,"curve":0,"vis":false,"color":"0023FF","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[700,-90],"y":-90},{"v0":59,"v1":60,"curve":0,"vis":false,"color":"0023FF","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","x":735},{"v0":60,"v1":61,"curve":0,"vis":false,"color":"0023FF","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[700,80],"y":90},{"v0":62,"v1":63,"curve":0,"vis":false,"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","y":15},{"v0":64,"v1":65,"curve":0,"vis":false,"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","y":-15},{"v0":66,"v1":67,"curve":0,"vis":false,"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","y":-15},{"v0":68,"v1":69,"curve":0,"vis":false,"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","y":15},{"v0":70,"v1":71,"vis":false,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":72,"v1":73,"curve":179.42829117403,"color":"939393","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":0.0049891420830909},{"v0":75,"v1":74,"curve":180,"color":"939393","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.1232339957368e-17},{"v0":80,"v1":81,"curve":-180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":82,"v1":83,"curve":180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":84,"v1":85,"curve":-179.69199272082727,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":86,"v1":87,"curve":179.9101787569867,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":91,"v1":90,"color":"ffffff","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":92,"v1":93,"color":"ffffff","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":94,"v1":95,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":96,"v1":97,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":98,"v1":99,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":100,"v1":101,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":102,"v1":103,"curve":0,"vis":false,"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"x":-735},{"v0":104,"v1":105,"curve":0,"vis":false,"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"x":735},{"v0":106,"v1":107,"curve":-180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":110,"v1":111,"curve":-180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":114,"v1":115,"curve":-180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":118,"v1":119,"curve":41.815960942019316},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":119,"v1":120},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":120,"v1":121},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":121,"v1":122},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":122,"v1":123},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":123,"v1":119},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":124,"v1":125},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":125,"v1":126},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":126,"v1":127},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":127,"v1":128},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":128,"v1":124},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":129,"v1":130},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":130,"v1":131},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":131,"v1":132},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":132,"v1":133},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":133,"v1":129},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":134,"v1":135},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":135,"v1":136},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":136,"v1":137},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":137,"v1":138},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":138,"v1":134},{"curve":26.392926384436958,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":120,"v1":139},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":140,"v1":141},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":141,"v1":142},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":142,"v1":143},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":143,"v1":144},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":144,"v1":140},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":145,"v1":146},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":146,"v1":147},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":147,"v1":148},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":148,"v1":149},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":149,"v1":145},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":150,"v1":151},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":151,"v1":152},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":152,"v1":153},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":153,"v1":154},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":154,"v1":150},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":155,"v1":156},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":156,"v1":157},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":157,"v1":158},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":158,"v1":159},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":159,"v1":155},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":160,"v1":161},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":161,"v1":162},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":162,"v1":163},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":163,"v1":164},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":164,"v1":160},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":165,"v1":166},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":166,"v1":167},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":167,"v1":168},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":168,"v1":169},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":169,"v1":165},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":170,"v1":171},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":171,"v1":172},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":172,"v1":173},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":173,"v1":174},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":174,"v1":170},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":175,"v1":176},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":176,"v1":177},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":177,"v1":178},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":178,"v1":179},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":179,"v1":175},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":180,"v1":181},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":181,"v1":182},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":182,"v1":183},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":183,"v1":184},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":184,"v1":185},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":185,"v1":180},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":186,"v1":187},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":187,"v1":188},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":188,"v1":189},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":189,"v1":190},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":190,"v1":191},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":191,"v1":186},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":192,"v1":193},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":193,"v1":194},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":194,"v1":195},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":195,"v1":196},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":196,"v1":197},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":197,"v1":192},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":198,"v1":199},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":199,"v1":200},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":200,"v1":201},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":201,"v1":202},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":202,"v1":203},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":203,"v1":198},{"curve":23.349737619501724,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":182,"v1":123},{"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":122,"v1":141},{"curve":24.678458804936827,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":121,"v1":160},{"curve":-21.76978243279372,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":164,"v1":204},{"curve":43.26339127378437,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":162,"v1":205},{"curve":-25.023191638187097,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":142,"v1":161},{"curve":-40.88059361000261,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":143,"v1":206},{"curve":24.7138580010139,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":144,"v1":207},{"curve":-48.32967343244267,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":184,"v1":208},{"curve":-33.75534631846241,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":183,"v1":140},{"curve":30.438929662347565,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"v0":181,"v1":209},{"v0":211,"v1":212,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-703},{"v0":213,"v1":214,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-703},{"v0":215,"v1":216,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":703},{"v0":217,"v1":218,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":703},{"v0":219,"v1":220,"curve":0,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-323},{"v0":221,"v1":222,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":323}],"planes":[{"normal":[0,1],"dist":-350,"bCoef":0.1},{"normal":[-1,0],"dist":-765.1,"bCoef":0.1},{"normal":[0,-1],"dist":-320,"cMask":["ball"]},{"normal":[0,-1],"dist":-350,"bCoef":0.1},{"normal":[1,0],"dist":-765.1,"bCoef":0.1},{"normal":[0,1],"dist":-320,"cMask":["ball"]}],"goals":[{"p0":[-707.5,-90],"p1":[-707.5,90],"team":"red","color":"FF0000"},{"p0":[707.5,90],"p1":[707.5,-90],"team":"blue","color":"0023FF"}],"discs":[{"radius":0.01,"invMass":0,"pos":[-765.1,0],"color":"000000","bCoef":440,"vis":true,"x":-770.1},{"radius":0.1,"invMass":0,"pos":[765.1,0],"color":"000000","bCoef":440,"x":770.1},{"radius":5.5,"invMass":0,"pos":[-700,90],"color":"FF0000","trait":"goalPost","y":90},{"radius":5.5,"invMass":0,"pos":[-700,-90],"color":"FF0000","trait":"goalPost","y":-85,"x":-560},{"radius":5.5,"invMass":0,"pos":[700,90],"color":"0023FF","trait":"goalPost","y":90},{"radius":5.5,"invMass":0,"pos":[700,-90],"color":"0023FF","trait":"goalPost","y":-85,"vis":true}],"playerPhysics":{"bCoef":0.1,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01"},"spawnDistance":200,"traits":{}}';

var x5Map = '{"name":"Futsalx5FC","width":1080,"height":532,"spawnDistance":310,"bg":{"type":"hockey","width":950,"height":460,"kickOffRadius":6,"cornerRadius":0},"vertexes":[/*0*/{"x":-950,"y":460,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*1*/{"x":-950,"y":90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*2*/{"x":-950,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*3*/{"x":-950,"y":-460,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*4*/{"x":950,"y":456,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*5*/{"x":950,"y":90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*6*/{"x":950,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*7*/{"x":950,"y":-456,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*8*/{"x":0,"y":508,"trait":"kickOffBarrier"},/*9*/{"x":0,"y":150,"trait":"kickOffBarrier"},/*10*/{"x":0,"y":-150,"trait":"line"},/*11*/{"x":0,"y":-508,"trait":"kickOffBarrier"},/*12*/{"x":-995,"y":-90,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0},/*13*/{"x":995,"y":-90,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0},/*14*/{"x":-995,"y":90,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0},/*15*/{"x":995,"y":90,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0},/*16*/{"x":951,"y":460,"bCoef":1,"trait":"ballArea"},/*17*/{"x":951,"y":-460,"bCoef":1,"trait":"ballArea"},/*18*/{"x":0,"y":460,"bCoef":0,"trait":"line","curve":0},/*19*/{"x":0,"y":-460,"bCoef":0,"trait":"line","curve":0},/*20*/{"x":0,"y":150,"trait":"kickOffBarrier"},/*21*/{"x":0,"y":-150,"trait":"kickOffBarrier"},/*22*/{"x":958,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"line","curve":0},/*23*/{"x":958,"y":-456,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*24*/{"x":-958,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"line","curve":0},/*25*/{"x":-958,"y":-456,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*26*/{"x":-958,"y":90,"bCoef":1,"cMask":["ball"],"trait":"line","curve":0},/*27*/{"x":-958,"y":456,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*28*/{"x":958,"y":90,"bCoef":1,"cMask":["ball"],"trait":"line","curve":0},/*29*/{"x":958,"y":456,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*30*/{"x":0,"y":-9,"trait":"line","curve":-180},/*31*/{"x":0,"y":9,"trait":"line","curve":-180},/*32*/{"x":0,"y":-9,"trait":"line","curve":180},/*33*/{"x":0,"y":9,"trait":"line","curve":180},/*34*/{"x":634.21528583524,"y":-109.20953737271,"bCoef":0,"cMask":[""],"trait":"line","curve":0},/*35*/{"x":634.21528583524,"y":114.16613046747,"bCoef":0,"cMask":[""],"trait":"line","curve":44.336382176589},/*36*/{"x":634.21528583524,"y":114.16613046747,"bCoef":0,"cMask":[""],"trait":"line","curve":-90},/*37*/{"x":950,"y":324.62551819445,"bCoef":0,"cMask":[""],"trait":"line","curve":-90},/*38*/{"x":634.21528583524,"y":-109.20953737271,"bCoef":0,"cMask":[""],"trait":"line","curve":90},/*39*/{"x":-423.82978278939,"y":449,"bCoef":0.1,"trait":"line"},/*40*/{"x":-423.82978278939,"y":471,"bCoef":0.1,"trait":"line"},/*41*/{"x":-222.35509186163,"y":449,"bCoef":0.1,"trait":"line"},/*42*/{"x":-222.35509186163,"y":471,"bCoef":0.1,"trait":"line"},/*43*/{"x":386.06898092163,"y":449,"bCoef":0.1,"trait":"line"},/*44*/{"x":386.06898092163,"y":471,"bCoef":0.1,"trait":"line"},/*45*/{"x":184.59428999387,"y":449,"bCoef":0.1,"trait":"line"},/*46*/{"x":184.59428999387,"y":471,"bCoef":0.1,"trait":"line"},/*47*/{"x":-657.56254462949,"y":460,"bCoef":0.1,"trait":"line"},/*48*/{"x":-657.56254462949,"y":473,"bCoef":0.1,"trait":"line"},/*49*/{"x":975,"y":193.91895440419,"bCoef":0.1,"trait":"line"},/*50*/{"x":956,"y":193.91895440419,"bCoef":0.1,"trait":"line"},/*51*/{"x":975,"y":-188.96236130943,"bCoef":0.1,"trait":"line"},/*52*/{"x":956,"y":-188.96236130943,"bCoef":0.1,"trait":"line"},/*53*/{"x":-667.82213435646,"y":-460,"bCoef":0.1,"trait":"line"},/*54*/{"x":-667.82213435646,"y":-473,"bCoef":0.1,"trait":"line"},/*55*/{"x":621.80174276174,"y":460,"bCoef":0.1,"trait":"line"},/*56*/{"x":621.80174276174,"y":473,"bCoef":0.1,"trait":"line"},/*57*/{"x":644.74331148229,"y":-460,"bCoef":0.1,"trait":"line"},/*58*/{"x":644.74331148229,"y":-473,"bCoef":0.1,"trait":"line"},/*59*/{"x":634.35340467604,"y":4.2212921610516,"bCoef":0.1,"trait":"line","curve":180},/*60*/{"x":634.35340467604,"y":1.7712285482462,"bCoef":0.1,"trait":"line","curve":180},/*61*/{"x":634.35340467604,"y":6.6713557738571,"bCoef":0.1,"trait":"line","curve":180},/*62*/{"x":634.35340467604,"y":-0.67883506455928,"bCoef":0.1,"trait":"line","curve":180},/*63*/{"x":634.35340467604,"y":0.54619674184346,"bCoef":0.1,"trait":"line","curve":180},/*64*/{"x":634.35340467604,"y":5.4463239674544,"bCoef":0.1,"trait":"line","curve":180},/*65*/{"x":634.35340467604,"y":-1.2913509677606,"bCoef":0.1,"trait":"line","curve":180},/*66*/{"x":634.35340467604,"y":7.2838716770584,"bCoef":0.1,"trait":"line","curve":180},/*67*/{"x":484.86942705432,"y":4.2212921610516,"bCoef":0.1,"trait":"line","curve":180},/*68*/{"x":484.86942705432,"y":1.7712285482462,"bCoef":0.1,"trait":"line","curve":180},/*69*/{"x":484.86942705432,"y":6.6713557738571,"bCoef":0.1,"trait":"line","curve":180},/*70*/{"x":484.86942705432,"y":-0.67883506455928,"bCoef":0.1,"trait":"line","curve":180},/*71*/{"x":484.86942705432,"y":0.54619674184346,"bCoef":0.1,"trait":"line","curve":180},/*72*/{"x":484.86942705432,"y":5.4463239674544,"bCoef":0.1,"trait":"line","curve":180},/*73*/{"x":484.86942705432,"y":-1.2913509677606,"bCoef":0.1,"trait":"line","curve":180},/*74*/{"x":484.86942705432,"y":7.2838716770584,"bCoef":0.1,"trait":"line","curve":180},/*75*/{"x":-975,"y":-191.85660774843,"bCoef":0.1,"trait":"line"},/*76*/{"x":-956,"y":-191.96236130943,"bCoef":0.1,"trait":"line"},/*77*/{"x":-975,"y":190.91895440419,"bCoef":0.1,"trait":"line"},/*78*/{"x":-956,"y":190.91895440419,"bCoef":0.1,"trait":"line"},/*79*/{"x":-950,"y":432.90041943973,"bCoef":0.1,"trait":"line","curve":-90},/*80*/{"x":-926.21802170761,"y":460,"bCoef":0.1,"trait":"line","curve":-90},/*81*/{"x":-950,"y":-433.32499678239,"bCoef":0.1,"trait":"line","curve":90},/*82*/{"x":-925.43621788149,"y":-460,"bCoef":0.1,"trait":"line","curve":90},/*83*/{"x":950,"y":-433.36622514797,"bCoef":0.1,"trait":"line","curve":-90},/*84*/{"x":927.73220749769,"y":-460,"bCoef":0.1,"trait":"line","curve":-90},/*85*/{"x":950,"y":434.55334331787,"bCoef":0.1,"trait":"line","curve":90},/*86*/{"x":925.51401132381,"y":460,"bCoef":0.1,"trait":"line","curve":90},/*87*/{"x":950,"y":-319.66892509968,"bCoef":0,"trait":"line","curve":90},/*88*/{"x":-635.67083595539,"y":111.16613046747,"bCoef":0,"cMask":[""],"trait":"line","curve":0},/*89*/{"x":-635.67083595539,"y":-112.20953737271,"bCoef":0,"cMask":[""],"trait":"line","curve":44.336382176589},/*90*/{"x":-950,"y":-322.66892509968,"bCoef":0,"cMask":[""],"trait":"line","curve":-90},/*91*/{"x":-635.82253673536,"y":-2.314063297901,"bCoef":0.1,"trait":"line","curve":180},/*92*/{"x":-635.83851134042,"y":0.13595112921681,"bCoef":0.1,"trait":"line","curve":180},/*93*/{"x":-635.80656213031,"y":-4.764077725019,"bCoef":0.1,"trait":"line","curve":180},/*94*/{"x":-635.85448594547,"y":2.5859655563347,"bCoef":0.1,"trait":"line","curve":180},/*95*/{"x":-635.84649864294,"y":1.3609583427757,"bCoef":0.1,"trait":"line","curve":180},/*96*/{"x":-635.81454943284,"y":-3.53907051146,"bCoef":0.1,"trait":"line","curve":180},/*97*/{"x":-635.85847959673,"y":3.1984691631142,"bCoef":0.1,"trait":"line","curve":180},/*98*/{"x":-635.80256847905,"y":-5.3765813317984,"bCoef":0.1,"trait":"line","curve":180},/*99*/{"x":-486.3415600448,"y":-1.3935524756233,"bCoef":0.1,"trait":"line","curve":180},/*100*/{"x":-486.35753464985,"y":1.0564619514946,"bCoef":0.1,"trait":"line","curve":180},/*101*/{"x":-486.32558543975,"y":-3.8435669027412,"bCoef":0.1,"trait":"line","curve":180},/*102*/{"x":-486.3735092549,"y":3.5064763786125,"bCoef":0.1,"trait":"line","curve":180},/*103*/{"x":-486.36552195238,"y":2.2814691650535,"bCoef":0.1,"trait":"line","curve":180},/*104*/{"x":-486.33357274227,"y":-2.6185596891822,"bCoef":0.1,"trait":"line","curve":180},/*105*/{"x":-486.37750290617,"y":4.1189799853919,"bCoef":0.1,"trait":"line","curve":180},/*106*/{"x":-486.32159178848,"y":-4.4560705095206,"bCoef":0.1,"trait":"line","curve":180},/*107*/{"x":-950,"y":321.62551819445,"bCoef":0,"trait":"line","curve":90},/*108*/{"x":486.4717644406,"y":-216.68073468914,"bCoef":0.1,"trait":"line","curve":200},/*109*/{"x":486.26181026907,"y":-213.90354363921,"bCoef":0.1,"trait":"line","curve":200},/*110*/{"x":484.90815678836,"y":227.79125744183,"bCoef":0.1,"trait":"line","curve":200},/*111*/{"x":484.69820261683,"y":230.56844849177,"bCoef":0.1,"trait":"line","curve":200},/*112*/{"x":-487.89251107699,"y":-222.71985942166,"bCoef":0.1,"trait":"line","curve":200},/*113*/{"x":-488.10246524852,"y":-219.94266837173,"bCoef":0.1,"trait":"line","curve":200},/*114*/{"x":-487.11070725087,"y":223.27169507557,"bCoef":0.1,"trait":"line","curve":200},/*115*/{"x":-487.3206614224,"y":226.04888612551,"bCoef":0.1,"trait":"line","curve":200},/*116*/{"x":-0.077614373673782,"y":-2.4626457981722,"bCoef":0.1,"trait":"line","curve":180},/*117*/{"x":-0.10499941090626,"y":2.3835365851378,"bCoef":0.1,"trait":"line","curve":180},/*118*/{"x":-0.050229336441873,"y":-7.3088281814824,"bCoef":0.1,"trait":"line","curve":180},/*119*/{"x":-0.13238444813857,"y":7.2297189684479,"bCoef":0.1,"trait":"line","curve":180},/*120*/{"x":-0.11869192952281,"y":4.8066277767929,"bCoef":0.1,"trait":"line","curve":180},/*121*/{"x":-0.063921855057799,"y":-4.8857369898273,"bCoef":0.1,"trait":"line","curve":180},/*122*/{"x":-0.13923070744664,"y":8.4412645642754,"bCoef":0.1,"trait":"line","curve":180},/*123*/{"x":-0.043383077133171,"y":-8.5203737773099,"bCoef":0.1,"trait":"line","curve":180},/*124*/{"x":0.77952848346911,"y":1.5373542018278,"bCoef":0.1,"trait":"line","curve":180},/*125*/{"x":2.7521434462366,"y":3.3835365851378,"bCoef":0.1,"trait":"line","curve":180},/*126*/{"x":0.80691352070102,"y":-3.3088281814824,"bCoef":0.1,"trait":"line","curve":180},/*127*/{"x":1.7247584090043,"y":2.2297189684479,"bCoef":0.1,"trait":"line","curve":180},/*128*/{"x":2.73845092762,"y":5.8066277767929,"bCoef":0.1,"trait":"line","curve":180},/*129*/{"x":0.79322100208503,"y":-0.88573698982727,"bCoef":0.1,"trait":"line","curve":180},/*130*/{"x":1.7179121496962,"y":3.4412645642754,"bCoef":0.1,"trait":"line","curve":180},/*131*/{"x":0.81375978000966,"y":-4.5203737773099,"bCoef":0.1,"trait":"line","curve":180},/*132*/{"x":-950,"y":-322.66892509968,"bCoef":0,"cMask":[""],"trait":"line","curve":-90},/*133*/{"x":-950,"y":321.62551819445,"bCoef":0,"trait":"line","curve":90},/*134*/{"x":-635.67083595539,"y":111.16613046747,"bCoef":0,"cMask":[""],"trait":"line","curve":90},/*135*/{"x":-950,"y":321.62551819445,"bCoef":0,"trait":"line","curve":90},/*136*/{"x":-635.67083595539,"y":-112.20953737271,"bCoef":0,"cMask":[""],"trait":"line","curve":-90},/*137*/{"x":-950,"y":-322.66892509968,"bCoef":0,"cMask":[""],"trait":"line","curve":-90},/*138*/{"x":0,"y":120,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969","curve":180},/*139*/{"x":0,"y":120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969"},/*140*/{"x":0,"y":120,"cMask":[],"color":"ffffff"},/*141*/{"x":0,"y":120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},/*142*/{"x":0,"y":120,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},/*143*/{"x":0,"y":121,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180.5,"color":"555555"},/*144*/{"x":0,"y":121,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},/*145*/{"x":0,"y":121,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},/*146*/{"x":0,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*147*/{"x":0,"y":-90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*148*/{"x":0,"y":90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*149*/{"x":0,"y":-90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*150*/{"x":0,"y":90,"cMask":[],"color":"939393"},/*151*/{"x":0,"y":90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*152*/{"x":0,"y":90.71794871794872,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*153*/{"x":0,"y":-90.71794871794872,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*154*/{"x":0,"y":90.71794871794872,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*155*/{"x":0,"y":-90.71794871794872,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*156*/{"x":0,"y":91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*157*/{"x":0,"y":-91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*158*/{"x":0,"y":91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*159*/{"x":0,"y":-91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*160*/{"x":0,"y":-91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":93.241608812827},/*161*/{"x":0,"y":91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-93.241608812827},/*162*/{"x":0,"y":-91,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*163*/{"x":0,"y":91,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*164*/{"x":-0.6505369938427,"y":90.95465763683406,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*165*/{"x":-0.6505369938427,"y":-89.00213903605642,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*166*/{"x":-0.6505369938427,"y":90.95465763683406,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*167*/{"x":-0.6505369938427,"y":-89.00213903605642,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*168*/{"x":-0.7232568860606743,"y":86.0073021995592,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*169*/{"x":-0.7232568860606743,"y":-84.30895179442639,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*170*/{"x":-0.7232568860606743,"y":86.0073021995592,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*171*/{"x":-0.7232568860606743,"y":-84.30895179442639,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*172*/{"x":-0.809522640554488,"y":80.13838055338022,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*173*/{"x":-0.809522640554488,"y":-78.74154339994371,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*174*/{"x":-0.809522640554488,"y":80.13838055338022,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*175*/{"x":-0.809522640554488,"y":-78.74154339994371,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*176*/{"x":-58.64166495512634,"y":-53.175350882093234,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*177*/{"x":-33.8307150620987,"y":-47.78166612273941,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*178*/{"x":-3.086711933781892,"y":-54.79345630989937,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*179*/{"x":10.397499964602718,"y":-32.67934879654866,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*180*/{"x":-3.086711933781892,"y":-11.104609759133329,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*181*/{"x":-33.29134658616332,"y":-19.19513689816408,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*182*/{"x":-28.95294797537871,"y":-44.529821398259394,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*183*/{"x":-5.337989050729524,"y":-49.91568922317938,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*184*/{"x":5.019449074116602,"y":-32.92949069843172,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*185*/{"x":-5.337989050729524,"y":-16.35758969867795,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*186*/{"x":-28.538650450384864,"y":-22.572052573585594,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*187*/{"x":-23.29778675921276,"y":-40.75971392081542,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*188*/{"x":-7.948063458190758,"y":-44.26052800701339,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*189*/{"x":-1.2157286770407496,"y":-33.21949896592742,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*190*/{"x":-7.948063458190758,"y":-22.447763316087446,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*191*/{"x":-23.028493367966693,"y":-26.487164184777413,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*192*/{"x":-18.486712082024912,"y":-37.70900450284285,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*193*/{"x":-9.825082505019692,"y":-39.68446388005461,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*194*/{"x":-6.026122164227919,"y":-33.454168921156075,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*195*/{"x":-9.825082505019692,"y":-27.375832375889253,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*196*/{"x":-18.334753668393244,"y":-29.655208580364306,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*197*/{"x":10.936868440538095,"y":-76.90756382325009,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*198*/{"x":-10.841211502798409,"y":46.784937115255055,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*199*/{"x":7.1346345023234,"y":20.87687098937728,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*200*/{"x":32.00348373101125,"y":28.11552139351749,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*201*/{"x":36.593082559603765,"y":53.14008767638626,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*202*/{"x":8.832380641928397,"y":67.53175237888709,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*203*/{"x":-5.046442920847778,"y":45.897377006837225,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*204*/{"x":8.76109096714436,"y":25.99697838840937,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*205*/{"x":27.86325051961479,"y":31.55710116260402,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*206*/{"x":31.388594547374204,"y":50.77886946683654,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*207*/{"x":10.065156842493117,"y":61.83333655716329,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*208*/{"x":1.6718669038512775,"y":44.868362006140316,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*209*/{"x":10.64676393104614,"y":31.93310290416218,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*210*/{"x":23.063167640151942,"y":35.54718270738872,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*211*/{"x":25.354641258195603,"y":48.041332105139844,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*212*/{"x":11.494406750022893,"y":55.226735713852236,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*213*/{"x":7.281763458339138,"y":43.87723731654312,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*214*/{"x":12.346169637970597,"y":36.578055394712614,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*215*/{"x":19.352568873823078,"y":38.61742899796187,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*216*/{"x":20.64561470114773,"y":45.66769901526428,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*217*/{"x":12.824482371536005,"y":49.72231962303773,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*218*/{"x":38.053767417921556,"y":-24.959486093658818,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*219*/{"x":39.54402733569867,"y":4.570925076202384,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*220*/{"x":60.43818418846064,"y":6.677833104085571,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*221*/{"x":74.64941646255942,"y":-14.238800038084722,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*222*/{"x":61.14895079765635,"y":-36.80196880797294,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*223*/{"x":41.79707774509096,"y":-22.1532708458745,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*224*/{"x":42.94177014570238,"y":0.5295087483667186,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*225*/{"x":58.99090511956302,"y":2.1478583929726347,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*226*/{"x":69.90677918517514,"y":-13.918540977100198,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*227*/{"x":59.53685628314812,"y":-31.249670611941873,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*228*/{"x":46.13697815565302,"y":-18.899815042974573,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*229*/{"x":46.881028216050424,"y":-4.156008306717757,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*230*/{"x":57.31296594905986,"y":-3.104081037723893,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*231*/{"x":64.40828409170774,"y":-13.547240628271222,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*232*/{"x":57.6678342053902,"y":-24.812474890918363,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*233*/{"x":49.7032148562896,"y":-16.06451438778283,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*234*/{"x":50.1230716760853,"y":-7.744794872323602,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*235*/{"x":56.0096651111406,"y":-7.15120734196282,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*236*/{"x":60.01345177734906,"y":-13.04413311091451,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*237*/{"x":56.20991219864133,"y":-19.40094387340825,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*238*/{"x":-76.98019313692936,"y":20.178761845118906,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*239*/{"x":-71.0471399016402,"y":3.458339091122023,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*240*/{"x":-49.472400864224824,"y":6.69454994673433,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*241*/{"x":-40.8425052492587,"y":30.966131363826573,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*242*/{"x":-52.7086117198371,"y":47.68655411782346,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*243*/{"x":-69.96840294976936,"y":37.97792155098657,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*244*/{"x":-72.44417589718435,"y":20.88751453882907,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*245*/{"x":-68.0703785880575,"y":8.561358485835175,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*246*/{"x":-52.165661100323426,"y":10.947066108995273,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*247*/{"x":-45.80377410522977,"y":28.839873282696118,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*248*/{"x":-54.55136872348356,"y":41.16602933569002,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*249*/{"x":-67.27514271367082,"y":34.00890646620968,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*250*/{"x":-67.93340652273672,"y":21.59232225358651,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*251*/{"x":-65.11018618607622,"y":13.635974032088784,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*252*/{"x":-54.84393041640174,"y":15.17591239753996,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*253*/{"x":-50.737428108531894,"y":26.725450138423763,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*254*/{"x":-56.38386878185289,"y":34.6817983599215,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*255*/{"x":-64.59687339759252,"y":30.06198326356798,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*256*/{"x":-64.12022580828621,"y":22.188131740219404,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*257*/{"x":-62.60778634221806,"y":17.925802335845628,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*258*/{"x":-57.10800646560673,"y":18.750769317337316,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*259*/{"x":-54.90809451496221,"y":24.93802167852509,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*260*/{"x":-57.93297344709841,"y":29.200351082898877,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*261*/{"x":-62.33279734838752,"y":26.725450138423763,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*262*/{"x":58.401294322851854,"y":-51.01787697835168,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*263*/{"x":70.80676926936565,"y":30.966131363826573,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*264*/{"x":55.704451943174924,"y":55.23771278091883,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*265*/{"x":-6.322922789394167,"y":78.9699257220757,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*266*/{"x":-43.53934762893559,"y":66.02508229962652,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*267*/{"x":-76.98019313692936,"y":-21.3526108019056,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*268*/{"x":-953,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*269*/{"x":-953,"y":-460,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*270*/{"x":-953,"y":460,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*271*/{"x":-953,"y":90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*272*/{"x":-950,"y":463,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*273*/{"x":951,"y":463,"bCoef":1,"trait":"ballArea"},/*274*/{"x":953,"y":456,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*275*/{"x":953,"y":90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*276*/{"x":953,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*277*/{"x":953,"y":-456,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*278*/{"x":-950,"y":-463,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},/*279*/{"x":951,"y":-463,"bCoef":1,"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"curve":0,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea","x":951},{"v0":6,"v1":7,"trait":"ballArea","x":951},{"v0":8,"v1":9,"trait":"kickOffBarrier","x":0},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier","x":0},{"v0":2,"v1":12,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-821},{"v0":13,"v1":15,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585},{"v0":1,"v1":0,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-950},{"v0":5,"v1":4,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":950},{"v0":2,"v1":3,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-950},{"v0":6,"v1":7,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":950},{"v0":0,"v1":16,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":460},{"v0":3,"v1":17,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-460},{"v0":18,"v1":19,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":21,"v1":20,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"ffffff","bCoef":0,"trait":"line","x":-950},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"ffffff","bCoef":0,"trait":"line"},{"v0":22,"v1":23,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":958},{"v0":24,"v1":25,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-958},{"v0":26,"v1":27,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-958},{"v0":28,"v1":29,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":958},{"v0":30,"v1":31,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":32,"v1":33,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":0},{"v0":34,"v1":35,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":[""],"trait":"line"},{"v0":36,"v1":37,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":[""],"trait":"line"},{"v0":39,"v1":40,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":41,"v1":42,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":43,"v1":44,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":45,"v1":46,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":47,"v1":48,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":49,"v1":50,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":251.96814834},{"v0":51,"v1":52,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-251.96814834},{"v0":53,"v1":54,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":55,"v1":56,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":57,"v1":58,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":60,"v1":59,"curve":180.00000000015,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":59,"v1":60,"curve":180.00000000011,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":61,"curve":179.99999999999,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":61,"v1":62,"curve":180.00000000001,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":63,"curve":180.00000000006,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":63,"v1":64,"curve":180.00000000001,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":65,"curve":179.99999999999,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":66,"curve":179.99999999999,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":68,"v1":67,"curve":179.99999999994,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":67,"v1":68,"curve":180.00000000006,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":70,"v1":69,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":69,"v1":70,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":72,"v1":71,"curve":179.99999999998,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":71,"v1":72,"curve":179.99999999998,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":74,"v1":73,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":73,"v1":74,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":75,"v1":76,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":77,"v1":78,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":251.96814834},{"v0":80,"v1":79,"curve":-91.636910923379,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":82,"v1":81,"curve":91.636910923384,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":84,"v1":83,"curve":-91.636910923386,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":86,"v1":85,"curve":91.636910923367,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":38,"v1":87,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0,"trait":"line"},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":[""],"trait":"line"},{"v0":92,"v1":91,"curve":180.04149903472,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":91,"v1":92,"curve":180.04149903448,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":94,"v1":93,"curve":180.04149903461,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":93,"v1":94,"curve":180.04149903457,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":96,"v1":95,"curve":180.0414990346,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":95,"v1":96,"curve":180.04149903458,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":98,"v1":97,"curve":180.04149903458,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":97,"v1":98,"curve":180.0414990346,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":100,"v1":99,"curve":180.04149903447,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":99,"v1":100,"curve":180.04149903471,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":102,"v1":101,"curve":180.0414990346,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":101,"v1":102,"curve":180.04149903457,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":104,"v1":103,"curve":180.04149903454,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":103,"v1":104,"curve":180.04149903457,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":106,"v1":105,"curve":180.04149903458,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":105,"v1":106,"curve":180.04149903459,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":108,"v1":109,"curve":-196.43548932859,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":109,"v1":108,"curve":-211.97212519444,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":110,"v1":111,"curve":-196.43548932841,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":111,"v1":110,"curve":-211.97212519486,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":112,"v1":113,"curve":-196.43548932818,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":113,"v1":112,"curve":-211.97212519503,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":114,"v1":115,"curve":-196.4354893283,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":115,"v1":114,"curve":-211.97212519445,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":117,"v1":116,"curve":179.83332296199,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":116,"v1":117,"curve":179.8333229623,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":119,"v1":118,"curve":179.83332296215,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":118,"v1":119,"curve":179.8333229621,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":121,"v1":120,"curve":179.83332296204,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":120,"v1":121,"curve":179.83332296211,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":123,"v1":122,"curve":179.8333229621,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"curve":179.83332296208,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":125,"v1":124,"curve":179.83332296199,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":124,"v1":125,"curve":179.8333229623,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":127,"v1":126,"curve":179.83332296215,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":126,"v1":127,"curve":179.8333229621,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":129,"v1":128,"curve":179.83332296204,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":128,"v1":129,"curve":179.83332296211,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":131,"v1":130,"curve":179.8333229621,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":130,"v1":131,"curve":179.83332296208,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":134,"v1":135,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0,"trait":"line"},{"v0":136,"v1":137,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":[""],"trait":"line"},{"v0":146,"v1":147,"curve":179.42829117403,"color":"939393","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":0.0049891420830909},{"v0":149,"v1":148,"curve":180,"color":"939393","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.1232339957368e-17},{"v0":152,"v1":153,"curve":-180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":154,"v1":155,"curve":180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":156,"v1":157,"curve":-179.69199272082727,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":158,"v1":159,"curve":179.9101787569867,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":164,"v1":165,"curve":-180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":166,"v1":167,"curve":180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":168,"v1":169,"curve":-180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":170,"v1":171,"curve":180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":172,"v1":173,"curve":-180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":174,"v1":175,"curve":180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":176,"v1":177,"curve":41.815960942019316,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":177,"v1":178,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":178,"v1":179,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":179,"v1":180,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":180,"v1":181,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":181,"v1":177,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":182,"v1":183,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":183,"v1":184,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":184,"v1":185,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":185,"v1":186,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":186,"v1":182,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":187,"v1":188,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":188,"v1":189,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":189,"v1":190,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":190,"v1":191,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":191,"v1":187,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":192,"v1":193,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":193,"v1":194,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":194,"v1":195,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":195,"v1":196,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":196,"v1":192,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":178,"v1":197,"curve":26.392926384436958,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":198,"v1":199,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":199,"v1":200,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":200,"v1":201,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":201,"v1":202,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":202,"v1":198,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":203,"v1":204,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":204,"v1":205,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":205,"v1":206,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":206,"v1":207,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":207,"v1":203,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":208,"v1":209,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":209,"v1":210,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":210,"v1":211,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":211,"v1":212,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":212,"v1":208,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":213,"v1":214,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":214,"v1":215,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":215,"v1":216,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":216,"v1":217,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":217,"v1":213,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":218,"v1":219,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":219,"v1":220,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":220,"v1":221,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":221,"v1":222,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":222,"v1":218,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":223,"v1":224,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":224,"v1":225,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":225,"v1":226,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":226,"v1":227,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":227,"v1":223,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":228,"v1":229,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":229,"v1":230,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":230,"v1":231,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":231,"v1":232,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":232,"v1":228,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":233,"v1":234,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":234,"v1":235,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":235,"v1":236,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":236,"v1":237,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":237,"v1":233,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":238,"v1":239,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":239,"v1":240,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":240,"v1":241,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":241,"v1":242,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":242,"v1":243,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":243,"v1":238,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":244,"v1":245,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":245,"v1":246,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":246,"v1":247,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":247,"v1":248,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":248,"v1":249,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":249,"v1":244,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":250,"v1":251,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":251,"v1":252,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":252,"v1":253,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":253,"v1":254,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":254,"v1":255,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":255,"v1":250,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":256,"v1":257,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":257,"v1":258,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":258,"v1":259,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":259,"v1":260,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":260,"v1":261,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":261,"v1":256,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":240,"v1":181,"curve":23.349737619501724,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":180,"v1":199,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":179,"v1":218,"curve":24.678458804936827,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":222,"v1":262,"curve":-21.76978243279372,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":220,"v1":263,"curve":43.26339127378437,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":200,"v1":219,"curve":-25.023191638187097,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":201,"v1":264,"curve":-40.88059361000261,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":202,"v1":265,"curve":24.7138580010139,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":242,"v1":266,"curve":-48.32967343244267,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":241,"v1":198,"curve":-33.75534631846241,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":239,"v1":267,"curve":30.438929662347565,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":268,"v1":269,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-953},{"v0":271,"v1":270,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-953},{"v0":272,"v1":273,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":463},{"v0":275,"v1":274,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":953},{"v0":276,"v1":277,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":953},{"v0":278,"v1":279,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-463}],"goals":[{"p0":[-957.4,-90],"p1":[-957.4,90],"team":"red"},{"p0":[957.4,90],"p1":[957.4,-90],"team":"blue"}],"discs":[{"radius":5,"pos":[-950,90],"color":"6666CC","trait":"goalPost"},{"radius":5,"pos":[-950,-90],"color":"6666CC","trait":"goalPost"},{"radius":5,"pos":[950,90],"color":"6666CC","trait":"goalPost"},{"radius":5,"pos":[950,-90],"color":"6666CC","trait":"goalPost"},{"radius":3,"invMass":0,"pos":[-950,460],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-950,-460],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[950,-460],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[950,460],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-456,"trait":"ballArea"},{"normal":[0,-1],"dist":-456,"trait":"ballArea"},{"normal":[0,1],"dist":-508,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-508,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-1002,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-1002,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n/d"],"color":"cccccc"}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.4,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFCC00"}}';

var x7Map = '{"name":"𝗙𝘂𝘁𝘀𝗮𝗹𝘅𝟳𝗙𝗖","canBeStored":true,"width":1265,"height":630,"bg":{"type":"hockey"},"vertexes":[/*0*/{"x":0,"y":-631,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/*1*/{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/*2*/{"x":-1200,"y":-120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80]},/*3*/{"x":-1235,"y":-120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80]},/*4*/{"x":-1235,"y":120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80]},/*5*/{"x":-1200,"y":120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80]},/*6*/{"x":1200,"y":-120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,-120]},/*7*/{"x":1235,"y":-120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,-120]},/*8*/{"x":1235,"y":120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,120]},/*9*/{"x":1200,"y":120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,120]},/*10*/{"x":-1200,"y":120,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[-700,80]},/*11*/{"x":-1200,"y":600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*12*/{"x":-1200,"y":-120,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[-700,-80]},/*13*/{"x":-1200,"y":-600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*14*/{"x":-1200,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*15*/{"x":1200,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*16*/{"x":1200,"y":120,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[1200,120],"color":"ffffff"},/*17*/{"x":1200,"y":600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*18*/{"x":1200,"y":-600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*19*/{"x":1200,"y":-120,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[1200,-120]},/*20*/{"x":-1200,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*21*/{"x":1200,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*22*/{"x":-1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"ffffff"},/*23*/{"x":-1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},/*24*/{"x":-1206.5,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},/*25*/{"x":-1206.5,"y":-120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"ffffff"},/*26*/{"x":1206.5,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},/*27*/{"x":1206.5,"y":-120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[1200,-120],"color":"ffffff"},/*28*/{"x":1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[1200,120],"color":"ffffff"},/*29*/{"x":1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},/*30*/{"x":-1200,"y":-120,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"F80000"},/*31*/{"x":-1200,"y":120,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"F80000"},/*32*/{"x":1200,"y":-120,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"0000F8","pos":[1200,-120]},/*33*/{"x":1200,"y":120,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"0000F8","pos":[1200,120]},/*34*/{"x":-1200,"y":560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},/*35*/{"x":-740,"y":100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},/*36*/{"x":-1200,"y":-560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},/*37*/{"x":-740,"y":-100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},/*38*/{"x":1200,"y":560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},/*39*/{"x":740,"y":100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},/*40*/{"x":1200,"y":-560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},/*41*/{"x":740,"y":-100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},/*42*/{"x":740,"y":100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":0},/*43*/{"x":740,"y":-100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":0},/*44*/{"x":740,"y":1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},/*45*/{"x":740,"y":-1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},/*46*/{"x":740,"y":3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},/*47*/{"x":740,"y":-4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},/*48*/{"x":740,"y":4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},/*49*/{"x":-740,"y":1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},/*50*/{"x":-740,"y":-1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},/*51*/{"x":-740,"y":3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},/*52*/{"x":-740,"y":-4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},/*53*/{"x":-740,"y":4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},/*54*/{"x":-1200,"y":-120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80],"vis":false},/*55*/{"x":-1235,"y":-120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80],"vis":false},/*56*/{"x":-1235,"y":120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80],"vis":false},/*57*/{"x":-1200,"y":120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80],"vis":false},/*58*/{"x":1200,"y":-120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,-120],"vis":false},/*59*/{"x":1235,"y":-120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,-120],"vis":false},/*60*/{"x":1235,"y":120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,120],"vis":false},/*61*/{"x":1200,"y":120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,120],"vis":false},/*62*/{"x":-1265.1,"y":15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"pos":[-1265.1,0]},/*63*/{"x":-1235,"y":15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false},/*64*/{"x":-1265.1,"y":-15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"pos":[-1265.1,0]},/*65*/{"x":-1235,"y":-15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false},/*66*/{"x":1235,"y":-15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false},/*67*/{"x":1265.1,"y":-15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"pos":[610.1,0]},/*68*/{"x":1235,"y":15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false},/*69*/{"x":1265.1,"y":15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"pos":[610.1,0]},/*70*/{"x":0,"y":600,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/*71*/{"x":0,"y":630,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/*72*/{"x":0,"y":120,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969","curve":180},/*73*/{"x":0,"y":-120,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969","curve":180},/*74*/{"x":0,"y":120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969"},/*75*/{"x":0,"y":-120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969"},/*76*/{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},/*77*/{"x":0,"y":120,"cMask":[],"color":"ffffff"},/*78*/{"x":0,"y":600,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/*79*/{"x":0,"y":120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},/*80*/{"x":0,"y":600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},/*81*/{"x":0,"y":120,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},/*82*/{"x":0,"y":-121,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180.5,"color":"555555"},/*83*/{"x":0,"y":121,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180.5,"color":"555555"},/*84*/{"x":0,"y":-121,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"FEBA01"},/*85*/{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},/*86*/{"x":0,"y":121,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},/*87*/{"x":0,"y":600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},/*88*/{"x":0,"y":121,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},/*89*/{"x":0,"y":-121,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},/*90*/{"x":-1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"ffffff"},/*91*/{"x":-1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},/*92*/{"x":-1206.5,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},/*93*/{"x":-1206.5,"y":-120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"ffffff"},/*94*/{"x":1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[1200,120],"color":"ffffff"},/*95*/{"x":1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},/*96*/{"x":1235,"y":-630,"bCoef":0.5,"cMask":["red","blue"]},/*97*/{"x":1235,"y":630,"bCoef":0.5,"cMask":["red","blue"]},/*98*/{"x":-1235,"y":-630,"bCoef":0.5,"cMask":["red","blue"]},/*99*/{"x":-1235,"y":630,"bCoef":0.5,"cMask":["red","blue"]},/*100*/{"x":0,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*101*/{"x":0,"y":-90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*102*/{"x":0,"y":90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*103*/{"x":0,"y":-90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*104*/{"x":0,"y":90,"cMask":[],"color":"939393"},/*105*/{"x":0,"y":90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*106*/{"x":0,"y":90.71794871794872,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*107*/{"x":0,"y":-90.71794871794872,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*108*/{"x":0,"y":90.71794871794872,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*109*/{"x":0,"y":-90.71794871794872,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*110*/{"x":0,"y":91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*111*/{"x":0,"y":-91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*112*/{"x":0,"y":91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*113*/{"x":0,"y":-91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*114*/{"x":0,"y":-91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":93.241608812827},/*115*/{"x":0,"y":91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-93.241608812827},/*116*/{"x":0,"y":-91,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*117*/{"x":0,"y":91,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"939393"},/*118*/{"x":-0.6505369938427,"y":90.95465763683406,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*119*/{"x":-0.6505369938427,"y":-89.00213903605642,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*120*/{"x":-0.6505369938427,"y":90.95465763683406,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*121*/{"x":-0.6505369938427,"y":-89.00213903605642,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*122*/{"x":-0.7232568860606743,"y":86.0073021995592,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*123*/{"x":-0.7232568860606743,"y":-84.30895179442639,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*124*/{"x":-0.7232568860606743,"y":86.0073021995592,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*125*/{"x":-0.7232568860606743,"y":-84.30895179442639,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*126*/{"x":-0.809522640554488,"y":80.13838055338022,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*127*/{"x":-0.809522640554488,"y":-78.74154339994371,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":-180},/*128*/{"x":-0.809522640554488,"y":80.13838055338022,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*129*/{"x":-0.809522640554488,"y":-78.74154339994371,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"939393","curve":180},/*130*/{"x":-58.64166495512634,"y":-53.175350882093234,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*131*/{"x":-33.8307150620987,"y":-47.78166612273941,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*132*/{"x":-3.086711933781892,"y":-54.79345630989937,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*133*/{"x":10.397499964602718,"y":-32.67934879654866,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*134*/{"x":-3.086711933781892,"y":-11.104609759133329,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*135*/{"x":-33.29134658616332,"y":-19.19513689816408,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*136*/{"x":-28.95294797537871,"y":-44.529821398259394,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*137*/{"x":-5.337989050729524,"y":-49.91568922317938,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*138*/{"x":5.019449074116602,"y":-32.92949069843172,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*139*/{"x":-5.337989050729524,"y":-16.35758969867795,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*140*/{"x":-28.538650450384864,"y":-22.572052573585594,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*141*/{"x":-23.29778675921276,"y":-40.75971392081542,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*142*/{"x":-7.948063458190758,"y":-44.26052800701339,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*143*/{"x":-1.2157286770407496,"y":-33.21949896592742,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*144*/{"x":-7.948063458190758,"y":-22.447763316087446,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*145*/{"x":-23.028493367966693,"y":-26.487164184777413,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*146*/{"x":-18.486712082024912,"y":-37.70900450284285,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*147*/{"x":-9.825082505019692,"y":-39.68446388005461,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*148*/{"x":-6.026122164227919,"y":-33.454168921156075,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*149*/{"x":-9.825082505019692,"y":-27.375832375889253,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*150*/{"x":-18.334753668393244,"y":-29.655208580364306,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*151*/{"x":10.936868440538095,"y":-76.90756382325009,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*152*/{"x":-10.841211502798409,"y":46.784937115255055,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*153*/{"x":7.1346345023234,"y":20.87687098937728,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*154*/{"x":32.00348373101125,"y":28.11552139351749,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*155*/{"x":36.593082559603765,"y":53.14008767638626,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*156*/{"x":8.832380641928397,"y":67.53175237888709,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*157*/{"x":-5.046442920847778,"y":45.897377006837225,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*158*/{"x":8.76109096714436,"y":25.99697838840937,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*159*/{"x":27.86325051961479,"y":31.55710116260402,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*160*/{"x":31.388594547374204,"y":50.77886946683654,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*161*/{"x":10.065156842493117,"y":61.83333655716329,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*162*/{"x":1.6718669038512775,"y":44.868362006140316,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*163*/{"x":10.64676393104614,"y":31.93310290416218,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*164*/{"x":23.063167640151942,"y":35.54718270738872,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*165*/{"x":25.354641258195603,"y":48.041332105139844,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*166*/{"x":11.494406750022893,"y":55.226735713852236,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*167*/{"x":7.281763458339138,"y":43.87723731654312,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*168*/{"x":12.346169637970597,"y":36.578055394712614,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*169*/{"x":19.352568873823078,"y":38.61742899796187,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*170*/{"x":20.64561470114773,"y":45.66769901526428,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*171*/{"x":12.824482371536005,"y":49.72231962303773,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*172*/{"x":38.053767417921556,"y":-24.959486093658818,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*173*/{"x":39.54402733569867,"y":4.570925076202384,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*174*/{"x":60.43818418846064,"y":6.677833104085571,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*175*/{"x":74.64941646255942,"y":-14.238800038084722,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*176*/{"x":61.14895079765635,"y":-36.80196880797294,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*177*/{"x":41.79707774509096,"y":-22.1532708458745,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*178*/{"x":42.94177014570238,"y":0.5295087483667186,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*179*/{"x":58.99090511956302,"y":2.1478583929726347,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*180*/{"x":69.90677918517514,"y":-13.918540977100198,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*181*/{"x":59.53685628314812,"y":-31.249670611941873,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*182*/{"x":46.13697815565302,"y":-18.899815042974573,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*183*/{"x":46.881028216050424,"y":-4.156008306717757,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*184*/{"x":57.31296594905986,"y":-3.104081037723893,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*185*/{"x":64.40828409170774,"y":-13.547240628271222,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*186*/{"x":57.6678342053902,"y":-24.812474890918363,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*187*/{"x":49.7032148562896,"y":-16.06451438778283,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*188*/{"x":50.1230716760853,"y":-7.744794872323602,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*189*/{"x":56.0096651111406,"y":-7.15120734196282,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*190*/{"x":60.01345177734906,"y":-13.04413311091451,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*191*/{"x":56.20991219864133,"y":-19.40094387340825,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*192*/{"x":-76.98019313692936,"y":20.178761845118906,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*193*/{"x":-71.0471399016402,"y":3.458339091122023,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*194*/{"x":-49.472400864224824,"y":6.69454994673433,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*195*/{"x":-40.8425052492587,"y":30.966131363826573,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*196*/{"x":-52.7086117198371,"y":47.68655411782346,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*197*/{"x":-69.96840294976936,"y":37.97792155098657,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*198*/{"x":-72.44417589718435,"y":20.88751453882907,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*199*/{"x":-68.0703785880575,"y":8.561358485835175,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*200*/{"x":-52.165661100323426,"y":10.947066108995273,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*201*/{"x":-45.80377410522977,"y":28.839873282696118,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*202*/{"x":-54.55136872348356,"y":41.16602933569002,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*203*/{"x":-67.27514271367082,"y":34.00890646620968,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*204*/{"x":-67.93340652273672,"y":21.59232225358651,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*205*/{"x":-65.11018618607622,"y":13.635974032088784,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*206*/{"x":-54.84393041640174,"y":15.17591239753996,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*207*/{"x":-50.737428108531894,"y":26.725450138423763,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*208*/{"x":-56.38386878185289,"y":34.6817983599215,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*209*/{"x":-64.59687339759252,"y":30.06198326356798,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*210*/{"x":-64.12022580828621,"y":22.188131740219404,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*211*/{"x":-62.60778634221806,"y":17.925802335845628,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*212*/{"x":-57.10800646560673,"y":18.750769317337316,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*213*/{"x":-54.90809451496221,"y":24.93802167852509,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*214*/{"x":-57.93297344709841,"y":29.200351082898877,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*215*/{"x":-62.33279734838752,"y":26.725450138423763,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*216*/{"x":58.401294322851854,"y":-51.01787697835168,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*217*/{"x":70.80676926936565,"y":30.966131363826573,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*218*/{"x":55.704451943174924,"y":55.23771278091883,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*219*/{"x":-6.322922789394167,"y":78.9699257220757,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*220*/{"x":-43.53934762893559,"y":66.02508229962652,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*221*/{"x":-76.98019313692936,"y":-21.3526108019056,"bCoef":0.1,"cMask":["wall"],"color":"939393"},/*222*/{"x":-1203,"y":-120,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[-700,-80]},/*223*/{"x":-1203,"y":-600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*224*/{"x":-1200,"y":-603,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*225*/{"x":1200,"y":-603,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},/*226*/{"x":-1203,"y":120,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[-700,80]},/*227*/{"x":-1203,"y":600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*228*/{"x":-1200,"y":603,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*229*/{"x":1200,"y":603,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*230*/{"x":1203,"y":120,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[1200,120],"color":"ffffff"},/*231*/{"x":1203,"y":600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*232*/{"x":1203,"y":-600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},/*233*/{"x":1203,"y":-120,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[1200,-120]}],"segments":[{"v0":0,"v1":1,"vis":false,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":2,"v1":3,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,-80],"y":-120},{"v0":3,"v1":4,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","x":-1235},{"v0":4,"v1":5,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,80],"y":120},{"v0":6,"v1":7,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[1200,-120],"y":-120},{"v0":7,"v1":8,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","x":1235},{"v0":8,"v1":9,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[1200,120],"y":120},{"v0":10,"v1":11,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":12,"v1":13,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":14,"v1":15,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":16,"v1":17,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":1200},{"v0":18,"v1":19,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":20,"v1":21,"curve":0,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-600},{"v0":22,"v1":23,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":24,"v1":25,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":26,"v1":27,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":28,"v1":29,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":30,"v1":31,"curve":0,"vis":true,"color":"F80000","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-550},{"v0":32,"v1":33,"curve":0,"vis":true,"color":"0000F8","bCoef":0.1,"cMask":["wall"],"trait":"line","x":550},{"v0":34,"v1":35,"curve":-93.241608812827,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":36,"v1":37,"curve":93.241608812827,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":35,"v1":37,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":38,"v1":39,"curve":93.241608812827,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":40,"v1":41,"curve":-93.241608812827,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":42,"v1":43,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":45,"v1":44,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":44,"v1":45,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":47,"v1":46,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":46,"v1":47,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":50,"v1":49,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":49,"v1":50,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":52,"v1":51,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":51,"v1":52,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":54,"v1":55,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,-80],"y":-120},{"v0":55,"v1":56,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","x":-1235},{"v0":56,"v1":57,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,80],"y":120},{"v0":58,"v1":59,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[1200,-120],"y":-120},{"v0":59,"v1":60,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","x":1235},{"v0":60,"v1":61,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[1200,120],"y":120},{"v0":62,"v1":63,"curve":0,"vis":false,"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","y":15},{"v0":64,"v1":65,"curve":0,"vis":false,"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","y":-15},{"v0":66,"v1":67,"curve":0,"vis":false,"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","y":-15},{"v0":68,"v1":69,"curve":0,"vis":false,"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","y":15},{"v0":70,"v1":71,"vis":false,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":72,"v1":73,"curve":180,"color":"696969","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":0.0049891420830909},{"v0":75,"v1":74,"curve":180,"color":"696969","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.1232339957368e-17},{"v0":83,"v1":82,"curve":180.5,"vis":true,"color":"555555","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":82,"v1":83,"curve":180.5,"vis":true,"color":"555555","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":85,"v1":84,"color":"ffffff","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":86,"v1":87,"color":"ffffff","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":90,"v1":91,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":92,"v1":93,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":94,"v1":95,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":96,"v1":97,"curve":0,"vis":false,"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"x":1235},{"v0":98,"v1":99,"curve":0,"vis":false,"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"x":-1235},{"v0":100,"v1":101,"curve":179.42829117403,"color":"939393","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":0.0049891420830909},{"v0":103,"v1":102,"curve":180,"color":"939393","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.1232339957368e-17},{"v0":106,"v1":107,"curve":-180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":110,"v1":111,"curve":-179.69199272082727,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":112,"v1":113,"curve":179.9101787569867,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":118,"v1":119,"curve":-180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":122,"v1":123,"curve":-180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":124,"v1":125,"curve":180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":126,"v1":127,"curve":-180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":128,"v1":129,"curve":180,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":130,"v1":131,"curve":41.815960942019316,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":131,"v1":132,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":132,"v1":133,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":133,"v1":134,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":134,"v1":135,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":135,"v1":131,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":136,"v1":137,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":137,"v1":138,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":138,"v1":139,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":139,"v1":140,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":140,"v1":136,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":141,"v1":142,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":142,"v1":143,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":143,"v1":144,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":144,"v1":145,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":145,"v1":141,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":146,"v1":147,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":147,"v1":148,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":148,"v1":149,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":149,"v1":150,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":150,"v1":146,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":132,"v1":151,"curve":26.392926384436958,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":152,"v1":153,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":153,"v1":154,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":154,"v1":155,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":155,"v1":156,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":156,"v1":152,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":157,"v1":158,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":158,"v1":159,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":159,"v1":160,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":160,"v1":161,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":161,"v1":157,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":162,"v1":163,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":163,"v1":164,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":164,"v1":165,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":165,"v1":166,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":166,"v1":162,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":167,"v1":168,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":168,"v1":169,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":169,"v1":170,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":170,"v1":171,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":171,"v1":167,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":172,"v1":173,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":173,"v1":174,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":174,"v1":175,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":175,"v1":176,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":176,"v1":172,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":177,"v1":178,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":178,"v1":179,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":179,"v1":180,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":180,"v1":181,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":181,"v1":177,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":182,"v1":183,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":183,"v1":184,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":184,"v1":185,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":185,"v1":186,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":186,"v1":182,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":187,"v1":188,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":188,"v1":189,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":189,"v1":190,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":190,"v1":191,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":191,"v1":187,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":192,"v1":193,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":193,"v1":194,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":194,"v1":195,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":195,"v1":196,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":196,"v1":197,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":197,"v1":192,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":198,"v1":199,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":199,"v1":200,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":200,"v1":201,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":201,"v1":202,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":202,"v1":203,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":203,"v1":198,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":204,"v1":205,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":205,"v1":206,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":206,"v1":207,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":207,"v1":208,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":208,"v1":209,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":209,"v1":204,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":210,"v1":211,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":211,"v1":212,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":212,"v1":213,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":213,"v1":214,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":214,"v1":215,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":215,"v1":210,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":194,"v1":135,"curve":23.349737619501724,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":134,"v1":153,"curve":0,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":133,"v1":172,"curve":24.678458804936827,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":176,"v1":216,"curve":-21.76978243279372,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":174,"v1":217,"curve":43.26339127378437,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":154,"v1":173,"curve":-25.023191638187097,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":155,"v1":218,"curve":-40.88059361000261,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":156,"v1":219,"curve":24.7138580010139,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":196,"v1":220,"curve":-48.32967343244267,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":195,"v1":152,"curve":-33.75534631846241,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":193,"v1":221,"curve":30.438929662347565,"vis":true,"color":"939393","bCoef":0.1,"cMask":["wall"]},{"v0":222,"v1":223,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-1203},{"v0":224,"v1":225,"curve":0,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-603},{"v0":226,"v1":227,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-1203},{"v0":228,"v1":229,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":603},{"v0":230,"v1":231,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":1203},{"v0":232,"v1":233,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":1203}],"planes":[{"normal":[0,1],"dist":-630,"bCoef":0.1},{"normal":[-1,0],"dist":-1265.1,"bCoef":0.1},{"normal":[0,-1],"dist":-600,"cMask":["ball"]},{"normal":[0,-1],"dist":-630,"bCoef":0.1},{"normal":[1,0],"dist":-1265.1,"bCoef":0.1},{"normal":[0,1],"dist":-600,"cMask":["ball"]}],"goals":[{"p0":[-1207.5,-120],"p1":[-1207.5,120],"team":"red","color":"ffffff"},{"p0":[1207.5,120],"p1":[1207.5,-120],"team":"blue","color":"ffffff"}],"discs":[{"radius":0.01,"invMass":0,"pos":[-1265.1,0],"color":"000000","bCoef":470,"vis":true,"x":-1265.1},{"radius":0.1,"invMass":0,"pos":[1265.1,0],"color":"000000","bCoef":470},{"radius":6,"invMass":0,"pos":[-1200,120],"color":"ffffff","trait":"goalPost","y":85},{"radius":6,"invMass":0,"pos":[-1200,-120],"color":"ffffff","trait":"goalPost","y":-110,"x":-560},{"radius":6,"invMass":0,"pos":[1200,120],"color":"ffffff","trait":"goalPost","y":85},{"radius":6,"invMass":0,"pos":[1200,-120],"color":"ffffff","trait":"goalPost","y":-110,"vis":true}],"playerPhysics":{"bCoef":0.1,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5.2},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01"},"spawnDistance":320,"traits":{}}';

/* OPTIONS */

var afkLimit = 12;
var drawTimeLimit = Infinity;
var maxTeamSize = 5; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
var slowMode = 0;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11 }
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
var countAFK = false; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var goldenGoal = false;
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
var banList = []; // Getting track of the bans, so we can unban ppl if we want

/* STATS */

var game;
var GKList = ["", ""];
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }]; // created to get ball speed
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* BALANCE & CHOOSE */

var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;

/* AUXILIARY */

var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;

loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);

/* OBJECTS */

function Goal(time, team, striker, assist) {
    this.time = time;
    this.team = team;
    this.striker = striker;
    this.assist = assist;
}

function Game(date, scores, goals) {
    this.date = date;
    this.scores = scores;
    this.goals = goals;
}

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // returns a random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function getTime(scores) { // returns the current time of the game
    return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
}

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

/* BUTTONS */

function PublicitaDiscord(player) {
    var scores = room.getScores();
    if (scores.time > 20 && !isTimeAddedShownseis) {
    room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", null, 0x9250FD, "bold")
    room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", null, 0x8466FD, "bold")
    room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", null, 0x7B73FD, "bold");
    room.sendAnnouncement("                                        💬  https://discord.gg/H4UPFpDJyA ⬅⬅⬅ 𝗙𝘂𝘁𝘀𝗮𝗹 𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝘁𝘆 [𝗡𝘂𝗲𝘃𝗼]", null, 0xF6FF43, "bold");
    room.sendAnnouncement("                                        💬  https://discord.gg/wmX35hKQrv ⬅⬅⬅ 𝗙𝘂𝘁𝘀𝗮𝗹 𝗟𝗲𝗮𝗴𝘂𝗲 [𝗟𝗶𝗴𝗮]", null, 0xF6FF43, "bold");
    isTimeAddedShownseis = true;
    }
}

function PublicitaDonacion(player) {
    var scores = room.getScores();
    if (scores.time > 40 && !isTimeAddedShownsiete) {
    room.sendAnnouncement("                                                                                                           ░█▀▀▄ ░█▀▀▀█ ░█▄─░█ ─█▀▀█", player, 0xffcd2c, "normal", 0);
    room.sendAnnouncement("                                                                                                           ░█─░█ ░█──░█ ░█░█░█ ░█▄▄█", player, 0xea8f73, "normal", 0);
    room.sendAnnouncement("                                                                                                           ░█▄▄▀ ░█▄▄▄█ ░█──▀█ ░█─░█", player, 0xd757b3, "normal", 0);
    room.sendAnnouncement("                       ¡𝗗𝗼𝗻𝗮 𝘆 𝗼𝗯𝘁𝗲𝗻𝗲 𝘃𝗶𝗽 𝘆 𝗺𝗮𝘀 𝗯𝗲𝗻𝗲𝗳𝗶𝗰𝗶𝗼𝘀!", player, 0xd733ff, "bold", 0);
    room.sendAnnouncement("                                                                                                          ➡➡  🔗 ʟɪɴᴋ: https://discord.gg/HJxrRxpWz7", player, 0xf1ff33, "bold");
    isTimeAddedShownsiete = true;
    }
}

function PublicitaHelp(player) {
    var scores = room.getScores();
    if (scores.time > 10 && !isTimeAddedShowncinco) {
    room.sendAnnouncement("「📣」 ¡𝗨𝘀𝗮 '!𝗮𝘆𝘂𝗱𝗮' 𝗽𝗮𝗿𝗮 𝘃𝗲𝗿 𝗹𝗮 𝗹𝗶𝘀𝘁𝗮 𝗱𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝗱𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲𝘀!", player, 0xd733ff, "bold", 0);
    isTimeAddedShowncinco = true;
    }
}

function PublicitaLiga(player) {
    var scores = room.getScores();
    if (scores.time > 80 && !isTimeAddedShowncuatro) {
    room.sendAnnouncement("「📣」 𝗧𝗲𝗻𝗲𝗺𝗼𝘀 𝘂𝗻𝗮 𝗹𝗶𝗴𝗮 𝗱𝗲 𝘅𝟰 𝗱𝗲𝗱𝗶𝗰𝗮𝗱𝗮 𝗮 𝗹𝗮 𝗰𝗼𝗺𝘂𝗻𝗶𝗱𝗮𝗱. 𝗠𝗮𝘀 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻 𝘂𝘀𝗮𝗻𝗱𝗼 '!𝗱𝗶𝘀𝗰𝗼𝗿𝗱'", player, 0xd733ff, "bold", 0);
    isTimeAddedShowncuatro = true;
    }
}

function topBtn() {
    if (teamS.length == 0) {
        return;
    }
    else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.RED);
                room.setPlayerTeam(teamS[1].id, Team.BLUE);
            }
            return;
        }
        else if (teamR.length < teamB.length) {
            room.setPlayerTeam(teamS[0].id, Team.RED);
        }
        else {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
        }
    }
}

function randomBtn() {
    if (teamS.length == 0) {
        return;
    }
    else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                var r = getRandomInt(teamS.length);
                room.setPlayerTeam(teamS[r].id, Team.RED);
                teamS = teamS.filter((spec) => spec.id != teamS[r].id);
                room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
            }
            return;
        }
        else if (teamR.length < teamB.length) {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
        }
        else {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
        }
    }
}

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    if (teamR.length <= teamB.length) {
        for (var i = 0; i < teamR.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamR.length; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
        }
    }
    else {
        for (var i = 0; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamB.length; i < teamR.length; i++) {
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
    }
}

function blueToRedBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[i].id, Team.RED);
    }
}

/* GAME FUNCTIONS */

function checkTime() {
    const scores = room.getScores();
    game.scores = scores;
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (scores.red != scores.blue) {
            if (checkTimeVariable == false) {
                checkTimeVariable = true;
                setTimeout(() => { checkTimeVariable = false; }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                setTimeout(() => { room.stopGame(); }, 2000);
            }
            return;
        }
        goldenGoal = true;
        room.sendChat("⚽ Gol gana !");
    }
    if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            room.sendChat("⌛ Quedan 60 segundos para que termine el partido !");
        }
    }
    if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
}

function endGame(winner) { // handles the end of a game : no stopGame function inside
    players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
    const scores = room.getScores();
    game.scores = scores;
    Rposs = Rposs / (Rposs + Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;
    endGameVariable = true;
    if (winner == Team.RED) {
        streak++;
        room.sendChat("🔴 El Red Team ganó " + scores.red + "-" + scores.blue + " ! Victorias consecutivas : " + streak + " 🏆");
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendChat("🔵 El Blue Team ganó " + scores.blue + "-" + scores.red + " ! Victorias consecutivas : " + streak + " 🏆");
    }
    else {
        streak = 0;
        room.sendChat("💤 Límite de empate, terminado! 💤");
    }
    room.sendChat("⭐ Posesión del balón : 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% : " + (Bposs * 100).toPrecision(3).toString() + "% 🔵");
    scores.red == 0 ? (scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " y " + GKList[1].name + " mantuvieron la valla invicta ! ") : room.sendChat("🏆 " + GKList[1].name + " mantuvo la valla invicta ! ")) : scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " mantuvo la valla invicta ! ") : null;
    updateStats();
}

function quickRestart() {
    room.stopGame();
    setTimeout(() => { room.startGame(); }, 2000);
}

function resumeGame() {
    setTimeout(() => { room.startGame(); }, 2000);
    setTimeout(() => { room.pauseGame(false); }, 1000);
}

function activateChooseMode() {
    inChooseMode = true;
    slowMode = 2;
    room.sendChat("Modo lento activado (2 segundos)!");
}

function deactivateChooseMode() {
    inChooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != 0) {
        slowMode = 0;
        room.sendChat("Modo lento terminado.");
    }
    redCaptainChoice = "";
    blueCaptainChoice = "";
}

function loadMap(map, scoreLim, timeLim) {
    if (map != '') {
        room.setCustomStadium(map);
    } else {
        console.log("error cargando mapa")
        room.setDefaultStadium("Classic");
    }
    room.setScoreLimit(scoreLim);
    room.setTimeLimit(timeLim);
}

/* PLAYER FUNCTIONS */

function updateTeams() { // update the players' list and all the teams' list
    players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
    teamR = players.filter(p => p.team === Team.RED);
    teamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
    if (countAFK && (teamR.length + teamB.length) > 1) {
        for (var i = 0; i < teamR.length; i++) {
            setActivity(teamR[i], getActivity(teamR[i]) + 1);
        }
        for (var i = 0; i < teamB.length; i++) {
            setActivity(teamB[i], getActivity(teamB[i]) + 1);
        }
    }
    for (var i = 0; i < extendedP.length; i++) {
        if (extendedP[i][eP.ACT] == 60 * (2 / 3 * afkLimit)) {
            room.sendChat("[PV] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", si no te mueves o envías un mensaje dentro de los siguientes " + Math.floor(afkLimit / 3) + " segundos, seras kickeado!", extendedP[i][eP.ID]);
        }
        if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
            extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
                setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
            }
            room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
        }
    }
}

function getAuth(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function getAFK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

/* BALANCE & CHOOSE FUNCTIONS */

function updateRoleOnPlayerIn() {
    updateTeams();
    if (inChooseMode) {
        if (players.length == 6) {
            loadMap(x3Map, scoreLimitx3, timeLimitx3); 
        }
        getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    }
    balanceTeams();
}

function updateRoleOnPlayerOut() {
    updateTeams();
    if (room.getScores() != null) {
        var scores = room.getScores();
        if (players.length >= 2 * maxTeamSize && scores.time >= (5 / 6) * game.scores.timeLimit && teamR.length != teamB.length) {
            if (teamR.length < teamB.length) {
                if (scores.blue - scores.red == 2) {
                    endGame(Team.BLUE);
                    room.sendChat("🤖 Abandono detectado. Juego terminado 🤖");
                    setTimeout(() => { room.stopGame(); }, 100);
                    return;
                }
            }
            else {
                if (scores.red - scores.blue == 2) {
                    endGame(Team.RED);
                    room.sendChat("🤖 Abandono detectado. Juego terminado 🤖");
                    setTimeout(() => { room.stopGame(); }, 100);
                    return;
                }
            }
        }
    }
    if (inChooseMode) {
        if (players.length < 6) {
            loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
        }
        if (teamR.length == 0 || teamB.length == 0) {
            teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
            return;
        }
        if (Math.abs(teamR.length - teamB.length) == teamS.length) {
            room.sendChat("No hay alternativa, déjame manejar esta situación ...");
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (teamR.length > teamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 5 * i);
                }
            }
            else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 5 * i);
                }
            }
            return;
        }
        if (streak == 0 && room.getScores() == null) {
            if (Math.abs(teamR.length - teamB.length) == 2) { // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
                room.sendChat("🤖 Equilibrando equipos... 🤖");
                teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
            }
        }
        if (teamR.length == teamB.length && teamS.length < 2) {
            deactivateChooseMode();
            resumeGame();
            return;
        }
        capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    }
    balanceTeams();
}

function balanceTeams() {
    if (!inChooseMode) {
        if (players.length == 1 && teamR.length == 0) { // 1 player
            quickRestart();
            loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
            room.setPlayerTeam(players[0].id, Team.RED);
        }
        else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) { // spec players supply required players
            const n = Math.abs(teamR.length - teamB.length);
            if (teamR.length > teamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.BLUE);
                }
            }
            else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.RED);
                }
            }
        }
        else if (Math.abs(teamR.length - teamB.length) > teamS.length) { //no sufficient players
            const n = Math.abs(teamR.length - teamB.length);
            if (players.length == 1) {
                quickRestart();
                loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
                room.setPlayerTeam(players[0].id, Team.RED);
                return;
            }
            else if (players.length == 6) {
                quickRestart();
                loadMap(x3Map, scoreLimitx3, timeLimitx3);
            }
            if (players.length == maxTeamSize * 2 - 1) {
                allReds = [];
                allBlues = [];
            }
            if (teamR.length > teamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
                }
            }
            else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
                }
            }
        }
        else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) { //choose mode
            room.pauseGame(true);
            activateChooseMode();
            choosePlayer();
        }
        else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) { //2 in red 2 in blue and 2 or more spec
            if (teamR.length == 2) {
                quickRestart();
                if (!teamS.length == 2){
                    loadMap(x3Map, scoreLimitx3, timeLimitx3);
                }
            }
            topBtn();
        }
    }
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    if (teamR.length <= teamB.length && teamR.length != 0) {
        room.sendChat("[PV] Para elegir un jugador, ingrese su número en la lista dada o use 'top', 'random' o 'bottom'.", teamR[0].id);
        timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Date prisa @" + player.name + ", solo quedan " + Number.parseInt(chooseTime / 2) + " segundos para elegir !", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "¡No elegiste a tiempo!", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
    }
    else if (teamB.length < teamR.length && teamB.length != 0) {
        room.sendChat("[PV] Para elegir un jugador, ingrese su número en la lista dada o use 'top', 'random' o 'bottom'.", teamB[0].id);
        timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Date prisa @" + player.name + ", solo quedan " + Number.parseInt(chooseTime / 2) + " segundos para elegir !", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "¡No elegiste a tiempo!", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
    }
    if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}

function getSpecList(player) {
    var cstm = "[PV] Jugadores : ";
    for (var i = 0; i < teamS.length; i++) {
        if (140 - cstm.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
            room.sendChat(cstm, player.id);
            cstm = "... ";
        }
        cstm += teamS[i].name + "[" + (i + 1) + "], ";
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendChat(cstm, player.id);
}

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                !activePlay ? activePlay = true : null;
                if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
                    lastPlayersTouched[1] = lastPlayersTouched[0];
                    lastPlayersTouched[0] = players[i];
                }
                lastTeamTouched = players[i].team;
            }
        }
    }
}

function getStats() { // gives possession, ball speed and GK of each team
    if (activePlay) {
        updateTeams();
        lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
        var ballPosition = room.getBallPosition();
        point[1] = point[0];
        point[0] = ballPosition;
        ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
        var k = [-1, Infinity];
        for (var i = 0; i < teamR.length; i++) {
            if (teamR[i].position.x < k[1]) {
                k[0] = teamR[i];
                k[1] = teamR[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        k = [-1, -Infinity];
        for (var i = 0; i < teamB.length; i++) {
            if (teamB[i].position.x > k[1]) {
                k[0] = teamB[i];
                k[1] = teamB[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        findGK();
    }
}

function updateStats() {
    if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
        var stats;
        for (var i = 0; i < allReds.length; i++) {
            localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name];
            stats[Ss.GA]++;
            lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
            stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
            localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < allBlues.length; i++) {
            localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name];
            stats[Ss.GA]++;
            lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
            stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
            localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < game.goals.length; i++) {
            if (game.goals[i].striker != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
                    stats[Ss.GL]++;
                    localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
                }
            }
            if (game.goals[i].assist != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
                    stats[Ss.AS]++;
                    localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
                }
            }
        }
        if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
            stats[Ss.GK]++;
            game.scores.blue == 0 ? stats[Ss.CS]++ : null;
            stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
        }
        if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
            stats[Ss.GK]++;
            game.scores.red == 0 ? stats[Ss.CS]++ : null;
            stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
        }
    }
}

function findGK() {
    var tab = [[-1, ""], [-1, ""]];
    for (var i = 0; i < extendedP.length; i++) {
        if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
            if (tab[0][0] < extendedP[i][eP.GK]) {
                tab[0][0] = extendedP[i][eP.GK];
                tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
        else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
            if (tab[1][0] < extendedP[i][eP.GK]) {
                tab[1][0] = extendedP[i][eP.GK];
                tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
    }
    GKList = [tab[0][1], tab[1][1]];
}

setInterval(() => {
    var tableau = [];
    if (statNumber % 5 == 0) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Partidos Jugados> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 1) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Victorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 2) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Goles> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 3) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 4) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    statNumber++;
}, statInterval * 60 * 1000);

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
	console.log("---------------------------------------------------");
	console.log("[📢]Nick: "+player.name);
	console.log("[📢]Conn: "+player.conn);
	console.log("[📢]Auth: "+player.auth);
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    updateRoleOnPlayerIn();
    if (room.getPlayerList().length == playersToSetVIP){
        room.setPassword(vipPassword); // Contraseña
        room.sendAnnouncement("[💎] 𝗦𝗹𝗼𝘁𝘀 𝗥𝗲𝘀𝗲𝗿𝘃𝗮𝗱𝗼𝘀", null, 0xFFC375, "bold") // Frase de slots reservados
    }
    room.sendAnnouncement("---------------------------------------------------", player.id,0x4A3FF5);
    room.sendAnnouncement("👋 ¡𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 " + player.name + " 𝗔 𝗙𝘂𝘁𝘀𝗮𝗹 𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝘁𝘆!", null, 0xFFC37,"bold");
    room.sendAnnouncement("👑 ¡𝗙𝘂𝘁𝘀𝗮𝗹 𝘅𝟳! (𝗛𝗼𝘀𝘁 𝗱𝗲 𝗽𝗿𝘂𝗲𝗯𝗮)", player.id,0xFFC375,"bold");
    room.sendAnnouncement("---------------------------------------------------", player.id, 0x4A3FF5);
    if (room.getPlayerList().length > 1 && room.getPlayerList().length < 5 ){
            room.sendAnnouncement("😎 ¡𝗘𝗹 𝗺𝗼𝗱𝗼 𝗱𝗲 𝗽𝗿𝗮𝗰𝘁𝗶𝗰𝗮 𝗲𝘀𝘁á 𝗮𝗰𝘁𝗶𝘃𝗮𝗱𝗼 𝗵𝗮𝘀𝘁𝗮 𝗾𝘂𝗲 𝗵𝗮𝘆𝗮𝗻 𝟲 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝘀 𝗲𝗻 𝗲𝗹 𝗵𝗼𝘀𝘁!", player.id, 0x4A3FF5);
    }
    if (localStorage.getItem(player.auth) != null) {
        var playerRole = JSON.parse(localStorage.getItem(player.auth))[Ss.RL];
        if (playerRole == "admin" || playerRole == "master" ) {
            room.setPlayerAdmin(player.id, true);
            room.sendAnnouncement("Admin「" + player.name + "」¡𝗘𝗻𝘁𝗿𝗼 𝗮 𝗽𝗼𝗻𝗲𝗿 𝗼𝗿𝗱𝗲𝗻 𝗲𝗻 𝗹𝗮 𝘀𝗮𝗹𝗮!", null, 0xFF7900, "bold");
        }
    }
    if (localStorage.getItem(getAuth(player)) == null){
        stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name]
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
    }
    
}

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        return;
    }
    if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
        room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
        room.sendChat(changedPlayer.name + " está AFK !");
        return;
    }
    updateTeams();
    if (room.getScores() != null) {
        var scores = room.getScores();
        if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3 / 4) * scores.timeLimit && Math.abs(scores.blue - scores.red) < 2) {
            (changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
        }
    }
    if (changedPlayer.team == Team.SPECTATORS) {
        setActivity(changedPlayer, 0);
    }
    if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
        if (Math.abs(teamR.length - teamB.length) == teamS.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (teamR.length > teamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200 * i);
                }
            }
            else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200 * i);
                }
            }
            return;
        }
        else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)) {
            deactivateChooseMode();
            resumeGame();
        }
        else if (teamR.length <= teamB.length && redCaptainChoice != "") { // choice remembered
            redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
            return;
        }
        else if (teamB.length < teamR.length && blueCaptainChoice != "") {
            blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
            return;
        }
        else {
            choosePlayer();
        }
    }
}

room.onPlayerLeave = function (player) {
    if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
        choosePlayer();
        capLeft = true; setTimeout(() => { capLeft = false; }, 10);
    }
    if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
        choosePlayer();
        capLeft = true; setTimeout(() => { capLeft = false; }, 10);
    }
    setActivity(player, 0);
    updateRoleOnPlayerOut();
    if (room.getPlayerList().length == playersToSetPublic){
        room.setPassword();
        room.sendChat("[✅] Host abierto al publico.",null);
    } 
}

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
}

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    originalMessage = message;
    message = message.split(/ +/);
    player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
    if (["!help"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("[📄] Comandos : !me, !mostrarstats, !games, !wins, !goals, !assists, !cs, !afks, !mutes, !bans.", player.id,0x309D2B,"bold");
        player.admin ? room.sendAnnouncement("[📄] Admin : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id,0x309D2B,"bold") : null;
    }
    else if (["!afk"].includes(message[0].toLowerCase())) {
        if (players.length != 1 && player.team != Team.SPECTATORS) {
            if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
                room.setPlayerTeam(player.id, Team.SPECTATORS);
            }
            else {
                room.sendChat("No puedes ser AFK mientras estás en un equipo !", player.id);
                return false;
            }
        }
        else if (players.length == 1 && !getAFK(player)) {
            room.setPlayerTeam(player.id, Team.SPECTATORS);
        }
        setAFK(player, !getAFK(player));
	    room.sendAnnouncement(player.name + (getAFK(player) ? " está AFK !" : " ya está listo !"),null,(getAFK(player) ? 0xFF7B08 : 0x8FFF8F));
	getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
    localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player"];
    setTimeout (() => { if (getAFK(player) && stats[Ss.RL] != "vip"){room.kickPlayer(player.id,"Tiempo de afk excedido",false) } },30 * 60 * 1000)
    return false;
}
    else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] Lista de AFK : ";
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
            }
        }
        if (cstm == "[PV] Lista de AFK : ") {
            room.sendChat("[PV] No hay nadie en la lista de AFK !", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!me"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
	room.sendAnnouncement("[📄] Stats de " + player.name + ": 🎮 Partidos Jugados: " + stats[Ss.GA] + ", ✅ Victorias: " + stats[Ss.WI] + ", ❌ Derrotas: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, ⚽️ Goles: " + stats[Ss.GL] + ", 👟 Asistencias: " + stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 Vallas: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", player.id,0x73EC59,"bold");
	room.sendAnnouncement("「👓」 Este mensaje solamente lo podés ver vos, si querés mostrar tus stats usa el comando '!mostrarstats'!", player.id,0xFF7900,"bold");
    }
    else if (["!mostrarstats"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
        room.sendAnnouncement("[📄] El jugador " + player.name + " mostró sus stats! [!mostrarstats]",null,0xFF7900,"bold")
	room.sendAnnouncement("[📄] Stats de " + player.name + ": 🎮 Partidos Jugados: " + stats[Ss.GA] + ", ✅ Victorias: " + stats[Ss.WI] + ", ❌ Derrotas: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, ⚽️ Goles: " + stats[Ss.GL] + ", 👟 Asistencias: " + stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 Vallas: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", null,0x73EC59,"bold");
    }
    else if (["!games"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Aún no se han jugado partidos suficientes.", player.id,0xFF0000);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] 🎮 Partidos Jugados> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!wins"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Aún no se han jugado partidos suficientes.", player.id,0x73EC59);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] ✅ Victorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!goals"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[📄] Aún no se han jugado partidos suficientes.", player.id,0x73EC59);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] ⚽️ Goles> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!assists"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Aún no se han jugado partidos suficientes.", player.id);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] 👟 Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!cs"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Aún no se han jugado partidos suficientes.", player.id,0x73EC59);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] 🤚 Vallas Invictas> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!claim"].includes(message[0].toLowerCase())) {
        if (message[1] == adminPassword) {
            room.setPlayerAdmin(player.id, true);
            var stats;
            localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
            if (stats[Ss.RL] != "master") {
                stats[Ss.RL] = "master";
                room.sendAnnouncement("[📄] "+player.name+" se ha logeado como admin del host!",null,0xF8FF00,"bold");
                localStorage.setItem(getAuth(player), JSON.stringify(stats));
            }
        }
    }
    else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[Ss.RL] == "player") {
                        stats[Ss.RL] = "admin";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ahora es el administrador del host !");
                    }
                }
            }
        }
    }
    else if (["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[Ss.RL] == "admin") {
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " Ya no es administrador del host !");
                        stats[Ss.RL] = "player";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
                    }
                }
            }
        }
    }
    else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] Lista de muteados : ";
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
            }
        }
        if (cstm == "[PV] Lista de Muteados : ") {
            room.sendChat("[PV] No hay nadie en la lista de muteados !", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!mute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            updateTeams();
            var timeOut;
            if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
                if (Number.parseInt(message[1]) > 0) {
                    timeOut = Number.parseInt(message[1]) * 60 * 1000;
                }
                else {
                    timeOut = 3 * 60 * 1000;
                }
                if (message[2].length > 1 && message[2][0] == "#") {
                    message[2] = message[2].substring(1, message[2].length);
                    if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
                        if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
                            return false;
                        }
                        setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2])));
                        setMute(room.getPlayer(Number.parseInt(message[2])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " ha sido muteado por " + (timeOut / 60000) + " minutos !");
                    }
                }
            }
            else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                        if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
                            return false;
                        }
                        setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
                        setMute(room.getPlayer(Number.parseInt(message[1])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " Te han muteado por 3 minutos!");
                    }
                }
            }
        }
    }
    else if (["!unmute"].includes(message[0].toLowerCase())) {
        if (player.admin && message.length >= 2) {
            if (message[1] == "all") {
                extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
                room.sendChat("Se ha limpiado la lista de muteados");
            }
            else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                setMute(room.getPlayer(Number.parseInt(message[1])), false);
                room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ha sido desmuteado !");
            }
            else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                        setMute(room.getPlayer(Number.parseInt(message[1])), false);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ha sido desmuteado!");
                    }
                }
            }
        }
    }
    else if (["!slow"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 1) {
                slowMode = 2;
                room.sendChat("Modo lento activado (2 segundos)!");
            }
            else if (message.length == 2) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        slowMode = Number.parseInt(message[1]);
                        room.sendChat(slowMode + " segundos, modo lento activado !");
                        return false;
                    }
                }
                slowMode = 2;
                room.sendChat("Modo lento activado (2 segundos)!");
            }
        }
    }
    else if (["!endslow"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            slowMode != 0 ? room.sendChat("Modo lento terminado.") : null;
            slowMode = 0;
        }
    }
    else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
        if (banList.length == 0) {
            room.sendChat("[PV] No hay nadie en la lista de baneados!", player.id);
            return false;
        }
        var cstm = "[PV] Lista de baneados : ";
        for (var i = 0; i < banList.length; i++) {
            if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
                room.sendChat(cstm, player.id);
                cstm = "... ";
            }
            cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!clearbans"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 1) {
                room.clearBans();
                room.sendChat("Bans removidos!");
                banList = [];
            }
            if (message.length == 2) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        ID = Number.parseInt(message[1]);
                        room.clearBan(ID);
                        if (banList.length != banList.filter((array) => array[1] != ID)) {
                            room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " ha sido baneado del host !");
                        }
                        setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
                    }
                }
            }
        }
    }
    else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "Bye !", false);
    }
    else if (message[0].toLowerCase().startsWith("!fut")) {
        if (player.admin) {
            switch (message[0]) {
                case "!fut3":
                    maxTeamSize = 3;
                    quickRestart();
                    loadMap(x3Map, scoreLimitx3, timeLimitx3);
                    break;
                case "!fut4":
                    maxTeamSize = 4;
                    quickRestart();
                    loadMap(x4Map, scoreLimitx4, timeLimitx4);              
                    break;
                case "!fut5":
                    maxTeamSize = 5;
                    quickRestart();
                    loadMap(x5Map, scoreLimitx5, timeLimitx5);                
                    break;
                case "!fut7":
                    maxTeamSize = 7;
                    quickRestart();
                    loadMap(x7Map, scoreLimitx7, timeLimitx7);                  
                    break;
            
                default:
                    break;
            }
        }
    }
    else if (["!setvip", "!vip"].includes(message[0].toLowerCase())) {
        message = message.split(" ");
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[Ss.RL] == "player") {
                        stats[Ss.RL] = "vip";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.sendAnnouncement("[👑]" + room.getPlayer(Number.parseInt(message[1])).name + " ahora es jugador VIP !");
                    }
                }
            }
        }
    }
    else if (["!novip"].includes(message[0].toLowerCase())) {
        message = message.split(" ");
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[Ss.RL] == "vip") {
                        room.sendAnnouncement("[👤]" + room.getPlayer(Number.parseInt(message[1])).name + " Ya no es jugador VIP !");
                        stats[Ss.RL] = "player";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                    }
                }
            }
        }
    }

    if (message[0][0] == "!") { //if a command is received, after process, exit
        return false;
    }

    if (teamR.length != 0 && teamB.length != 0 && inChooseMode) { //choosing management
        if (player.id == teamR[0].id || player.id == teamB[0].id) { // we care if it's one of the captains choosing
            if (teamR.length <= teamB.length && player.id == teamR[0].id) { // we care if it's red turn && red cap talking
                if (["top", "auto"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    redCaptainChoice = "top";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " elegiste Top !");
                    return false;
                }
                else if (["random", "rand"].includes(message[0].toLowerCase())) {
                    var r = getRandomInt(teamS.length);
                    room.setPlayerTeam(teamS[r].id, Team.RED);
                    redCaptainChoice = "random";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " elegiste Random !");
                    return false;
                }
                else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
                    redCaptainChoice = "bottom";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " elegiste Bottom !");
                    return false;
                }
                else if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
                        room.sendChat("[PV] El número que elegiste es inválido !", player.id);
                        return false;
                    }
                    else {
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
                        room.sendChat(player.name + " eligió a " + teamS[Number.parseInt(message[0]) - 1].name + " !");
                        return false;
                    }
                }
            }
            if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
                if (["top", "auto"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    blueCaptainChoice = "top";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " seleccionó Top !");
                    return false;
                }
                else if (["random", "rand"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
                    blueCaptainChoice = "random";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " seleccionó Random !");
                    return false;
                }
                else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
                    blueCaptainChoice = "bottom";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " seleccionó Bottom !");
                    return false;
                }
                else if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
                        room.sendChat("[PV] El número que elegiste es inválido !", player.id);
                        return false;
                    }
                    else {
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
                        room.sendChat(player.name + " eligió " + teamS[Number.parseInt(message[0]) - 1].name + " !");
                        return false;
                    }
                }
            }
        }
    }

    if (getMute(player)) {
        room.sendChat("Usted está muteado.", player.id);
        return false;
    }
    if (slowMode > 0) {
        if (!player.admin) {
            if (!SMSet.has(player.id)) {
                SMSet.add(player.id);
                setTimeout((number) => { SMSet.delete(number); }, slowMode * 1000, player.id);
            }
            else {
                return false;
            }
        }
    }
    console.log("auth: "+getAuth(player));
    if (localStorage.getItem(getAuth(player))){
        stats = JSON.parse(localStorage.getItem(getAuth(player)));
        var announcement = "";
        var chatColor = "";
        if (stats[Ss.WI] > 399){
            announcement += "🔥 「𝐆𝐎𝐀𝐓」"
            chatColor = "0xFF8000"
        } else if (stats[Ss.WI] > 199){
            announcement += "🔸 「𝗦𝘂𝗽𝗲𝗿-𝗘𝘀𝘁𝗿𝗲𝗹𝗹𝗮」"
            chatColor = "0x0040FF"
        } else if (stats[Ss.WI] > 179){
            announcement += "🔹 「𝗘𝘀𝘁𝗿𝗲𝗹𝗹𝗮」"
            chatColor = "0xFF7900"
        } else if (stats[Ss.WI] > 159){
            announcement += "✓ 「𝗖𝗮𝗺𝗽𝗲𝗼𝗻」"
            chatColor = "0xFFFF00"
        } else if (stats[Ss.WI] > 129){
            announcement += "👑 「𝗖𝗿𝗮𝗰𝗸」"
            chatColor = "0xFFC375"
        } else if (stats[Ss.WI] > 89){
            announcement += "💲 「𝗟𝗲𝘆𝗲𝗻𝗱𝗮」"
            chatColor = "0xBFFF00"
        } else if (stats[Ss.WI] > 69){
            announcement += "👿 「𝐄𝐱𝐩𝐞𝐫𝐭𝐨」"
            chatColor = "0xEC77CE"
        } else if (stats[Ss.WI] > 59){
            announcement += "💪 「𝗥𝗲𝘃𝗲𝗹𝗮𝗰𝗶𝗼𝗻」"
            chatColor = "0xFA58DF"
        } else if (stats[Ss.WI] > 44){
            announcement += "👽 「𝗩𝗲𝘁𝗲𝗿𝗮𝗻𝗼」"
            chatColor = "0x73EC59"
        } else if (stats[Ss.WI] > 34){
            announcement += "👿 「𝗜𝗺𝗽𝗮𝗿𝗮𝗯𝗹𝗲」"
            chatColor = "0xFE2E2E"
        } else if (stats[Ss.WI] > 24){
            announcement += "⚽ 「𝗣𝗿𝗼𝗳𝗲𝘀𝗶𝗼𝗻𝗮𝗹」"
            chatColor = "0x04B404"
        } else if (stats[Ss.WI] > 14){
            announcement += "😎 「𝗔𝗽𝗿𝗲𝗻𝗱𝗶𝘇」"
            chatColor = "0x2EFEF7"
        } else if (stats[Ss.WI] > 4){
            announcement += "🎖️ 「𝗣𝗿𝗶𝗻𝗰𝗶𝗽𝗶𝗮𝗻𝘁𝗲」"
            chatColor = "0xDDD4DB"
        } else {
            announcement += "㋡ 「𝗜𝗻𝗶𝗰𝗶𝗮𝗻𝘁𝗲」"
            chatColor = "0xDDD4DB"
        }
        console.log(announcement);
        console.log(chatColor);
        var playerRole = JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL];
        if (playerRole == "vip"){
            announcement += "「👑VIP」";
            chatColor = "0x00B4FF";
        }
        if (playerRole == "admin" || playerRole == "master"){
            announcement += "「😈」";
            chatColor = "0xF8FF00";
        }
        console.log(announcement);
        console.log(chatColor);
        console.log(originalMessage)
        announcement += player.name + ": " + originalMessage;
        room.sendAnnouncement(announcement, null, chatColor);
        return false;   
    }   
}

room.onPlayerActivity = function (player) {
    setActivity(player, 0);
}

room.onPlayerBallKick = function (player) {
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        !activePlay ? activePlay = true : null;
        lastTeamTouched = player.team;
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }
}

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    game = new Game(Date.now(), room.getScores(), []);
    countAFK = true;
    activePlay = false;
    goldenGoal = false;
    endGameVariable = false;
    lastPlayersTouched = [null, null];
    Rposs = 0;
    Bposs = 0;
    GKList = [];
    allReds = [];
    allBlues = [];
    if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
        for (var i = 0; i < maxTeamSize; i++) {
            allReds.push(teamR[i]);
            allBlues.push(teamB[i]);
        }
    }
    for (var i = 0; i < extendedP.length; i++) {
        extendedP[i][eP.GK] = 0;
        extendedP[i][eP.ACT] = 0;
        room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
    }
    deactivateChooseMode();
}

room.onGameStop = function (byPlayer) {
    if (byPlayer.id == 0 && endGameVariable) {
        updateTeams();
        if (inChooseMode) {
            if (players.length == 2 * maxTeamSize) {
                inChooseMode = false;
                resetBtn();
                for (var i = 0; i < maxTeamSize; i++) {
                    setTimeout(() => { randomBtn(); }, 400 * i);
                }
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                }
                else if (lastWinner == Team.BLUE) {
                    redToSpecBtn();
                    blueToRedBtn();
                }
                else {
                    resetBtn();
                }
                setTimeout(() => { topBtn(); }, 500);
            }
        }
        else {
            if (players.length == 2) {
                if (lastWinner == Team.BLUE) {
                    room.setPlayerTeam(teamB[0].id, Team.RED);
                    room.setPlayerTeam(teamR[0].id, Team.BLUE);
                }
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                }
                else {
                    redToSpecBtn();
                    blueToRedBtn();
                }
                setTimeout(() => { topBtn(); }, 200);
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else if (players.length == 4) {
                resetBtn();
                setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                }
                else {
                    redToSpecBtn();
                    blueToRedBtn();
                }
                setTimeout(() => { topBtn(); }, 200);
                activateChooseMode();
            }
            else if (players.length == 6) {
                resetBtn();
                setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
                setTimeout(() => { room.startGame(); }, 2000);
            }
        }
    }
}

room.onGamePause = function (byPlayer) {
}

room.onGameUnpause = function (byPlayer) {
    if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
        deactivateChooseMode();
    }
}

room.onTeamGoal = function (team) {
    activePlay = false;
    countAFK = false;
    const scores = room.getScores();
    game.scores = scores;
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
        if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
            var frasegol = frasesgoles[(Math.random() * frasesgoles.length) | 0]
            var fraseasis = frasesasis[(Math.random() * frasesasis.length) | 0]
            room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + lastPlayersTouched[0].name + fraseasis + lastPlayersTouched[1].name + ". Velocidad de tiro : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? 0xFF250D : 0x3075FF),'bold');
            game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
        }
        else {
            var frasegol = frasesgoles[(Math.random() * frasesgoles.length) | 0]
            room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + lastPlayersTouched[0].name + " ! Velocidad de tiro : " + ballSpeed.toPrecision(4).toString() + "km/h " +  (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? 0xFF250D : 0x3075FF),'bold');
        }
    }
    else {
        var fraseautogol = frasesautogol[(Math.random() * frasesautogol.length) | 0]
        room.sendAnnouncement("😂 " + getTime(scores) + fraseautogol + lastPlayersTouched[0].name + " ! Velocidad de tiro : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? 0xFF250D : 0x3075FF),'bold');
        game.goals.push(new Goal(scores.time, team, null, null));
    }
    if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 1000);
    }
}

room.onPositionsReset = function () {
    countAFK = true;
    lastPlayersTouched = [null, null];
}

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    if (getMute(changedPlayer) && changedPlayer.admin) {
        room.sendChat(changedPlayer.name + " ha sido desmuteado.");
        setMute(changedPlayer, false);
    }
    if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
        room.sendChat("No tienes permiso para nombrar a un jugador como Administrador !", byPlayer.id);
        room.setPlayerAdmin(changedPlayer.id, false);
    }
}

room.onStadiumChange = function (newStadiumName, byPlayer) {
}

room.onGameTick = function () {
        PublicitaDiscord();
        PublicitaDonacion();
        PublicitaHelp();
        PublicitaLiga();
    checkTime();
    getLastTouchOfTheBall();
    getStats();
    handleInactivity();
}