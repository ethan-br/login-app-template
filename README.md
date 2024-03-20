# React Native Login App Template

## Tech Stack

- React Native
- Expo
- Expo AES
- Zustand
- React Native Paper
- TypeScript

## Requirements

- [NodeJS 20.11.1](https://nodejs.org/en/download/package-manager)

## How to use

1. `git clone https://github.com/ethan-br/login-app-template.git`
2. `npm i -g @expo/ngrok^4.1.3 eas-cli@7.6.0`
3. `cd login-app-template`
4. In `app.json`, change the values of `name`, `slug`, and `package` and remove the `extra` and `updates` properties and their children
5. In `package.json`, change the value of `name`
6. Rename root directory
7. `npm i`
8. `npm run start` or `npm run tunnel` if server and phone are not the same network
9. Press `s` to switch from development client to Expo Go
10. Scan QR code with Expo Go app on phone to open the app
