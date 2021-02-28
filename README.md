
## Requirements.

* node v12.13.0
* npm 6.12.0
* config/db_credentials.js

## Steps to Setup.

Run commands in project terminal.

1. Run `npm install`.

2. Run `npm start`, start App with Hot reloading using node_modules/nodemon/bin/nodemon.js app.js.

3. In postman, Check with http://localhost:8080/:url. Default Port:- 8080.

## Steps to assign error code to newly created API call:

1. On Creating a new controller file, decide an unique error code in 1000s respectively.

2. If adding API call to already existed controller file, check already defined error code in starting of controller file and assign an incremental unique error code to newly created API call.

3. Already Used Error Codes are ( #1000 ).


