//Creating a team Object
const team = {
  _players: [{
     firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
  }],
  _games:
  [ {
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
    }],
    get players (){
        return this._players;
    },
    get games(){
        return this._games;
    },
    addPlayer(firstName,lastName,age){
      let player = {
       firstName: firstName,
       lastName: lastName,
       age:  age
       };
       this.players.push(player);
    },
    addGame(opponents,teamPoints,opponentPoints){
      let game = {
        opponets: opponents,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    }
};
team.addPlayer('Lisa','Leslie',28);
team.addPlayer('Lisa','Leslie',28);

team.addGame('Titans',100,98);
