const { Client, GatewayIntentBits } = require('discord.js');

// Discord tokenını buraya yaz
const TOKEN = "BURAYA_TOKENIN";

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Bot giriş yaptı: ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if(message.content === "!ping") {
        message.reply("Pong!");
    }
});

client.login(TOKEN);
