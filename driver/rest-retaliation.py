#!flask/bin/python
import six, time
import retaliation
import convertion
from flask import Flask, jsonify, abort, request, make_response, url_for
from flask.ext.httpauth import HTTPBasicAuth

app = Flask(__name__, static_url_path="")
auth = HTTPBasicAuth()


@auth.get_password
def get_password(username):
    if username == 'yo':
        return 'yo'
    return None


@auth.error_handler
def unauthorized():
    # return 403 instead of 401 to prevent browsers from displaying the default
    # auth dialog
    return make_response(jsonify({'error': 'Unauthorized access'}), 403)


@app.errorhandler(400)
def bad_request(error):
    return make_response(jsonify({'error': 'Bad request'}), 400)


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

def move(x, y):
    print("move x:" + x + " | y:" + y)
    # get command to reach the requested position via retaliation driver
    goToCommand = convertion.get_command_requested_position(x, y)
    # get command to go back to the initial position via retaliation driver
    goBackCommand = convertion.get_command_initial_position(x, y)
    # setup usb
    retaliation.setup_usb()
    # move to the requested position
    retaliation.send_move(goToCommand[0], goToCommand[1])
    # time.sleep(3)
    retaliation.send_move(goToCommand[2], goToCommand[3])
    # time.sleep(3)

    retaliation.led(0x01)
    # time.sleep(3)
    retaliation.led(0x00)

    # move back to the initial position
    # time.sleep(3)
    retaliation.send_move(goBackCommand[0], goBackCommand[1])
    # time.sleep(3)
    retaliation.send_move(goBackCommand[2], goBackCommand[3])

def shoot(x, y):
    print("shoot x:" + x + " | y:" + y)
    # get command to reach the requested position via retaliation driver
    goToCommand = convertion.get_command_requested_position(x, y)
    # get command to go back to the initial position via retaliation driver
    goBackCommand = convertion.get_command_initial_position(x, y)
    # setup usb
    retaliation.setup_usb()
    # move to the requested position
    retaliation.send_move(goToCommand[0], goToCommand[1])

    retaliation.send_move(goToCommand[2], goToCommand[3])
    time.sleep(1)

    # fire
    retaliation.run_command("shoot",1)

    # move back to the initial position

    retaliation.send_move(goBackCommand[0], goBackCommand[1])

    retaliation.send_move(goBackCommand[2], goBackCommand[3])

@app.route('/api/move', methods=['POST'])
@auth.login_required
def move_retaliation():
    if not request.json or 'x' not in request.json or 'y' not in request.json:
        abort(400)
    move(request.json.get('x'), request.json.get('y'))
    return jsonify({'move': 'ok'}), 200

@app.route('/api/shoot', methods=['POST'])
@auth.login_required
def shoot_retaliation():
    if not request.json or 'x' not in request.json or 'y' not in request.json:
        abort(400)
    shoot(request.json.get('x'), request.json.get('y'))
    return jsonify({'shoot': 'ok'}), 200

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True, port=9000)
