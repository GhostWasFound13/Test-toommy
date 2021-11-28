module.exports = {
  name: "profile", 
code: `$title[1;Your profile $userTag]
$description[1;$userTag profile]
$addField[1;balance's;$$numberSeparator[$getGlobalUserVar[Wallet;$mentioned[1;yes]]]
$addField[1;XP;$$numberSeparator[$getGlobalUserVar[XP;$mentioned[1;yes]]]
$addField[1;Nickname:;$replaceText[$replaceText[$checkCondition[$djsEval[guild.members.fetch("$get[id]").then(d=>d.nickname);yes]==null];true;Undefined];false;$djsEval[guild.members.fetch("$get[id]").then(d=>d.nickname);yes]];yes]
`
}