const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Bang'} 👋*_
 
❏ *I N F O - B O T*
    ◦  𝗟𝗶𝗯𝗿𝗮𝗿𝘆 : 𝗕𝗮𝗶𝗹𝗲𝘆𝘀-𝗠𝗗
    ◦  𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${prefix} ]
	◦  𝗧𝗮𝗻𝗴𝗴𝗴𝗮𝗹 : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
	◦  𝗝𝗮𝗺 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

❏  *I N F O - U S E R*
	◦  𝗦𝘁𝗮𝘁𝘂𝘀 : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
	◦  𝗟𝗶𝗺𝗶𝘁 𝗛𝗮𝗿𝗶𝗮𝗻 : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
	◦  𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
	◦  𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toCommas(getBalance(sender, balance))}


❏  *M A I N - M E N U*
	◦  ${prefix}menu
	◦  ${prefix}owner
	◦  ${prefix}donasi
	◦  ${prefix}speed
	◦  ${prefix}runtime
	◦  ${prefix}cekprem
	◦  ${prefix}listprem
	◦  ${prefix}join

❏  *C O N V E R T*
	◦  ${prefix}sticker
	◦  ${prefix}toimg
	◦  ${prefix}tovid

❏  *D O W N L O A D E R* 
	◦  ${prefix}play
	◦  ${prefix}tiktok
	◦  ${prefix}ytmp4
	◦  ${prefix}ytmp3
	◦  ${prefix}getvideo
	◦  ${prefix}getmusic
	◦  ${prefix}instagram
	◦  ${prefix}facebook

❏  *R A N D O M*
	◦  ${prefix}quote
	◦  ${prefix}cecan
	◦  ${prefix}cogan
	◦  ${prefix}wallsatanic
	◦  ${prefix}wallquote
	◦  ${prefix}wallanime
	◦  ${prefix}wallgaming
	◦  ${prefix}wallhekel

  ❏  *S E A R C H*
	◦  ${prefix}lirik
	◦  ${prefix}grupwa
	◦  ${prefix}ytsearch

❏  *S T I C K E R*
	◦  ${prefix}patrick
	◦  ${prefix}lonet
	◦  ${prefix}lidi
	◦  ${prefix}kucing
	◦  ${prefix}sponbob
	◦  ${prefix}kawansponbob
	◦  ${prefix}popoci
	◦  ${prefix}meow
	◦  ${prefix}menjamet
	◦  ${prefix}gojosatoru
	◦  ${prefix}hopeboy
	◦  ${prefix}doge
	◦  ${prefix}dinokuning
	◦  ${prefix}krrobot
	◦  ${prefix}nicholas
	◦  ${prefix}jiisho

❏  *C E C A N*
	◦  ${prefix}cecanvietnam
	◦  ${prefix}cecanmalaysia
	◦  ${prefix}cecankorea
	◦  ${prefix}cecanindonesia
	◦  ${prefix}cecanjapan
	◦  ${prefix}cecanthailand
	◦  ${prefix}cecanchina

❏  *G A M E*
	◦  ${prefix}tictactoe
	◦  ${prefix}delttc
	◦  ${prefix}tebakgambar
	◦  ${prefix}caklontong
	◦  ${prefix}asahotak

❏  *P A Y M E N T* 
	◦  ${prefix}buylimit
	◦  ${prefix}buyglimit
	◦  ${prefix}transfer
	◦  ${prefix}limit
	◦  ${prefix}balance
 
❏  *G R O U P*
	◦  ${prefix}linkgrup
	◦  ${prefix}setppgrup
	◦  ${prefix}setnamegc
	◦  ${prefix}setdesc
	◦  ${prefix}group
	◦  ${prefix}revoke
	◦  ${prefix}hidetag
	◦  ${prefix}tagall
	◦  ${prefix}listadmin
	◦  ${prefix}infogc
	◦  ${prefix}promote
	◦  ${prefix}demote
	◦  ${prefix}add
	◦  ${prefix}kick

❏  *O W N E R*
	◦  > evalcode
	◦  x evalcode-2
	◦  $ executor
	◦  ${prefix}masuk
	◦  ${prefix}broadcast
	◦  ${prefix}setppbot
	◦  ${prefix}exif
	◦  ${prefix}leave
	◦  ${prefix}addprem
	◦  ${prefix}delprem


𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 © ${setting.ownerName}
`
}
