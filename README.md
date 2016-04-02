# Rainstorm ![logo][logo]
[logo]: ./rainstorm-logo.png "logo title"

## Database (mongo/docker)

 - Requirements: `docker-compose`
 - Directory: `./docker/mongo`
 - Setup image and run container: `./build-up.sh`

## Driver (python/flask)

- Requirements: `python 2.7`
- Directory: `./driver`
- Run setup: `./setup.sh`
- Run server: `./rest-retaliation.py`

### USB permissions

- Create `sudo vi /etc/udev/rules.d/99-garmin.rules`
- Add `SUBSYSTEM=="usb", ATTR{idVendor}=="2123", ATTR{idProduct}=="1010", MODE="666"`
- Unplug the missile launcher
- Restart `udev` with the following command `sudo udevadm trigger`
- Plug back the missile launcher

### Authentication

The api required a hard coded basic authentication:
- username: `yo`
- password: `yo`

### API

- [POST] `/api/move`: (x, y required) turn to the given position and come back.
- [POST] `/api/shoot`: (x, y required) turn to the given position, shoot and come back.


If the position is not accessible, a `Bad request` error message will be return.
After each movement the missile launcher gets back to its initial position.

## Cluster (node)

 - Requirements: `node` `npm` `nodemon`
 - Directory: `./cluster`
 - Install dependencies: `npm install`
 - Run server: `npm start` (use `nodemon`) or `node server` (use `node`)

 ### Authentication

 The api required a hard coded basic authentication:
 - username: `rainstorm`
 - password: `rainstorm`

 ### API

 - [GET/POST] `/api/users`: manage users.
 - [GET/POST/PUT/DELETE] `/api/retaliations`: manage retaliations.

## Client (electron)

 - Requirements: `node` `npm` `bower`
 - Directory: `./client`
 - Install dependencies: `bower install && npm install`
 - Run: `npm start`

