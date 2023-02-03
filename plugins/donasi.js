import fs from 'fs'
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren 👋

⬡ *DANA:* 088232154376
⬡ *GOPAY:* 088232154376
⬡ *PULSA:* 088232154376


Contact person:
wa.me/${numberowner} (Owner)

*Join My Gc*`
  conn.sendButton(m.chat, anu, sig, flaaa.getRandom() + teks, [['Menu', '.menu'], ['SewaBot', '.sewabot']], m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi)$/i

export default handler
