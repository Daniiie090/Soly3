import { canLevelUp, xpRange } from '../lib/levelling.js';

let handler = async (m, { conn }) => {
    let name = conn.getName(m.sender);
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg');
    let user = global.db.data.users[m.sender];
    let background = 'https://i.ibb.co/4YBNyvP/images-76.jpg'; // Fixed background URL

    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier);
        let txt = `
┌───⊷ *LEVEL*
▢ Number : *${name}*
▢ Level : *${user.level}*
▢ XP : *${user.exp - min}/${xp}*
▢ Role : *${user.role}*
└──────────────

Hey there, ${name}! You're not ready to level up just yet. It seems like you need to munch up *${max - user.exp}* more XP to level up and reach new heights! Keep going, and the bots will be singing your praises soon! 🚀
`.trim();

        try {
            let imgg = `https://wecomeapi.onrender.com/rankup-image?username=${encodeURIComponent(name)}&currxp=${user.exp - min}&needxp=${xp}&level=${user.level}&rank=${encodeURIComponent(pp)}&avatar=${encodeURIComponent(pp)}&background=${encodeURIComponent(background)}`;
            conn.sendFile(m.chat, imgg, 'level.jpg', txt, m);
        } catch (e) {
            m.reply(txt);
        }
    } else {
        let str = `
┌─⊷ *الأرتقاء*💠💠
💠 المستوى السابق : *${user.level - 1}* 
📜المستوى الحالي : *${user.level}*
📖 Role : *${user.role}*
└──────────────💠💠

رائع, ${name}! لقد ارتفعت إلى آفاق جديدة ووصلت إلى المستوى ${user.level}! 🎉 وقت الاحتفال!  🎊
 ستبث قوتك المكتشفة حديثًا الخوف في قلوب المتصيدين، وسوف تنحني الروبوتات أمام أوامرك!  واصل العمل المذهل، ومن يدري ما هي المغامرات الملحمية التي تنتظرك بعد ذلك!  🌟
`.trim();
`.trim();

        try {
            let img = `https://wecomeapi.onrender.com/levelup-image?avatar=${encodeURIComponent(pp)}`;
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m);
        } catch (e) {
            m.reply(str);
        }
    }
}

handler.help = ['levelup'];
handler.tags = ['economy'];
handler.command = ['pppp'];

export default handler
