from flask import abort
import math

global ANGLE
ANGLE = 0
global DISTANCE
DISTANCE = 0
global V_DIRECTION_CODE
V_DIRECTION_CODE = 0x08 #right
global H_DIRECTION_CODE
H_DIRECTION_CODE = 0x02 #up

def get_command_requested_position(x, y):
    posX = float(x)
    posY = float(y)
    if is_position_accessible(posX, posY):
        V_DIRECTION_CODE = get_v_direction_code(posX, posY)
        V_DIRECTION_TIME = get_v_direction_time(posX, posY)
        H_DIRECTION_CODE = 0x02
        H_DIRECTION_TIME = get_h_direction_time(posX, posY)
        return [V_DIRECTION_CODE, V_DIRECTION_TIME, H_DIRECTION_CODE, H_DIRECTION_TIME]
    else:
        return abort(400)

def get_command_initial_position(x, y):
    posX = float(x)
    posY = float(y)
    if is_position_accessible(posX, posY):
        V_DIRECTION_CODE = get_reverse_v_direction_code(posX, posY)
        V_DIRECTION_TIME = get_v_direction_time(posX, posY)
        H_DIRECTION_CODE = 0x01
        H_DIRECTION_TIME = get_h_direction_time(posX, posY)
        return [V_DIRECTION_CODE, V_DIRECTION_TIME, H_DIRECTION_CODE, H_DIRECTION_TIME]
    else:
        return abort(400)

# verification method to make sure the requested position accessible
def is_position_accessible(posX, posY):
    if (posX < 0 and posY < 0) or (posX > 0 and posY < 0):
        if (abs(posY / posX)) < 1:
            print("POSITION: accessible")
            return True
        else:
            print("POSITION: not accessible")
            return False
    else:
        print("POSITION: accessible")
        return True

def get_v_direction_code(posX, posY):
    if (posX > 0):
        print("DIRECTION: right")
        return 0x08 #turn right
    else:
        print("DIRECTION: left")
        return 0x04 #turn left

def get_reverse_v_direction_code(posX, posY):
    if (posX < 0):
        print("DIRECTION: right")
        return 0x08 #turn right
    else:
        print("DIRECTION: left")
        return 0x04 #turn left

def get_h_direction_time(posX, posY):
    DISTANCE = math.sqrt(posX * posX + posY * posY)
    print("DISTANCE: %f" % DISTANCE)
    if DISTANCE > math.sqrt(7 * 7 + 7 * 7):
        return 700
    elif DISTANCE > math.sqrt(6 * 6 + 6 * 6):
        return 600
    elif DISTANCE > math.sqrt(5 * 5 + 5 * 5):
        return 500
    elif DISTANCE > math.sqrt(4 * 4 + 4 * 4):
        return 400
    elif DISTANCE > math.sqrt(3 * 3 + 3 * 3):
        return 300
    elif DISTANCE > math.sqrt(2 * 2 + 2 * 2):
        return 200
    else:
        return 100

def get_v_direction_time(posX, posY):
    if (posX < 0 and posY < 0) or (posX > 0 and posY < 0):
        if posX == 0:
            posX = 0.001
        ANGLE = math.pi / 2 + math.atan(abs(posY / posX))
    else:
        if posY == 0:
            posY = 0.001
        ANGLE = math.atan(abs(posX / posY))

    print("ANGLE: %f" % (math.degrees(ANGLE)))
    return (5640 * ANGLE) / ((3 * math.pi) / 2)
