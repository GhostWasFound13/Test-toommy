const Aoijs = require('aoi.js');
const fs = require('fs');
const { Bot,LoadCommands,Voice } = require('aoi.js');
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
//require("./handler/pathToHandlerFile.js"); not working
//onst loadFunction = require("pathToHandlerFile");

/* ... */

//loadFunction(bot, "pathToFunctionDir"); 
// :/

bot.onJoin()
bot.onMessage()
bot.onInteractionCreate()
bot.onMessageDelete();


const loader = new Aoijs.LoadCommands(bot);
(async () => {
await loader.load(bot.cmd, "./commands/")
})()

loader.setColors( loader.themes.default );
//server host
const keepAlive = require('./server.js')
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.sendFile('invite.html', {root: __dirname })
});

app.get('/invite', (req, res) => {
	res.sendFile('server.html', {root: __dirname })
});

app.listen(3000, () => {
	console.log('Server started');
});

//role Commands
 



//events
const files = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
files.forEach( x => {
require(`./events/${x}`)(bot)
});{
}


const voice = new Voice(bot);

////Handlers™
Handler({ bot,loader,voice });

const Lavalink = new aoijs.Lavalink(bot);
Lavalink.addNode({
 url: "lava.link:80",
 password: "neo",
 name: "aoi.js",
 secure: true,
 })

  //BOT JOIN lEAVE SERVER LOGGER

bot.guildJoinCommand({
channel: "918029927423565864",
code: `
$title[1;I joined a New server!]
$addField[1;Guild Name#COLON#;$guildName;yes] 
$addField[1;Member Count#COLON#;$memberscount;yes]
$addField[1;Guild ID#COLON#;$guildID;yes]
$addField[1;Guild Owner#COLON#;$userTag[$ownerID];yes]
$color[1;RANDOM]`
})
bot.onGuildJoin()

bot.guildLeaveCommand({
channel: "918030061540638771",
code: `
$title[1;I was Removed from server]
$addField[1;Guild Name#COLON#;$guildName;yes]
$addField[1;Member Count#COLON#;$memberscount;yes]
$addField[1;Guild ID#COLON#;$guildID;yes]
$addField[1;Guild Owner#COLON#;$userTag[$ownerID];yes]
$color[1;RANDOM]`
})
bot.onGuildLeave() 

bot.customFunctions = {
     djs : new bot.cacheManager.Group() ,
     'aoi.js' : new bot.cacheManager.Group() 
}

//tired of using $findUser?

//i got you



bot.functionManager.createCustomFunction({
  name: "$dogTitle",
  type: "djs",
    params: ['index'],
  code:`const {code} = d.command
    const inside = d.unpack()
    const err = d.inside(inside)
    if (err) return d.error(err)
    let [index, name, url] = inside.splits;
    index = Number(index) - 1
    if (isNaN(index) || index < 0) d.aoiError.fnError(d, "custom", {inside}, "Invalid Index Provided In")
    if (!d.embeds[index]) d.embeds[index] = new d.embed()
    d.embeds[index].setTitle(name.addBrackets());

    if (url && url.trim() !== '') {
        d.embeds[index].setURL(url.addBrackets());
    }
    return {
        code: d.util.setCode({function: d.func, code, inside}),
        embeds: d.embeds
    }
  }`
})  


//$findChar[abc;2] will return b, it basically like indexOf
bot.functionManager.createCustomFunction({
 name: "$dogChar",
 type: "djs",
 code: async d => {
 const data = d.util.openFunc(d)
 const [char,pos] = data.inside.splits
 if(!char || isNaN(pos)) {
 let inside = data.inside
 d.aoiError.fnError(d,"custom",{ inside },"invalid character or position (position must be valid number)");
 }
 else {
 let r = char.substring(pos-1,pos)
 data.result = r
 }
 return {
 
 code: d.util.setCode(data)
 
 }
 }
 
}) 

const { GiveawaysManager } = require('discord-giveaways');
bot.giveawaysManager = new GiveawaysManager(bot, {
    storage: "./giveaways.json",
    default: {
        botsCanWin: false,
        embedColor: "#1793ff",
        embedColorEnd: "#EE3C23",
        reaction: "🎁"
    }
})

  //$memberAvatar custom function
bot.functionManager.createCustomFunction({
name: "$dogAvatar",
type: "djs",
code: async d => {
const data = d.util.openFunc(d)
const [guildID = d.guild.id,user = d.author.id] = data.inside.splits
data.result = d.client.guilds.cache.get(guildID).members.cache.get(user).avatarURL({ size: 2048 })
return {
code: d.util.setCode(data)
}
}
}) 

//usage: `$memberAvatar[guild id(optional);user id(optional)]