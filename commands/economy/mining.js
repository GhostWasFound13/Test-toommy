module.exports = {
  
  name: "mining",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet];$random[10000;100000]]

$title[1;**$username** Get:]
$color[1;$random[10000;999999]]
$description[1;$random[0;5] Diamond💎!, \`you just sell diamond for how many you got? ]
$globalCooldown[2s;**⏰ Wait for %time% to mining again!**]
`
}