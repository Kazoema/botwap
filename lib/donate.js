exports.donate = (id, ZUMA, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Donasi Ke ${ZUMA}*
╠════════════════════
║├≽️⚜ *PULSA* : _+62898-1852-754_
║├≽️⚜ *GOPAY* : _083818003069_
║├≽️⚜ *SAWERIA*: https://saweria.co/kazumaDC
╠════════════════════
║  *${ZUMA}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${ZUMA}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY LORD KAZOEMA*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}

