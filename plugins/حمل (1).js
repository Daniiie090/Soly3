let handler = async (m, { conn, command, args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]


   
    
    if (user.chicken > 0) return m.reply('لديك هذا بي الفعل')
    if (user.credit < 500) return m.reply(`🟥 *ليس لديك كمية كافية من الذهب في محفظتك لشراء دجاجة*`)

    user.credit -= 1000
    user.chicken += 1
    m.reply(`🎉 لقد اشتريت بنجاح دجاجة للقتال!  استخدم الأمر ${usedPrefix}حارب <amount>`)
}

handler.help = ['buych']
handler.tags = ['economy']
handler.command = ['شراءد', 'bayc'] 

handler.group = true

export default handler