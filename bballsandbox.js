// ADDED ASSISTS
function Player(name, passing, twoP, threeP, tend) {
  this.name = name;
  this.twoPointers = twoP;
  this.threePointers = threeP;
 // this.dribbling = attr;   // am I going to add this? Can increase lay-up chance maybe but also might add in cutting
  this.passing = passing;
  this.passTendency = tend;
  this.points = 0;   
  this.defensiveRebounds = 0;
  this.offensiveRebounds = 0;
  this.rebounds = 0;
  this.assists = 0;
  this.fieldGoalsAttempted = 0;
  this.fieldGoalsMade = 0;
  this.fieldGoalPercentage = 0;
  this.twoPointsAttempted = 0;
  this.twoPointsMade = 0;
  this.twoPointPercentage = 0;
  this.threePointsAttempted = 0;
  this.threePointsMade = 0;
  this.threePointPercentage = 0;
  //function to calc field goal %, can't have at instatiation
}

//MYSQL DATABASE EVENTUALLY?
//GLOBAL VARIABLE TO HOLD ASSISTER

var player1 = new Player('Baron Davis', 8, 5, 6, 9);
var player2 = new Player('Kevin Martin', 10, 6, 8, 5);
var player3 = new Player('J.R Smith', 7, 7, 7, 4);
var player4 = new Player('Ryan Anderson', 8, 6, 7, 4);
var player5 = new Player('Mehmet Okur', 6, 7, 8, 4);

var player6 = new Player('John Stickton', 10, 9, 8, 9);
var player7 = new Player('Toby Bryant', 8, 8, 8, 2);
var player8 = new Player('Labrun James', 10, 8, 7, 7);
var player9 = new Player('Jim Duncan', 8, 9, 4, 3);
var player10 = new Player('Bill Wilton', 10, 8, 3, 8);

let score1 = 0;
let score2 = 0;
let target = 100;

// could the team objects contain the functions?
let team1 = {player1, player2, player3, player4, player5, score1};
let team2 = {player6, player7, player8, player9, player10, score2};
let possession = 0;
let assister = 0;

function printStats(obj) 
{
 console.log("Name: " + obj.name + " Points: " + obj.points + " Rebounds: " + obj.rebounds 
  + " ORB: " + obj.offensiveRebounds + " DRB: " + obj.defensiveRebounds + " FGA: " + obj.fieldGoalsAttempted 
  + " FGM: " + obj.fieldGoalsMade + " FG%: " + obj.fieldGoalPercentage + " 2PA: " 
  + obj.twoPointsAttempted + " 2PM: " + obj.twoPointsMade + " 2P%: " + obj.twoPointPercentage 
  + " 3PA: " + obj.threePointsAttempted + " 3PM: " + obj.threePointsMade + " 3P%: " 
  + obj.threePointPercentage);
}

function allStats()
{
  percentages(player1);
  percentages(player2);
  percentages(player3);
  percentages(player4);
  percentages(player5);
  percentages(player6);
  percentages(player7);
  percentages(player8);
  percentages(player9);
  percentages(player10);

   console.log("Team1")
   printStats(player1);
   printStats(player2);
   printStats(player3);
   printStats(player4);
   printStats(player5);
   console.log("Team2");
   printStats(player6);
   printStats(player7);
   printStats(player8);
   printStats(player9);
   printStats(player10);
}

function percentages(obj)
{
  obj.fieldGoalPercentage = Math.round(((obj.fieldGoalsMade / obj.fieldGoalsAttempted) * 100 + Number.EPSILON) * 100) / 100;
  obj.twoPointPercentage = Math.round(((obj.twoPointsMade / obj.twoPointsAttempted) * 100 + Number.EPSILON) * 100) / 100;
  obj.threePointPercentage = Math.round(((obj.threePointsMade / obj.threePointsAttempted) * 100 + Number.EPSILON) * 100) / 100;
  //teamFieldGoalPercentage = Math.round(((player1.fieldGoalsMade + player2.fieldGoalsMade + player3.fieldGoalsMade + player4.fieldGoalsMade + player5.fieldGoalsMade) / (player1.fieldGoalsAttempted + player2.fieldGoalsAttempted + player3.fieldGoalsAttempted + player4.fieldGoalsAttempted + player5.fieldGoalsAttempted) + Number.EPSILON) * 100) / 100;
}

function allPercentages()
{
  percentages(player1);
  percentages(player2);
  percentages(player3);
  percentages(player4);
  percentages(player5);
  percentages(player6);
  percentages(player7);
  percentages(player8);
  percentages(player9);
  percentages(player10);
}

function printTeamStats()
{
  //team1
  teamPoints = player1.points + player2.points + player3.points + player4.points + player5.points;   // could make these part of a copy object for encapsulation? 
  teamDefensiveRebounds = player1.defensiveRebounds + player2.defensiveRebounds + player3.defensiveRebounds + player4.defensiveRebounds + player5.defensiveRebounds;
  teamOffensiveRebounds = player1.offensiveRebounds + player2.offensiveRebounds + player3.offensiveRebounds + player4.offensiveRebounds + player5.offensiveRebounds;
  teamRebounds = player1.rebounds + player2.rebounds + player3.rebounds + player4.rebounds + player5.rebounds;
  teamFieldGoalsAttempted = player1.fieldGoalsAttempted + player2.fieldGoalsAttempted + player3.fieldGoalsAttempted + player4.fieldGoalsAttempted + player5.fieldGoalsAttempted;
  teamFieldGoalsMade = player1.fieldGoalsMade + player2.fieldGoalsMade + player3.fieldGoalsMade + player4.fieldGoalsMade + player5.fieldGoalsMade;
  teamFieldGoalPercentage = Math.round(((player1.fieldGoalsMade + player2.fieldGoalsMade + player3.fieldGoalsMade + player4.fieldGoalsMade + player5.fieldGoalsMade) / (player1.fieldGoalsAttempted + player2.fieldGoalsAttempted + player3.fieldGoalsAttempted + player4.fieldGoalsAttempted + player5.fieldGoalsAttempted) * 100 + Number.EPSILON) * 100) / 100;
  teamTwoPointsAttempted = player1.twoPointsAttempted + player2.twoPointsAttempted + player3.twoPointsAttempted + player4.twoPointsAttempted + player5.twoPointsAttempted;
  teamTwoPointsMade = player1.twoPointsMade + player2.twoPointsMade + player3.twoPointsMade + player4.twoPointsMade + player5.twoPointsMade; 
  teamTwoPointPercentage = Math.round(((player1.twoPointsMade + player2.twoPointsMade + player3.twoPointsMade + player4.twoPointsMade + player5.twoPointsMade) / (player1.twoPointsAttempted + player2.twoPointsAttempted + player3.twoPointsAttempted + player4.twoPointsAttempted + player5.twoPointsAttempted) * 100 + Number.EPSILON) * 100) / 100;
  teamThreePointsAttempted = player1.threePointsAttempted + player2.threePointsAttempted + player3.threePointsAttempted + player4.threePointsAttempted + player5.threePointsAttempted;
  teamThreePointsMade = player1.threePointsMade + player2.threePointsMade + player3.threePointsMade + player4.threePointsMade + player5.threePointsMade;
  teamThreePointPercentage = Math.round(((player1.threePointsMade + player2.threePointsMade + player3.threePointsMade + player4.threePointsMade + player5.threePointsMade) / (player1.threePointsAttempted + player2.threePointsAttempted + player3.threePointsAttempted + player4.threePointsAttempted + player5.threePointsAttempted) * 100 + Number.EPSILON) * 100) / 100;
  console.log("Team1:  Points:" + teamPoints + " Rebounds:" + teamRebounds + " ORB: " + teamOffensiveRebounds + 
    " DRB: " + teamDefensiveRebounds + " FGA: " + teamFieldGoalsAttempted 
  + " FGM: " + teamFieldGoalsMade + " FG%: " + teamFieldGoalPercentage + " 2PA: " 
  + teamTwoPointsAttempted + " 2PM: " + teamTwoPointsMade + " 2P%: " + teamTwoPointPercentage 
  + " 3PA: " + teamThreePointsAttempted + " 3PM: " + teamThreePointsMade + " 3P%: " + teamThreePointPercentage)

  teamPoints2 = player6.points + player7.points + player8.points + player9.points + player10.points;   // could make these part of a copy object for encapsulation? 
  teamDefensiveRebounds2 = player6.defensiveRebounds + player7.defensiveRebounds + player8.defensiveRebounds + player9.defensiveRebounds + player10.defensiveRebounds;
  teamOffensiveRebounds2 = player6.offensiveRebounds + player7.offensiveRebounds + player8.offensiveRebounds + player9.offensiveRebounds + player10.offensiveRebounds;
  teamRebounds2 = player6.rebounds + player7.rebounds + player8.rebounds + player9.rebounds + player10.rebounds;
  teamFieldGoalsAttempted2 = player6.fieldGoalsAttempted + player7.fieldGoalsAttempted + player8.fieldGoalsAttempted + player9.fieldGoalsAttempted + player10.fieldGoalsAttempted;
  teamFieldGoalsMade2 = player6.fieldGoalsMade + player7.fieldGoalsMade + player8.fieldGoalsMade + player9.fieldGoalsMade + player10.fieldGoalsMade;
  teamFieldGoalPercentage2 = Math.round(((player6.fieldGoalsMade + player7.fieldGoalsMade + player8.fieldGoalsMade + player9.fieldGoalsMade + player10.fieldGoalsMade) / (player6.fieldGoalsAttempted + player7.fieldGoalsAttempted + player8.fieldGoalsAttempted + player9.fieldGoalsAttempted + player10.fieldGoalsAttempted) * 100 + Number.EPSILON) * 100) / 100;
  teamTwoPointsAttempted2 = player6.twoPointsAttempted + player7.twoPointsAttempted + player8.twoPointsAttempted + player9.twoPointsAttempted + player10.twoPointsAttempted;
  teamTwoPointsMade2 = player6.twoPointsMade + player7.twoPointsMade + player8.twoPointsMade + player9.twoPointsMade + player10.twoPointsMade;
  teamTwoPointPercentage2 = Math.round(((player6.twoPointsMade + player7.twoPointsMade + player8.twoPointsMade + player9.twoPointsMade + player10.twoPointsMade) / (player6.twoPointsAttempted + player7.twoPointsAttempted + player8.twoPointsAttempted + player9.twoPointsAttempted + player10.twoPointsAttempted) * 100 + Number.EPSILON) * 100) / 100;
  teamThreePointsAttempted2 = player6.threePointsAttempted + player7.threePointsAttempted + player8.threePointsAttempted + player9.threePointsAttempted + player10.threePointsAttempted;
  teamThreePointsMade2 = player6.threePointsMade + player7.threePointsMade + player8.threePointsMade + player9.threePointsMade + player10.threePointsMade;
  teamThreePointPercentage2 = Math.round(((player6.threePointsMade + player7.threePointsMade + player8.threePointsMade + player9.threePointsMade + player10.threePointsMade) / (player6.threePointsAttempted + player7.threePointsAttempted + player8.threePointsAttempted + player9.threePointsAttempted + player10.threePointsAttempted) * 100 + Number.EPSILON) * 100) / 100;
  console.log("Team2:  Points:" + teamPoints2 + " Rebounds:" + teamRebounds2 + " ORB: " + teamOffensiveRebounds2 + 
    " DRB: " + teamDefensiveRebounds2 + " FGA: " + teamFieldGoalsAttempted2 
  + " FGM: " + teamFieldGoalsMade2 + " FG%: " + teamFieldGoalPercentage2 + " 2PA: " 
  + teamTwoPointsAttempted2 + " 2PM: " + teamTwoPointsMade2 + " 2P%: " + teamTwoPointPercentage2
  + " 3PA: " + teamThreePointsAttempted2 + " 3PM: " + teamThreePointsMade2 + " 3P%: " + teamThreePointPercentage2
  )
}

// jumpBall will assign possession
function jumpBall()
{
  rand = Math.random();
  if (rand < 0.5)
  {
    possession = 1;
 //   player1.ball = true; 
    console.log("Team1 secure the tip");
    advance(randomPlayer());
  }
  else
  {
    possession = 2;
 //   player2.ball = true; 
    console.log("Team2 secure the tip");
    advance(randomPlayer());
  }
}

//advance up court
function advance(advancer)
{
  b = Math.random();
  assister = 0;
 // advancer.ball =  true;
  if (team1.score1 >= target)
  {
    console.log("game over, team1 win it");
    console.table(team1);
    console.table(team2);
  } else if (team2.score2 >= target)  
  { 
    console.log("game over, team2 win it");
    console.table(team1);
    console.table(team2);
  } 
  else 
  {
  if (possession == 1)
  {
    if (b < 0.95)
    {
    console.log("Team1 advance the ball ");
    chooseOffence(advancer);
    } else
    {
  //  advancer.ball = false;
    possessionChange();
    console.log("Team1 turn it over!"); 
    advance(randomPlayer());  
    }
  } else 
    {
    if (b < 0.95)
    {
    console.log("Team2 advance the ball ");
    chooseOffence(advancer);
    } else
    {
  //  advancer.ball = false;
    possessionChange();
    console.log("Team2 turn it over!");   
    advance(randomPlayer());
    }
    }
  }
}
//pass the ball to a currentlly random player
function pass(passer)
{
  p = passCalc(passer.passing)
  rand = Math.random();
  receiver = randomPlayer();
  //to stop duplicates
  if (receiver == passer)   // object comparison needed
  {
  receiver = randomPlayer();
  pass(passer);
  } else 
  {
    if (rand < p)
    {
    //  passer.ball = false;
    //  receiver.ball = true;
    assister = passer;
    console.log("" + passer.name + " passes to " + receiver.name);
    chooseOffence(receiver);
      // run receiver function
    } else 
    {
   //   passer.ball = false;
      possessionChange();
      advance(randomPlayer());
      //turnover stat / steal stat
      // new player ball true
    }
  } 
} 

function passCalc(attr)
{
  if (attr == 1)
  {
  return 86;
  } else if (attr == 2)
  {
  return 87; 
  } else if (attr == 3)
  {
  return 88; 
  } else if (attr == 4)
  {
  return 89; 
  } else if (attr == 5)
  {
  return 90; 
  } else if (attr == 6)
  {
  return 91; 
  } else if (attr == 7)
  {
   return 92; 
  } else if (attr == 8)
  {
  return 93;
  } else if (attr == 9)
  {
  return 94;
  } else if (attr == 10)
  {
  return 95;
  }
}

function chooseOffence(advancer)
{
  rand = Math.random();
  p = (advancer.passTendency / 100) * 9 ;
  a = 1 - p;
  a1 = (a / 3);

  if (rand < p)  // pass
  {
  pass(advancer);
  } else if (rand >= p && rand <= (p + a1)) 
  {
  twoShot(advancer);
  } else if (rand > (p + a1) && rand <= (p + a1 + a1))
  {
  threePoint(advancer);
  } else  
  {
  layUp(advancer); 
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function randomPlayer()
{
  rand = getRandomInt(1, 6);
  if (possession == 1)
  {
    if(rand == 1)
    { 
    return team1.player1;
    } else if (rand == 2)
    {
    return team1.player2; 
    } else if (rand == 3)
    { 
    return team1.player3;
    } else if (rand == 4)
    {
    return team1.player4;   
    } else if (rand == 5)
    { 
    return team1.player5;
    }
  } else 
    if(rand == 1)
    {
    return team2.player6;
    } else if (rand == 2)
    { 
    return team2.player7;
    } else if (rand == 3)
    {
    return team2.player8; 
    } else if (rand == 4)
    { 
    return team2.player9; 
    } else if (rand == 5)
    {
    return team2.player10;
    }
}

function possessionChange()
{
  assister = 0;
  if (possession == 1)
  {
    possession = 2;
    console.log("team2 with the ball");
  } else
  {
    possession = 1;
    console.log("team1 with the ball");
  }
}

function rebound()
{
  let rand = Math.random();
  
  if (possession == 1)
  {
    if (rand < 0.8) 
    {
    possessionChange();
    rebounder = randomPlayer();
    console.log("" + rebounder.name + " get's the defensive rebound for Team2");  
    rebounder.rebounds += 1;
    rebounder.defensiveRebounds += 1;
    advance(rebounder);
    } else
    {
    rebounder = randomPlayer();
    console.log("" + rebounder.name + " with the offensive rebound for Team1!");
    rebounder.rebounds += 1;
    rebounder.offensiveRebounds += 1;
    layUp(rebounder);
    }
  } else 
    {
    if (rand < 0.8) 
    {
    possessionChange();
    rebounder = randomPlayer();
    console.log("" + rebounder.name + " get's the defensive rebound for Team1");
    rebounder.rebounds += 1;
    rebounder.defensiveRebounds += 1;
    advance(rebounder);
    } else
    {
    rebounder = randomPlayer();
    console.log("" + rebounder.name + " with the offensive rebound for Team2!");
    rebounder.rebounds += 1;
    rebounder.offensiveRebounds += 1;
    layUp(rebounder);
    }
    }
}

//SHOOTING FUNCTIONS
function twoShot(player) {
  rand = Math.random();
  shooter = player;
  s = (player.twoPointers / 10 / 1.3);

  if (team1.score1 >= target)
  {
    console.log("game over, team1 win it");
    console.table(team1);
    console.table(team2);
  } else if (team2.score2 >= target)  
  { 
    console.log("game over, team2 win it");
    console.table(team1);
    console.table(team2);
  } 
  else 
  {
  if (possession == 1)
  {
    if (rand < s)
    {
      team1.score1 += 2;
      shooter.points += 2;
      shooter.twoPointsMade += 1;
      shooter.twoPointsAttempted += 1;
      shooter.fieldGoalsMade += 1;
      shooter.fieldGoalsAttempted += 1;
      assister.assists += 1;
      
      if (typeof(assister) == "object") 
      {
      console.log("The 2 is good by " + shooter.name + " for Team1. Assisted by " + assister.name + ". They now have " + team1.score1 + " points");
      } else 
      {
      console.log("The 2 is good by " + shooter.name + " for Team1. They now have " + team1.score1 + " points");
      }
      possessionChange();
      advance(randomPlayer());
    } else
      {
        shooter.twoPointsAttempted += 1;
        shooter.fieldGoalsAttempted += 1;
        console.log("The 2 is no good by " + shooter.name + " for team1");
        rebound();
      }
  } else 
    {
      if (rand < s)
    {
      team2.score2 += 2;
      shooter.points += 2;
      shooter.twoPointsMade += 1;
      shooter.twoPointsAttempted += 1;
      shooter.fieldGoalsMade += 1;
      shooter.fieldGoalsAttempted += 1;
      assister.assists += 1;
      if (typeof(assister) == "object") 
      {
      console.log("The 2 is good by " + shooter.name + " for Team2. Assisted by " + assister.name + ". They now have " + team2.score2 + " points");
      } else
      {
      console.log("The 2 is good by " + shooter.name + " for Team2. They now have " + team2.score2 + " points");  
      }
      possessionChange();
      advance(randomPlayer());
    } else
      {
        shooter.twoPointsAttempted += 1;
        shooter.fieldGoalsAttempted += 1;
        console.log("The 2 is no good by " + shooter.name + " for Team2");
        rebound();
      }
    }
  }
}

function threePoint(player) {
  shooter = player;
  s = (player.threePointers / 10 / 1.3);
  rand = Math.random();

  if (team1.score1 >= target)
  {
    console.log("game over, team1 win it");
    console.table(team1);
    console.table(team2);
  } else if (team2.score2 >= target)  
  { 
    console.log("game over, team2 win it");
    console.table(team1);
    console.table(team2);
  } 
  else 
  {
  if (possession == 1)
  {
    if (rand < s)
    {
      team1.score1 += 3;
      shooter.points += 3;
      shooter.threePointsMade += 1;
      shooter.threePointsAttempted += 1;
      shooter.fieldGoalsMade += 1;
      shooter.fieldGoalsAttempted += 1;
      assister.assists += 1;
      if (typeof(assister) == "object") 
      {
      console.log("The 3 is good by " + shooter.name + " for Team1. Assisted by " + assister.name + ". They now have " + team1.score1 + " points");
      } else
      {
      console.log("The 3 is good by " + shooter.name + ". Team1 now have " + team1.score1 + " points");  
      }
      possessionChange();
      advance(randomPlayer());
    } else
      {
        shooter.threePointsAttempted +=1;
        shooter.fieldGoalsAttempted += 1;
        console.log("The 3 is no good by "  + shooter.name + " for Team1");
        rebound();
      }
  } else 
    {
      if (rand < s)
    {
      team2.score2 += 3;
      shooter.points += 3;
      shooter.threePointsMade += 1;
      shooter.threePointsAttempted +=  1;
      shooter.fieldGoalsMade += 1;
      shooter.fieldGoalsAttempted += 1;
      assister.assists += 1;
      if (typeof(assister) == "object") 
      {
      console.log("The 3 is good by " + shooter.name + " for Team2. Assisted by " + assister.name + ". They now have " + team2.score2 + " points");
      } else
      {
      console.log("The 3 is good by " + shooter.name + ". Team2 now have " + team2.score2 + " points");  
      }
      possessionChange();
      advance(randomPlayer());
    } else
      {
        shooter.fieldGoalsAttempted += 1;
        shooter.threePointsAttempted += 1;
        console.log("The 3 is no good by "  + shooter.name + " for Team2");
        rebound();
      }
    }
  }
}

function layUp(player) 
{
  rand = Math.random();
  // layUp stat needed
  shooter = player;

  if (team1.score1 >= target)
  {
    console.log("game over, team1 win it");
    console.table(team1);
    console.table(team2);
  } else if (team2.score2 >= target)  
  { 
    console.log("game over, team2 win it");
    console.table(team1);
    console.table(team2);
  } 
  else 
  {

  if (possession == 1)
  {
    if (rand < 0.75)
    {
      team1.score1 += 2;
      shooter.points += 2;
      shooter.twoPointsMade += 1;
      shooter.twoPointsAttempted += 1;
      shooter.fieldGoalsMade += 1;
      shooter.fieldGoalsAttempted += 1;
      assister.assists += 1;
      if (typeof(assister) == "object") 
      {
      console.log("The lay-up is good by " + shooter.name + " for Team1. Assisted by " + assister.name + ". They now have " + team1.score1 + " points");
      } else
      {
      console.log("The lay-up is good by " + shooter.name + ". Team1 now have " + team1.score1 + " points");  
      }
      possessionChange();
      advance(randomPlayer());
    } else
      {
        shooter.twoPointsAttempted += 1;
        shooter.fieldGoalsAttempted += 1;
        console.log("The lay-up is no good by " + shooter.name + " for team1");
        rebound();
      }
  } else 
    {
      if (rand < 0.75)
    {
      team2.score2 += 2;
      shooter.points += 2;
      shooter.twoPointsMade += 1;
      shooter.twoPointsAttempted += 1;
      shooter.fieldGoalsMade += 1;
      shooter.fieldGoalsAttempted += 1;
      assister.assists += 1;
      if (typeof(assister) == "object") 
      {
      console.log("The lay-up is good by " + shooter.name + " for Team2. Assisted by " + assister.name + ". They now have " + team2.score2 + " points");
      } else
      {
      console.log("The lay-up is good by " + shooter.name + ". Team2 now have " + team2.score2 + " points");  
      }
      possessionChange();
      advance(randomPlayer());
    } else
      {
        shooter.twoPointsAttempted += 1;
        shooter.fieldGoalsAttempted += 1;
        console.log("The lay-up is no good by " + shooter.name + " for Team2");
        rebound();
      }
    }
  }
}

/*

*/