// Setting battleTypeChart for move effectiveness
var battleTypeChart = {
	"bug": {
		damageTaken: {
			"bug": 1,
			"dark": 1,
			"dragon": 1,
			"electric": 1,
			"fairy": 1,
			"fighting": .5,
			"fire": 2,
			"flying": 2,
			"ghost": 1,
			"grass": .5,
			"ground": .5,
			"ice": 1,
			"normal": 1,
			"poison": 1,
			"psychic": 1,
			"rock": 2,
			"steel": 1,
			"water": 1,
		},
	},
	"dark": {
		damageTaken: {
			prankster: 3,
			"bug": 2,
			"dark": .5,
			"dragon": 1,
			"electric": 1,
			"fairy": 2,
			"fighting": 2,
			"fire": 1,
			"flying": 1,
			"ghost": .5,
			"grass": 1,
			"ground": 1,
			"ice": 1,
			"normal": 1,
			"poison": 1,
			"psychic": 3,
			"rock": 1,
			"steel": 1,
			"water": 1,
		},
	},
	"dragon": {
		damageTaken: {
			"bug": 1,
			"dark": 1,
			"dragon": 2,
			"electric": .5,
			"fairy": 2,
			"fighting": 1,
			"fire": .5,
			"flying": 1,
			"ghost": 1,
			"grass": .5,
			"ground": 1,
			"ice": 2,
			"normal": 1,
			"poison": 1,
			"psychic": 1,
			"rock": 1,
			"steel": 1,
			"water": .5,
		},
	},
	"electric": {
		damageTaken: {
			par: 3,
			"bug": 1,
			"dark": 1,
			"dragon": 1,
			"electric": .5,
			"fairy": 1,
			"fighting": 1,
			"fire": 1,
			"flying": .5,
			"ghost": 1,
			"grass": 1,
			"ground": 2,
			"ice": 1,
			"normal": 1,
			"poison": 1,
			"psychic": 1,
			"rock": 1,
			"steel": .5,
			"water": 1,
		},
	},
	"fairy": {
		damageTaken: {
			"bug": .5,
			"dark": .5,
			"dragon": 3,
			"electric": 1,
			"fairy": 1,
			"fighting": .5,
			"fire": 1,
			"flying": 1,
			"ghost": 1,
			"grass": 1,
			"ground": 1,
			"ice": 1,
			"normal": 1,
			"poison": 2,
			"psychic": 1,
			"rock": 1,
			"steel": 2,
			"water": 1,
		},
	},
	"fighting": {
		damageTaken: {
			"bug": .5,
			"dark": .5,
			"dragon": 1,
			"electric": 1,
			"fairy": 2,
			"fighting": 1,
			"fire": 1,
			"flying": 2,
			"ghost": 1,
			"grass": 1,
			"ground": 1,
			"ice": 1,
			"normal": 1,
			"poison": 1,
			"psychic": 2,
			"rock": .5,
			"steel": 1,
			"water": 1,
		},
	},
	"fire": {
		damageTaken: {
			brn: 3,
			"bug": .5,
			"dark": 1,
			"dragon": 1,
			"electric": 1,
			"fairy": .5,
			"fighting": 1,
			"fire": .5,
			"flying": 1,
			"ghost": 1,
			"grass": .5,
			"ground": 2,
			"ice": .5,
			"normal": 1,
			"poison": 1,
			"psychic": 1,
			"rock": 2,
			"steel": .5,
			"water": 2,
		},
	},
	"flying": {
		damageTaken: {
			"bug": .5,
			"dark": 1,
			"dragon": 1,
			"electric": 2,
			"fairy": 1,
			"fighting": .5,
			"fire": 1,
			"flying": 1,
			"ghost": 1,
			"grass": .5,
			"ground": 3,
			"ice": 2,
			"normal": 1,
			"poison": 1,
			"psychic": 1,
			"rock": 2,
			"steel": 1,
			"water": 1,
		},
	},
	"ghost": {
		damageTaken: {
			trapped: 3,
			"bug": .5,
			"dark": 2,
			"dragon": 1,
			"electric": 1,
			"fairy": 1,
			"fighting": 3,
			"fire": 1,
			"flying": 1,
			"ghost": 2,
			"grass": 1,
			"ground": 1,
			"ice": 1,
			"normal": 3,
			"poison": .5,
			"psychic": 1,
			"rock": 1,
			"steel": 1,
			"water": 1,
		},
	},
	"grass": {
		damageTaken: {
			powder: 3,
			"bug": 2,
			"dark": 1,
			"dragon": 1,
			"electric": .5,
			"fairy": 1,
			"fighting": 1,
			"fire": 2,
			"flying": 2,
			"ghost": 1,
			"grass": .5,
			"ground": .5,
			"ice": 2,
			"normal": 1,
			"poison": 2,
			"psychic": 1,
			"rock": 1,
			"steel": 1,
			"water": .5,
		},
	},
	"ground": {
		damageTaken: {
			sandstorm: 3,
			"bug": 1,
			"dark": 1,
			"dragon": 1,
			"electric": 3,
			"fairy": 1,
			"fighting": 1,
			"fire": 1,
			"flying": 1,
			"ghost": 1,
			"grass": 2,
			"ground": 1,
			"ice": 2,
			"normal": 1,
			"poison": .5,
			"psychic": 1,
			"rock": .5,
			"steel": 1,
			"water": 2,
		},
	},
	"ice": {
		damageTaken: {
			hail: 3,
			frz: 3,
			"bug": 1,
			"dark": 1,
			"dragon": 1,
			"electric": 1,
			"fairy": 1,
			"fighting": 2,
			"fire": 2,
			"flying": 1,
			"ghost": 1,
			"grass": 1,
			"ground": 1,
			"ice": .5,
			"normal": 1,
			"poison": 1,
			"psychic": 1,
			"rock": 2,
			"steel": 2,
			"water": 1,
		},
	},
	"normal": {
		damageTaken: {
			"bug": 1,
			"dark": 1,
			"dragon": 1,
			"electric": 1,
			"fairy": 1,
			"fighting": 2,
			"fire": 1,
			"flying": 1,
			"ghost": 3,
			"grass": 1,
			"ground": 1,
			"ice": 1,
			"normal": 1,
			"poison": 1,
			"psychic": 1,
			"rock": 1,
			"steel": 1,
			"water": 1,
		},
	},
	"poison": {
		damageTaken: {
			psn: 3,
			tox: 3,
			"bug": .5,
			"dark": 1,
			"dragon": 1,
			"electric": 1,
			"fairy": .5,
			"fighting": .5,
			"fire": 1,
			"flying": 1,
			"ghost": 1,
			"grass": .5,
			"ground": 2,
			"ice": 1,
			"normal": 1,
			"poison": .5,
			"psychic": 2,
			"rock": 1,
			"steel": 1,
			"water": 1,
		},
	},
	"psychic": {
		damageTaken: {
			"bug": 2,
			"dark": 2,
			"dragon": 1,
			"electric": 1,
			"fairy": 1,
			"fighting": .5,
			"fire": 1,
			"flying": 1,
			"ghost": 2,
			"grass": 1,
			"ground": 1,
			"ice": 1,
			"normal": 1,
			"poison": 1,
			"psychic": .5,
			"rock": 1,
			"steel": 1,
			"water": 1,
		},
	},
	"rock": {
		damageTaken: {
			sandstorm: 3,
			"bug": 1,
			"dark": 1,
			"dragon": 1,
			"electric": 1,
			"fairy": 1,
			"fighting": 2,
			"fire": .5,
			"flying": .5,
			"ghost": 1,
			"grass": 2,
			"ground": 2,
			"ice": 1,
			"normal": .5,
			"poison": .5,
			"psychic": 1,
			"rock": 1,
			"steel": 2,
			"water": 2,
		},
	},
	"steel": {
		damageTaken: {
			psn: 3,
			tox: 3,
			sandstorm: 3,
			"bug": .5,
			"dark": 1,
			"dragon": .5,
			"electric": 1,
			"fairy": .5,
			"fighting": 2,
			"fire": 2,
			"flying": .5,
			"ghost": 1,
			"grass": .5,
			"ground": 2,
			"ice": .5,
			"normal": .5,
			"poison": 3,
			"psychic": .5,
			"rock": .5,
			"steel": .5,
			"water": 1,
		},
	},
	"water": {
		damageTaken: {
			"bug": 1,
			"dark": 1,
			"dragon": 1,
			"electric": 2,
			"fairy": 1,
			"fighting": 1,
			"fire": .5,
			"flying": 1,
			"ghost": 1,
			"grass": 2,
			"ground": 1,
			"ice": .5,
			"normal": 1,
			"poison": 1,
			"psychic": 1,
			"rock": 1,
			"steel": .5,
			"water": .5,
		},
	},
};
// Switch Statement to color pokemon/move typing
let typeColor = (type) => {
  switch (type){
    case "normal":
      return "#a8a86d";
    break;
    case "fire":
      return "#f08030";
    break;
    case "water":
      return "#6890f0";
    break;
    case "electric":
      return "#f8d030";
    break;
    case "grass":
      return "#78c850";
    break;
    case "ice":
      return "#98d8d8";
    break;
    case "fighting":
      return "#c03028";
    break;
    case "poison":
      return "#a040a0";
    break;
    case "ground":
      return "#e0c068";
    break;
    case "flying":
      return "#a890f0";
    break;
    case "psyhic":
      return "#f85888";
    break;
    case "bug":
      return "#a8b820";
    break;
    case "rock":
      return "#b8a038";
    break;
    case "ghost":
      return "#705898";
    break;
    case "dragon":
      return "#7038f8";
    break;
    case "dark":
      return "#705848";
    break;
    case "steel":
      return "#b8b8d0";
    break;
    case "fairy":
      return "#e898e8";
    break;
  }
};

var fightClicked = false;
var switchClicked = false;
var userActive = [];
var compActive = [];
var maxHP = 0;
var maxHPBar = 0;
var currentHPBar = 0;
var userCurrentHP = 0;
var userHPFormula = (user) => {
  $("#user-active-maxhp").remove();
  $("#user-active-currenthp").remove();
  maxHPBar = document.createElement("div");
  currentHPBar = document.createElement("div");
  maxHPBar.id = "user-active-maxhp";
  currentHPBar.id = "user-active-currenthp";
  maxHPBar.className = "hpbars";
  currentHPBar.className = "hpbars";

  maxHP = (userActive[0].stats.hp*2)+110;

  $(maxHPBar).text(`${user}/${(userActive[0].stats.hp*2)+110}`);
  $(maxHPBar).css({
    "text-align" : "right"
  })

  $(currentHPBar).css("width", (i) =>{
    return i = `${Math.floor((user/maxHP)*100)}%`
  });

  $(currentHPBar).css("background-color", (i)=>{
    if(parseInt($(currentHPBar).css("width")) >= 50) {
      return i = "green";
    }
    else if(parseInt($(currentHPBar).css("width")) >= 20 ) {
      return i = "yellow";
    } else {
      return i = "red";
    };
  })

  $(currentHPBar).appendTo(maxHPBar);
  $(maxHPBar).appendTo("#user-active-display");
}
var foeCurrentHP = 0;
var foeHPFormula = (foe) => {
  $("#comp-active-maxhp").remove();
  $("#comp-active-currenthp").remove();
  maxHPBar = document.createElement("div");
  currentHPBar = document.createElement("div");
  maxHPBar.id = "comp-active-maxhp";
  currentHPBar.id = "comp-active-currenthp";
  maxHPBar.className = "hpbars";
  currentHPBar.className = "hpbars";

  maxHP = (compActive[0].stats.hp*2)+110;

  $(maxHPBar).text(`${foe}/${(compActive[0].stats.hp*2)+110}`);
  $(maxHPBar).css({
    "text-align" : "right"
  })

  $(currentHPBar).css("width", (i) =>{
    return i = `${Math.floor((foe/maxHP)*100)}%`
  });

  $(currentHPBar).css("background-color", (i)=>{
    if(parseInt($(currentHPBar).css("width")) >= 50) {
      return i = "green";
    }
    else if(parseInt($(currentHPBar).css("width")) >= 20 ) {
      return i = "yellow";
    } else {
      return i = "red";
    };
  })

  $(currentHPBar).appendTo(maxHPBar);
  $(maxHPBar).appendTo("#comp-active-display");
}
var mainBattleScreenMenu = 0;
var fightClicker = 0;
var switchClicker = 0;
var escListener = 0
var userMove =[];
var compMove = [];
var userActiveSpd = 0;
var compActiveSpd = 0;
var s = 0;
var u = 0;
var c = 0;
var t = 0;
var r = 0;
var dmg = (power, attacker, defender) => {
  return Math.round(((((22*power*attacker/defender)/50)+2)*r*s*t));
};

// Declaring start function - inputting the first pokemon for each team
const userStart = () => {
  if(userTeam.length === 0 && userActive.length === 0) {
    $("#central-info").empty();
    $("footer").remove();
    let go = document.createElement("p");
    go.id = "game-over";
    $(go).text("You have been defeated by the Computer");
    $(go).appendTo("#central-info");
  } else {
    userActive.push(userTeam.shift());
    if(userActive[0]) {

      let img = document.createElement("img");
      img.src = userActive[0].battleSprite;
      img.className = "mid-img";
      $("#"+userActive[0].name).remove();
      $(img).appendTo("#user-active-sprite");

      let pName = document.createElement("p");
      pName.className = "active-poke-name";
      pName.id = "user-current";
      $(pName).text(`${userActive[0].name}`);
      $(pName).appendTo("#user-active-display");

      if(!userActive[0].currHP) {
      userCurrentHP = (userActive[0].stats.hp*2)+110
      userHPFormula(userCurrentHP);
    } else {
      userCurrentHP = userActive[0].currHP;
      userHPFormula(userCurrentHP);
    }
    }

    let small = document.getElementsByClassName("small");
    mainBattleScreenMenu = () =>{
      $(".log").empty();
      let arrUI = ["fight", "switch", "item", "quit"];
      $(".small").empty();
      for(let i = 0; i < small.length; i++) {
        let p = document.createElement("p");
        p.className = "small-text";
        $(".small-text").css("font-size", "16px");
        p.id = arrUI[i];
        $(p).text(arrUI[i]);
        $(small[i]).append(p);
      }
    }
    mainBattleScreenMenu();
    // Click functionality for the fight tag
    fightClicker = () => {
       $("#fight").click((e)=> {
        console.log(e);
        fightClicked = !fightClicked;
        $(".small").empty();

        let pFightInfo = document.createElement("p");
        pFightInfo.id = "fight-info";
        $(pFightInfo).html(`Hover over a move to see details about it or press <i>ESC</i> to go back.`);
        $(pFightInfo).appendTo("#large");
        // For loop to place the active pokemon's moves
        for(let i = 0; i < small.length; i++) {
          let pSmallText = document.createElement("p");
          pSmallText.className = "small-text";
          $(pSmallText).css("font-size", "12px");
          pSmallText.id = i;
          $(pSmallText).text(userActive[0].moves[i].name);
          $(small[i]).append(pSmallText);

          $(pSmallText).mouseover(() => {
            $("#large").empty();
            let m = document.createElement("p");
            m.className = "move-info move-name";
            $(m).text(userActive[0].moves[i].name);
            $(m).appendTo("#large");

            let t = document.createElement("p");
            t.className = "move-info move-type";
            $(t).css("background-color", typeColor(userActive[0].moves[i].type))
            $(t).text(userActive[0].moves[i].type);
            $(t).appendTo("#large");

            let desc = document.createElement("p");
            desc.className = "move-info move-desc";
            $(desc).text(userActive[0].moves[i].description);
            $(desc).appendTo("#large");
          })
          // Add a click event to each move also.
          $(pSmallText).click((e) => {
            userMove = userActive[0].moves[e.target.id];
            console.log(`You are going to use ${e.target.text} when the Battle function runs`)
            battle(); // -> This calls mainBattleScreenMenu and fightClicker
            $("#large").empty();
            $(".small").empty();
          })
        }
      });
    }
    fightClicker();

    switchClicker = () => {

      $("#switch").click((e) => {
        console.log("I have been clicked");
        $("#large").empty();
        $(".small").empty();
        switchClicked = !switchClicked;
        for(let i = 0; i < userTeam.length; i++) {
          let img = document.createElement("img");
          img.src = userTeam[i].switchSprite;
          img.id = `${i}`;
          img.className = "mid-img";
          $("#large").append(img);

          $(img).click((e) => {
            console.log(e);
            userActive[0].currHP = userCurrentHP;
            userTeam.push(userActive.shift());
            let x = userTeam[e.target.id];
            $(`#${x.name}`).remove();
            userActive.push(x);
            userTeam.splice(e.target.id, 1);
            $("#large").empty();
            $(".small").empty();
            $("#user-current").remove();
            $("#user-active-maxhp").remove();
            $("#user-active-currenthp").remove();
            $("#user-active-sprite").empty();

            let img = document.createElement("img");
            img.src = userActive[0].battleSprite;
            img.className = "mid-img";
            $("#"+userActive[0].name).remove();
            $(img).appendTo("#user-active-sprite");

            let pName = document.createElement("p");
            pName.className = "active-poke-name";
            pName.id = "user-current";
            $(pName).text(`${userActive[0].name}`);
            $(pName).appendTo("#user-active-display");

            let imgTeam = document.createElement("img");
            imgTeam.src = userTeam[userTeam.length-1].switchSprite;
            imgTeam.className = "team";
            $(imgTeam).appendTo("#user-log");

            userCurrentHP = (userActive[0].stats.hp*2)+110
            userHPFormula(userCurrentHP);

            small;
            mainBattleScreenMenu();
            fightClicker();
            switchClicker();
          })
        }
      })
    }
    switchClicker();
    // keypress functionality to revert to main battle screen
    escListener =
    $(document).keydown((e)=>{
      if(e.keyCode === 27 && (fightClicked || switchClicked)) {
        mainBattleScreenMenu();
        fightClicker();
        switchClicker();
        $("#large").empty();
        fightClicked = false;
        switchClicked = false;

      }
    });
  }
}

const compStart = () => {
  if(compTeam.length === 0 && compActive.length === 0) {
    $("#central-info").empty();
    $("footer").remove();
    let go = document.createElement("p");
    go.id = "game-over";
    $(go).text("You have defeated the Computer");
    $(go).appendTo("#central-info");
  } else {
    compActive.push(compTeam.shift());
      if(compActive[0]) {

        let img = document.createElement("img");
        img.src = compActive[0].battleSprite;
        img.className = "mid-img";
        $("#"+compActive[0].name).remove();
        $(img).appendTo("#comp-active-sprite");

        let pName = document.createElement("p");
        pName.className = "active-poke-name";
        pName.id = "foe-current";
        $(pName).text(`${compActive[0].name}`);
        $(pName).appendTo("#comp-active-display");

        foeCurrentHP = (compActive[0].stats.hp*2)+110
        foeHPFormula(foeCurrentHP);
      }
      // Setting what I want to start within my small sectionals in the UI
    }
}
// 2nd part of the battle phase
const battleP2 = () => {

    if(userActiveSpd > compActiveSpd) {

      // Checking for STAB on Attacking poke
      if(userActive[0].types[0] === userMove.type || userActive[0].types[0] === userMove.type) {
        s = 1.5;
      } else {
        s = 1;
      }

      if(userMove.category === "physical") {
        // if Current move is physical - calcu atk and def
        u = (userActive[0].stats.attack*2)+5;
        c = (compActive[0].stats.defense*2)+5;
        // randomizer for damage calcs
        r = Number((Math.random()*(1 - .85) + .85).toFixed(2));
        // CHecking typeChart
        if(compActive[0].types.length > 1) {
          let t1 = battleTypeChart[compActive[0].types[0]].damageTaken[userMove.type];
          let t2 = battleTypeChart[compActive[0].types[1]].damageTaken[userMove.type];
          t = t1 * t2;
        } else {
          t = battleTypeChart[compActive[0].types[0]].damageTaken[userMove.type];
        }

          foeCurrentHP -= dmg(userMove.power, u, c);
          console.log("slower phy", foeCurrentHP);

          if(foeCurrentHP < 0) {
            compActive = [];
            $("#foe-current").remove();
            $("#comp-active-maxhp").remove();
            $("#comp-active-currenthp").remove();
            $("#comp-active-sprite").empty();
            compStart();
            setTimeout(mainBattleScreenMenu, 100);
            setTimeout(fightClicker, 200);
            setTimeout(switchClicker, 300);
            escListener;
          } else {
            foeHPFormula(foeCurrentHP);
            mainBattleScreenMenu();
            fightClicker();
            escListener;
          }
      }
      else if(userMove.category === "special") {
        // if Current move is special - calcu atk and def
        u = (userActive[0].stats["special-attack"]*2)+5;
        c = (compActive[0].stats["special-defense"]*2)+5;
        // randomizer for damage calcs
        r = Number((Math.random()*(1 - .85) + .85).toFixed(2));
        // CHecking typeChart
        if(compActive[0].types.length > 1) {
          let ty1 = compActive[0].types[0];
          let ty2 = compActive[0].types[1];
          let t1 = battleTypeChart[ty1].damageTaken[userMove.type];
          let t2 = battleTypeChart[ty2].damageTaken[userMove.type];
          t = t1 * t2;
        } else {
          t = battleTypeChart[compActive[0].types[0]].damageTaken[userMove.type];
        }

          foeCurrentHP -= dmg(userMove.power, u, c);
          console.log("slower", foeCurrentHP);
          if(foeCurrentHP < 0) {
            compActive = [];
            $("#foe-current").remove();
            $("#comp-active-maxhp").remove();
            $("#comp-active-currenthp").remove();
            $("#comp-active-sprite").empty();
            compStart();
            setTimeout(mainBattleScreenMenu, 100);
            setTimeout(fightClicker, 200);
            setTimeout(switchClicker, 300);
          } else {
            foeHPFormula(foeCurrentHP);
            mainBattleScreenMenu();
            fightClicker();
          }
        }
      else if(userMove.category === "heal") {
        userCurrentHP += (userCurrentHP*userMove.power);

        if(userCurrentHP === userActive[0].stats.hp*2+110) {
          console.log("I have full HP");
        }
        else if(userCurrentHP > userActive[0].stats.hp*2+110) {
          userCurrentHP = userActive[0].stats.hp*2+110;
        } else {
          userHPFormula(userCurrentHP);
        }
      }

      let p = document.createElement("p");
      p.className = "log";
      $(p).text(`${userActive[0].name} uses ${userMove.name}`);
      $(p).appendTo("#user-display-log");
    }
    else if(compActiveSpd > userActiveSpd) {

      // Checking for STAB on Attacking poke
      if(compActive[0].types[0] === compMove.type || compActive[0].types[1] === compMove.type) {
        s = 1.5;
      } else {
        s = 1;
      }

      if(compMove.category === "physical") {
        // if Current move is physical - calcu atk and def
        u = (compActive[0].stats.attack*2)+5;
        c = (userActive[0].stats.defense*2)+5;
        // randomizer for damage calcs
        r = Number((Math.random()*(1 - .85) + .85).toFixed(2));
        // CHecking typeChart
        if(userActive[0].types.length > 1) {
          let t1 = battleTypeChart[userActive[0].types[0]].damageTaken[compMove.type];
          let t2 = battleTypeChart[userActive[0].types[1]].damageTaken[compMove.type];
          t = t1 * t2;
        } else {
          t = battleTypeChart[userActive[0].types[0]].damageTaken[compMove.type];
        }

          userCurrentHP -= dmg(compMove.power, u, c);

          if(userCurrentHP < 0) {
            userActive = [];
            $("#user-current").remove();
            $("#user-active-maxhp").remove();
            $("#user-active-currenthp").remove();
            $("#user-active-sprite").empty();
            userStart();

          } else {
            userHPFormula(userCurrentHP);
            mainBattleScreenMenu();
            fightClicker();
          }
      }
      else if(compMove.category === "special") {
        // if Current move is special - calcu atk and def
        u = (compActive[0].stats["special-attack"]*2)+5;
        c = (userActive[0].stats["special-defense"]*2)+5;
        // randomizer for damage calcs
        r = Number((Math.random()*(1 - .85) + .85).toFixed(2));
        // CHecking typeChart
        if(userActive[0].types.length > 1) {
          let ty1 = userActive[0].types[0];
          let ty2 = userActive[0].types[1];
          let t1 = battleTypeChart[ty1].damageTaken[compMove.type];
          let t2 = battleTypeChart[ty2].damageTaken[compMove.type];
          t = t1 * t2;
        } else {
          let ty1 = userActive[0].types[0];
          t = battleTypeChart[ty1].damageTaken[compMove.type];
        }

          userCurrentHP -= dmg(compMove.power, u, c);

          if(userCurrentHP < 0) {
            userActive = [];
            $("#user-current").remove();
            $("#user-active-maxhp").remove();
            $("#user-active-currenthp").remove();
            $("#user-active-sprite").empty();
            userStart();

          } else {
            userHPFormula(userCurrentHP);
            mainBattleScreenMenu();
            fightClicker();
          }
      }
      else if(compMove.category === "heal") {
        foeCurrentHP += (foeCurrentHP*userMove.power);

        if(foeCurrentHP === compActive[0].stats.hp*2+110) {
          console.log("I have full HP");
        }
        else if(foeCurrentHP > compActive[0].stats.hp*2+110) {
          foeCurrentHP = compActive[0].stats.hp*2+110;
        }

        foeHPFormula(foeCurrentHP);
      }
      let pBattleLog = document.createElement("p");
      pBattleLog.className = "log";
      $(pBattleLog).text(`${userActive[0].name} uses ${userMove.name}`);
      $(pBattleLog).appendTo("#user-display-log");

      let p = document.createElement("p");
      p.className = "log";
      $(p).text(`${compActive[0].name} uses ${compMove.name}`);
      $(p).appendTo("#comp-display-log");
    }
}
// Battle function - All the logic for the battle.
const battle = () => {
  if(!userActive[0]) {
    userStart();
  }
  else if(!compActive[0]) {
    compStart();
  }
  else if(!userActive[0] && !compActive[0]) {
    userStart();
    compStart();
  } else { // DO LITERALLY everything else
    // Randomly selecting the compActive's move choice and saving it for later;
    compMove = compActive[0].moves[Math.floor(Math.random() * (3 - 0) + 0)];
    // Calculating Speed to find the faster pokemon
    userActiveSpd = (userActive[0].stats.speed*2)+5;
    compActiveSpd = (compActive[0].stats.speed*2)+5;


    if(userActiveSpd > compActiveSpd) {

      // Checking for STAB on Attacking poke
      if(userActive[0].types[0] === userMove.type || userActive[0].types[0] === userMove.type) {
        s = 1.5;
      } else {
        s = 1;
      }

      if(userMove.category === "physical") {
        // if Current move is physical - calcu atk and def
        u = (userActive[0].stats.attack*2)+5;
        c = (compActive[0].stats.defense*2)+5;
        // randomizer for damage calcs
        r = Number((Math.random()*(1 - .85) + .85).toFixed(2));
        // CHecking typeChart
        if(compActive[0].types.length > 1) {
          let t1 = battleTypeChart[compActive[0].types[0]].damageTaken[userMove.type];
          let t2 = battleTypeChart[compActive[0].types[1]].damageTaken[userMove.type];
          t = t1 * t2;
        } else {
          t = battleTypeChart[compActive[0].types[0]].damageTaken[userMove.type];
        }

          foeCurrentHP -= dmg(userMove.power, u, c);

          if(foeCurrentHP < 0) {

            let p = document.createElement("p");
            p.className = "log";
            $(p).text(`${userActive[0].name} uses ${userMove.name}`);
            $(p).appendTo("#user-display-log");

            compActive = [];
            $("#foe-current").remove();
            $("#comp-active-maxhp").remove();
            $("#comp-active-currenthp").remove();
            $("#comp-active-sprite").empty();
            compStart();
            setTimeout(mainBattleScreenMenu, 100);
            setTimeout(fightClicker, 200);
            setTimeout(switchClicker, 300);

          } else {
            foeHPFormula(foeCurrentHP);
            userActiveSpd = 0;
            setTimeout(battleP2, 1500);
          }
      }
      else if(userMove.category === "special") {
        // if Current move is special - calcu atk and def
        u = (userActive[0].stats["special-attack"]*2)+5;
        c = (compActive[0].stats["special-defense"]*2)+5;
        // randomizer for damage calcs
        r = Number((Math.random()*(1 - .85) + .85).toFixed(2));
        // CHecking typeChart
        if(compActive[0].types.length > 1) {
          let ty1 = compActive[0].types[0];
          let ty2 = compActive[0].types[1];
          let t1 = battleTypeChart[ty1].damageTaken[userMove.type];
          let t2 = battleTypeChart[ty2].damageTaken[userMove.type];
          t = t1 * t2;
        } else {
          t = battleTypeChart[compActive[0].types[0]].damageTaken[userMove.type];
        }

          foeCurrentHP -= dmg(userMove.power, u, c);
          console.log("here - ", foeCurrentHP);
          if(foeCurrentHP < 0) {

            compActive = [];
            $("#foe-current").remove();
            $("#comp-active-maxhp").remove();
            $("#comp-active-currenthp").remove();
            $("#comp-active-sprite").empty();
            compStart();
            setTimeout(mainBattleScreenMenu, 100);
            setTimeout(fightClicker, 200);
            setTimeout(switchClicker, 300);

          } else {
            foeHPFormula(foeCurrentHP);
            userActiveSpd = 0;
            setTimeout(battleP2, 1500);
          }
        }
      else if(userMove.category === "heal") {
        userCurrentHP += (userCurrentHP*userMove.power);
        userActiveSpd = 0;

        if(userCurrentHP === userActive[0].stats.hp*2+110) {
          console.log("I have full HP");
        }
        else if(userCurrentHP > userActive[0].stats.hp*2+110) {
          userCurrentHP = userActive[0].stats.hp*2+110;
        } else {
          userHPFormula(userCurrentHP);
          setTimeout(battleP2, 1500)
        }
      }
      let p = document.createElement("p");
      p.className = "log";
      $(p).text(`${userActive[0].name} uses ${userMove.name}`);
      $(p).appendTo("#user-display-log");

    }
    else if(compActiveSpd > userActiveSpd) {

      // Checking for STAB on Attacking poke
      if(compActive[0].types[0] === compMove.type || compActive[0].types[1] === compMove.type) {
        s = 1.5;
      } else {
        s = 1;
      }

      if(compMove.category === "physical") {
        // if Current move is physical - calcu atk and def
        u = (compActive[0].stats.attack*2)+5;
        c = (userActive[0].stats.defense*2)+5;
        // randomizer for damage calcs
        r = Number((Math.random()*(1 - .85) + .85).toFixed(2));
        // CHecking typeChart
        if(userActive[0].types.length > 1) {
          let t1 = battleTypeChart[userActive[0].types[0]].damageTaken[compMove.type];
          let t2 = battleTypeChart[userActive[0].types[1]].damageTaken[compMove.type];
          t = t1 * t2;
        } else {
          t = battleTypeChart[userActive[0].types[0]].damageTaken[compMove.type];
        }

          userCurrentHP -= dmg(compMove.power, u, c);

          if(userCurrentHP < 0) {
            userActive = [];
            $("#user-current").remove();
            $("#user-active-maxhp").remove();
            $("#user-active-currenthp").remove();
            $("#user-active-sprite").empty();
            userStart();

          } else {
            userHPFormula(userCurrentHP);
            compActiveSpd = 0;
            setTimeout(battleP2, 1500);
          }
        }
      else if(compMove.category === "special") {
        // if Current move is special - calcu atk and def
        u = (compActive[0].stats["special-attack"]*2)+5;
        c = (userActive[0].stats["special-defense"]*2)+5;
        // randomizer for damage calcs
        r = Number((Math.random()*(1 - .85) + .85).toFixed(2));
        // CHecking typeChart
        if(userActive[0].types.length > 1) {
          let ty1 = userActive[0].types[0];
          let ty2 = userActive[0].types[1];
          let t1 = battleTypeChart[ty1].damageTaken[compMove.type];
          let t2 = battleTypeChart[ty2].damageTaken[compMove.type];
          t = t1 * t2;
        } else {
          let ty1 = userActive[0].types[0];
          t = battleTypeChart[ty1].damageTaken[compMove.type];
        }

          userCurrentHP -= dmg(compMove.power, u, c);

          if(userCurrentHP < 0) {
            userActive = [];
            $("#user-current").remove();
            $("#user-active-maxhp").remove();
            $("#user-active-currenthp").remove();
            $("#user-active-sprite").empty();
            userStart();

          } else {
            userHPFormula(userCurrentHP);
            compActiveSpd = 0;
            setTimeout(battleP2, 1500);
          }
      }
      else if(compMove.category === "heal") {
        foeCurrentHP += (foeCurrentHP*userMove.power);
        compActiveSpd = 0;

        if(foeCurrentHP === compActive[0].stats.hp*2+110) {
          console.log("I have full HP");
        }
        else if(foeCurrentHP > compActive[0].stats.hp*2+110) {
          foeCurrentHP = compActive[0].stats.hp*2+110;
        }
        foeHPFormula(foeCurrentHP);
        setTimeout(battleP2, 1500)
      }
      let pBattleLog = document.createElement("p");
      pBattleLog.className = "log";
      $(pBattleLog).text(`${userActive[0].name} uses ${userMove.name}`);
      $(pBattleLog).appendTo("#user-display-log");

      let p = document.createElement("p");
      p.className = "log";
      $(p).text(`${compActive[0].name} uses ${compMove.name}`);
      $(p).appendTo("#comp-display-log");
    }
  }
}

// Declaring teams
let userTeam = [];
let compTeam = [];

let getPokemon = (poke) => {
  $.get("http://pokeapi.co/api/v2/pokemon/" + poke, (pokemonData) => {
    console.log(pokemonData);

    // Defining all the DOM elements for the User first
    if(typeof poke === "string") {
      if(pokemonData.name === "garchomp") {
      let obj = {
        "name" : pokemonData.name,
        "types" : [],
        "moves" : [{
          "name" : "Sword's Dance",
          "pp" : 20,
          "stat-changes" : {
            "atk" : +2
          },
          "description" : "Raises the user's Attack by two stages",
          "type" : "normal",
          "target" : "user",
          "priority" : 0,
          "accuracy" : null,
          "power" : null,
          "category" : null,
        },
        {
          "name" : "Earthquake",
          "pp" : 10,
          "stat-changes" : null,
          "description" : "Inflicts regular damage and can hit Dig users",
          "type" : "ground",
          "target" : "field",
          "priority" : null,
          "accuracy" : 100,
          "power" : 100,
          "category" : "physical"
        },
        {
          "name" : "Dragon Claw",
          "pp" : 15,
          "stat-changes" : null,
          "description" : "Inflicts regular damage with no additional effects",
          "type" : "dragon",
          "target" : "target",
          "priority" : 0,
          "accuracy" : 100,
          "power" : 80,
          "category" : "physical",
        },
        {
          "name" : "Iron Tail",
          "pp" : 15,
          "stat-changes" : {
            "def" : -1,
          },
          "description" : "Has a 30% chance to lower the target's Defense by one stage",
          "type" : "steel",
          "target" : "target",
          "priority" : 0,
          "accuracy" : 75,
          "power" : 100,
          "category" : "physical",
        }],
        "stats" : {
          "speed" : 0,
          "special-defense" : 0,
          "special-attack" : 0,
          "defense" : 0,
          "attack" : 0,
          "hp" : 0,
        },
        "weight" : pokemonData.weight,
        "battleSprite" : pokemonData.sprites.back_default,
        "switchSprite" : pokemonData.sprites.front_default,
      }

      // Pushing each pokemon's info into a team array
      userTeam.push(obj);
    }
      else if(pokemonData.name === "vaporeon") {
      let obj = {
        "name" : pokemonData.name,
        "types" : [],
        "moves" : [{
          "name" : "Acid Armour",
          "pp" : 20,
          "stat-changes" : {
            "def" : +2
          },
          "description" : "Raises the user's Defense by two stages",
          "type" : "poison",
          "target" : "user",
          "priority" : 0,
          "accuracy" : null,
          "power" : null,
          "category" : null,
        },
        {
          "name" : "Surf",
          "pp" : 15,
          "stat-changes" : null,
          "description" : "Inflicts regular damage and can hit Dive users",
          "type" : "water",
          "target" : "field",
          "priority" : null,
          "accuracy" : 100,
          "power" : 90,
          "category" : "special"
        },
        {
          "name" : "Ice Beam",
          "pp" : 10,
          "stat-changes" : {
            "frzn" : 10// Frozen logic
          },
          "description" : "Has a 10% to freeze the target",
          "type" : "ice",
          "target" : "target",
          "priority" : 0,
          "accuracy" : 100,
          "power" : 90,
          "category" : "special",
        },
        {
          "name" : "Shadow Ball",
          "pp" : 15,
          "stat-changes" : {
            "spdef" : -1,
          },
          "description" : "Has a 20% chance to the lower the target's Special Defense by one stage",
          "type" : "ghost",
          "target" : "target",
          "priority" : 0,
          "accuracy" : 100,
          "power" : 80,
          "category" : "special",
        }],
        "stats" : {
          "speed" : 0,
          "special-defense" : 0,
          "special-attack" : 0,
          "defense" : 0,
          "attack" : 0,
          "hp" : 0,
        },
        "weight" : pokemonData.weight,
        "battleSprite" : pokemonData.sprites.back_default,
        "switchSprite" : pokemonData.sprites.front_default,
      }
      // Pushing each pokemon's info into a team array
      userTeam.push(obj);
    }
      else if(pokemonData.name === "jolteon") {
      let obj = {
        "name" : pokemonData.name,
        "types" : [],
        "moves" : [{
          "name" : "Thunderbolt",
          "pp" : 15,
          "stat-changes" : {
            "prz" : 10 // Paralyze Logic
          },
          "description" : "Has a 10% chance to paralyze the target",
          "type" : "electric",
          "target" : "target",
          "priority" : 0,
          "accuracy" : 100,
          "power" : 90,
          "category" : "special",
        },
        {
          "name" : "Signal Beam",
          "pp" : 15,
          "stat-changes" : null,
          "description" : "Has a 10% chance to confuse the target",
          "type" : "bug",
          "target" : "target",
          "priority" : 0,
          "accuracy" : 100,
          "power" : 75,
          "category" : "special"
        },
        {
          "name" : "Hidden Power (Ice)",
          "pp" : 15,
          "stat-changes" : null,
          "description" : "Power and type depend upon user's IVs. Power can range from 30 to 70",
          "type" : "ice",
          "target" : "target",
          "priority" : 0,
          "accuracy" : 100,
          "power" : 60,
          "category" : "special",
        },
        {
          "name" : "Shadow Ball",
          "pp" : 15,
          "stat-changes" : {
            "spdef" : -1,
          },
          "description" : "Has a 20% chance to the lower the target's Special Defense by one stage",
          "type" : "ghost",
          "target" : "target",
          "priority" : 0,
          "accuracy" : 100,
          "power" : 80,
          "category" : "special",
        }],
        "stats" : {
          "speed" : 0,
          "special-defense" : 0,
          "special-attack" : 0,
          "defense" : 0,
          "attack" : 0,
          "hp" : 0,
        },
        "weight" : pokemonData.weight,
        "battleSprite" : pokemonData.sprites.back_default,
        "switchSprite" : pokemonData.sprites.front_default,
      }
      // Pushing each pokemon's info into a team array
      userTeam.push(obj);
    }
    // For loop to go through pokemon stats array
    for(let i = 0; i < pokemonData.stats.length; i++) {
      // For loop to get the correct pokemon within the team array
      for(let j = 0; j < userTeam.length; j++) {
        if(pokemonData.name === userTeam[j].name) {
          userTeam[j].stats[pokemonData.stats[i].stat.name] = pokemonData.stats[i].base_stat;
        }
      }
    }

    // For loop to go through pokemon stats array
    for(let i = 0; i < pokemonData.types.length; i++) {
      // For loop to get the correct pokemon within the team array
      for(let j = 0; j < userTeam.length; j++) {
        if(pokemonData.name === userTeam[j].name) {
          userTeam[j].types.push(pokemonData.types[i].type.name)
        }
      }
    }
      let img = document.createElement("img");
      img.src = pokemonData.sprites.front_default;
      img.id = pokemonData.name;
      img.className = "team"
      $(img).appendTo("#user-log");

    }
    else { // Computer Pokemon
      if(pokemonData.name === "charizard") {
      let obj = {
        "name" : pokemonData.name,
        "types" : [],
        "moves" : [{
          "name" : "Flamethrower",
          "pp" : 15,
          "stat-changes" : {
            "brn" : 10 // Burn Logic
          },
          "description" : "Has a 10% chance to burn the target",
          "type" : "fire",
          "target" : "target",
          "priority" : 0,
          "accuracy" : 100,
          "power" : 90,
          "category" : "special",
        },
        {
          "name" : "Dragon Pulse",
          "pp" : 10,
          "stat-changes" : null,
          "description" : "Inflicts regular damage with no additional effects",
          "type" : "dragon",
          "target" : "target",
          "priority" : 0,
          "accuracy" : 100,
          "power" : 85,
          "category" : "special"
        },
        {
          "name" : "Earthquake",
          "pp" : 10,
          "stat-changes" : null,
          "description" : "Inflicts regular damage and can hit Dig users",
          "type" : "ground",
          "target" : "field",
          "priority" : null,
          "accuracy" : 100,
          "power" : 100,
          "category" : "physical"
        },
        {
          "name" : "Rock Slide",
          "pp" : 10,
          "stat-changes" : {
            "flinch" : 30 // Flinch Logic
          },
          "description" : "Has a 30% chance to make the target flinch",
          "type" : "rock",
          "target" : "enemy field",
          "priority" : 0,
          "accuracy" : 90,
          "power" : 75,
          "category" : "physical",
        }],
        "stats" : {
          "speed" : 0,
          "special-defense" : 0,
          "special-attack" : 0,
          "defense" : 0,
          "attack" : 0,
          "hp" : 0,
        },
        "weight" : pokemonData.weight,
        "battleSprite" : pokemonData.sprites.front_default,
      }
      // Pushing each pokemon's info into a team array
      compTeam.push(obj);
    }
    else if(pokemonData.name === "blastoise") {
    let obj = {
      "name" : pokemonData.name,
      "types" : [],
      "moves" : [{
        "name" : "Surf",
        "pp" : 15,
        "stat-changes" : null,
        "description" : "Inflicts regular damage and can hit Dive users",
        "type" : "water",
        "target" : "field",
        "priority" : null,
        "accuracy" : 100,
        "power" : 90,
        "category" : "special"
      },
      {
        "name" : "Ice Beam",
        "pp" : 10,
        "stat-changes" : {
          "frzn" : 10 // Freeze Logic
        },
        "description" : "Has a 10% to freeze the target",
        "type" : "ice",
        "target" : "target",
        "priority" : 0,
        "accuracy" : 100,
        "power" : 90,
        "category" : "special",
      },
      {
        "name" : "Hidden Power (Grass)",
        "pp" : 15,
        "stat-changes" : null,
        "description" : "Power and type depend upon user's IVs. Power can range from 30 to 70",
        "type" : "ice",
        "target" : "target",
        "priority" : 0,
        "accuracy" : 100,
        "power" : 60,
        "category" : "special",
      },
      {
        "name" : "Tackle",
        "pp" : 35,
        "stat-changes" : {},
        "description" : "Puts the target to sleep at the end of the next turn",
        "type" : "normal",
        "target" : "target",
        "priority" : 0,
        "accuracy" : 100,
        "power" : 20,
        "category" : "physical",
      }],
      "stats" : {
        "speed" : 0,
        "special-defense" : 0,
        "special-attack" : 0,
        "defense" : 0,
        "attack" : 0,
        "hp" : 0,
      },
      "weight" : pokemonData.weight,
      "battleSprite" : pokemonData.sprites.front_default,
    }
    // Pushing each pokemon's info into a team array
    compTeam.push(obj);
  }
  else if(pokemonData.name === "venusaur") {
  let obj = {
    "name" : pokemonData.name,
    "types" : [],
    "moves" : [{
      "name" : "Tackle",
      "pp" : 35,
      "stat-changes" : {},
      "description" : "Badly poisons the target. Inflicting more damage every turn",
      "type" : "normal",
      "target" : "target",
      "priority" : 0,
      "accuracy" : 100,
      "power" : 20,
      "category" : "physical"
    },
    {
      "name" : "Slam",
      "pp" : 20,
      "stat-changes" : {},
      "description" : "Heals the user for half of their Max HP. Affected by Weather",
      "type" : "grass",
      "target" : "user",
      "priority" : 0,
      "accuracy" : null,
      "power" : 40,
      "category" : "physical",
    },
    {
      "name" : "Energy Ball",
      "pp" : 10,
      "stat-changes" : {
        "spdef" : -1
      },
      "description" : "Has a 10% chance to lower the target's Special Defense",
      "type" : "grass",
      "target" : "target",
      "priority" : 0,
      "accuracy" : 100,
      "power" : 90,
      "category" : "special",
    },
    {
      "name" : "Sludge Bomb",
      "pp" : 10,
      "stat-changes" : {
        "psn" : 30 // Poison Logic,
      },
      "description" : "Has a 30% chance to poison the target",
      "type" : "poison",
      "target" : "target",
      "priority" : 0,
      "accuracy" : 100,
      "power" : 90,
      "category" : "special",
    }],
    "stats" : {
      "speed" : 0,
      "special-defense" : 0,
      "special-attack" : 0,
      "defense" : 0,
      "attack" : 0,
      "hp" : 0,
    },
    "weight" : pokemonData.weight,
    "battleSprite" : pokemonData.sprites.front_default,
  }
  // Pushing each pokemon's info into a team array
  compTeam.push(obj);
}
  // For loop to go through pokemon stats array
  for(let i = 0; i < pokemonData.stats.length; i++) {
    // For loop to get the correct pokemon within the team array
    for(let j = 0; j < compTeam.length; j++) {
      if(pokemonData.name === compTeam[j].name) {
        compTeam[j].stats[pokemonData.stats[i].stat.name] = pokemonData.stats[i].base_stat;
      }
    }
  }

  // For loop to go through pokemon stats array
  for(let i = 0; i < pokemonData.types.length; i++) {
    // For loop to get the correct pokemon within the team array
    for(let j = 0; j < compTeam.length; j++) {
      if(pokemonData.name === compTeam[j].name) {
        compTeam[j].types.push(pokemonData.types[i].type.name)
      }
    }
  }
      let img = document.createElement("img");
      img.src = pokemonData.sprites.front_default;
      img.id = pokemonData.name;
      img.className = "team";
      $(img).appendTo("#comp-log");
    }

  }); // Get Request by predefined pokemon
} // getPokemon function

getPokemon("vaporeon");
getPokemon("garchomp");
getPokemon("jolteon");
getPokemon(3);
getPokemon(6);
getPokemon(9);
setTimeout(() => {
  userStart();
  compStart();
}, 5000);

// Vaporeon - Surf, Ice Beam, Acid Armour, Shadow Ball
// Garchomp - Earthquake, Dragon Claw, Swords Dance, Iron Head
// Jolteon - Thunderbolt, Shadow Ball, Hidden Power (ice), Signal Beam
