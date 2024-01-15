
var config_data = `

{
  "title":"Scouting 1577 - 2022",
  "page_title":"Scouting 1577",
  "elements":{
    "prematch": {
      "Scouter Name": {
        "code":"s",
        "type":"scouter",
        "size":10,
        "maxSize":10,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022tur",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "auton": {
      "Taxi": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
      "Upper Cargo Scored": {
        "code":"au",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      
      "Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Cargo Missed": {
        "code": "am",
        "title": "Upper Cargo Missed",
        "type":"counter"
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Cargo Missed": {
        "code": "tm",
        "title": "Upper Cargo Missed",
        "type":"counter"
      },
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
        "type":"bool"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {
      "Try to Climb?": {
        "code":"c",
        "title": "Try to Climb?",
        "type":"radio",
        "choices":{
          "1":"Tried to Climb<br>",
          "x":"Not attempted"
        },
        "defaultValue":"x"
      },
      "Climb Result": {
        "code":"lsr",
        "title": "Climb Result",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "n":"No successful rung<br>",
          "x":"n/a"
        },
        "defaultValue":"x"
      },
      "Start Climbing Time": {
        "code":"be",
        "title": "Start Climbing Time",
        "type":"number",
        "defaultValue":0
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"ds",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "1":"1<br>",
          "2":"2<br>",
          "3":"3<br>",
          "4":"4<br>",
          "5":"5"
        },
        "defaultValue":"3"
      },
      "Defense Rating": {
        "code":"dr",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          "1":"1<br>",
          "2":"2<br>",
          "3":"3<br>",
          "4":"4<br>",
          "5":"5<br>",
          "n/a":"n/a"
        },
        "defaultValue":"n/a"
      },
      "Avoiding defence Rating": {
        "code":"adr",
        "title": "Avoiding Defense Rating",
        "type":"radio",
        "choices":{
          "1":"1<br>",
          "2":"2<br>",
          "3":"3<br>",
          "4":"4<br>",
          "5":"5<br>",
          "n/a":"n/a"
        },
        "defaultValue":"n/a"
      },
      "Shot away/hide enemy balls?": {
        "code":"ba",
        "title": "Shot enemy balls away?",
        "type":"bool"
      },
      "Died/Tipped/Disabled": {
        "code":"d",
        "title": "Died/Tipped",
        "type":"bool"
      },
      "Card Foul": {
        "code":"cf",
        "title": "Yellow/Red Card",
        "type":"bool"
      },
      "Make good alliance partner?": {
        "code":"all",
        "title": "Make good alliance partner?",
        "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "rows":3,
        "cols":20,
        "size":20,
        "maxSize":20
      },
      "Confidence Rating": {
        "code":"cnf",
        "title": "Confidence Rating",
        "type":"radio",
        "choices":{
          "v":"Very Confident<br>",
          "a":"Average<br>",
          "n":"Not Confident"
      },
       "defaultValue":"a"
    },
    "Report Shani team": {
        "code":"iss",
        "title": "Report Shani team",
        "type":"text",
        "rows":2,
        "cols":20,
        "size":15,
        "maxSize":15
      }
    }
  }
}`;
