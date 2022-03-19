import scanner
import random
import json
"""
The purpose of this script is to generate random sample data so we could test our systems.
not well writted - but does it's job.
"""
JSONfile = json.load(open("config.json"))#copy of 2022/RR_config , couldn't import it.

def generateData():
    dataStr = "s=TEST;e=2022isde1;l=qm;"
    for gameElement in JSONfile["elements"]:
        for field in JSONfile["elements"][gameElement]:
            field = JSONfile["elements"][gameElement][field]
            if field["type"] == "robot":
                dataStr += field["code"] + '=' + random.choice(['Red-','Blue-']) + str(random.randrange(1,3)) + ';'
            elif field["type"] == "bool":#handler for bools
                dataStr += field["code"] + '=' + random.choice(['Y','N']) + ';'
            elif field["type"] in  ["match","counter"]:
                dataStr += field["code"] + '=' + str(random.randrange(0,10)) + ';'
            elif field["type"] == "team":
                dataStr += field["code"] + "='" + random.choice(['1577','1690','1937','4590','2212']) + "';"
            elif field["code"] == "as":
                dataStr+=f"as=[{random.randrange(15,30)}];"
            elif field["code"] == "ss":
                poses = random.choices([i for i in range(1,56)],k=random.randrange(2,10))
                dataStr+=f"ss={str(poses)};"
            elif field["type"] == "radio":
                dataStr += field["code"] + '=' + random.choice(list(field["choices"].keys())) + ';' #TODO:check!
            elif field["type"] == "text":
                dataStr += "%s=AAA;" % field["code"]

    return dataStr[:-1] # don't end with ;

if __name__ == "__main__":
    for i in range(20):
        scanner.ExcelHandler(generateData())
