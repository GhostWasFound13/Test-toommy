How to make No Reason at making moderator commands
bot.command({
 name: "kick",
 desc: "kick a user",
 cat: "moderator",
 usage: "kick <mention> (optional reason)",
 code: `
$kick[$mentioned[1]]
$if[$message[2]==]
$author[| $username[$mentioned[1]];$userAvatar[$mentioned[1]]]
$description[
**$usertag[$mentioned[1]] has been kicked**
$addField[Reason;No Reason]
]
$color[RANDOM]
$sendDM[$mentioned[1];You has been kicked from **$serverName** for: No Reason]
$endif

$if[$message[2]==$message[2]]
$author[| $username[$mentioned[1]];$userAvatar[$mentioned[1]]]
$description[
**$usertag[$mentioned[1]] has been kicked**
$addField[Reason;$noMentionMessage]
]
$color[RANDOM]
$sendDM[$mentioned[1];You has been kicked from **$serverName** for: $noMentionMessage]
$endif
}) 

ping me on #aoijsv4-support if u have any problem