const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Bayelsa,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria,Africa";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9039675851";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_38_01_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDgxLFxuICAgICAgICA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDc2LFxuICAgICAgICA2MixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMjM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDg3LFxuICAgICAgICA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI3LFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3LFxuICAgICAgICA1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICA5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2Qnhoemdwa2FvcjVRekNWTUdtc1l3QVp6RVlGdWVaU05IeWNXMEwwaUVjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpMV9EcFotb1RlcTFlWExQS0luZDNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ2YmJlMjJjLWI1NmUtNGI0YS1hNWQ4LTdmMDg1ZGRhMjk3YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDYsXG4gICAgICAyMjQsXG4gICAgICA0LFxuICAgICAgMzgsXG4gICAgICA4NixcbiAgICAgIDE0NCxcbiAgICAgIDk4LFxuICAgICAgMTAsXG4gICAgICAxNzksXG4gICAgICAzNSxcbiAgICAgIDc3LFxuICAgICAgMjQsXG4gICAgICA3LFxuICAgICAgMTU3LFxuICAgICAgMjU1LFxuICAgICAgODEsXG4gICAgICAxODksXG4gICAgICA5OCxcbiAgICAgIDQ4LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAxMDksXG4gICAgICAyMTgsXG4gICAgICAxMDcsXG4gICAgICAxMjgsXG4gICAgICAyMjIsXG4gICAgICA2NixcbiAgICAgIDAsXG4gICAgICAxMDYsXG4gICAgICA3OCxcbiAgICAgIDIxNyxcbiAgICAgIDY0LFxuICAgICAgMTM1LFxuICAgICAgMTYxLFxuICAgICAgMjUyLFxuICAgICAgODcsXG4gICAgICAzNCxcbiAgICAgIDIzMSxcbiAgICAgIDE2MCxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktRTUMzS0daXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM5Njc1ODUxOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM0NDU5MTYwMjA3NTQ1OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGpLeW9NR0VNL2EvN3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQb3RlRGtkT3pHUi90N2sxbGg4WjRpMUh6bU1FY1hBdDM2ZDJOaHdxTVRRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVQN1dUbUcveVBBd2Vib3RTQWNQRlFWU09BSzZ5V1Yrd0ZLTWorRGE4dlAxSk5ndnM3TEF2Q1hmUHlNOXY5ZXphSVRNSSttZGFsL3BQSUhyckZkUkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9qanE5TzBmZk5Kb1FDT0l6V3lDZUxFa3hMT1hPajNoRURlaElTMTNhVU9Od0VUWWM0bC83MWZRVTYwU2FBMFZ2dTg1aWE2SHRCWkxvcnJnNVdpcWp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzk2NzU4NTE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM2NDM3MDc0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ebele",
  packname: process.env.PACK_NAME || "Ebele",
  botname : process.env.BOT_NAME  || "eᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Ebele",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
