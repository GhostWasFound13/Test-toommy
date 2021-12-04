module.exports = ({
name: "colorinfo",
aliases: ['colourinfo', 'colour-info', 'color-info'],
code: `$title[1;Color info]
$addField[1;Brighter Shade;$get[bright];yes]
$addField[1;RGB;$get[rgb];yes]
$addField[1;Hex Code;$get[hex];yes]
$addField[1;Name;$get[name];yes]
$image[1;attachment://color.png]
$attachment[$get[img];color.png]

$color[1;$message]
$let[name;$jsonRequest[https://api.popcat.xyz/color/$message;name]]
$let[hex;$jsonRequest[https://api.popcat.xyz/color/$message;hex]]
$let[rgb;$jsonRequest[https://api.popcat.xyz/color/$message;rgb]]
$let[bright;$jsonRequest[https://api.popcat.xyz/color/$message;brightened]]
$let[img;$jsonRequest[https://api.popcat.xyz/color/$message;color_image]]

$onlyIf[$isValidHex[$message]==true;Invalid hex code or color integer!]
`
})a