# RC Tech Club Smart Laundry System

This is a mono-repo for the smart laundry system in RC Lee Hall

#### Directory structure

- `ec2`: The AWS EC2 service for the analytics for SLS.
- `hardware`: Code on the ESP8266
- `lambda`: Serverless functions running on the AWS Lambda, communicate with the hardware via internet.
- `sls`: The code for the website.
- `solidworks`: 3D designs for the casing of the sensor modules.
