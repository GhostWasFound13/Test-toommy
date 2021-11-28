module.exports = {
name: "bal", 
category: "economy",
code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;Discord bots dont have a balance]
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
$color[1;RANDOM]
$title[1;$username[$mentioned[1;yes]]'s Balance]
$description[1;
$addField[1;🗡 Experience;
$numberSeparator[$getGlobalUserVar[XP;$mentioned[1;yes]]]xp
]
$addField[1;💵  Wallet;
$$numberSeparator[$getGlobalUserVar[Wallet;$mentioned[1;yes]]]
]
$addField[1;🏦 Bank;
$$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]
]
$addField[1;📊 Net Worth;
$$numberSeparator[$sum[$getGlobalUserVar[Wallet;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]
]]
$footer[1;your bal]`
}