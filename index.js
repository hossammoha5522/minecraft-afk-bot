const mineflayer = require('mineflayer');
const http = require('http');

// إعدادات الدخول للسيرفر
const bot = mineflayer.createBot({
  host: 'pouofo.aternos.me', // عنوان السيرفر بتاعك
  port: 22287,               // البورت
  username: 'HossamAFK'      // اسم البوت داخل اللعبة
});

// عند الدخول للسيرفر
bot.once('spawn', () => {
  console.log('✅ البوت دخل السيرفر بنجاح!');
  
  // يتحرك كل شوية علشان ميتطردش
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 10000); // يقفز كل 10 ثواني
});

// سيرفر ويب بسيط علشان يخلي البوت شغال 24/7
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('✅ Bot is alive!');
}).listen(3000);
