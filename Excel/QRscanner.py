import cv2
from pyzbar.pyzbar import decode
def read_barcodes(frame):
    hasBarcodes = False
    barcode_info = ""

    barcodes = decode(frame)
    hasBarcodes = barcodes or len(barcodes) > 0
    for barcode in barcodes:
        x, y , w, h = barcode.rect
        #1
        barcode_info = barcode.data.decode('utf-8')
        cv2.rectangle(frame, (x, y),(x+w, y+h), (0, 255, 0), 2)
        
        #2
        font = cv2.FONT_HERSHEY_DUPLEX
        cv2.putText(frame, "press Space to continue", (x + 6, y - 6), font, 0.5, (255, 255, 255), 1)
        
    return hasBarcodes, barcode_info, frame