const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://media.discordapp.net/attachments/903120888940085278/907108808432705536/IMG_0122.png `)
    .setTitle(`**Calli Help**`)
    .setDescription(`

**User Commands**
\`!invite\` - \`!support\` - \`!about\`
\`!ping\` - \`!prefix\` - \`!uptime\`

**Music Commands**
\`!play\` - \`!skip\` - \`!skipto\`
\`!stop\` - \`!volume\` - \`!nowplaying\`
\`!shuffle\` - \`+search\` - \`!resume\`
\`!remove\` - \`+queue\` - \`!filter\`
\`!loop\` - \`!lyrics\` - \`!radio\`

**Links**
[Support](https://discord.gg/rpUuBKHDBD) - [Invite]()
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("YELLOW");
   message.react("<:setting:830141142687285298>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
