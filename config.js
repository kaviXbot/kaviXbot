const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/kaviXbot/kaviXbot/blob/main/images/Gemini_Generated_Image_q7z7h6q7z7h6q7z7.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 kaviXbot Is Alive Now😍*",
BOT_OWNER: '94701706370',  // Replace with the owner's phone number



};
