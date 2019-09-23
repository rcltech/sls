# AWS EC2 Instance for Nodejs Server with MongoDB
To store washer data for possible machine learning purposes

#### Important note
If you want to connect to the server, you need a `.pem` key. So far, only Sean has it.

### Start Nodejs server
Navigate to `/ec2` folder.

Connect to EC2 instance via ssh.

`npm run connect`

##### Development Mode
Initiate Nodejs server using nodemon.

`npm run start`

##### Production Mode
Initiate and keep Nodejs server using pm2.

`npm run pm2-start`

Stop Nodejs server initiated by pm2.

`npm run pm2-stop`
