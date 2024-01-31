import 'dotenv/config'


export default {
  "expo": {
    "name": "Mão Amiga",
    "slug": "ExpenseManager",
    "version": "1.0.11",
    "orientation": "portrait",
    "icon": "./assets/icon-Logo.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/logo-cel.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
      "foregroundImage": "./assets/hander.png",
      "backgroundColor": "#ffffff"
      },
      "package": "com.liondf.ExpenseManager",
      "googleServicesFile": ""
    },
    "web": {
      "favicon": "./assets/adaptive-icon-Logo.png"
    },
    extra: {
      "eas": {
        "projectId": "2183c697-0407-4af3-96c6-98790e7a0718"
      },
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    },
  },
};