import fs from 'fs'
let handler = async (m, { conn }) => {
let teks = 'sewa bot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren 👋

╭━━━━「 *SEWA* 」
┊⫹⫺ *Normal:* _10k/grup (1 bulan)_
┊⫹⫺ *Standar:* _19k/grup (2 bulan)_
╰═┅═━––––––๑


*⫹⫺ PAYMENT:*
• *Dana:* [${pdana}]
• *Gopay:* [${pgopay}]

minat?:
wa.me/6288232154376 (Owner)`
  conn.sendButton(m.chat, anu, sig, flaaa.getRandom() + teks, [['Menu', '.menu'], ['\n\n\npengin ewe puan', 'banh']], m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi)$/i

export default handler
