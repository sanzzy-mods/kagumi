import fs from 'fs'
let handler = async (m, { conn }) => {
let teks = 'Pterodactyl'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `[ *List Harga Panel* ]

📮 *Paket G1*
RAM 1GB DISK 2GB CPU 65%
10k/Bulan

📮 *Paket G2*
RAM 2GB DISK 3.5GB CPU 75%
15K/Bulan

📮 *Paket G3*
RAM 3GB DISK 4.5GB CPU 110%
20K/Bulan

📮 *Paket G4*
RAM 4.5GB DISK 5GB CPU 135%
25K/Bulan

📮 *Paket G5*
RAM 5.5GB DISK 6.5GB CPU 150%
30K/Bulan

📮 *Paket G6*
RAM 6.5GB DISK 7.5GB CPU 180%
35k/Bulan

📮 *Paket G6*
RAM 7.5GB DISK 8.5GB CPU 200%
40k/Bulan

📮 *Paket G7*
RAM ∞ DISK ∞ CPU ∞
55k/Bulan

Tidak Boros Kouta
Website Di Close Bot Tetap Jalan
On 24Jam

Proses 1-5 Menit

*Join Sini*`
  conn.sendButton(m.chat, anu, sgc, flaaa.getRandom() + teks, [['Menu', '.menu'], ['SewaBot', '.sewabot']], m)
}
handler.help = ['panel']
handler.tags = ['info']
handler.command = /^(panel|pterodactyl)$/i

export default handler
