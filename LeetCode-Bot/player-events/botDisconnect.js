const Discord = require('discord.js');

module.exports = (client, message) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('LeetCode Disconnected!')
	.setDescription(`${emotes.error} - Music stopped as i have been disconnected from the channel !`)
	.setFooter('LeetCode Music System')
	.setColor(config.embedcolor)
	.setTimestamp();
    message.channel.send(embed);

};