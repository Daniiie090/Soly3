const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*[❗𝐈𝐍𝐅𝐎❗] تم الغاء حظر الدردشة بنجاح*');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^الغاء$/i;
handler.rowner = true;
export default handler;
