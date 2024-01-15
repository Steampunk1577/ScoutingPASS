var config_data = `
{
  "title": "Scouting PASS 2024 Steampunk 1577",
  "page_title": "Scouting 1577 Crescendo ",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name",
    "code": "s",
    "type": "scouter",
    "size": 5,
    "maxSize": 50,
    "required": "true"
  },
  { "name": "Event",
    "code": "e",
    "type": "event",
    "defaultValue": "2023isios",
    "required": "true",
    "disabled": "true"
  },
  { "name": "Match Level",
    "code": "l",
    "type": "level",
    "choices": {
      "qm": "Quals<br>",
      "de": "Double Elimination<br>",
      "f": "Finals"
    },
    "defaultValue": "qm",
    "required": "true"
  },
  { "name": "Match Number",
    "code": "m",
    "type": "match",
    "min": 1,
    "max": 200,
    "required": "true"
  },
  { "name": "Robot",
    "code": "r",
    "type": "robot",
    "choices": {
      "r1": "Red-1",
      "b1": "Blue-1<br>",
      "r2": "Red-2",
      "b2": "Blue-2<br>",
      "r3": "Red-3",
      "b3": "Blue-3"
    },
    "required":"true"
  },
  { "name": "Team Number",
    "code": "t",
    "type": "team",
    "min": 1,
    "max": 99999,
    "required": "true"
  },
  { "name": "Auto Start Position",
  "code": "asp",
  "type": "clickable_image",
  "filename": "2024/field_image.png",
  "clickRestriction": "one",
  "shape": "circle 5 black red true"
  }
],
"auton": [
  { "name": "Middle Pickup Timer",
  "code": "ast",
  "type": "timer"
  },
  { "name": "Which Middle Note",
  "code": "wmn",
  "type": "text",
  "rows":2,
  "cols":20,
  "resize": "auto",
  "size": 1,
  "maxSize": 1
  },
  { "name": "Auto Scoring Position",
  "code": "as",
  "type": "clickable_image",
  "filename": "2024/field_image.png",
  "dimensions": "9 4",
  "shape": "circle 5 black red true"
  },
  { "name": "Crossed The Line",
  "code": "ctl",
  "type": "bool"
  },
  { "name": "Pick Up Game Pieces",
    "code": "pugp",
    "type": "counter"
  },
  { "name": "Scored Game Pieces",
  "code": "sgp",
  "type": "counter"
  },
  { "name": "Missed Game Pieces",
  "code": "mgp",
  "type": "counter"
  }
],
"teleop": [
  { "name": "Cycle Timer",
      "code": "tct",
      "type": "cycle"
  },
  { "name": "Grid Scoring",
      "code": "tsg",
      "gsCol": "gridScoring",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
  },
  { "name": "Lost Game Pieces",
      "code": "ls",
      "type": "counter"
  },
  { "name": "Pass Game Pieces",
      "code": "pgp",
      "type": "counter"
  },
  { "name": "Intake",
  "code": "ci",
  "type": "radio",
  "choices": {
    "n/a": "Not Attempted<br>",
    "g": "Ground<br>",
    "t": "Substation<br>",
    "fs": "Feeder Slide<br>",
    "b": "More Then 1 Way"
  },
  "defaultValue": "n/a"
  },
  { "name": "Supercharged Pieces",
  "code": "sc",
  "type": "counter"
  }
],
"endgame": [
  { "name": "Docking Timer",
    "code": "dt",
    "type": "timer"
  },
  { "name": "Try To Engage",
  "code": "tte",
  "type": "bool"
  },
  { "name": "Final Status",
    "code": "fs",
    "type":"radio",
    "choices": {
      "n/a": "None<br>",
      "p": "Parked<br>",
      "d": "Docked<br>",
      "e": "Engaged"
    }, 
    "defaultValue": "n/a"
  }, 
  { "name": "Alliance Bots Docked",
    "code": "abde",
    "type":"radio",
    "choices": {
      "0": "0<br>",
      "1": "1<br>",
      "2": "2<br>",
      "3": "3"
  }, 
  "defaultValue": "0"
  }
],
"postmatch": [
  { "name": "Driver Skill",
    "code": "ds",
    "type": "radio",
    "choices": {
      "1": "1<br>",
      "2": "2<br>",
      "3": "3<br>",
      "4": "4<br>",
      "5": "5<br>",
      "n/a":"n/a"
    },
    "defaultValue": "n/a",
    "required": "true"
  },
  { "name": "Defense Rating",
    "code": "dr",
    "type": "radio",
    "choices": {
      "1": "1<br>",
      "2": "2<br>",
      "3": "3<br>",
      "4": "4<br>",
      "5": "5<br>",
      "n/a":"n/a"
    },
    "defaultValue": "n/a"
  },
  { "name": "Avoiding Defence Rating",
    "code": "adr",
    "type": "radio",
    "choices": {
      "1": "1<br>",
      "2": "2<br>",
      "3": "3<br>",
      "4": "4<br>",
      "5": "5<br>",
      "n/a":"n/a"
    },
    "defaultValue":"n/a"
  },
  { "name": "Foul Card",
    "code": "fc",
    "type": "radio",
    "choices": {
      "yc": "Yellow Card<br>",
      "rc": "Red Card<br>",
      "dngac": "Did Not Got A Card"
    },
    "defaultValue":"dngac"
  },
  { "name": "Organized The Grid",
    "code": "otg",
    "type": "bool"
  },
  { "name": "Comments",
    "code": "co",
    "type": "text",
    "rows":3,
    "cols":20,
    "size": 20,
    "maxSize": 200,
    "required": "true"
  }
],
"secondaryforce": [
  { "name": "Drive System Problems (Disabled)",
    "code": "dsw",
    "type": "bool"
  },
  { "name": "Details",
    "code": "ddsw",
    "type": "text",
    "rows":2,
    "cols":20,
    "resize": "auto",
    "size": 20,
    "maxSize": 200
  },
  { "name": "Intake System Problems",
  "code": "iswd",
  "type": "bool"
  },
  { "name": "Details",
    "code": "disw",
    "type": "text",
    "rows":2,
    "cols":20,
    "resize": "auto",
    "size": 20,
    "maxSize": 200
  },
  { "name": "Output System Problems",
  "code": "osw",
  "type": "bool"
  },
  { "name": "Details",
    "code": "dosw",
    "type": "text",
    "rows":2,
    "cols":20,
    "resize": "auto",
    "size": 20,
    "maxSize": 200
  }
]
}`