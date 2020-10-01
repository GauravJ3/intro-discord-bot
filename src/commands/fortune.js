const fortune = require('fortune-tweetable');

module.exports = async (msg, args) => {
  // triggers: ['fortune', ''],
  // description: 'Get a quote from the fortune-tweetable package.',
  await msg.channel.send(`According to my magic Ball ${msg.author} Today : \n ${fortune.fortune()} 🔮`);

};