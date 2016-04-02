#!/usr/bin/python
#
# Copyright 2011 PaperCut Software Int. Pty. Ltd. http://www.papercut.com/
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
#

############################################################################
#
# RETALIATION - A Jenkins "Extreme Feedback" Contraption
#
#    Lava Lamps are for pussies! Retaliate to a broken build with a barrage
#    of foam missiles.
#
# Steps to use:
#
#  1.  Mount your Dream Cheeky Thunder USB missile launcher in a central and
#      fixed location.
#
#  2.  Copy this script onto the system connected to your missile lanucher.
#
#
#  Requirements:
#   * A Dream Cheeky Thunder USB Missile Launcher
#   * Python 2.6+
#   * Python PyUSB Support and its dependencies
#      http://sourceforge.net/apps/trac/pyusb/
#      (on Mac use brew to "brew install libusb")
#   * Should work on Windows, Mac and Linux
#
#  Author:  Chris Dance <chris.dance@papercut.com>
#  Version: 1.0 : 2011-08-15
#
############################################################################

import sys
import platform
import time

import usb.core
import usb.util

# Protocol command bytes
DOWN    = 0x01
UP      = 0x02
LEFT    = 0x04
RIGHT   = 0x08
FIRE    = 0x10
STOP    = 0x20

DEVICE = None
DEVICE_TYPE = None

def usage():
    print "Usage: retaliation.py [command] [value]"
    print ""
    print "   commands:"
    print "     up    - move up <value> milliseconds"
    print "     down  - move down <value> milliseconds"
    print "     right - move right <value> milliseconds"
    print "     left  - move left <value> milliseconds"
    print "     fire  - fire <value> times (between 1-4)"
    print "     zero  - park at zero position (bottom-left)"
    print "     pause - pause <value> milliseconds"
    print "     led   - turn the led on or of (1 or 0)"
    print ""


def setup_usb():
    # Tested only with the Cheeky Dream Thunder
    # and original USB Launcher
    global DEVICE
    global DEVICE_TYPE

    DEVICE = usb.core.find(idVendor=0x2123, idProduct=0x1010)

    if DEVICE is None:
        raise ValueError('Missile device not found')
    else:
        DEVICE_TYPE = "Thunder"

    # On Linux we need to detach usb HID first
    if "Linux" == platform.system():
        try:
            DEVICE.detach_kernel_driver(0)
        except Exception, e:
            pass # already unregistered

    DEVICE.set_configuration()


def send_cmd(cmd):
    if "Thunder" == DEVICE_TYPE:
        DEVICE.ctrl_transfer(0x21, 0x09, 0, 0, [0x02, cmd, 0x00,0x00,0x00,0x00,0x00,0x00])
    elif "Original" == DEVICE_TYPE:
        DEVICE.ctrl_transfer(0x21, 0x09, 0x0200, 0, [cmd])

def led(cmd):
    if "Thunder" == DEVICE_TYPE:
        DEVICE.ctrl_transfer(0x21, 0x09, 0, 0, [0x03, cmd, 0x00,0x00,0x00,0x00,0x00,0x00])
    elif "Original" == DEVICE_TYPE:
        print("There is no LED on this device")

def send_move(cmd, duration_ms):
    send_cmd(cmd)
    time.sleep(duration_ms / 1000.0)
    send_cmd(STOP)


def run_command(command, value):
    command = command.lower()
    if command == "right":
        send_move(RIGHT, value)
    elif command == "left":
        send_move(LEFT, value)
    elif command == "up":
        send_move(UP, value)
    elif command == "down":
        send_move(DOWN, value)
    elif command == "zero" or command == "park" or command == "reset":
        # Move to bottom-left
        send_move(DOWN, 2000)
        send_move(LEFT, 8000)
    elif command == "pause" or command == "sleep":
        time.sleep(value / 1000.0)
    elif command == "led":
        if value == 0:
            led(0x00)
        else:
            led(0x01)
    elif command == "fire" or command == "shoot":
        if value < 1 or value > 4:
            value = 1
        # Stabilize prior to the shot, then allow for reload time after.
        time.sleep(0.5)
        for i in range(value):
            send_cmd(FIRE)
            time.sleep(2)
    else:
        print "Error: Unknown command: '%s'" % command

def main(args):

    if len(args) < 2:
        usage()
        sys.exit(1)

    setup_usb()

    # Process any passed commands
    command = args[1]
    value = 0
    if len(args) > 2:
        value = int(args[2])

    run_command(command, value)


if __name__ == '__main__':
    main(sys.argv)
