module.exports = {
 name: "daily",
 code: ` 💵 | You Claimed 25000 Money!
💰 | Next Daily After 12h
 $globalCooldown[12h;You Can Claim Your Daily Again In %time%
 ]
 $setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];25000];$authorID]`}