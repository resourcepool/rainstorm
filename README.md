# Rainstorm ![logo][logo]
[logo]: ./rainstorm-logo.png "logo title"

Check [Wiki](https://github.com/excilys/rainstorm/wiki) and [Glossary](https://github.com/excilys/rainstorm/wiki/Glossary) for more info

## General Requirements

- NodeJs v6.x and build tools
  - `curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -`
  - `sudo apt-get install -y nodejs`
  - `sudo apt-get install -y build-essential`

## Driver
- Global packages: `npm install -g gulp-cli`
- Directory: `./src/driver`
- Run setup: `npm install`
- Run server: `gulp`

### USB permissions
- Make sure us have those libs `sudo apt-get install libudev-dev libusb-1.0-0-dev`
- Create `sudo vi /etc/udev/rules.d/99-garmin.rules`
- Add `SUBSYSTEM=="usb", ATTR{idVendor}=="2123", ATTR{idProduct}=="1010", MODE="666"`
- Unplug the missile launcher
- Restart `udev` with the following command `sudo udevadm trigger`
- Plug back the missile launcher

### Authentication

The api requires a hard coded basic authentication:
- username: `yo`
- password: `yo`

### API [`DEPRECATED`]

- [POST] `/api/move`: (x, y required) turn to the given position and come back.
- [POST] `/api/shoot`: (x, y required) turn to the given position, shoot and come back.


If the position is not accessible, a `Bad request` error message will be returned.
After each movement the missile launcher gets back to its initial position.

## Cluster

 - Directory: `./src/cluster`
 - Install dependencies: `npm install`
 - Run server: `npm start` (use `nodemon`) or `node server` (use `node`)

 ### Authentication

 The api required a hard coded basic authentication:
 - username: `rainstorm`
 - password: `rainstorm`

 ### API

 - [GET/POST] `/api/users`: manage users.
 - [GET/POST/PUT/DELETE] `/api/rainstorms`: manage rainstorms.

## Client [`DEPRECATED`] (electron)

It will be updated as soon as the cluster and the rainstorm layer are stable

 - Requirements: `node` `npm` `bower`
 - Directory: `./client`
 - Install dependencies: `bower install && npm install`
 - Run: `npm start`

