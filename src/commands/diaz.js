const response = [
    'Bsdk',
    'MKc',
    'shithead',
    'Chal apne baap ko mat sikha !!!'
];

module.exports = async(msg, args) => {
    console.log(args);
    // if (!args.length) return;
    const i = Math.floor(Math.random() * response.length);
    const reply = response[i];
    await msg.channel.send(`${msg.author} ${reply}`);

}