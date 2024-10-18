# Streamy - Live Streaming

## High Level System Architecture

![system-architecture](images/system-architecture.jpg 'system-architecture')

## Components

### [React App](client/)

- react, redux, axios
- Google API [[Ref]](https://developers.google.com/identity/protocols/oauth2/scopes#google-sign-in)

[more...](client/)

### RTMP Server

### [Web API Server](api/)

- json-server [[Ref]](https://www.npmjs.com/package/json-server)

## Steps to run

1. Start the [Web server](api/#running-the-project)
2. Start the [React app](client/#running-the-project)
3. Navigate to [localhost:3000](http://localhost:3000) to access the app on a browser