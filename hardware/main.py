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



def connect_open_wifi():
    do_connect()
    url, magic = getMagic()
    connectWithMagic(url, magic)

def sendData(washer_data, API_KEY):
    aws_url = 'https://m3q6ssas8g.execute-api.us-east-2.amazonaws.com/default/sls'
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
    }
    try:
        print(washer_data)
        res = urequests.post(aws_url,json=washer_data,  headers=headers)
        print(res.text)
    except:
        print("There was an exception, trying again")
        connect_open_wifi()
        sendData(washer_data, API_KEY)

def main():     
    connect_open_wifi()
    f = open('API_KEY.txt')
    API_KEY = f.read()
    p0 = Pin(0, Pin.IN, machine.Pin.PULL_UP)
    p1 = Pin(4, Pin.IN, machine.Pin.PULL_UP)
    p2 = Pin(5, Pin.IN, machine.Pin.PULL_UP)
    p3 = Pin(2, Pin.IN, machine.Pin.PULL_UP)
    washer_data = {
        "washer1": 0,
        "washer2": 0,
        "washer3": 0,
        "washer4": 0
    }
    while True:
        if p0.value() == 0:
            washer_data['washer1'] = 1 - washer_data['washer1']
            sendData(washer_data, API_KEY)
        if p1.value() == 0:
            washer_data['washer2'] = 1 - washer_data['washer2']
            sendData(washer_data, API_KEY)
        if p2.value() == 0:
            washer_data['washer3'] = 1 - washer_data['washer3']
            sendData(washer_data, API_KEY)
        if p3.value() == 0:
            washer_data['washer4'] = 1 - washer_data['washer4']
            sendData(washer_data, API_KEY)

main()