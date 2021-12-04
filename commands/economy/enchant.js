module.exports = {
name: "enchant",
$if: "v4",
code: `
$if[$message==fortune]
$thumbnail[1;$getVar[gif]]
$color[1;$getVar[color]]
$description[1;<:carr:914294448811294740> **-** \`You upgraded your pickaxe to fortune 3\`]

$setGlobalUserVar[fortune;3]

$setGlobalUserVar[coins;$sub[$getGlobalUserVar[Wallet];25000]]

$onlyIf[$getGlobalUserVar[Wallet]>=25000;{newEmbed: {author: :x: Error:$getVar[gif]} {thumbnail:$getVar[gif]} {description: <:pensivegay:913578851047731200> - \`You lack 25,000 $getVar[symbol] current balance $getGlobalUserVar[Wallet] $getVar[symbol]}}]
$else
$if[$message==luck]
$thumbnail[1;$getVar[gif]]
$color[1;$getVar[color]]
$description[1;<:carr:914294448811294740> **-** \`You upgraded your pickaxe to luck 3, enchantment lost (fortune 3)\`]

$setGlobalUserVar[fortune;0]
$setGlobalUserVar[luck;3]

$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet];20000]]

$onlyIf[$getGlobalUserVar[Wallet]>=20000;{newEmbed: {author: :x: Error:$getVar[gif]} {thumbnail:$getVar[gif]} {description: <:pensivegay:913578851047731200> - \`You lack 20,000 $getVar[symbol] current balance $getGlobalUserVar[Wallet] $getVar[symbol]}}]
$else
:x: not a valid option
\`luck,fortune\`
$endif
$endif
`
}