let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let name = conn.getName(m.sender)
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0] 
    let image = 'https://telegra.ph/file/2d7f955f13d0a3e50b48e.png'

    conn.sendFile(m.chat, image, 'image.png', `اهلا صديقتي ${name} تحتاجي مساعدة?  اكتب.اوامر`, m)
}

handler.customPrefix = /^(بوت|ياسو)$/i
handler.command = new RegExp

export default handler 
