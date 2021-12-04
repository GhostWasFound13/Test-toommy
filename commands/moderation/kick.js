module.exports = ({
 name: "kick",
 desc: "kick a user",
 cat: "moderator",
 usage: "kick <mention> (optional reason)",
 code: `
$kick[$mentioned[1]]
$if[$message[2]==]
$author[| $username[$mentioned[1]];$userAvatar[$mentioned[1]]]
$description[1;
**$usertag[$mentioned[1]] has been kicked**
$addField[Reason;No Reason]
]
$color[1;RANDOM]
$sendDM[$mentioned[1];You has been kicked from **$serverName** for: No Reason]
$endif

$if[$message[2]==$message[2]]
$author[| $username[$mentioned[1]];$userAvatar[$mentioned[1]]]
$description[1;
**$usertag[$mentioned[1]] has been kicked**
$addField[1;Reason;$noMentionMessage]
]
$color[1;RNDOM]
$sendDM[$mentioned[1];You has been kicked from **$serverName** for: $noMentionMessage]
$endif`
}) 

 