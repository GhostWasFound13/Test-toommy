const Aoijs = require('aoi.js');
const fs = require('fs');
const config = require('./config.js');
const bot = new Aoijs.Bot(config.Bot);

//Distube for music has been setup
const filters = require('./filters.json')
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const spotifyoptions = {
  parallel: true,
  emitEventsAfterFetching: true,
  api: {
    clientId: 'bf5ee2a72bae40ffadc71a47280e5ff9', // Spotify ClientID
    clientSecret: '053469ffeb3844079fab734ebf3090c2', // Spotify ClientSecret
  },
}

bot.distube = new DisTube(bot, {
emitNewSongOnly: false,
    leaveOnEmpty: true,
    leaveOnFinish: true,
    leaveOnStop: true,
    savePreviousSongs: true,
    emitAddSongWhenCreatingQueue: false,
    nsfw: false,
    emptyCooldown: 25,
    customFilters: filters,
  plugins: [new SpotifyPlugin(spotifyoptions)]
}) 

const variables = require("./variables")

bot.variables(variables)

require('./handler/DistubeEvents')(bot)
require('./handler/status')(bot)

require('./handler/functions')(bot)

// :/

bot.onJoin()
bot.onMessage()
bot.onInteractionCreate()


const loader = new Aoijs.LoadCommands(bot);
(async () => {
await loader.load(bot.cmd, "./commands/")
})()

loader.setColors( loader.themes.default );

const express = require('express')
const app = express();

app.get("/", async(req,res) => {
  res.send('lol no need node 17.1.0')
})

app.listen(3000, async () => {
  console.log('bot on')
})

//role Commands
 



//events
const files = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
files.forEach( x => {
require(`./events/${x}`)(bot)
});

