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
  "type": "radio",
  "choices": {
    "nta": "Near The AMP<br>",
    "nts": "Near The Speaker<br>",
    "ifot": "In Front Of The Stage<br>",
    "ntos": "Near The Opponent Source"
  },
  "required": "true"
  }
],
"auton": [
  { "name": "Middle Pickup Timer",
  "code": "mpt",
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
  { "name": "Pickup Order",
  "code": "po",
  "type": "clickable_image",
  "filename": "2024/field_image.png",
  "dimensions": "9 4",
  "shape": "circle 5 black red true"
  },
  { "name": "Crossed The Line",
  "code": "ctl",
  "type": "bool"
  },
  { "name": "Scored Note",
    "code": "sn",
    "type": "counter"
  },
  { "name": "Missed Note",
  "code": "mn",
  "type": "counter"
  },
  { "name": "Scored Note AMP",
  "code": "sna",
  "type": "counter"
  },
  { "name": "Missed Note AMP",
  "code": "mna",
  "type": "counter"
  },
  { "name": "Scored Note Trap",
  "code": "snt",
  "type": "counter"
  },
  { "name": "Missed Note Trap",
  "code": "mnt",
  "type": "counter"
  }
],
"teleop": [
  { "name": "Cycle Timer",
      "code": "tct",
      "type": "cycle"
  },
  { "name": "Scoring Position Speaker",
      "code": "tsp",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "dimensions": "9 4",
      "shape": "circle 5 black red true",
      "cycleTimer": "tct"
  },
  { "name": "Missed Note Speaker",
  "code": "mns",
  "type": "counter"
  },
  { "name": "Score AMP",
      "code": "sa",
      "type": "counter"
  },
  { "name": "Missed Note AMP",
      "code": "mna",
      "type": "counter"
  },
  { "name": "Pass Note",
      "code": "pn",
      "type": "counter"
  }
],
"endgame": [
  { "name": "Climbing Timer",
    "code": "ct",
    "type": "timer"
  },
  { "name": "Tried To Climb",
  "code": "ttc",
  "type": "bool"
  },
  { "name": "Final Status",
    "code": "fs",
    "type":"radio",
    "choices": {
      "n/a": "None<br>",
      "p": "Parked<br>",
      "c": "Climbed"
    }, 
    "defaultValue": "n/a"
  }, 
  { "name": "Climb With Another Bot",
    "code": "cwab",
    "type":"radio",
    "choices": {
      "1": "+1<br>",
      "2": "+2"
    }
  },
  { "name": "Tried To Place Traps",
      "code": "ttpt",
      "type": "counter"
  },
  { "name": "Placed Traps",
      "code": "pt",
      "type": "counter"
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
  { "name": "Intake",
  "code": "i",
  "type": "radio",
  "choices": {
    "n/a": "Not Attempted<br>",
    "g": "Ground<br>",
    "s": "Source<br>",
    "b": "Both"
  },
  "defaultValue": "n/a"
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
  { "name": "Disabled",
  "code": "d",
  "type": "bool"
  },
  { "name": "Swerve",
    "code": "sw",
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
  { "name": "Drive System Problems",
    "code": "dsp",
    "type": "bool"
  },
  { "name": "Details",
    "code": "ddsp",
    "type": "text",
    "rows":2,
    "cols":20,
    "resize": "auto",
    "size": 20,
    "maxSize": 200
  },
  { "name": "Intake System Problems",
  "code": "isp",
  "type": "bool"
  },
  { "name": "Details",
    "code": "disp",
    "type": "text",
    "rows":2,
    "cols":20,
    "resize": "auto",
    "size": 20,
    "maxSize": 200
  },
  { "name": "Output System Problems",
  "code": "osp",
  "type": "bool"
  },
  { "name": "Details",
    "code": "dosp",
    "type": "text",
    "rows":2,
    "cols":20,
    "resize": "auto",
    "size": 20,
    "maxSize": 200
  },
  { "name": "Climbing System Problems",
  "code": "csp",
  "type": "bool"
  },
  { "name": "Details",
    "code": "dcsp",
    "type": "text",
    "rows":2,
    "cols":20,
    "resize": "auto",
    "size": 20,
    "maxSize": 200
  },
  { "name": "Other Problems",
  "code": "op",
  "type": "text",
  "rows":2,
  "cols":20,
  "resize": "auto",
  "size": 20,
  "maxSize": 200
}
]
}`