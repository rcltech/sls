import gc
from machine import Timer
from machine import reset

restartTimer = Timer(-1)
restartTimer.init(period=3600000 , mode=Timer.PERIODIC, callback= lambda fn: reset())
print("Restarting ESP8266")
gc.collect()
