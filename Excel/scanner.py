from fileinput import filename
import cv2
from cv2 import imshow
import numpy as np
from pyzbar.pyzbar import decode
import openpyxl
import QRscanner

fileName = "Excel/Book1.xlsx"
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
    data = "s=Ofir;e=2022isde1;l=qm;m=5;r=b2;t=8223;as=[31];at=Y;au=2;al=1;am=3;tu=3;tmh=1;tl=2;wd=Y;ss=[18,32,55,53,28];c=3;lsr=2;be=Y;ds=3;dr=5;ba=Y;d=N;cf=Y;all=N;co=yess;cnf=a"
    formatedData = formatData(data)#[1])
    excelWorkbook = openpyxl.load_workbook(filename = fileName)
    excelSheet = excelWorkbook["raw"]
    maxRow = len(excelSheet["A"])
    for i in range(len(formatedData)):
        excelSheet[f"{colnum_string(i+1)}{maxRow+offset}"] = formatedData[i]
    excelWorkbook.save(fileName)
    



