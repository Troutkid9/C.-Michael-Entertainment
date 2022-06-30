//Define a new class Character with a constructer that makes the attack power, counterattack power, defense, force strength, and health points. Add a getter that randomly generates the result of a roll for attack, counterattack, or force attack.
var playerCharacter = {};
var enemyCharacter = {};
var isCharacterAvailable = {};

$(document).ready(function () {
  class Character {
    constructor(
      characterName,
      id,
      image,
      attackPower,
      attackBonus,
      attackIncrement,
      counterAttackPower,
      counterAttackBonus,
      defense,
      forceStrength,
      healthPoints,
      enemyHealthPoints,
      audio
    ) {
      this.characterName = characterName;
      this.id = id;
      this.image = image;
      this.attackPower = attackPower;
      this.attackBonus = attackBonus;
      this.attackIncrement = attackIncrement;
      this.counterAttackPower = counterAttackPower;
      this.counterAttackBonus = counterAttackBonus;
      this.defense = defense;
      this.forceStrength = forceStrength;
      this.healthPoints = healthPoints;
      this.enemyHealthPoints = enemyHealthPoints;
      this.audio = audio;
    }

    get attack() {
      return this.calculateAttack();
    }

    calculateAttack() {
      return this.attackBonus + Math.ceil(Math.random() * 20);
    }

    get counterAttack() {
      return this.calculateCounterAttack();
    }

    calculateCounterAttack() {
      return this.counterAttackBonus + Math.ceil(Math.random() * 20);
    }

    get forceContest() {
      return this.calculateForce();
    }

    calculateForce() {
      return (
        this.forceStrength +
        Math.ceil(Math.random() * 10) +
        Math.ceil(Math.random() * 10)
      );
    }
  }

  //Build four character objects of class Character and push them all into an array
  var characters = {};
  characters.luke = new Character(
    "Luke",
    "luke",
    "<img id='luke' src='assets/images/luke.png'>",
    11,
    11,
    3,
    8,
    7,
    12,
    6,
    130,
    100,
    "assets/audio/luke.wav"
  );
  characters.yoda = new Character(
    "Yoda",
    "yoda",
    "<img id='yoda' src='assets/images/yoda.png'>",
    2,
    8,
    1,
    4,
    9,
    16,
    12,
    85,
    70,
    "assets/audio/yoda.wav"
  );
  characters.vader = new Character(
    "Darth Vader",
    "vader",
    "<img id='vader' src='assets/images/vader.png'>",
    13,
    15,
    2,
    10,
    6,
    14,
    10,
    180,
    80,
    "assets/audio/vader.wav"
  );
  characters.obiwan = new Character(
    "Obi Wan",
    "obiwan",
    "<img id='obiwan' src='assets/images/obiwan.png'>",
    3,
    10,
    2,
    8,
    10,
    14,
    8,
    100,
    90,
    "assets/audio/obiwan.mp3"
  );
  characters.Ahsoka = new Character(
    "Ahsoka",
    "Ahsoka",
    "<img id='Ahsoka' src='assets/images/Ahsoka.png'>",
    11,
    14,
    1,
    8,
    16,
    16,
    8,
    140,
    110,
    "assets/audio/Ahsoka.wav"
  );
  characters.duku = new Character(
    "Count Dooku",
    "duku",
    "<img id='duku' src='assets/images/duku.png'>",
    8,
    12,
    1,
    8,
    16,
    16,
    6,
    130,
    110,
    "assets/audio/vader.wav"
  );
  characters.rex = new Character(
    "Captain Rex",
    "rex",
    "<img id='rex' src='assets/images/rex.png'>",
    8,
    10,
    1,
    7,
    16,
    14,
    0,
    130,
    110,
    "assets/audio/luke.wav"
  );
  characters.windu = new Character(
    "Mace Windu",
    "windu",
    "<img id='windu' src='assets/images/windu.png'>",
    8,
    12,
    1,
    8,
    16,
    16,
    6,
    130,
    110,
    "assets/audio/luke.wav"
  );
  characters.han = new Character(
    "Han Solo",
    "han",
    "<img id='han' src='assets/images/han.png'>",
    7,
    7,
    1,
    7,
    16,
    14,
    0,
    130,
    110,
    "assets/audio/yoda.wav"
  );
  characters.kylo = new Character(
    "Kylo Ren",
    "kylo",
    "<img id='kylo' src='assets/images/kylo.png'>",
    7,
    6,
    1,
    8,
    7,
    8,
    6,
    100,
    100,
    "assets/audio/vader.wav"
  );
  characters.palpatine = new Character(
    "Emperor Palpatine",
    "palpatine",
    "<img id='palpatine' src='assets/images/palpatine.png'>",
    13,
    14,
    1,
    8,
    7,
    8,
    6,
    200,
    100,
    "assets/audio/vader.wav"
  );
  characters.revan = new Character(
    "Darth Revan",
    "revan",
    "<img id='revan' src='assets/images/revan.png'>",
    16,
    16,
    1,
    8,
    7,
    12,
    9,
    170,
    100,
    "assets/audio/vader.wav"
  );
  characters.maul = new Character(
    "Darth Maul",
    "maul",
    "<img id='maul' src='assets/images/maul.png'>",
    12,
    10,
    1,
    8,
    7,
    7,
    4,
    130,
    100,
    "assets/audio/vader.wav"
  );
  characters.anakin = new Character(
    "Anakin Skywalker",
    "anakin",
    "<img id='anakin' src='assets/images/anakin.png'>",
    15,
    15,
    1,
    8,
    7,
    12,
    10,
    130,
    100,
    "assets/audio/obiwan.mp3"
  );
  characters.padme = new Character(
    "Padme Amidala",
    "padme",
    "<img id='padme' src='assets/images/padme.png'>",
    10,
    10,
    3,
    8,
    7,
    12,
    0,
    130,
    100,
    "assets/audio/obiwan.mp3"
  );
  characters.Craig = new Character(
    "Master Craig",
    "Craig",
    "<img id='Craig' src='assets/images/Craig.png'>",
    16,
    15,
    5,
    10,
    6,
    18,
    10,
    200,
    80,
    "assets/audio/obiwan.mp3"
  );
  characters.clemence = new Character(
    "Padawan Clémence",
    "clemence",
    "<img id='clemence' src='assets/images/clemence.png'>",
    15,
    10,
    1,
    8,
    7,
    12,
    6,
    140,
    100,
    "assets/audio/yoda.wav"
  );

  //Generate the default game state.
  function add(location, elements) {
    for (let element of elements) {
      location.append(element);
    }
  }

  function defaultGameState() {
    playerCharacter = {};
    enemyCharacter = {};
    isCharacterAvailable = {};
    for (let key in characters) {
      isCharacterAvailable[key] = true;
    }
    $("#game").empty();
    $("#game").attr("class", "game__player-selection");
    add($("#game"), [
      "<h4>Choose Your Fighter!</h4>",
      "<h4>Characters with Colored Backgrounds Were Custom Made!</h4>",
      "<div class='l-container' id='roster'></div>",
    ]);
    add($("#roster"), [
      characters.luke.image,
      characters.yoda.image,
      characters.vader.image,
      characters.obiwan.image,
      characters.Ahsoka.image,
      characters.duku.image,
      characters.rex.image,
      characters.windu.image,
      characters.anakin.image,
      characters.padme.image,
      characters.maul.image,
      characters.han.image,
      characters.kylo.image,
      characters.palpatine.image,
      characters.revan.image,
      characters.Craig.image,
      characters.clemence.image,
    ]);
    $("img").click(function () {
      $("#sound-effect").attr("src", "assets/audio/select.wav");
      generateCharacterCard($(this).attr("id"), true);
    });
  }

  function generateCharacterCard(name, isPlayerCharacter) {
    var character = characters[name];
    $("#game").empty();
    add($("#game"), [
      `<div id='card' class='l-character-card border__${name}'>`,
    ]);
    add($("#card"), [
      `<div id='name' class='border__${name}'>`,
      `<div id='image' class='border__${name}'>`,
      `<div id='stats' class='border__${name}'>`,
    ]);
    add($("#name"), [
      `<h4 class="vertical-center">${character.characterName}</h4>`,
    ]);
    add($("#image"), [character.image]);
    var stats = [];
    if (isPlayerCharacter) {
      stats.push(`<h4>Attack Bonus: ${character.attackBonus}`);
      stats.push(`<h4>Base Attack Power: ${character.attackPower}`);
      stats.push(`<h4>Attack Power Increment: ${character.attackIncrement}`);
      stats.push(`<h4>Health: ${character.healthPoints}`);
    } else {
      stats.push(`<h4>Attack Bonus: ${character.counterAttackBonus}`);
      stats.push(`<h4>Attack Power: ${character.counterAttackPower}`);
      stats.push(`<h4>Health: ${character.enemyHealthPoints}`);
    }
    stats.push(`<h4>Force Strength: ${character.forceStrength}`);
    stats.push(`<h4>Defense: ${character.defense}`);
    stats.push(`<button id='select' class='border__${name}'>Select</button>`);
    stats.push(`<button id='return' class='border__${name}'>Return</button>`);
    add($("#stats"), stats);
    $("#return").click(function () {
      $("#sound-effect").attr("src", "assets/audio/return.wav");
      if (isPlayerCharacter) {
        defaultGameState();
      } else {
        enemyPicker();
      }
    });
    $("#select").click(function () {
      $("#sound-effect").attr("src", "assets/audio/select.wav");
      if (isPlayerCharacter) {
        playerCharacter = new Character(
          character.characterName,
          character.id,
          character.image,
          character.attackPower,
          character.attackBonus,
          character.attackIncrement,
          character.counterAttackPower,
          character.counterAttackBonus,
          character.defense,
          character.forceStrength,
          character.healthPoints,
          character.enemyHealthPoints,
          character.audio
        );
        playerCharacter.currentHealth = playerCharacter.healthPoints;
        playerCharacter.isDazed = false;
        isCharacterAvailable[name] = false;
        playerCharacter.count = 3;
        $("#music").attr("src", playerCharacter.audio);
        enemyPicker();
        return;
      } else {
        enemyCharacter = new Character(
          character.characterName,
          character.id,
          character.image,
          character.attackPower,
          character.attackBonus,
          character.attackIncrement,
          character.counterAttackPower,
          character.counterAttackBonus,
          character.defense,
          character.forceStrength,
          character.healthPoints,
          character.enemyHealthPoints,
          character.audio
        );
        enemyCharacter.currentHealth = enemyCharacter.enemyHealthPoints;
        enemyCharacter.relativeAttack =
          enemyCharacter.attackBonus / (playerCharacter.defense - 10);
        enemyCharacter.relativeForce =
          enemyCharacter.forceStrength / playerCharacter.forceStrength;
        enemyCharacter.isDazed = false;
        isCharacterAvailable[name] = false;
        $("#music").attr("src", enemyCharacter.audio);
        beginCombat();
        return;
      }
    });
  }

  function enemyPicker() {
    $("#game").empty();
    $("#game").attr("class", "game__player-selection");
    add($("#game"), [
      "<h4>Choose your enemy!</h4>",
      "<div class='l-container' id='roster'></div>",
    ]);
    for (let key in isCharacterAvailable) {
      if (isCharacterAvailable[key]) {
        add($("#roster"), [characters[key].image]);
      }
    }
    $("img").click(function () {
      $("#sound-effect").attr("src", "assets/audio/select.wav");
      generateCharacterCard($(this).attr("id"), false);
    });
  }

  function beginCombat() {
    $("#game").empty();
    add($("#game"), [
      `<div id='combat-card' class='l-combat-card border__${enemyCharacter.id}'>`,
    ]);
    add($("#combat-card"), [
      "<div id='player-name'>",
      "<div id='enemy-name'>",
      "<div id='player-image'>",
      "<div id='enemy-image'>",
      "<div id='health'>",
      `<div id='results' class='border__${enemyCharacter.id}'>`,
      "<div id='actions'>",
    ]);
    add($("#player-name"), [
      `<h4>${playerCharacter.characterName}</h4>`,
      `<div id='player-health-bar' class='health-bar border__${playerCharacter.id}'><div id='player-health' class='health-status background__${playerCharacter.id}'></div></div>`,
    ]);
    add($("#enemy-name"), [
      `<h4>${enemyCharacter.characterName}</h4>`,
      `<div id='enemy-health-bar' class='health-bar border__${enemyCharacter.id}'><div id='enemy-health' class='health-status background__${enemyCharacter.id}'></div></div>`,
    ]);
    var healthPercentage =
      (100 * playerCharacter.currentHealth) / playerCharacter.healthPoints;
    $("#player-health").css({ width: healthPercentage + "%" });
    add($("#player-image"), [playerCharacter.image]);
    add($("#enemy-image"), [enemyCharacter.image]);
    add($("#actions"), [
      `<button id='attack' class='border__${playerCharacter.id}'>Attack!</button>`,
      `<button id='force' class='border__${playerCharacter.id}'>Use The Force!</button>`,
    ]);
    playerTurn();
  }

  function playerTurn() {
    var canClick = true;
    if (playerCharacter.isDazed) {
      $("#enemy-name").attr("class", `text__${enemyCharacter.id}`);
      $("#player-name").attr("class", "");
      setTimeout(function () {
        $("#sound-effect").attr("src", "assets/audio/dazed.wav");
        $("#results").html(`<h4>You are dazed and miss your turn!</h4>`);
        $("#player-name").attr("class", `text__${playerCharacter.id}`);
        $("#enemy-name").attr("class", "");
      }, 2000);
      playerCharacter.isDazed = false;
      setTimeout(function () {
        enemyTurn();
      }, 4000);
      return;
    } else {
      $("#enemy-name").attr("class", `text__${enemyCharacter.id}`);
      $("#player-name").attr("class", "");
      $("#attack").click(function () {
        if (canClick) {
          canClick = false;
          if (playerCharacter.attack > enemyCharacter.defense) {
            $("#sound-effect").attr("src", "assets/audio/lightsaber-hit.mp3");
            $("#results").html(
              `<h4>You hit ${enemyCharacter.characterName} for ${playerCharacter.attackPower} damage!</h4>`
            );
            enemyCharacter.currentHealth -= playerCharacter.attackPower;
            var healthPercentage =
              (100 * enemyCharacter.currentHealth) /
              enemyCharacter.enemyHealthPoints;
            $("#enemy-health").animate(
              { width: healthPercentage + "%" },
              1000,
              function () {}
            );
            playerCharacter.attackPower += playerCharacter.attackIncrement;
            if (healthPercentage <= 0) {
              $("#enemy-image").empty();
              playerCharacter.count -= 1;
              $("#actions").html(
                `<button id='yes' class='border__${playerCharacter.id}'>Yes!</button>`
              );
              if (playerCharacter.count > 0) {
                $("#results").html(
                  `<h4>You defeated ${enemyCharacter.characterName}, ready for your next challenger?</h4>`
                );
                $("#yes").click(function () {
                  $("#sound-effect").attr("src", "assets/audio/select.wav");
                  enemyPicker();
                  return;
                });
              } else {
                $("#results").html(
                  `<h4>You defeated all the enemies, want to play again?</h4>`
                );
                $("#yes").click(function () {
                  $("#sound-effect").attr("src", "assets/audio/select.wav");
                  defaultGameState();
                  $("#music").attr("src", "assets/audio/main.wav");
                  return;
                });
              }
            } else {
              $("#player-name").attr("class", `text__${playerCharacter.id}`);
              $("#enemy-name").attr("class", "");
              setTimeout(function () {
                enemyTurn();
              }, 2000);
              return;
            }
          } else {
            $("#sound-effect").attr("src", "assets/audio/miss.wav");
            $("#results").html(
              `<h4>You missed ${enemyCharacter.characterName}</h4>`
            );
            $("#player-name").attr("class", `text__${playerCharacter.id}`);
            $("#enemy-name").attr("class", "");
            setTimeout(function () {
              enemyTurn();
            }, 2000);
            return;
          }
        }
      });
      $("#force").click(function () {
        if (canClick) {
          canClick = false;
          if (playerCharacter.forceContest > enemyCharacter.forceContest) {
            $("#sound-effect").attr("src", "assets/audio/force-daze.wav");
            enemyCharacter.isDazed = true;
            $("#results").html(
              `<h4>Your Force power has dazed ${enemyCharacter.characterName}, you can take another action!</h4>`
            );
            playerTurn();
            return;
          } else {
            $("#sound-effect").attr("src", "assets/audio/miss.wav");
            $("#results").html(
              `<h4>The force is strong with ${enemyCharacter.characterName}, he has resisted!</h4>`
            );
            $("#player-name").attr("class", `text__${playerCharacter.id}`);
            $("#enemy-name").attr("class", "");
            setTimeout(function () {
              enemyTurn();
            }, 2000);
            return;
          }
        }
      });
    }
  }

  function enemyTurn() {
    $("#attack").click(function () {});
    $("#force").click(function () {});
    if (enemyCharacter.isDazed) {
      $("#sound-effect").attr("src", "assets/audio/dazed.wav");
      enemyCharacter.isDazed = false;
      $("#results").html(
        `<h4>${enemyCharacter.characterName} is dazed and misses his turn!</h4>`
      );
      playerTurn();
      return;
    } else {
      var randomPicker =
        Math.random() *
        (enemyCharacter.relativeAttack + enemyCharacter.relativeForce);
      if (
        randomPicker < enemyCharacter.relativeAttack ||
        playerCharacter.isDazed
      ) {
        if (enemyCharacter.counterAttack > playerCharacter.defense) {
          $("#sound-effect").attr("src", "assets/audio/lightsaber-hit.mp3");
          $("#results").html(
            `<h4>${enemyCharacter.characterName} hit you for ${enemyCharacter.counterAttackPower} damage!</h4>`
          );
          playerCharacter.currentHealth -= enemyCharacter.counterAttackPower;
          var healthPercentage =
            (100 * playerCharacter.currentHealth) /
            playerCharacter.healthPoints;
          $("#player-health").animate(
            { width: healthPercentage + "%" },
            1000,
            function () {}
          );
          if (healthPercentage <= 0) {
            $("#results").html(
              `<h4>You have been defeated by ${enemyCharacter.characterName}, want to play again?</h4>`
            );
            $("#actions").html(
              `<button id='yes' class='border__${playerCharacter.id}'>Yes!</button>`
            );
            $("#yes").click(function () {
              $("#sound-effect").attr("src", "assets/audio/select.wav");
              defaultGameState();
              $("#music").attr("src", "assets/audio/main.wav");
              return;
            });
            return;
          }
          playerTurn();
          return;
        } else {
          $("#sound-effect").attr("src", "assets/audio/miss.wav");
          $("#results").html(
            `<h4>${enemyCharacter.characterName} missed you!</h4>`
          );
          playerTurn();
          return;
        }
      } else {
        if (playerCharacter.forceContest < enemyCharacter.forceContest) {
          $("#sound-effect").attr("src", "assets/audio/force-daze.wav");
          playerCharacter.isDazed = true;
          $("#results").html(
            `<h4>${enemyCharacter.characterName}'s Force power has dazed you, they may now act again!</h4>`
          );
          setTimeout(function () {
            enemyTurn();
          }, 2000);
          return;
        } else {
          $("#sound-effect").attr("src", "assets/audio/miss.wav");
          $("#results").html(
            `<h4>The force is strong with you, you have resisted ${enemyCharacter.characterName}'s attempt to daze you!</h4>`
          );
          playerTurn();
          return;
        }
      }
    }
  }

  defaultGameState();

  var isSoundOn = true;

  $("#sound-control").click(function () {
    if (isSoundOn) {
      $("#sound-control").attr("class", "fas fa-volume-mute");
      isSoundOn = false;
      $("#music").prop("muted", true);
      $("#sound-effect").prop("muted", true);
    } else {
      $("#sound-control").attr("class", "fas fa-volume-up");
      isSoundOn = true;
      $("#music").prop("muted", false);
      $("#sound-effect").prop("muted", false);
    }
  });

  //Combat setup function
  //1. Add click method for enemy selection

  //2. Rebuild site accordingly

  //3. Move into combat function

  //Combat function
  //1. Add buttons and click methods for lightsaber and force attacks

  //2. Settle results of attacks

  //3. Declare victory or defeat

  //4. Recurse this function if no victory, else move back to combat setup
});
