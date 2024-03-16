import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*ذا لامر لتحول التص لصورة*\n\n*مثال*\n*◉ ${usedPrefix + command} سفينة فضائية*\n*◉ ${usedPrefix + command} تويوتا طائرة*`;

  try {
    m.reply('*انتظر, جاري انشاء الصورة...*');

    const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*تعذر انشاء الصورة*';
    }
  } catch {
    throw '*أُووبس!  حدث خطأ ما أثناء إنشاء الصور.  الرجاء معاودة المحاولة في وقت لاحق.*';
  }
};

handler.help = ['dalle'];
handler.tags = ['AI'];
handler.command = ['dalle', 'تخيل', 'gimg', 'openai2'];
export default handler;
