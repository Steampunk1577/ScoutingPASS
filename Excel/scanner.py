from fileinput import filename
import cv2
from cv2 import imshow
import numpy as np
from pyzbar.pyzbar import decode
import openpyxl
import QRscanner

fileName = "Excel/ScoutingPASS_Excel_Example.xlsm"
offset = 1

def colnum_string(n):
    string = ""
    while n > 0:
        n, remainder = divmod(n - 1, 26)
        string = chr(65 + remainder) + string
    return string
def formatData(rawData):
    data = rawData.split(';')
    formatedData = []
    for i in range(len(data)):
        splited = data[i].split('=')
        formatedData.append(splited[1])
    #formatData is a list full of strings, we will format int and lists to be int and lists.
    for i in range(len(formatedData)):
        value = formatedData[i]
        if value.isnumeric():
                value = int(value)
        formatedData[i] = value
    return formatedData



if __name__ == "__main__":
    cap = cv2.VideoCapture(0)
    data = None
    while True:
        valid, frame = cap.read()
        data = QRscanner.read_barcodes(frame)
        cv2.imshow("yo",frame)
        if cv2.waitKey(1) == 27: 
            cv2.destroyAllWindows()
            break  # esc to quit
    #for testing purposes
    #data = "s=TEST;e=2022isde3;l=qm;m=3;r=r1;t=1577;as=[29];at=Y;au=2;al=0;ac=N;tu=2;tl=1;wd=N;wbt=Y;cif=x;ss=[30,56,22,49];c=4;lsr=3;be=N;cn=6;ds=x;dr=x;ba=N;d=N;cf=Y;all=N;co=heeeeeelo;cnf=a"
    formatedData = formatData(data[1])
    excelWorkbook = openpyxl.load_workbook(filename = fileName)
    excelSheet = excelWorkbook["raw"]
    maxRow = len(excelSheet["A"])
    for i in range(len(formatedData)):
        excelSheet[f"{colnum_string(i+1)}{maxRow+offset}"] = formatedData[i]
    excelWorkbook.save(fileName)
    



