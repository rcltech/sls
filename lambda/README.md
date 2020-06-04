# Lambda Function

This function will send a request to Phoenix on behalf of the ESP8266. This is required because ESP8266 is incapable of handling SSL, and its probably a better idea to send graphql requests within a nodejs runtime.

#### To Develop

Start a local server at port `4400`.

```shell script
npm run start
# or with nodemon
npm run dev
```

Send a `POST` request to `http://localhost:4400` with `Content-Type: application/json` in the headers. Your request `json` body should be

```json
{
  "data": {
    "washer1": 1,
    "washer2": 0,
    "washer3": 0,
    "washer4": 1
  }
}
```

Note that this body is identical to the one sent by the hardware.
