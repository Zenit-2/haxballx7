const roomName = "Nombre server";
const botName = "Nombre bot";
const maxPlayers = 30;
const roomPublic = true;
const geo = [{"code": "ni", "lat": -37.0484806, "lon": -81.6806884}];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });
