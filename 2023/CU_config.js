var config_data = `
{
  "title": "Scouting PASS 2023 Steampunk 1577",
  "page_title": "Scouting 1577 Charged Up ",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name",
    "code": "s",
    "type": "scouter",
    "size": 5,
    "maxSize": 5,
    "required": "true"
  },
  { "name": "Event",
    "code": "e",
    "type": "event",
    "defaultValue": "2023isde1",
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
    "max": 99999
  },
  { "name": "Auto Start Position",
    "code": "as",
    "type": "clickable_image",
    "filename": "2023/field_image.png",
    "clickRestriction": "one",
    "shape": "circle 5 black red true"
  }
],
"auton": [
  { "name": "Auto Scoring",
      "code": "aas",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
  },
  { "name": "Lost A Game Piece",
    "code": "lagp",
    "type": "counter"
  },
  { "name": "Pass A Game Piece",
  "code": "pagp",
  "type": "counter"
  },
  { "name": "Left The Community Zone",
  "code": "ltcz",
  "type": "bool"
  },
  { "name": "Docked",
    "code": "ad",
    "type":"radio",
    "choices": {
      "n/a": "Not attempted<br>",
      "d": "Docked (Not Engaged)<br>",
      "e": "Engaged<br>",
      "a": "Attempted But Failed"
    },
    "defaultValue": "n/a"
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
    "b": "Both"
  },
  "defaultValue": "n/a"
  }
],
"endgame": [
  { "name": "Docking Timer",
    "code": "dt",
    "type": "timer"
  },
  { "name": "Final Status",
    "code": "fs",
    "type":"radio",
    "choices": {
      "n/a": "Not Attempted<br>",
      "p": "Parked<br>",
      "d": "Docked<br>",
      "e": "Engaged"
    }, 
    "defaultValue": "n/a"
  }, 
  { "name": "Succeed Or Failed",
  "code": "sof",
  "type":"radio",
  "choices": {
    "n/a": "Not Attempted<br>",
    "s": "Succeed<br>",
    "f": "Failed"
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
  },
  { "name": "Helped Another Bot",
    "code": "hab",
    "type": "bool"
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
  { "name": "Died/Tipped/Disabled",
    "code": "dtd",
    "type": "bool"
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
  },
  { "name": "Report Shani Team",
    "code": "rst",
    "type": "text",
    "rows":2,
    "cols":20,
    "resize": "auto",
    "size": 20,
    "maxSize": 200,
    "required": "true"
  }
 ]
}`