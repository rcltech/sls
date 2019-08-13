import os
import sys
import uos
import network
import machine
import urequests
import ujson
from machine import ADC
from machine import Pin
from utime import time
from utime import sleep

def do_connect():
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    print("Attempting to connect")
    if not sta_if.isconnected():
        sta_if.active(True)
        
        #Provide the wifi SSID and password here
        sta_if.connect("Wi-Fi.HK via HKU")
        
        while not sta_if.isconnected():
            pass
    print("connected")


def getMagic():
    import urequests_mod

    r = urequests_mod.get('http://msftconnect.com')

    #This is the position where the redirect URL starts. It will be required to initiate the authentication
    url_start = r.text.find('http://')

    #This gives us the position of the magic URL
    magic_start=r.text.find('fgtauth') + 8
    magic_end=magic_start + 16
    magic=r.text[magic_start:magic_end]

    #The extracted URL
    url = r.text[url_start: magic_end]

    r.close()
    return url, magic


"""
    Using the redirect URL and magic value, this function will initiate authentication
    and then complete the authentication, thus connecting to the internet.
"""
def connectWithMagic(url, magic):
    st = "4Tredir=http%3A%2F%2Fmsftconnect.com%2F&magic="+str(magic)+"&username=wifi&password=wifi"
    try:
        #Initiate the authentication by sending GET request to the redirected URL
        print("Logging in to the internet")
        r = urequests.get(url)
        r.close()

        #Complete the authentication by sending the form data to the required URL
        r = urequests.post(url[:url.find("?")], data=st, headers={'Content-Type': 'application/x-www-form-urlencoded'})
        r.close()

    except IndexError:
        print("Already connected to the internet")

    except ValueError:
        print("The device was already logged in. Therefore, there was no URL")


def sendData(washer_data):
    print(washer_data)
    res = urequests.post('https://m3q6ssas8g.execute-api.us-east-2.amazonaws.com/default/sls', json=washer_data,  headers={'Accept': 'application/json', 'Content-Type': 'application/json', 'x-api-key': "<PUT_API_KEY>"})
    print(res.text)


def main():     
    do_connect()
    url, magic = getMagic()
    connectWithMagic(url, magic)
    adc = ADC(0)
    p0 = Pin(0, Pin.IN, machine.Pin.PULL_UP)
    washer_data = {
        "washer1": 0,
        "washer2": 0,
        "washer3": 0,
        "washer4": 0
    }
    while True:
        if p0.value() == 0:
            washer_data['washer1'] = 1 - washer_data['washer1']
            sendData(washer_data)

main()