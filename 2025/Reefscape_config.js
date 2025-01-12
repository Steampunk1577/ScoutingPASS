var config_data = `
{
  "title": "Scouting PASS 2025 Steampunk 1577",
  "page_title": "Scouting 1577 Reefscape",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name",
    "code": "s",
    "type": "scouter",
    "size": 5,
    "maxSize": 50,
    "required": "true",
    "defaultValue": "Delete"

  },
  { "name": "Event",
    "code": "e",
    "type": "event",
    "defaultValue": "2024isos2",
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
    "max": 5000,
    "required": "true",
    "defaultValue": "1"
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
    "required":"true",
    "defaultValue": "r1"
  },
  { "name": "Team Number",
    "code": "t",
    "type": "team",
    "min": 1,
    "max": 99999,
    "required": "true",
    "defaultValue": "1577"
  },
  { "name": "Auto Start Location",
      "code": "fi",
      "type": "clickable_image",
      "filename": "2025/field_image.png",
      "dimensions": "12 6",
     "clickRestriction": "one",
      "allowableResponses": "6 7 18 19 30 31 42 43 54 55 66 67",
      "shape": "circle 5 black red true"
  }
],
"auton": [ 
  { "name": "Left The Starting Line",
  "code": "lst",
  "type": "bool"
  },  
  { "name": "Scored Coral L1",
  "code": "asc1",
  "type": "counter"
  },
  { "name": "Scored Coral L2",
  "code": "asc2",
  "type": "counter"
  },
  { "name": "Scored Coral L3",
  "code": "asc3",
  "type": "counter"
  },
  { "name": "Scored Coral L4",
  "code": "asc4",
  "type": "counter"
  },
  { "name": "Missed Coral",
  "code": "amc",
  "type": "counter"
  },
  { "name": "Scored Processor",
  "code": "asp",
  "type": "counter"
  },
  { "name": "Scored Net",
  "code": "asn",
  "type": "counter"
  },
  { "name": "Missed Algae",
  "code": "ama",
  "type": "counter"
  },
  { "name": "Pickup Algae From The Ground",
  "code": "aftg",
  "type": "counter"
  },
  { "name": "Removed Algae From The Reef",
  "code": "aftr",
  "type": "counter"
  }
],
"teleop": [
  { "name": "Scored Coral L1",
  "code": "asc1",
  "type": "counter"
  },
  { "name": "Scored Coral L2",
  "code": "asc2",
  "type": "counter"
  },
  { "name": "Scored Coral L3",
  "code": "asc3",
  "type": "counter"
  },
  { "name": "Scored Coral L4",
  "code": "asc4",
  "type": "counter"
  },
  { "name": "Missed Coral",
  "code": "mc",
  "type": "counter"
  },
  { "name": "Scored Processor",
  "code": "asp",
  "type": "counter"
  },
  { "name": "Scored Net",
  "code": "asn",
  "type": "counter"
  },
  { "name": "Missed Algae",
  "code": "ma",
  "type": "counter"
  },
  { "name": "Removed Algae From The Reef",
  "code": "afr",
  "type": "bool"
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
      "cd": "Climbed Deep<br>",
      "cs": "Climbed Shallow"
    }, 
    "defaultValue": "n/a"
  }, 
  { "name": "Where Climbed",
    "code": "otsc",
    "type":"radio",
    "choices": {
      "0": "None<br>",
      "1": "Near The Truss<br>",
      "2": "In The Middle<br>",
      "3": "Outer Cage"
    },
    "defaultValue": "0",
    "required": "true"
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
  { "name": "Intake Coral",
  "code": "i",
  "type": "radio",
  "choices": {
    "n/a": "Not Attempted<br>",
    "g": "Ground<br>",
    "s": "Coral Station<br>",
    "b": "Both"
  },
  "defaultValue": "n/a"
  },
  { "name": "Intake Algae",
  "code": "ia",
  "type": "radio",
  "choices": {
    "n/a": "Not Attempted<br>",
    "g": "Ground<br>",
    "r": "Reef<br>",
    "b": "Both"
  },
  "defaultValue": "n/a"
  },
  { "name": "Foul Card",
    "code": "fc",
    "type": "radio",
    "choices": {
      "dngac": "Did Not Get A Card<br>",
      "yc": "Yellow Card<br>",
      "rc": "Red Card"
    },
    "defaultValue":"dngac"
  },
  { "name": "Disabled",
  "code": "d",
  "type": "bool"
  },
  { "name": "Not Swerve",
    "code": "sw",
    "type": "bool"
  },
  { "name": "Comments",
    "code": "co",
    "type": "text",
    "rows":5,
    "cols":20,
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
    "cols":20
  },
  { "name": "Intake System Problems",
  "code": "isp",
  "type": "bool"
  },
  { "name": "Details",
    "code": "disp",
    "type": "text",
    "rows":2,
    "cols":20
  },
  { "name": "Output System Problems",
  "code": "osp",
  "type": "bool"
  },
  { "name": "Details",
    "code": "dosp",
    "type": "text",
    "rows":2,
    "cols":20
  },
  { "name": "Climbing System Problems",
  "code": "csp",
  "type": "bool"
  },
  { "name": "Details",
    "code": "dcsp",
    "type": "text",
    "rows":2,
    "cols":20
  },
  { "name": "Other Problems",
  "code": "op",
  "type": "text",
  "rows":2,
  "cols":20
}
]
}`