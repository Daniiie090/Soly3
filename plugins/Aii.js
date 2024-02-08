import {
    promises,
    readFileSync
   } from "fs"
   import {
    join
   } from "path"
   import {
    xpRange
   } from "../lib/levelling.js"
   import moment from "moment-timezone"
   import os from "os"
  
  const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ ═●▬▬▬ஜƸ̵̡⁠Ӝ̵̨̄⁠Ʒஜ▬▬▬●
*❘╼╼𓏪 قائـمـة 📜 الاوامـر 𓏪╾╾❘*
── • ◈ • ──
*🎶✬⃝┇اهلا👋* ${taguser}
*🎶✬⃝┇أنـا اسـمـــي "ايزن*
*🎶✬⃝┇الـمطـــور* "Gojo/senseiXᎯᎽᎯᏁᎯᏦᏫᎫᎥ"
*🎶✬⃝┇ رقم المطور @${global.suittag}
*🎶✬⃝┇رقم السينسي @${global.prems}
*🎶✬⃝┇*وقـــت الـعــمـل* ${uptime}
*🎶✬⃝┇التاريخ ${week}  ${date}
*🎶✬⃝┇ المستخدمين ${rtotal}
*🎶✬⃝┇عدد المستخدمين المسجلين ${rtotalreg}
*🎶✬⃝┇لـاتـنـســی قـبــل كــل امــر ﹙.﹚*
┏━━━━━━━━━━━━━━━━┓
┃ *< معلومات المستخدم />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ المستوى:* ${level}
┣ *🧰 الخبرة:* ${exp}
┣ *⚓ الرتبة:* ${role}
┣ *💎 الألماس:* ${limit}
┣ *👾 عملات غوجو:* ${money}
┣ *🪙 توكين:* ${joincount}
┣ *🎟️ مميز:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
┗━━━━━━━━━━━━━━━━┛
*〄━━┋ ★الـأوامــر★ ┋━━〄*

*❁ اللهم صّلِ وسَلّمْ عَلۓِ نَبِيْنَامُحَمد ﷺ ❁*

 *˼‏💠˹ قـسـم الـمـجـمـوعـات╿↶*
━ ── • ⟐ • ── ━
*✎╎📛 ⇠〘 .منشن 〙*    
*⏎* يمنشن جماعي لكل الاعضاء
*✎╎👤 ⇠〘 .مخفي 〙*    
*⏎* منشن وهمي
*✎╎🏷️ ⇠〘 .الجروب 〙*    
*⏎* يجيبلك معلومات الجروب كامله
*✎╎🧾 ⇠〘 مشرفين@ 〙*    
*⏎* يجيبلك قائمة المشرفين
*✎╎👻 ⇠〘 .الاشباح 〙*    
*⏎* يجيبلك الاعضاء اللي ما بتتفاعل
*✎╎🔄 ⇠〘 .رستر 〙*    
*⏎* يرستر او يعمل اعادة تعيين للينك الجروب
━ ── • ⟐ • ── ━
*˼‏🕌˹ قـسـم الدين╿↶*
━ ── • ⟐ • ── ━
*✎╎🌅 ⇠〘اذكار الصباح〙*    
*⏎* يجيبلك اذكار الصباح
*✎╎🌉 ⇠〘اذكار المساء〙*    
*⏎* يجيبلك اذكار المساء
*✎╎📕 ⇠〘قران〙*    
*⏎* يجيبلك ايه من قرأن كريم
*✎╎🗣️ ⇠〘 .حديث 〙*    
*⏎* البوت يرسل احاديث
*✎╎📖 ⇠〘 .سوره 〙*    
*⏎  اكتب رقم السوره وبعدها رقم الايه يجيبلك الايه مثال .سوره 2 255
*✎╎🕋 ⇠〘 .ايه 〙*    
*⏎* اكتب رقم سوره وبعدها رقم الايه بس بصوت شيخ مختلف
━ ── • ⟐ • ── ━
*˼‏🔃˹ قـسـم التحويلات╿↶*
━ ── • ⟐ • ── ━
*✎╎🎴 ⇠〘 .ملصق 〙*    
*⏎* تحويل الصورة لملصق
*✎╎🎴 ⇠〘 .مد 〙*    
*⏎* تحويل الصورة لملصق دائري
*✎╎©️ ⇠〘 .سرقه 〙*    
*⏎* سرقة ملصق بحقوقك
*✎╎♻️ ⇠〘 .لصوره 〙*    
*⏎* تحويل الملصق لصورة
*✎╎🎞️ ⇠〘 .لفديو 〙*    
*⏎* تحويل الملصق المتحرك لفيديو
*✎╎📩 ⇠〘 .تليجراف 〙*    
*⏎* رفع الصور و الفديوهات الى تليجراف
*✎╎🐼 ⇠〘 .لكرتون 〙*    
*⏎* يحول صورك لكرتون مع تحويل الوجه لاستيكر
*✎╎🏮 ⇠〘 .لانمي 〙*    
*⏎* تحويل صورك لانمي بالذكاء الاصطناعي
*✎╎🎙️ ⇠〘 .انطق 〙*    
*⏎* تحويل النص الى كلام
*✎╎🎙️ ⇠〘.tm〙*
*⏎* لتحويل الفيديو الى مقطع صوتي
━ ── • ⟐ • ── ━
 *˼‏🔃˹ قـسـم الـتحميلات╿↶*
━ ── • ⟐ • ── ━
*✎╎🎦 ⇠〘 .تيك 〙*    
*⏎* ينزل فيديو من التيك توك بدون علامة مائية
*✎╎🎞️ ⇠〘 .فيديو 〙*    
*⏎* يحمل اي فيديو يوتيوب
*✎╎🎥⇠〘 .فديو 〙*
لتيحمل اي فيديوهات يوتيوب ب استخدام لينك
*✎╎🍥 ⇠〘 .انستا 〙*    
*⏎*يحملك فيديوهات من الانستا
*✎╎🎶 ⇠〘.play2〙*
*⏎* تحميل اي مقطع يوتيوب بل اسم بسرعة
*✎╎🎶 ⇠〘.play〙*
*⏎*يحملك اي اغنيه من يوتيوب بل اسم بسرعة ودقة
*✎╎🎶 ⇠〘.play.2  〙*
*⏎*الامر خاص بتحميل من يوتيوب عن طريق رابط او اسم والرقم واحد بدل اثنان لتحميل صوت بدل مقطع
*✎╎🎶 ⇠〘.yta2〙*
*⏎*هذا لامر للتحميل من يوتيوب على شكل مستند بدقة عالية
*✎╎🎶 ⇠〘.yta〙*
*⏎*امر بديل للتحميل على شكل صوت من يوتيوب عن طريق الرابط
*✎╎🎶 ⇠〘.ytv〙*
*⏎* خاص للتحميل من يوتيوب عن طريق رابط على شكل فيديو
*✎╎🎶 ⇠〘.يوتب〙*
*⏎*هذا لامر خاص في بحث اليوتيوب
*✎╎⬇️ ⇠〘 .تطبيق  〙*    
*⏎*يحمل برامج APK
*✎╎🖼️ ⇠〘 .صور 〙*    
*⏎*يحمل صور من تيك توك عن طريق لنك 
*✎╎🎶 ⇠〘.تويت〙*
*⏎* خاص بتحميل من تويتر
*✎╎🎶 ⇠〘.غوغل〙*
*⏎*خاص بتحميل من غوغل
━ ── • ⟐ • ── ━
 *˼‏🤖˹ قـسـم الـذكاء الاصطناعي╿↶*
━ ── • ⟐ • ── ━
*✎╎🤖 ⇠〘 .ايزن 〙*    
*⏎*  اسأل البوت اي سؤال
*✎╎👾 ⇠〘 .هارو 〙*    
*⏎* ذكاء اصطناعي جانبي أسأله اي سؤال
━ ── • ⟐ • ── ━
*˼‏🕹️˹ قـسـم العاب1 سؤال وإجابه╿↶*
━ ── • ⟐ • ── ━
 *✎╎☪️⇠〘.دين〙*    
 اسئلة دينية و اجابات
 *✎╎🪨 ⇠〘.العب〙*
*⏎* العب حجر ورق مقص مع البوت
*⏎* يسألك اسأله دينيه
*✎╎🔢 ⇠〘 .الرياضيات 〙*    
*⏎* يرسل لك اسألة رياضيات ب مستويات
*✎╎⚽ ⇠〘 .رياضه 〙*    
*⏎*يسألك اسأله عن كرة القدم
*✎╎🖋️⇠〘 .كت 〙*    
*⏎* لعبة كتابة للتسلية
*✎╎🏷️⇠〘 .فكك 〙*    
*⏎* يجيبلك كلمة تفككها
*✎╎🗂️ ⇠〘 .رتب 〙*    
*⏎* يجيبلك احرف مبعثرة وانت ترتبها
*✎╎🗝️ ⇠〘 .خمن 〙*    
*⏎* يوصفلك شخصية انمي وانت تحاول تخمنها
*✎╎🎭 ⇠〘 .ايموجي 〙*    
*⏎* احزر الشخصيه من الايموجي
*✎╎🗝️ ⇠〘 .انمي 〙*    
*⏎* يسألك اسألة انمي
*✎╎📷 ⇠〘 .عين 〙*    
*⏎* صور عيون لشخصيات انمي للتسليه
*✎╎🎭 ⇠〘 .احزر 〙*    
*⏎* البوت يرسل صور انمي للتسلية
*✎╎🌎 ⇠〘 .علم 〙*    
*⏎* احزر صورة العلم
━ ── • ⟐ • ── ━
*˼‏🕹️˹ قـسـم العاب2 العاب متطوره╿↶*
━ ── • ⟐ • ── ━
*✎╎🎲 ⇠〘 .نرد〙*    
*⏎*  يرسل نرد عشوائي
*✎╎🧞‍♂️ ⇠〘 .المارد 〙*    
*⏎* لعبة المارد الأزرق للتسليه
*✎╎🔰⇠〘 .تحدي 〙*    
*⏎* لعبة حجر ورقة مقص
*✎╎🎮 ⇠〘 .اكس او 〙*    
*⏎* لعبة اكس او
*✎╎🎮 ⇠〘 .تعدين〙*    
*⏎* تقوم بعمل تعدين ولبحث عن موارد
*✎╎🎮 ⇠〘  تعدين2 〙*    
*✎ تقوم بالتعدين بطريقة اخرى
*✎╎🎰⇠〘.رهان〙*  
*⏎*  راهن ب رقم من نقاتك لو خسرت بتخسرها
*✎╎🎮 ⇠〘 .غامر 〙*    
*⏎* لعبة مغامرة
*✎╎♟️ ⇠〘 .شطرنج〙*    
*⏎*  للعب لعبة الشطنرج
━ ── • ⟐ • ── ━
*˼‏🕹️˹ قـسـم العاب3 كتابه واسأله╿↶*
━ ── • ⟐ • ── ━
*✎╎❓ ⇠〘 .سؤال 〙*    
*⏎* اسئلة عشوائية للتسلية مع الاصدقاء
*✎╎📋 ⇠〘 .لو 〙*    
*⏎*لعبة لو خيروك للتسلية مع الاصدقاء
*✎╎🎫 ⇠〘 .تاج 〙*    
*⏎* البوت يقترحلك رقم منشن وانت تنمشنه
*✎╎🧩 ⇠〘 .فزوره 〙*    
*⏎* اسئلة فوازير للتسلية
*✎╎✅ ⇠〘 .صراحه 〙*    
*⏎* اسئلة وتجاوب عليها بصراحة
*✎╎🧩 ⇠〘 .حروف 〙*    
*⏎* يجيبلك حروف ل اسماء عشوائيه
*✎╎📢 ⇠〘 .مقولات 〙*    
*⏎* يجيبلك مقولات انمي
*✎╎🍀 ⇠〘 .نصيحه 〙*    
*⏎* البوت ينصحك نصيحة
━ ── • ⟐ • ── ━
*˼‏🕹️˹ قـسـم العاب4 العاب المنشن ╿↶*
━ ── • ⟐ • ── ━
*✎╎🔝 ⇠〘 .توب 〙*    
*⏎* يجيبك لك افضل 10 في القروب
*✎╎🧑‍🤝‍🧑 ⇠〘 .صداقه 〙*    
*⏎* يصادق اثنين عشوائي من الجروب 
*✎╎💍 ⇠〘 .ذكاء〙*    
*⏎* يقيس الذكاء
*✎╎💔 ⇠〘 .غباء 〙*    
*⏎* يقيس الغباء
✎╎ 👬🏼⇠〘 .رفيق 〙*    
⏎* يجيب توأمك الروحي
━ ── • ⟐ • ── ━
*˼‏🏛️˹ قـسـم البنك╿↶*
━ ── • ⟐ • ── ━
*✎╎📊 ⇠〘 .رانك 〙*    
*⏎* لمعرفة عدد مستواك ونقاتك في الفعاليات والماسك وبياناتك كلما تفاعلت مع البوت وتربح فعاليات وتتفاعل يرفع مستواك في تصنيفات
*✎╎🏦 ⇠〘 ليفل 〙*    
*⏎* يجيبلك حساب نقاط فعاليات البوت
*✎╎💰⇠〘.شراء〙*    
*⏎*  اذا اردت شراء لماس واكتب الكميه مثال .شراء 1
*✎╎🎁 ⇠〘 .يومي 〙*    
*⏎*  يعطيك هديه يوميه
*✎╎💱 ⇠〘 .تحويل 〙*    
*⏎*  لتحويل نقاتك الي شخص اخر
*✎╎📈 ⇠〘 .ليدر 〙*    
*⏎*  يجيب اكثر اشخاص ربحو نقاط من البوت
━ ── • ⟐ • ── ━
*˼‏🖼️˹ قـسـم الصور والايدت╿↶*
━ ── • ⟐ • ── ━
*✎╎💕 ⇠〘 .جوجيتسو 〙*    
*⏎* يجيبلك أيدت جوجيتسو
*✎╎🖼️ ⇠〘 .خلفيه 〙*    
*⏎* يرسل خلفيات انمي
*✎╎🐧 ⇠〘 .انميس 〙*    
*⏎* قائمة خلفيات لانمي
*✎╎👩‍❤️‍👨 ⇠〘 .طقم 〙*    
*⏎* يجيبلك طقم ولاد و بنات
*✎╎🧒 ⇠〘 .طقم2 〙*    
*⏎* يجيبلك صور اولاد 
*✎╎👧🏻 ⇠〘 .طقمي 〙*    
*⏎* يجيبلك طقم بنات
*✎╎🐈‍⬛ ⇠〘 .قط 〙*    
*⏎* صور لقطط عشوائية
*✎╎📹 ⇠〘 .ايدت 〙*    
*⏎* البوت يرسل ايدت انمي
━ ── • ⟐ • ── ━
*˼‏👥˹ قـسـم الاعـضــاء╿↶*
━ ── • ⟐ • ── ━
*✎╎📊⇠〘 .نسبه 〙*    
*⏎* يقيس لك نسبتك في الجروب
*✎╎🖼️ ⇠〘 .بروف 〙*    
*⏎*  يجبلك بياناتك
*✎╎👤 ⇠〘 .تسجيل 〙*    
*⏎*    لازم تسجل عشان بعض لاوامر 
*✎╎💫 ⇠〘 .زخرفه 〙*    
*⏎* زخرفة الكلمات للاسف انجليزي بس
*✎╎🔰 ⇠〘 .دمج 〙*    
*⏎* دمج الايموجي وتكوين ستيكر
*✎╎💭 ⇠〘 .تصميم 〙*    
*⏎* الحصول على تصميم من البوت
*✎╎🔍 ⇠〘 .بحث 〙*    
*⏎* البحث في غوغل
*✎╎👨🏻‍💻 ⇠〘 .المطور 〙*    
*⏎* يجيبلك رقم مطور البوت
*✎╎🎤 ⇠〘 .انطقي 〙*    
*⏎* ينطق صوت بلياباني
*✎╎🎙️ ⇠〘 .انطق 〙*    
*⏎* ينطق صوت عربي او انجليزي
*✎╎🎴 ⇠〘 .تقل 〙*    
*⏎* تحويل نقاط او الماس لشخص اخر 
━ ── • ⟐ • ── ━
*˼‏🖥️˹ قـسـم المطور╿↶*
━ ── • ⟐ • ── ━
*✎╎👑 ⇠〘 .بريم 〙*    
*⏎* يمكن للمطور فقط اعطاء صلاحيات لاستخدام البوت
*✎╎🚫 ⇠〘 .حظر 〙*    
*⏎* حظر الشات للبوت
*✎╎⭕ ⇠〘 .الغاء-الحظر 〙*    
*⏎* الغاء حظر الشات للبوت
*✎╎🔐 ⇠〘 .المحظورين 〙*    
*⏎*يجيبلك الارقام والشاتات المحظورة
*✎╎🌟 ⇠〘 .المميزين 〙*    
*⏎* الاشخاص البيرميوم
*✎╎⛔ ⇠〘 .بلوك 〙*    
*⏎* تخلي البوت يعمل لشخص بلوك
*✎╎✅ ⇠〘 .رفع-بلوك 〙*    
*⏎* يرفع البلوك عن المستخدم
*✎╎🚷 ⇠〘 .البلوكات 〙*    
*⏎* الأشخاص الواخدين بلوك من البوت
*✎╎⚠️ ⇠〘 .بان 〙*    
*⏎* حظر شخص من استخدام البوت
*✎╎🔓 ⇠〘 .رفع-بان 〙*    
*⏎* يرفع البان عن المستخدم
*✎╎🔛 ⇠〘 .انضم 〙*    
*⏎* البوت ينضم لجروبات عن طريق الرابط
*✎╎🔚 ⇠〘 .اخرج 〙*    
*⏎* البوت يخرج من الجروبات
*✎╎🚨 ⇠〘 .مهم 〙*    
*⏎* يعمل منشن خفي للمطور فقط 
*✎╎🎌 ⇠〘 .اعلان 〙*    
*⏎* يعلن المطور عن تحديثات البوت 
━ ── • ⟐ • ── ━
*˼‏ ⚠️˹ مـلاحــظــة╿↶*
╭ ⋅ ⋅ ── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ── ⋅ ⋅ ╮
*❶ - يمنع منعا بتا سب البوت.*
*❷ - استخدام البوت بشكل متوازن و بدون تسبب ازعاج للاعضاء.*
 ╰⋅ ⋅ ── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ── ⋅ ⋅ ╯

*~.¸¸ ❝ GojoXBots❝ ¸¸.~*`

  const handler = async (m, {
    conn,
    command,
    text,
    args,
    usedPrefix
  }) => {
    
  
   let glb = global.db.data.users
   let usrs = glb[m.sender]
   let tag = `@${m.sender.split("@")[0]}`
   let mode = global.opts["self"] ? "Private" : "Public"
   
   let {
  age,
  exp,
  limit,
  level,
  role,
  registered,
  credit
   } = glb[m.sender]
   let {
  min,
  xp,
  max
   } = xpRange(level, global.multiplier)
   let name = await conn.getName(m.sender)
   let premium = glb[m.sender].premiumTime
   let prems = `${premium > 0 ? "Premium": "Free"}`
   let platform = os.platform()
  
  
   let ucpn = `${ucapan()}`
  
   let _uptime = process.uptime() * 1000
   let _muptime
   if (process.send) {
  process.send("uptime")
  _muptime = await new Promise(resolve => {
  process.once("message", resolve)
  setTimeout(resolve, 1000)
  }) * 1000
   }
   let muptime = clockString(_muptime)
   let uptime = clockString(_uptime)
  
   
   let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
   let totalreg = Object.keys(glb).length
  
    conn.gurumenu = conn.gurumenu ? conn.gurumenu : {};
    
   
    global.fcontact = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    const infoText = `` 
;

  
  const { result, key, timeout } = await conn.sendMessage(m.chat, { video: { url: menuvid }, caption: infoText.trim(),  gifPlayback: true,
  gifAttribution: 0}, { quoted: fcontact })
  
  // Save the menu options to gurumenu
  conn.gurumenu[m.sender] = {
    result,
    key,
    timeout: setTimeout(() => {
      conn.sendMessage(m.chat, {
          delete: key
      });
      delete conn.gurumenu[m.sender];
  }, 150 * 1000),
  };
  };
  
 
  handler.before = async (m, { conn }) => {
    conn.gurumenu = conn.gurumenu ? conn.gurumenu : {};
    if (m.isBaileys || !(m.sender in conn.gurumenu)) return;
    const { result, key, timeout } = conn.gurumenu[m.sender];
    if (!m.quoted || m.quoted.id !== key.id || !m.text) return;
    const choice = m.text.trim();
    
    if (choice === "1") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: botmenu
      }, { quoted:fcontact });
      } else if (choice === "2") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: ownermenu
      }, { quoted:fcontact });
      } else if (choice === "3") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: groupmenu
      }, { quoted:fcontact });
      } else if (choice === "4") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: funmenu
      }, { quoted:fcontact });
      } else if (choice === "5") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: reactmenu
      }, { quoted:fcontact });
      } else if (choice === "6") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: dlmenu
      }, { quoted:fcontact });
      } else if (choice === "7") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: groupmenu
      }, { quoted:fcontact });
      } else if (choice === "8") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: logomenu
      }, { quoted:fcontact });
      } else if (choice === "9") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: stickermenu
      }, { quoted:fcontact });
      } else if (choice === "10") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: audiomenu
      }, { quoted:fcontact });
      } else if (choice === "11") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: newsmenu
      }, { quoted:fcontact });
      } else if (choice === "12") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: economy
      }, { quoted:fcontact });
      } else if (choice === "13") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: animemenu
      }, { quoted:fcontact });
      } else if (choice === "14") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: nsfwmenu
      }, { quoted:fcontact });
      } else if (choice === "15") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: toolsmenu
      }, { quoted:fcontact });
      } else if (choice === "16") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: Aimenu
      }, { quoted:fcontact });
      } else if (choice === "17") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: religionmenu
      }, { quoted:fcontact });
      } else if (choice === "18") {
        await conn.sendMessage(m.chat, { image: { url: 'https://cdn.jsdelivr.net/gh/Guru322/api@Guru/K.jpg' },
        caption: pluginmenu
      }, { quoted:fcontact });
      } else {
        m.reply('Invalid choice. Please reply with a valid number.');
      }
  
  };
  
  
  handler.help = ["play"];
  handler.tags = ["downloader"];
  handler.command = /^(اوامر)$/i;
  handler.limit = true;
  export default handler;
  
  
  
  
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
   }
   
   const more = String.fromCharCode(8206)
   const readMore = more.repeat(4001)
   
   function clockString(ms) {
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [h, " ساعة ", m, " دقيقة ", s, " ثانية "].map(v => v.toString().padStart(2, 0)).join("")
   }
   
   function clockStringP(ms) {
    let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10
    let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12
    let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [ye, " *Years 🗓️*\n", mo, " *Month 🌙*\n", d, " *Days ☀️*\n", h, " *Hours 🕐*\n", m, " *Minute ⏰*\n", s, " *Second ⏱️*"].map(v => v.toString().padStart(2, 0)).join("")
   }
   
   function ucapan() {
    const time = moment.tz("Asia/Damascus").format("HH")
    let res = "صباح الخير ☀️"
    if (time >= 4) {
     res = "صباح الخير 🌄"
    }
    if (time >= 10) {
     res = " نهارك سعيد☀️"
    }
    if (time >= 15) {
     res = "غروب جميل اليس كذلك🌇"
    }
    if (time >= 18) {
     res = "مساء الخير 🌙"
    }
    return res
   }
  
