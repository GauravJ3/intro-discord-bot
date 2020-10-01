const channelId = '761312362623533058'; // mere test server wala id .. 
const guildId = '720684039597719612'; // Basically Vice City Bois channel ka id

const diaz = require('./diaz');
const fortune = require('./fortune');
const welcome = require('./welcome');

const commands = {
    'diaz' : diaz,
    'welcome' : welcome,
    'fortune' : fortune
};
module.exports = async (msg) => {
    console.log(msg);
    if (msg.guild.id === guildId && msg.channel.id === channelId) {
        const args = msg.content.split(' ');
        if (args.length == 0 || args[0].charAt(0) !== '!') return;
        const command = args.shift().substr(1);
        console.log(command);
        if (Object.keys(commands).includes(command)) {
            commands[command](msg, args);
        }
        
    }
}