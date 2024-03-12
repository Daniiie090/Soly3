import { xpRange } from '../lib/levelling.js';
import Canvacord from 'canvacord';

let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;

  if (!(who in global.db.data.users)) throw `✳️ المستخدم غير موجود في قاعدة البيانات`;

  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg');
  let user = global.db.data.users[who];
  let { exp, level, role } = global.db.data.users[who];
  let { min, xp } = xpRange(user.level, global.multiplier);
  let username = conn.getName(who);

  let crxp = exp - min
  let customBackground  = './Assets/rankbg.jpg'
  let requiredXpToLevelUp = xp

  const card = await new Canvacord.Rank()
  .setAvatar(pp)
  .setLevel(level)
  .setCurrentXP(crxp) 
  .setRequiredXP(requiredXpToLevelUp) 
  .setProgressBar('##0000FF', 'COLOR') // Set progress bar color here
  .setDiscriminator(who.substring(3, 7))
  .setCustomStatusColor('#0000FF')
  .setLevelColor('#FFFFFF', '#FFFFFF')
  .setOverlay('#000000')
  .setUsername(username)
  .setBackground('IMAGE', customBackground)
  .setRank(level, 'LEVEL', false)
  .renderEmojis(true)
  .build();

  const str = `🏮 *الاسم:* ${username}\n\n⭐ *الخبرة:* ${crxp} / ${requiredXpToLevelUp}\n\n🏅 *الرتبة:* *${role}*
${level} *المستوى*
 *💠استمر في التقدم لتحتل التصنيف الاعلى💠*
 *🪙البنك. لمعرفة مواردك🪙*`

  try {
    conn.sendFile(m.chat, card, 'rank.jpg', str, m, false, { mentions: [who] });
    m.react('✅');
  } catch (error) {
    console.error(error);
  }}

handler.help = ['rank'];
handler.tags = ['economy'];
handler.command = ['رانك'];

export default handler;
