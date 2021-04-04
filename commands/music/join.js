const { Command, CommandoMessage } = require("discord.js-commando");

module.exports = class JoinCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'join',
            aliases: ['j'],
            group: 'music',
            memberName: 'join',
            description: 'Ajoute le bot sur votre vocal `-join` ou `-j`',
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query
     */
    async run(message) {
        const voicechannel = message.member.voice.channel;

        if (!message.member.voice.channel) {
            return message.say(':x: Tu dois ètre dans un salon vocal pour utiliser cette commande :x:');
        }

        await voicechannel.join();

        return message.say(":thumbsup: J'ai rejoins" + "`" + message.member.voice.channel.name + "`");
    }
}