const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*[❗تنبيه❗] تم حظر هذا الشات*\n\n*—◉ لن يستجيب البوت لأية اوامر*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^احظر$/i;
handler.rowner = true;
export default handler;
