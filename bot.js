const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const SQLite = require('sqlite'); // SQLpackage

const path = require('path'); // PATHpackage

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const Canvas = require("canvas");
const pretty = require("pretty-ms")
var time = require("./time.json");
const credits = JSON.parse(fs.readFileSync('./credits.json'));

const welcome = JSON.parse(fs.readFileSync("./welcomer.json", "utf8"));

let xp = require('./xp.json'); //سوي ملف بأسم xp.json

const reportjson = JSON.parse(fs.readFileSync("./report.json", "utf8"));

const rWlc = JSON.parse(fs.readFileSync("./AutoRole.json", "utf8"));

const Captcha = JSON.parse(fs.readFileSync("./Captcha.json","utf8"));

const afk = require('./afk.json');

let vipKeys = JSON.parse(fs.readFileSync("./vipKeys.json", "utf8"));

const client = new Discord.Client();
var prefix = "!";
var adminprefix = '!'
const developers = ["436918120184021012"]




client.on("message", (message) => {

   if (message.content.startsWith("!new")) {   
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`First you need to create a rank called Support Team.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Done check your ticket, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  Done check your ticket, #ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Of you are sure write .confirm`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '.confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })   
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '436918120184021012') return;

if (message.content.startsWith(prefix + '1')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + '2')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + '3')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark: : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + '4')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
	
if (message.content.startsWith(prefix + '5')) {
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**Name changed :white_check_mark: : ${argresult}**`)
      return message.reply("**You**");
    } else
	    
if (message.content.startsWith(prefix + '6')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**The bot image has been changed :white_check_mark: : ${argresult}**`);
    
    }
    });	

client.on('message', message => {
    if (message.content.startsWith("!bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``Bot by MrBloods`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[!]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                    })
}
});

client.on('message', msg => {
  if(msg.content === 'Hello')
  msg.reply('Hi ')
});

client.on('message', msg => {
  if(msg.content === 'Back')
  msg.reply('Welcome Back')
});

client.on('message', msg => {
  if(msg.content === 'Ip')
  msg.reply('')
});

client.on('message', msg => {
  if(msg.content === 'xD')
  msg.reply('lol')
});

client.on('message', msg => {
  if(msg.content === 'MrBloods')
  msg.reply('What do u want')
});

client.on('message', msg => {
  if(msg.content === 'Bye')
  msg.reply('Bye ❤')
});
 
client.on('message', message => {
if(!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);if (command == "bc") {if(!message.member.roles.find('name','bc')) {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**⛔ you must have \`ADMINISTRATOR\` premission**, or role called "bc"`)}
let args = message.content.split(" ").slice(1).join(" ");
if(!args) return message.channel.send(`**:rolling_eyes: please type the broadcast message**`)
let filter = m => m.author.id == message.author.id
let idx = 0, fails = 0;let broadcastt = new Discord.RichEmbed().setColor('#36393e')
.addField(`**[1] broadcast for all members\n\n[2] broadcast for online members\n\n[3] broadcast for a specific role\n\n[4] broadcast with photo\n\n[0] to cansel**`,`** **`)
.setDescription(`**Please type the number of your chose**`)
.setFooter('you can add to the message [user] = mention the user')
message.channel.send(broadcastt).then(msg => {
message.channel.awaitMessages(filter, {max: 1,time: 90000,errors: ['time']})
.then(collected => {if(collected.first().content === '1') {msg.delete(),message.channel.send(`**☑ Broadcast begin send....**`).then(m => {
message.guild.members.map(member => {setTimeout(() => {member.send(args.replace('[user]',member).replace('[icon]',`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=1024`)).then(() => {}).catch((err) => {});},);});})}
if(collected.first().content === '2') {msg.delete(),message.channel.bulkDelete(1),message.channel.send(`**☑ Broadcast begin send....**`);
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {m.send(args.replace('[user]', m))})
message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {m.send(args.replace('[user]', m)) })
return message.guild.members.filter(m => m.presence.status === 'idle').forEach(m => {m.send(args.replace('[user]', m)) })}
if(collected.first().content === '0') {msg.delete(),message.channel.bulkDelete(1);return message.channel.send(`**Broadcast Has Been Canseled**`);}
if(collected.first().content === '3') {msg.delete();message.channel.bulkDelete(1);
message.channel.send('**Please Type the role name or id.**');
message.channel.awaitMessages(filter, {max: 1,time: 40000,errors: ['time']}).then(t => {
let R = t.first().content;
let role = message.guild.roles.find('name',R) || message.guild.roles.get(R);
if(!role) return message.channel.send('**😕 I Can\'t find this role please try again**'),msg.delete();
message.channel.bulkDelete(2);
if(role.members.size < 1) return message.channel.send('**there is no one have this role **😕');;
let XYZ = new Discord.RichEmbed().setTitle('**:ballot_box_with_check: Broadcast begin send....**').setDescription(`**For the role: ${role}**`).setColor(role.color)
message.channel.send(XYZ)
message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {setTimeout(() => {n.send(args.replace('[user]',n)).catch((err) => {});});});}).catch(err =>{});}
if(!collected.first().content.includes(['1','2','3','4','0'])) {msg.edit('Canceled.')}
if(collected.first().content === '4') { msg.delete();
message.channel.send('**✅ Please Type the photo link now**,Type "cansel" to cansel.').then(msgg =>{
message.channel.awaitMessages(filter, {max: 1,time: 50000,errors: ['time']}).then(XX => {
let photo = XX.first().content; if(photo == 'cansel') {message.channel.bulkDelete(2); return message.channel.send('**Broadcast Has Been Canseled**')}
let embed = new Discord.RichEmbed().setImage(photo).setTitle(`**are you sure you want to send this? \`[y,n]\`**`).setColor('#36393e')
message.channel.send(embed).catch(e =>{return message.channel.send('**The Photo link is wrong :x:**')});
let filter = m => m.author.id == message.author.id
message.channel.awaitMessages(filter, {max: 1,time: 90000,errors: ['time']}).then(XD => {if(XD.first().content === 'y') {
let bc = new Discord.RichEmbed().setTitle(`${args}`).setImage(photo).setFooter(message.guild.name,`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=1024`)
message.channel.bulkDelete(2);msgg.delete();message.channel.send('**☑ Broadcast begin send....**');message.guild.members.map(member => {setTimeout(() => {member.send(bc)}
)})}if(XD.first().content == 'n') {message.channel.bulkDelete(2);message.channel.send('**Broadcast Has Been Canseled**')}
})}).catch(myst =>{msgg.edit('Timed out.');})})
}if(collected.first().content === '5'){} // لو تبي تضيف شي خامس :]
}).catch(mys =>{msg.edit('Timed out to chose.')})})}});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.startsWith("!say")) {
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You dont have** `ADMINISTRATOR` **permission**');
var args = message.content.trim().split(/ +/g).slice(1);
let cname = args[0];
let chan = message.guild.channels.find(element => element.name === cname);
if (chan) {
    let text = args.slice(1).join(" ");
    message.delete();
    chan.send(text);
} else {
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
   }
}
});

client.on('message', message => {
  if (message.content === prefix + 'cat') {
    message.react(`🐱`)
      message.channel.sendFile("http://thecatapi.com/api/images/get?format=src&type=png", "mystery-cat.png")
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'sug')) {
      if (message.author.bot) return
      if (!message.guild) return message.reply('**:x: This Commands Just In Server**')
      let Room = message.guild.channels.find(`name`, "suggestions")
      if (!Room) return message.channel.send(`**Error** :octagonal_sign:\n**I Can't find the __suggestions__ Channel**`)
      if(!Room.permissionsFor(client.user).has(['SEND_MESSAGES','READ_MESSAGES','EMBED_LINKS'])) return message.channel.send(`**Error** :octagonal_sign:
I Don\'t have Permissions on tha suggestions channel`)

      var args =  message.content.split(' ').slice(1).join(' ')
      if (!args) return message.reply('**Please type your suggestion after the command**')
      let embed = new Discord.RichEmbed()
      .setColor('#311464')
     .setAuthor(`New suggestion by ${message.author.username}`, 'https://media.discordapp.net/attachments/584630360017469461/584661803003281408/72-512.png?width=375&height=375')
      .addField(`suggestion :`,`**${args}**`)
      .setThumbnail(message.author.avatarURL)
      .setTimestamp();
      Room.sendEmbed(embed).then(c => {
          c.react('👍').then(() =>
              c.react('👎'))
const sug = new Discord.RichEmbed()
.setColor(0x00e2f3)
.setAuthor(`Done your suggestion was sent`, 'https://media.discordapp.net/attachments/584630360017469461/584632506930823199/582246841186254869.png')
message.channel.sendEmbed(sug)
////
})
}
});

client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` You are muted because you sent links in the chat! `');
   
       
    }
});

client.on('message', message => {
    const swearWords = ["Fuck you", "damn","darn", "noob","fuck","ez", "lesbain","fuck you", "your mom","shit","Fuck","Shit"]; // الكلمات الممنوعه هنا
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
        message.author.send('Hey! That word has been banned, please don\'t use it!');
      }
}) //Toxic Codes

client.on("message", message => {
   
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
                if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**No Permissions**');
        var msg;
        msg = parseInt();
     
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done",
        color: 0x36393e,
        description: "The Room chat has been Deleted !",
        footer: {
          text: "Bot by MrBloods"
        }
      }}).then(msg => {msg.delete(3000)});
                          }
 
     
});

client.on('guildMemberAdd', member => {
var channel = member.guild.channels.find('name', 'welcome');
    if(!channel) return;
channel.send('**Welcome** ' + `${member}` + ' **To** ' + `__${member.guild.name}__` + ' **Server** 💕')          
 
}) //Toxic Codes //n3k4a

client.on('message',async message => {
if(message.content == '!unbanall') {
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("BAN_MEMBERS")) return;
message.guild.fetchBans().then(ba => {
ba.forEach(ns => {
message.guild.unban(ns);
})
}).then(() => {
let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)          
  .addField("Done✅|")  
  .setFooter(`Requested By | ${message.author.tag}`)
  message.channel.send(embed);
})
}
});

client.on('message', message => {
    if(!message.channel.guild) return;
    if(message.content.startsWith('!ping')) { // حقوق مداكس تو
        if (message.author.bot) return;
        if(!message.channel.guild) return;
        var Bping =`${Math.round(client.ping)}` // Mdax77x CopyRight | Toxic Codes
                const E1ping = new Discord.RichEmbed()
        .setTitle('ــــــــــــــــــــــــــــــ')
        .addField(`**BOT Ping Is** :__${Bping}📶__`,"ــــــــــــــــــــــــــــــ")
        .setFooter(`Requested by | ${message.author.tag}`) // حقوق مداكس
        .setColor('RANDOM')
        message.channel.send(E1ping);
    }
});

client.on('message',message =>{ // MdAx77x CopyRght
    if(!message.channel.guild) return;
if(message.content =='!members') // Mdax77x | Toxic Codes CopyRight
var E2Mdax = new Discord.RichEmbed()
 
.setTitle('==========🌷| Members info==========')
.addField('** Members count👥.:**',`__** [ ${message.guild.memberCount} ]**__`,true) // Mdax77x | Toxic Codes CopyRight
.addField('📗|online',` ${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
.addField('📓| offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`) // Mdax77x | Toxic Codes CopyRight
.setFooter(`Requested By | ${message.author.tag}`) // Mdax77x | Toxic Codes
.addField('**==============**',true)
.setColor('RANDOM')
message.channel.send(E2Mdax);
});

client.on('message', message=>{
    if (message.content ===  "leave99"
    message.guild.leave();
            }
}); //Toxic Codes

client.on('message', message => {
    if (message.content.startsWith("!id")) {
                 if(!message.channel.guild) return message.reply('** This command only for servers**');
 
                var mentionned = message.mentions.users.first();
     var mentionavatar;
       if(mentionned){
           var mentionavatar = mentionned;
       } else {
           var mentionavatar = message.author;
           
       }
    let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
    .setThumbnail(`${mentionavatar.avatarURL}`)
   .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
   .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
    .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
   .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
      
      
   message.channel.sendEmbed(embed);
   console.log('[id] Send By: ' + message.author.username)
     }
 }); //Toxic Codes

client.on('message', function(message) {
    if(!message.channel.guild) return;
    if(message.content === 'cc') {
    if(message.member.hasPermission('MANAGE_ROLES')) {
    setInterval(function(){})
    message.channel.send('Wait we are making 50 colors| ▶️')
    }else{
    message.channel.send('You dont have permission|❌🚫')
    }
    }
    });
    
    client.on('message', message=>{
    if (message.content === '!cc'){
    if(!message.channel.guild) return;
    if (message.member.hasPermission('MANAGE_ROLES')){
    setInterval(function(){})
    let count = 0;
    let ecount = 0;
    for(let x = 1; x < 50; x++){
    message.guild.createRole({name:x,
    color: 'RANDOM'})
    }
    }
    }
    }); //Toxic Codes

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});

client.on('message', message => {    
    var p = "!";
            if (message.content.startsWith(p + "topic")) {
                if(!message.channel.guild) return;
                if (!message.member.hasPermission("MANAGE_CHANNEL"))  return;
      var a= message.content.split(' ').slice(1).join("  ");
      if (!a) return message.reply("You didnt write anything to put it.")
      message.channel.setTopic(`${a}`)
      .then(newChannel => message.channel.send(`Done i changed the topic **${a}**`))
      .catch(console.error);
            }
}); 

client.on('message', message => {
    if (message.content === ('!info')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@507533148897411082>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});//toxic codes

client.on('message', message => { //zine pixel
if(message.content.startsWith(prefix + "server")){  
if(!message.channel.guild) return message.channel.send(` | This Command is used only in servers!`);
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("✽** Server ID:**", `» ${message.guild.id}`,true)
.addField("✽** Created On**", `» ${message.guild.createdAt.toLocaleString()}`,true)
.addField("✽** Owned by**",`» ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("✽** Members**",`» ${message.guild.memberCount}`,true)
.addField('✽** Channels **',`» **${message.guild.channels.filter(m => m.type === 'text').size}**` + ' TexT | VoicE  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("✽** Region **" , `» ${message.guild.region}`,true)
.setColor("#42A9C9") //zine pixel
message.channel.sendEmbed(embed)
 
}
});

client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("!link")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" Done check your dm! ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter(`Requested by | ${message.author.tag}`)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("Link of the server- Bot by MrBloods")
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "!";
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});
			
client.on("message", function(message) {
	var prefix = "!";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

client.on('message', function(message) {//Narox
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;//Narox
        var Narox = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()//Narox
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)//Narox
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("616599582016667703").send({embed:Narox});//Narox
      }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + "image")) {
    var embed = new Discord.RichEmbed()
    .setTitle("Server Image")  
    .setColor("RANDOM")
    .setImage(message.guild.iconURL)
    message.channel.sendEmbed(embed);
  }
});

client.on('message', message => {
  var prefix = "!"
          if(message.content.startsWith(prefix + 'skin')) {
              let args = message.content.split(' ').slice(1).join(' ');
              if (!args) return message.channel.send("**You ign**");
              var link = (`https://minotar.net/body/${args}/100.png`);
              message.channel.send(link);
          }
      });

 client.on('message', message => {
if(message.content.startsWith("!slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "**Winner**"
  } else {
    we = "**Loser** "
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});

client.on('messageDelete', message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = message.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    let messageDelete = new Discord.RichEmbed()
    .setTitle('**[MESSAGE DELETE]**')
    .setColor('RED')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return;
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[MESSAGE EDIT]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('BLUE')
    .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
 
 
// Roles Logs
client.on('roleCreate', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**[ROLE CREATE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**[ROLE DELETE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete);
    })
});
client.on('roleUpdate', (oldRole, newRole) => {
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldRole.name !== newRole.name) {
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**[ROLE NAME UPDATE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName);
        }
        if(oldRole.hexColor !== newRole.hexColor) {
            if(oldRole.hexColor === '#000000') {
                var oldColor = '`Default`';
            }else {
                var oldColor = oldRole.hexColor;
            }
            if(newRole.hexColor === '#000000') {
                var newColor = '`Default`';
            }else {
                var newColor = newRole.hexColor;
            }
            let roleUpdateColor = new Discord.RichEmbed()
            .setTitle('**[ROLE COLOR UPDATE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateColor);
        }
        if(oldRole.permissions !== newRole.permissions) {
            let roleUpdate = new Discord.RichEmbed()
            .setTitle('**[UPDATE ROLE PERMISSIONS]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
           
            logChannel.send(roleUpdate)
        }
    })
});
 
 
// Channels Log
client.on('channelCreate', channel => {
 
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelCreate = new Discord.RichEmbed()
        .setTitle('**[CHANNEL CREATE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
});
client.on('channelDelete', channel => {
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**[CHANNEL DELETE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete);
    })
});
client.on('channelUpdate', (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
 
    var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
 
    oldChannel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newName);
        }
        if(oldChannel.topic !== newChannel.topic) {
            let newTopic = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newTopic);
        }
    })
});
 
 
// Guild Logs
client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setTitle('**[BANNED]**')
        .setThumbnail(userAvatar)
        .setColor('DARK_RED')
        .setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(banInfo);
    })
});
client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**[UNBANNED]**')
        .setThumbnail(userAvatar)
        .setColor('GREEN')
        .setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(unBanInfo);
    })
});
client.on('guildUpdate', (oldGuild, newGuild) => {
 
    if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldGuild.channels.find(c => c.id === guildSettings[oldGuild.id].logChannel);
    if(!logChannel) return;
 
    oldGuild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldGuild.name !== newGuild.name) {
            let guildName = new Discord.RichEmbed()
            .setTitle('**[CHANGE GUILD NAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild name.\n\n**Old Name:** \`\`${oldGuild.name}\`\`\n**New Name:** \`\`${newGuild.name}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(newGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildName)
        }
        if(oldGuild.region !== newGuild.region) {
            let guildRegion = new Discord.RichEmbed()
            .setTitle('**[CHANGE GUILD REGION]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild region.\n\n**Old Region:** ${oldGuild.region}\n**New Region:** ${newGuild.region}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildRegion);
        }
        if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
            if(oldGuild.verificationLevel === 0) {
                var oldVerLvl = 'Very Easy';
            }else
            if(oldGuild.verificationLevel === 1) {
                var oldVerLvl = 'Easy';
            }else
            if(oldGuild.verificationLevel === 2) {
                var oldVerLvl = 'Medium';
            }else
            if(oldGuild.verificationLevel === 3) {
                var oldVerLvl = 'Hard';
            }else
            if(oldGuild.verificationLevel === 4) {
                var oldVerLvl = 'Very Hard';
            }
 
            if(newGuild.verificationLevel === 0) {
                var newVerLvl = 'Very Easy';
            }else
            if(newGuild.verificationLevel === 1) {
                var newVerLvl = 'Easy';
            }else
            if(newGuild.verificationLevel === 2) {
                var newVerLvl = 'Medium';
            }else
            if(newGuild.verificationLevel === 3) {
                var newVerLvl = 'Hard';
            }else
            if(newGuild.verificationLevel === 4) {
                var newVerLvl = 'Very Hard';
            }
 
            let verLog = new Discord.RichEmbed()
            .setTitle('**[GUILD VERIFICATION LEVEL CHANGE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Guild verification level.\n\n**Old Verification Level:** ${oldVerLvl}\n**New Verification Level:** ${newVerLvl}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
 
            logChannel.send(verLog);
        }
    })
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
    var logChannel = oldMember.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 
        if(oldMember.nickname !== newMember.nickname) {
            if(oldMember.nickname === null) {
                var oldNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var oldNM = oldMember.nickname;
            }
            if(newMember.nickname === null) {
                var newNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var newNM = newMember.nickname;
            }
 
            let updateNickname = new Discord.RichEmbed()
            .setTitle('**[UPDATE MEMBER NICKNAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
            logChannel.send(updateNickname);
        }
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
 
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**[ADDED ROLE TO MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
 
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**[REMOVED ROLE FROM MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('RED')
            .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
        let newOwner = new Discord.RichEmbed()
        .setTitle('**[UPDATE GUILD OWNER]**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('GREEN')
        .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
        logChannel.send(newOwner);
    }
});
client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
 
  let newMember = new Discord.RichEmbed()
  .setTitle('**[NEW MEMBER ADDED]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(newMember);
});
function Days(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
}
client.on('guildMemberRemove', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
 
  let leaveMember = new Discord.RichEmbed()
  .setTitle('**[LEAVE MEMBER]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(leaveMember);
});
 
 
// Voice Logs
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
// Server Muted Voice
        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**[VOICE MUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }
// Server UnMuted Voice
        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**[VOICE UNMUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }
// Server Deafen Voice
        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE DEAFEN]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }
// Server UnDeafen Voice
        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE UNDEAFEN]**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv);
        }
    })
// Join Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
        let voiceJoin = new Discord.RichEmbed()
        .setTitle('**[JOIN VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceJoin);
    }
// Leave Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[LEAVE VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
// Changed Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[CHANGED VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
});

client.on('message', message => {
    if (message.content.startsWith("!hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("**```Type the name of the person who wants to hack.```**");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓���▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('**The hacking process was successful ! **')
           }, 33000)
           });
         }
 });

client.on('message' , message => {
if(message.content === '!voice') {
    message.channel.send(`**Number of people in the voice channels are : ${message.guild.members.filter(g => g.voiceChannel).size}**`);
}
});

client.on('message' , async message => {
	  var prefix = "!";
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });

client.on('message', message => {
     if (message.content === "!user") {
         if(!message.channel.guild) return message.reply('** This command only for servers**');
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
               .setFooter(`Anti Invite Links`, '')
    .setColor("ffffff")
    .addField(" :bust_in_silhouette: Full Username", `${message.author.username}#${message.author.discriminator}`)
    .addField(" :id: User ID", message.author.id)
    .addField(" :information_source: Stats", `${message.author.presence.status}`, true)
    .addField(' :game_die: Game', `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}`, true)
    .addField(':robot: Bot ?', message.author.client)
    .addField(" :shield: Roles:", message.member.roles.filter(r => r.id !== message.guild.id).map(roles => roles.name))
    .addField(" :globe_with_meridians: Registered \ Joined Discord", message.author.createdAt)
    .addField(" :inbox_tray: Joined Server", message.member.joinedAt)

     
  message.channel.sendEmbed(embed);
    }
});

var flip = ["**__HEADS__**",
"**__TAILS__**"
]
    client.on('message', message => {
        
    if(message.content.startsWith(prefix + 'flip')) {
        if(!message.channel.guild) return message.reply('** This command only for servers **');
         var cat = new Discord.RichEmbed()
.setDescription(flip[Math.floor(Math.random() * flip.length)])
.setThumbnail("https://cdn.onlinewebfonts.com/svg/img_441809.png")
.setColor(0xd3d0c4)
   .setFooter(`Bot by MrBloods`)
message.channel.sendEmbed(cat);

    }
});

client.on('message', message => {
        
   if(message.content.startsWith(prefix + 'rename')) {
if(message.member.hasPermission("ADMINISTRATOR")) {
         let args = message.content.split(' ').slice(2);
var mentionned = message.mentions.users.first();
   
  if(!args){
    return message.channel.send(":x: " + `**| Please enter a new Nick for ${mentionned}**`);
  }
  if (!mentionned)return message.channel.send("**You Have to Mention A member :x:**")
  message.guild.member(mentionned).setNickname(args.join(" ")).then(user => message.channel.send(`:full_moon_with_face: ${mentionned}'s' **New NickName is **` + `__${args.join(" ")}__` + "!")).catch(console.error);
} else {
  return message.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission");
  }


    }
});

client.on('message', message => {
    if (message.content === "!roles) {
        if(!message.channel.guild) return message.reply('** This command only for servers **');

        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        message.channel.send(`**[${roles}]**`);
    }
});

 client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Put a number** :game_die:');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``To use the command, type this command: " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("RANDOM")
 .setDescription(`You have moved out <@${usermentioned}> Into your voice room✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``You can't move"+ message.mentions.members.first() +" `This member must be in voice room`")
}
} else {
 message.channel.send("**``You must be in an voice room in order to move out the member``**")
}
} else {
message.react("❌")
}
 }
});//toxic codes

client.on("message", message => {
    if (message.content === "!help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help | XLegendaryGalaxy**

        **__General orders__**
**
『!allbots/ Show you all the bots in the server.』
『!server/ Show you the server info』
『!bot/ Show you the bot info』
『!members/ Show you the online and offline members』
『!id/ Show you your id』
『!ping/ Show you the bot ping』
『!info/ Show you some bot info』
『!help/ Show you this list』
『!link/ Give you link of the server』
『!new/ Open a ticket』
『!close/ Close a ticket』
『!sug/ Suggestion for an idea』
『!image/ Show server image』
『!avatar/ Show you your avatar』
『!rename/ Like nickname』
『!user/ Show you your infos』
**

        **__Games orders__**
 **       
『!rps/ Rock-Paper-Scissors』
『!roll/ Rolling』
『!flip/ All know it xD』
『!cat/ Give you some cute pictures』
『!slots/ everyone know it』
『!hack/ like hacking accs but its a game』
『!emoji <emoji>/ its funny and helpful 』
『!skin <ign>/ Show your minecraft skin 』
**

        **__Music orders__**
**
『${prefix}play / Soon』
『${prefix}skip / Soon』
『${prefix}pause / Soon』
『${prefix}resume / Soon』
『${prefix}vol / Soon』
『${prefix}stop / Soon』
『${prefix}np / Soon』
『${prefix}queue / Soon』
**

        **__Administrative Orders__**
**
『!bc / broadcast』
『!role / show you all the roles』
『!clear / clear all the chat』
『!kick @user / Kick member』
『!ban @user / Ban member』
『!unbanall / Unban  all the members』
『!cc / make 50 colored roles』
『!topic / Change or create a topic』
『!say <word> / The bot will say your word』
『!move/ You will move the member from foice channel』
『!voice  / Show you the members who are in the voice rooms』

『 The bot can mute anyone share any link in the chat - The bot will remove any bad words 』
『 The bot welcome who join the server if you create a room called welcome 』
『 The bot have a log !! 』
『 Thanks for using the bot 』

       Bot By MrBloods** `)
     
            
   message.author.sendEmbed(embed)
   
   }
   });

client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **This is currently disabled .. ``Try later``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Please type the name of the room**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **I could not find the desired room**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **Type the duration of the GiveAway in minutes, for example : 60**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **``You should rewrite it``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **Finally, write on what you want to GiveAway**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`Duration : ${duration / 60000} Minutes`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("💖").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**Not selected**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('GiveAway finished !',`The winner is : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **The stand was prepared GiveAway**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **I was unable to prepare the GiveAway because of the lack of characteristics**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});
	  
client.on("message", msg =>{    
if(msg.content.startsWith(`${prefix}topservers`)){
      const devs = ['436918120184021012'];
      if (!devs.includes(msg.author.id)) return msg.channel.send(`** | You Can't Use this Command.**`);
     
  let noTop = msg.content.split(" ")[1];
  const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
  if(!noTop) noTop = 10; //pixel Zine
  if(isNaN(noTop)) noTop = 10;
  if(noTop <= 0) noTop = 10;
  if(noTop > top.length) noTop = top.length;
  let serveremmbed = new Discord.RichEmbed();
  for(let i = 0; i < noTop; i++){
  serveremmbed.addField(`\n **⇏ ${top[i].name}** \n Members » ${top[i].memberCount}`," ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎");
  }
  serveremmbed.setTitle(`\n **Top ${noTop} Servers** \n`);
  serveremmbed.setThumbnail(msg.author.displayAvatarURL);
  serveremmbed.setTimestamp();
  serveremmbed.setColor('#42A9C9')
  serveremmbed.setFooter(client.user.username,client.user.displayAvatarURL);
  msg.channel.send(serveremmbed);
}});//zine pixel

client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
    
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
        
        if (!voiceChannel) return msg.channel.send("انت لم تدخل روم صوتي");
        
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        
        if (!permissions.has('CONNECT')) {

			return msg.channel.send("ليست لدي صلاحيات للدخول الى الروم");
        }
        
		if (!permissions.has('SPEAK')) {

			return msg.channel.send("انا لا يمكنني التكلم في هاذه الروم");
		}

		if (!permissions.has('EMBED_LINKS')) {

			return msg.channel.sendMessage("انا لا املك صلاحيات ارسال روابط")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            

			for (const video of Object.values(videos)) {
                
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, msg, voiceChannel, true); 
            }
			return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
		} else {

			try {

                var video = await youtube.getVideo(url);
                
			} catch (error) {
				try {

					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle(":mag_right:  YouTube Search Results :")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                    
					.setColor("#f7abab")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
/////////////////					
					try {

						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم اختيار الاغنية');
                    }
                    
					const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    
				} catch (err) {

					console.error(err);
					return msg.channel.send("I didn't find any results!");
				}
			}

            return handleVideo(video, msg, voiceChannel);
            
        }
        
	} else if (command === `skip`) {

		if (!msg.member.voiceChannel) return msg.channel.send("يجب ان تكون في روم صوتي");
        if (!serverQueue) return msg.channel.send("ليست هناك اغاني ليتم التخطي");

		serverQueue.connection.dispatcher.end('تم تخطي الاغنية');
        return undefined;
        
	} else if (command === `stop`) {

		if (!msg.member.voiceChannel) return msg.channel.send("يجب ان تكون في روم صوتي");
        if (!serverQueue) return msg.channel.send("There is no Queue to stop!!");
        
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم ايقاف الاغنية لقد خرجت من الروم الصوتي');
        return undefined;
        
	} else if (command === `vol`) {

		if (!msg.member.voiceChannel) return msg.channel.send("يجب ان تكون في روم صوتي");
		if (!serverQueue) return msg.channel.send('يعمل الامر فقط عند تشغيل مقطع صوتي');
        if (!args[1]) return msg.channel.send(`لقد تم تغير درجة الصوت الى**${serverQueue.volume}**`);
        
		serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        
        return msg.channel.send(`درجة الصوت الان**${args[1]}**`);

	} else if (command === `np`) {

		if (!serverQueue) return msg.channel.send('There is no Queue!');
		const embedNP = new Discord.RichEmbed()
	    .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
        
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('There is no Queue!!');
		let index = 0;
//	//	//
		const embedqu = new Discord.RichEmbed()
        .setTitle("The Queue Songs :")
        .setDescription(`
        ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('\n')}
**Now playing :** **${serverQueue.songs[0].title}**`)
        .setColor("#f7abab")
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم الايقاف');
		}
		return msg.channel.send('في انتظار تشغيل المقطع');
	} else if (command === "resume") {

		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
            return msg.channel.send('تم التشغيل');
            
		}
		return msg.channel.send('Queue is empty!');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	

	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}!`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Can't join this channel: ${error}!`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`**${song.title}**, تمت اضافة المقطع الى قائمة الانتظار `);
	} 
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`**${song.title}**, is now playing!`);
}


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Bot by MrBloods | !help `,"http://twitch.tv/MrBloods")
client.user.setStatus("dnd")
});

client.on('message', message => {
  if (message.channel.id === "616983620963532800") {
    message.react('☑')
      .then(() => {
        message.react('🚫')
      });
  }
});


client.on('message', async msg =>{
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;

    let args = msg.content.split(' ');

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

    if(command === `avatar`){
	if(msg.channel.type === 'dm') return msg.channel.send("Nope Nope!! u can't use avatar command in DMs (:")
        let mentions = msg.mentions.members.first()
        if(!mentions) {
          let sicon = msg.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(msg.author.avatarURL)
          .setColor("#5074b3")
          msg.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#5074b3")
          .setImage(sicon)
          msg.channel.send({embed})
        }
    };
});

let inv_room = "616329647587590180" // room id
client.on('guildMemberAdd', async member => { // membed add event
    member.guild.fetchInvites().then(async guildInvites => { // fetch invites ?
            const inv = invites[member.guild.id]; // get invite :)
            invites[member.guild.id] = guildInvites; // push guild invites on invites
            let invite = guildInvites.find(i => inv.get(i.code).uses < i.uses); // find ?
            let res = await SQLite.get(`SELECT * FROM linkSysteme WHERE code = '${invite.code}'`) // select from sql
            if(!res) { // if the code does'nt exists
            console.log(invite.code) // for test
            client.channels.get(inv_room).send("**Welcom To "+member.guild.name+"🌹 .\n       Joined By: "+invite.inviter+".**") // send message to welcome room
            } else { // if the code link exitst
                client.channels.get(inv_room).send("**Welcom To "+member.guild.name+"🌹 .\n       Joined By: <@!"+res.id+">.**") // send message to welcome room
                console.log(res.code) // for test
        } // end if
    }); // end fetchs :)
}); // end events :) ) )) ))  )) )) )) )) ) )) ))

client.on("message", message => {
if(message.content.startsWith(prefix + `contact`)){
if(message.author.bot || message.channel.type == 'dm') return;
let args = message.content.split(" ").slice(1);
let msg = args.join(' ');
let dev = client.users.get("436918120184021012"); //Your id
if(!args) return message.reply("You must type the message");
dev.send(`• | User: **${message.author.tag}**\n\n• | Message: **${msg}**`).then(() =>{
message.channel.send(`Your message has been successfully delivered to the bot developer`)
}).catch(console.error);
}
});

client.on("message", msg=>{
let id = "436918120184021012"; // ايديك
let role = "VIP"; // اسم رتبة الفيب
let Price = 10000; // السعر
let Price2 = Math.floor(Price-(Price*(1/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}buy`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
let embedvip = new Discord.RichEmbed()
.setColor("#42f4f4")
.setAuthor(msg.author.username, msg.author.displayAvatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle("**Choose the method that's right for you**")
.addField("To buy VIP for yourself","🔱",true )
.addField("To buy your VIP as a gift","🎁",true)
.setTimestamp()
.setFooter(client.user.username,client.user.displayAvatarURL);
msg.channel.send(embedvip).then(msgs2 =>{
msgs2.react("🔱").then(()=>{
  msgs2.react("🎁").then(()=>{
    const me = (reaction, user) => reaction.emoji.name === '🔱' && user.id === msg.author.id;
    const gift = (reaction, user) => reaction.emoji.name === '🎁' && user.id === msg.author.id;
    const mec = msgs2.createReactionCollector(me, {time: 120000});
    const giftc = msgs2.createReactionCollector(gift, {time: 120000});
mec.on("collect", r=>{  
msgs2.delete()
if(msg.member.roles.find(r=>r.name == role)) return msg.reply("You already own the rank");
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW) return msg.reply(`The bot is locked because there is no rank by name \`${role}\``)
msg.channel.send(`Credit ProBot \`${Price}\` You have 4 minutes to convert
to ${msg.guild.members.get(id)}
`).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
msg.reply(`You were given rank \`${role}\``);
msg.member.addRole(roleW);
}).catch(e => {});
})})
giftc.on("collect", r=>{
  msgs2.delete()
  let roleW = msg.guild.roles.find(r=>r.name == role);
  if(!roleW) return msg.reply(`The bot is locked because there is no rank by name \`${role}\``)
msg.channel.send(`Credit ProBot\`${Price}\` You have 4 minutes to convert
to ${msg.guild.members.get(id)}
`).then( msgs =>{
  const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
  msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
  .then( collected =>{
  msgs.delete()
  genKey(msg,roleW);
  }).catch(e => {});
  })
})
})})})
///
}
if(cmd === `${prefix}used`){
  let args = msg.content.split(" ").slice(1)[0];
  if(!args) {   
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - **Please enter your gift code** \`${prefix}used <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
  let embed = new Discord.RichEmbed()
.setTitle(`**Verifying code**`)
.setColor("#42f4f4")
  msg.reply(embed).then( msgs =>{
  if(vipKeys[args]){
    let hav = msg.member.roles.find(`name`, vipKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **You already own this rank**  \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **Congratulations you were given rank** \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    msg.member.addRole(vipKeys[args]);
    delete vipKeys[args]
    save()
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **The code is not valid or is already in use**`)
    .setColor("#42f4f4")
    msgs.edit(embed)
  }});
}
});

function genKey(msg,role){
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  vipKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **The code was sent to the private**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",vipKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
  save()
}

function save(){
  fs.writeFile("./vipKeys.json", JSON.stringify(vipKeys), (err) => {
    if (err) console.log(err)
  });
	
}

client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix+"tops")) {
        const top = client.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
     let tl = "";
      for (let i=0;i<=25;i++) {
          if (!top[i]) continue;
         tl += i+" - "+top[i].name+" : "+top[i].memberCount+"\n"
      }
      message.channel.send(tl)
    }
});

client.on('ready',async () => {
  let GUILDID = '605524619268718592'; // اي دي السيرفر  
  let CHANNELID = '605524619268718596'; // اي دي الروم
  voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if(!guildid) throw new Error('Syntax: voiceStay function requires guildid');
    if(!channelid) throw new Error('Syntax: voiceStay function requires channelid');

    let guild = client.guilds.get(guildid);
    let channel = guild.channels.get(channelid);

    if(channel.type === 'voice') {
      channel.join().catch(e => {
        console.log(`Failed To Join :: ${e.message}`);
      });
    } else {
      console.log(`Channel Type ::  ${channel.type}, It must be Voice.`);
    }
  }
});

client.on('message' , async (message) => {
var prefix = "!"
    if(message.content.startsWith(prefix + "topinv")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
     //معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
    })
    const embed = new Discord.RichEmbed()
 .setColor('RANDOM')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('name', 'welcome');
  
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;




  
    const embed = new Discord.RichEmbed()
    
    .setColor("RANDOM")
    .setDescription(`**Date: Discord account ${createdAt.toFixed(0)} Day**`)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);

  
});

 client.on('message', message => {

 var ms = require('ms')

 var moment = require('moment');
  
 if (message.author.bot) return;

 if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];

 command = command.slice(prefix.length);

 let args = message.content.split(" ").slice(1);

 let messageArray = message.content.split(" ");

 let embed = new Discord.RichEmbed()

.setImage("https://5.top4top.net/p_13409tj171.png")

 if (command == "ban") {

 if(!message.channel.guild) return message.reply('** This command only for servers**');
         
 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**:x: You Don't Have ` BAN_MEMBERS ` Permission**");

 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**:x: I Don't Have ` BAN_MEMBERS ` Permission**");

 let user = message.mentions.users.first();

 let Reason = message.content.split(" ").slice(3).join(" ");

 let time = messageArray[2];

 if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
  
 if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Ban This User**");

 if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

 if(!Reason)  {

 message.guild.member(user).ban({reason: Reason})

 }

  if(!Reason && time) {

  message.guild.member(user).ban(7, user);

  }  

  if(!time) {

  message.guild.member(user).ban(7, user);

  }
  if(time) {
  
  setTimeout(() => {

  message.guild.unban(user);

  }, ms(time));

  }

  if(time && Reason && user) {

  message.guild.member(user).ban({reason: Reason})
	  
	  
  setTimeout(() => {

  message.guild.unban(user);
  
  }, ms(time));

  }

  message.channel.send(`:white_check_mark:  ${user.tag} banned from the server ! :airplane:`)

  }

  });


client.on('message', message => {

  var ms = require('ms')
 
  var moment = require('moment');
 
   
  if (message.author.bot) return;
 
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
 
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  let messageArray = message.content.split(" ");
 
  let muteRole = message.guild.roles.find("name", "Muted");
	
  let embed = new Discord.RichEmbed()
 
 .setImage("https://3.top4top.net/p_13403ntnj1.png")
 
  if (command == "mute") {
    
  if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });

  if(!message.channel.guild) return message.reply('** This command only for servers**');
          
  if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: You Don't Have ` MUTE_MEMBERS ` Permission**");
 
  if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: I Don't Have ` MUTE_MEMBERS ` Permission**");
 
  let user = message.mentions.users.first();
 
  let Reason = message.content.split(" ").slice(4).join(" ");
 
  let time = messageArray[2];
 
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
   
  if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Mute This User**");
 
  if(!Reason)  {
 
    message.guild.member(user).addRole(muteRole);
 
  }
 
   if(!Reason && time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }  
 
   if(!time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }
   if(time) {
    if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
 
   }, ms(time));
 
   }
 
   if(time && Reason && user) {
 
    message.guild.member(user).addRole(muteRole);
 
	   
   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
   
   }, ms(time));
 
   }
 
   message.channel.send(`:white_check_mark: ${user} has been muted ! :zipper_mouth:`)
 
   }
 
});

client.on('message',async message => {
if(message.author.bot || message.channel.type === 'dm') return;
let args = message.content.split(' ');
let author = message.author.id;
if(!credits[author]) credits[author] = {
credits: 0
}
fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
if(args[0].toLowerCase() == `${prefix}money`) {
const mention = message.mentions.users.first() || message.author;
const mentionn = message.mentions.users.first();
if(!args[2]) {
message.channel.send(`**${mention.username}, your 💵  balance is \`$${credits[mention.id].credits}\`**`)
} else if(mentionn && args[2]) {
if(isNaN(args[2])) return message.channel.send(`**:x: | Error**`);
if(args[2] < 1) return message.channel.send(`**:x: | Error**`);
if(mention.bot) return message.channel.send(`**:x: | Error**`);      
if(mentionn.id === message.author.id) return message.channel.send(`**:x: | Error**`);
if(args[2] > credits[author].credits) return message.channel.send(`**:x: | Error , You Don't Have Enough Credit**`);
if(args[2].includes("-")) return message.channel.send(`**:x: | Error**`);
let resulting = Math.floor(args[2]-(args[2]*(5/100)));
let tax = Math.floor(args[2]*(5/100));
let first = Math.floor(Math.random() * 9);
let second = Math.floor(Math.random() * 9);
let third = Math.floor(Math.random() * 9);
let fourth = Math.floor(Math.random() * 9);
let num = `${first}${second}${third}${fourth}`;
let canvas = Canvas.createCanvas(108 , 40)
let ctx = canvas.getContext('2d');
const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/608278049091223552/617791172810899456/hmmm.png");
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
ctx.font = '20px Arial Bold';
ctx.fontSize = '20px';
ctx.fillStyle = "#ffffff";
message.channel.send(`**${message.author.username}, Transfer Fees: \`${tax}\`, Amount: \`$${resulting.toLocaleString()}\`**
type these numbers to confirm: `).then(essss => {
ctx.fillText(num, canvas.width / 2.4, canvas.height / 1.7);
message.channel.sendFile(canvas.toBuffer()).then(m => {
message.channel.awaitMessages(r => r.author.id === message.author.id, { max: 1, time: 20000, errors:['time'] }).then(collected => {
if(collected.first().content === num) {
message.channel.send(`**:moneybag: | ${message.author.username}, Done Trans \`$${resulting.toLocaleString()}\` To ${mentionn}**`);
mention.send(`**:money_with_wings: | Transfer Receipt \`\`\`You Have Received \`$${resulting.toLocaleString()}\` From User ${message.author.username}; (ID (${message.author.id})\`\`\``);
m.delete();
credits[author].credits += Math.floor((-resulting.toLocaleString()));
credits[mentionn.id].credits += Math.floor((+resulting.toLocaleString()));
fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
} else {
m.delete();
essss.delete();
}
})
})
})
}else {
message.channel.send(`**:x: | Error , Please Command True Ex: \`${prefix}money [MentionUser] [Balance]\`**`);
}
}
if(args[0].toLowerCase() === `${prefix}daily`) {
let cooldown = 8.64e+7
let Daily = time[message.author.id]
if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
let times = (cooldown - (Date.now() - Daily));
message.channel.send(`**:stopwatch: |  ${message.author.username}, your daily :dollar: credits refreshes in ${pretty(times, {verbose:true})}.**`);
fs.writeFile("./time.json", JSON.stringify(time), function(e) {
if(e)throw e;
})
}else{
let ammount = (300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
credits[author].credits += ammount;
time[message.author.id] = Date.now();
message.channel.send(`**:atm:  | ${message.author.username}, you received your 💰  ${ammount} daily credits!**`);
fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
if(e)throw e;
})
}
}
}); // By: FireKing , Codes

client.on("message", message => {
  var prefix = "!";
  if(message.content.startsWith(prefix + "msg")) {
    

var color = message.content.split(" ")[1];
  var text = message.content.split(" ").slice(2);
    var tt = text.join(" ")
  if(!color) return message.reply("You need to type the color !");
    if(!tt) return message.reply("You need to type your message !");
  let embed = new Discord.RichEmbed()
  .setColor(color)
  .setDescription(tt)
  message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);
message.channel.send("`Error`:" + Julian)
    })
  }
  });

client.on('message', message => {
           if (!message.channel.guild) return;
 
    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find('name', `${room}`)
    if(message.content.startsWith(prefix + "setReport")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('Please Type The Channel Name')
if(!findroom) return message.channel.send('Cant Find This Channel')
let embed = new Discord.RichEmbed()
.setTitle('**Done The report Code Has Been Setup**')
.addField('Channel:', `${room}`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
reportjson[message.guild.id] = {
channel: room,
}
fs.writeFile("./report.json", JSON.stringify(reportjson), (err) => {
if (err) console.error(err)
})
client.on('message', message => {
 
    if(message.content.startsWith(`${prefix}report`)) {
        let  user  =  message.mentions.users.first();
      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
    let reason = message.content.split(" ").slice(2).join(" ");
      if(!user)  return  message.channel.send("**You didn\'t mention the user to report**")
      if(!reason) return message.reply(`**Please provide a reason**`)
    let findchannel = (message.guild.channels.find('name', `${reportjson[message.guild.id].channel}`))
    if(!findchannel) return message.reply(`Error 404: The report Channel Cant Find Or Not Set To Set The report Channel Type: ${prefix}setReport`)
    message.channel.send(`Done Thank You For Your Report Will Be Seen By The Staffs`)
    let sugembed = new Discord.RichEmbed()
    .setTitle('New Report !')
    .addField('Report By:', `${message.author}`)
    .addField('Reported User:', `${user}`)
    .addField('Report Reason:', `${reason}`)
    .setFooter(client.user.username)
    findchannel.sendEmbed(sugembed)
        .then(function (message) {
          message.react('✅')
          message.react('❌')
        })
        .catch(err => {
            message.reply(`Error 404: The report Channel Cant Find Or Not Set To Set The report Channel Type: ${prefix}setReport`)
            console.error(err);
        });
        }
      }
)}
})

client.on("message", msg => {
    if(!msg.guild) return;
    if(msg.author.bot) return;
    if(!Captcha[msg.guild.id]) Captcha[msg.guild.id] = {
        role: "Member",
        room: "write-captcha",
        cmd: "captcha"
    }
    if(msg.content.startsWith(prefix + "setCaptcharole")){
                if(!msg.guild.member(msg.author).hasPermission('MANAGE_GUILD')) return message.reply(`**Sorry But You Don\'t Have Permission \`MANAGE_GUILD\`**`).then(m => m.delete(5000));
        let args = msg.content.split(' ').slice(1).join(' ');
        if(!args) return msg.reply(`**You must write the name of the rank for activation.**`).then(m => m.delete(5000));
        if(!msg.guild.roles.find("name",args)) return msg.channel.send(`There is no rank by name \`${args}\` `).then(m => m.delete(5000));
        Captcha[msg.guild.id].role = args
  msg.reply(`**Activation rank name changed to \`${args}\`**`).then(m => m.delete(5000));
                    fs.writeFile("./Captcha.json", JSON.stringify(Captcha), function(a) {
        if (a) throw a;
    })
    }
    if(msg.content.startsWith(prefix + "setCaptcharoom")){
if(!msg.guild.member(msg.author).hasPermission('MANAGE_GUILD')) return message.channel.send(`**Sorry But You Don\'t Have Permission \`MANAGE_GUILD\`**`).then(m => m.delete(5000));
         let args2 = msg.content.split(' ').slice(1).join(' ');
        if(!args2) return msg.reply(`**You must write the name of the room for activation.**`).then(m => m.delete(5000));
         if(!msg.guild.channels.find("name",args2)) return msg.channel.send(`**There is no rom in the name \`${args2}\`**`).then(m => m.delete(5000));
        Captcha[msg.guild.id].room = args2
  msg.reply(`**The romanization name for activation has been changed to \`${args2}\`**`).then(m => m.delete(5000));
            fs.writeFile("./Captcha.json", JSON.stringify(Captcha), function(a) {
        if (a) throw a;
    })
    }
      if(msg.content.startsWith(prefix + "setCaptchacmd")){
if(!msg.guild.member(msg.author).hasPermission('MANAGE_GUILD')) return message.channel.send(`**Sorry But You Don\'t Have Permission \`MANAGE_GUILD\`**`).then(m => m.delete(5000));
         let args3 = msg.content.split(' ').slice(1).join(' ');
        if(!args3) return msg.reply(`**You have to write your activation command.**`).then(m => m.delete(5000));
 
        Captcha[msg.guild.id].cmd = args3
  msg.reply(`**The activation command for has been changed \`${args3}\` **`).then(m => m.delete(5000));
            fs.writeFile("./Captcha.json", JSON.stringify(Captcha), function(a) {
        if (a) throw a;
    })
      }
});
 
        client.on("message",async message => {
        if(!message.channel.guild) return;
        if(!Captcha[message.guild.id]) Captcha[message.guild.id] = {
        role: "Nothing",
        room: "Nothing",
        cmd: "Captcha"
        }
        if(message.content.startsWith(prefix + Captcha[message.guild.id].cmd || "Captcha")){
        if(Captcha[message.guild.id].role === 'Nothing') return message.reply(`**The activation level is not selected \`${prefix}setCaptcharole\`**`).then(m => m.delete(5000));
        if(Captcha[message.guild.id].room === 'Nothing') return message.reply(`**You have not set your room activate \`${prefix}setCaptcharoom\`**`).then(m => m.delete(5000));
        if (message.guild.member(message.author).roles.find(x => x.name === `${Captcha[message.guild.id].role}`)) return message.channel.send(`**${message.author}, You already have the rank**`).then(m => m.delete(5000));
        if(!message.channel.guild) return message.channel.send(`**This is only for servers**`).then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(`**Sorry But I Don\'t Have Permission \`MANAGE_GUILD\`**`).then(m => m.delete(5000));
        if(message.channel.name !== `${Captcha[message.guild.id].room}`) return message.reply(`**You are not in the right room please go to room \`${Captcha[message.guild.id].room}\`**`).then(m => m.delete(5000));
        const canvas = Canvas.createCanvas(108 , 40);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/608278049091223552/617791172810899456/hmmm.png");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);  
        var one = Math.floor(Math.random() * 9) + 1;
        var two = Math.floor(Math.random() * 9) + 1;
        var three = Math.floor(Math.random() * 9) + 1;
        var four = Math.floor(Math.random() * 9) + 1;
        var number = `${one}${two}${three}${four}`;
        ctx.font = '20px Arial Bold';
        ctx.fontSize = '20px';
        ctx.fillStyle = "#ffffff";
        ctx.fillText(number, canvas.width / 2.4, canvas.height / 1.7);
        const attachment = new Discord.Attachment(canvas.toBuffer());
        message.channel.send(attachment).then(m => {
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 60000}).then(c => {
        if(c.first().content !== number) {
        m.delete();
        }else if(c.first().content === number) {
        m.delete();
        message.member.addRole(message.guild.roles.find("name", Captcha[message.guild.id].role));    
        message.channel.send(`**${message.author.username}, You have been activated successfully.*`).then(m => m.delete(1000));
        }
        })
        });
        }
        });

client.on("message", message => {
    if(message.content.startsWith("captcha")) {
      let num = Math.floor((Math.random() * 4783) + 10);
    
      message.channel.send(`Please type the following number: **${num}**`).then(m => {
        message.channel.awaitMessages(res => res.content == `${num}`, {
          max: 1,
          time: 60000,
          errors: ['time'],
        }).then(collected => {
          message.delete();
          m.delete();
          message.member.addRole(message.guild.roles.find(c => c.name == "Member"));
        }).catch(() => {
          m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
});
})
}
})

client.on('message',async rebel => {
      if(rebel.author.bot) return;
  if (afk[rebel.author.id]) {
    delete afk[rebel.author.id];
    if (rebel.member.nickname === null) {
      msg.channel.send("**Welcome , <@"+rebel.author.id+"> I am trying to remove the afk from you.**");     } else {
      rebel.member.setNickname(rebel.member.nickname.replace(/(\[AFK\])/,''));
      rebel.channel.send("**Welcome , <@"+rebel.author.id+"> The afk was removed from you because you come back.**"); 
    }
    fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});
} else {
    if (rebel.content.startsWith(prefix + 'afk ')||rebel.content === prefix + 'afk') {
      rebel.member.setNickname("[AFK] " + rebel.member.displayName);
      let args1 = rebel.content.split(' ').slice(1);
      if (args1.length === 0) {
        afk[rebel.author.id] = {"reason": true}; 
        rebel.reply("** I put you in a afk position **")
      } else {
        afk[rebel.author.id] = {"reason": args1.join(" ")}; // with reason
        rebel.reply("**I added you to your afk because** "+ args1.join(" ") + ".")
      }
      fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});   
  }
}
         var mentionned = rebel.mentions.users.first();
if(rebel.mentions.users.size > 0) return ;
if (afk[rebel.mentions.users.first().id]) {
if (afk[rebel.mentions.users.first().id].reason === true) {
rebel.channel.send(`**<@!${mentionned.id}> Afk** `);
}else{
rebel.channel.send(`**<@!${mentionned.username}> is Afk , Afk reason \n ${afk[rebel.mentions.users.first().id].reason}**`);
}
} 
});

client.on('message', message => {
 if(message.content.split(' ')[0] == prefix + 'dc') { 
 if (!message.channel.guild) return;
 message.guild.channels.forEach(m => {
 m.delete();
 message.reply("`All channels successfully deleted!`")
 });
 }
 if(message.content.split(' ')[0] == prefix + 'dr') { // delete all roles
 if (!message.channel.guild) return;
 message.guild.roles.forEach(m => {
 m.delete();
 });
 message.reply("`All ranks successfully deleted!`")
 }
 });

client.on('message', message => {
    if (message.content === "!cr") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Our Bot,", color: "#47596F", permissions: [] })
                     message.guild.createRole({ name: "The Two,", color: "#47596F", permissions: [] })
                     message.guild.createRole({ name: "Devs", color: "#B70000", permissions: [] })
                     message.guild.createRole({ name: "Managers", color: "#B70000", permissions: [] })
                     message.guild.createRole({ name: "Helpers", color: "#080FF1", permissions: [] })
                     message.guild.createRole({ name: "Staffs", color: "#080FF1", permissions: [] })
                     message.guild.createRole({ name: "Mods", color: "#AB7003", permissions: [] })
	             message.guild.createRole({ name: "Support Team", color: "#ffffff", permissions: [] })
	             message.guild.createRole({ name: "Muted", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Mod", color: "#CECE03", permissions: [] })
	             message.guild.createRole({ name: "منضمين الفعاليات", color: "#936171", permissions: [] })
                     message.guild.createRole({ name: "َActive 5", color: "#206617", permissions: [] })
                     message.guild.createRole({ name: "Active 4", color: "#2AA41A", permissions: [] })
	             message.guild.createRole({ name: "Active 3", color: "#936171", permissions: [] })
	             message.guild.createRole({ name: "Active 2", color: "#1a56d6", permissions: [] })
	             message.guild.createRole({ name: "Active 1", color: "#afcaa5", permissions: [] })
	             message.guild.createRole({ name: "FreeFire", color: "#907cb9", permissions: [] })
                     message.guild.createRole({ name: "Bots", color: "#E400B4", permissions: [] })
                     message.guild.createRole({ name: "Role", color: "#753467", permissions: [] })
	             message.guild.createRole({ name: "Role", color: "#5B00E6", permissions: [] })
	             message.guild.createRole({ name: "Role", color: "#452872", permissions: [] })
	             message.guild.createRole({ name: "Role", color: "#060F4B", permissions: [] })
	             message.guild.createRole({ name: "Role", color: "#2C1305", permissions: [] })
	    
            
	    


message.channel.sendMessage('**Please wait while making the ranks!.**')
}
});

client.on('message', message => {
    if(message.content == '!allservers') {
             if(!message.author.id === '436918120184021012') return;
    var gimg;//Toxic Codes
    var gname;//Toxic Codes
    var gmemb;//Toxic Codes
    var gbots;//Toxic Codes
    var groles;//Toxic Codes
    var servers = client.guilds;
    servers.forEach((g)=>{//Toxic Codes
    gname = g.name;//Toxic Codes
    gimg = g.iconURL;//Toxic Codes
    gmemb = g.members.size;//Toxic Codes
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});//Toxic Codes
    let serv = new Discord.RichEmbed()//Toxic Codes
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server bots',gbots)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
            
            `);//Toxic Codes
          message.channel.sendEmbed(serv);
    }) //Toxic Codes
    }//Toxic Codes
    }); //Toxic Codes

client.on('message', message => { // Toxic Codes
    if (!message.content.startsWith(prefix)) return; // Toxic Codes
  if(!message.channel.guild) return message.reply('** This command only for servers **') // Toxic Codes
    let command = message.content.split(" ")[0]; // Toxic Codes
    command = command.slice(prefix.length); // Toxic Codes
    if (command === "kill"){ // Toxic Codes

   var sabotage = message.mentions.users.first();
   if(sabotage == message.author)return message.reply(`**Suicide is not good!**`);// Toxic Codes
    if(sabotage === client.user) return message.reply(`**You want to kill me?**`);
  if (sabotage < 1) {
    message.delete();
    return message.channel.sendMessage('Put something to kill, like mention user, or use an emoji.');// Toxic Codes
  }
  if (!sabotage) return message.channel.send(`Please Mention A Member to Kill ⚠`)// Toxic Codes
  message.channel.send("▄︻̷̿┻̿═━一 ${sabotage")// Toxic Codes
  .then(msg =>{
  msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} 3⃣`);// Toxic Codes
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} 2⃣`);// Toxic Codes
  }, 1000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} 1⃣`);// Toxic Codes
  }, 2000);// Toxic Codes
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 💥`);// Toxic Codes
  }, 3000);// Toxic Codes
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 🔥`);// Toxic Codes
  }, 4000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 💀`);// Toxic Codes
  }, 5000);
  msg.delete(6000)
  message.delete()// Toxic Codes
  })
  message.channel.send("**The crime was successfully concealed 🕳 !**").then(msg => msg.delete(10000));// Toxic Codes
    }
});// Toxic Codes

client.on('message', message => {
    var prefix = "!"
     let command = message.content.split(" ")[0];
   command = command.slice(prefix.length);
 
   let args = message.content.split(" ").slice(1);
 
 
 if(command == "paint") {
     var Canvas = require('canvas')
   , Image = new Canvas.Image
   , canvas = new Canvas(450, 170)
   , ctx = canvas.getContext('2d');
   ctx.font = '30px Impact';
   let args = message.content.split(" ").slice(1);
   
 Image.src = canvas.toBuffer();
 
     console.log(Image);
 ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
 ctx.fillText(args.join("  "),110, 70);
 
 
 ctx.beginPath();
 ctx.lineTo(50, 102);
 ctx.stroke();
 
 message.channel.sendFile(canvas.toBuffer());
 }
 
 });

client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'vip {
        let guild = message.mentions.members.first();
                          let ZmA = new Discord.RichEmbed()
                  .setColor('3fcf24')
                  .setDescription('**__✅ I added the rank__**')
        message.member.addRole(message.guild.roles.find('name', 'VIP'));
                    message.channel.send({embed:ZmA});
    }
}); //Toxic Codes
	      
client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "!";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("RANDOM")
                    .addField(`${message.author.username}`, `You have invited **${nul}** person.`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .addField(`${message.author.username}`, `You have not invited anyone to this server.`)
 
                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invitec')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **You have sent all the invitation links you have created in your **")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}
 
});

client.on('message', async message => {
  if(message.author.bot) return;
  let prefix = '!';

  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if(!message.content.toLowerCase().startsWith(prefix)) return;

  if(command == 'rc' ) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`You don't have permission to do that! ❌`);
    message.channel.send("Scanning..").then(async m => {
      await message.guild.roles.forEach(role => {
        if(/^\d+$/gi.test(role.name)) {
          role.delete();
        }
      });
      m.edit(`All colors were removed.`)
    });
  }
});

client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setLeave")) {
             
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
 
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
   
    message.channel.send(':pencil: **| Please type your message now... :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg.edit(':scroll: **| Type the name of the room now... :pencil2: **').then(msg => {
     
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit('✅ **| Prepared successfully...  **').then(msg => {
       
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      let embed = new Discord.RichEmbed()
                      .setTitle('**Done The Leave Msg Code Has Been Setup**')
                      .addField('Message:', `${thisMessage}`)
                      .addField('Channel:', `${boi}`)
                      .setThumbnail(message.author.avatarURL)
                      .setFooter(`${client.user.username}`)
                     message.channel.sendEmbed(embed)
    welcome[message.guild.id] = {
leavechannel: boi,
leavemsg: thisMessage,
onoff: 'On',
leave: 'On'
    }
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
  })
   }
            )
        })
    })
})
    })
}})
 
 
      client.on("guildMemberRemove", member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'On',
          leave: 'Off'
        }
       
        if(welcome[member.guild.id].onoff === 'Off') return;
                if(welcome[member.guild.id].leave === 'Off') return;
    let welcomer = member.guild.channels.find('name', `${welcome[member.guild.id].leavechannel}`)
    if(!welcomer) return;
     welcomer.send(`${member} ${welcome[member.guild.id].leavemsg}`);
      })

client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'rainbow')) {//to create the rainbow role
      let role = message.guild.roles.find('name', 'دماء.')
    if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
  //start of create role
  if(!role){
    rainbow =  message.guild.createRole({
   name: "MrBloods.",//the role will create name
   color: "#000000",//the default color
   permissions:[]//the permissions
 //end of create role
})
 
}
message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
}})
 
client.on('ready', () => {//new ready event
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'MrBloods.');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 5000);//the rainbow time
})

client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose: Welcome to the server! :rose: 
  :crown: Member name: ${member}:crown:  
  You are the member number: ${member.guild.memberCount} `) 
  }).catch(console.error)
  })

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**Thank you for adding the bot to your server.**`)
        guild.owner.send(embed)
  });

client.on('message', message => {
         if(message.content === prefix + "closeroom") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__You dont have permsission!__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__Chat has been closed!__ ✅ **")
                });
                  }
      if(message.content === prefix + "openroom") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__You dont have permsission!__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__Chat has been opened!__✅**")
                });
      }
         
});

client.on("message", msg => {
    var prefix = '!'//البركفس
    if(msg.content.startsWith(prefix + 'myserver')){
      let embed = new Discord.RichEmbed()
      .setThumbnail(msg.guild.iconURL)
      .setColor("RANDOM")
      .addField("Year📆",msg.guild.createdAt.getFullYear())
      .addField("Hour📆", msg.guild.createdAt.getHours())
      .addField("Day📆", msg.guild.createdAt.getDay())
      .addField("Month📆", msg.guild.createdAt.getMonth())
      .addField("Minutes📆", msg.guild.createdAt.getMinutes())
      .addField("Seconds📆", msg.guild.createdAt.getSeconds())
      .addField("Full📆", msg.guild.createdAt.toLocaleString())
      .setTimestamp()
      msg.channel.send(embed);
    }
  });

client.on('message', message => {
            if (message.content === 'ق1') {
              message.channel.sendFile("./5.png");
            }
         });





         client.on('message', message => {
            if (message.content === 'back') {
              message.channel.sendFile("./back.png");
            }
         });
         
         
         
         
         
         
         
         
         
                 client.on('message', message => {
            if (message.content === 'welcome') {
              message.channel.sendFile("./wlc.png");
            }
         });

client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "rl")) {
    if(!args) return message.reply('Type the rank name');
    if(!role) return message.reply('This rank does not exist');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- Rank name',role.name,true)
    .addField('- Rank id',role.id,true)
    .addField('- Rank created',role.createdAt.toLocaleString(),true)
    .addField('- Rank color',role.hexColor,true)
    .addField('- Number of members with the same rank',role.members.size,true)
    .addField('- Center rank between all ranks',role.position - message.guild.roles.size,true)
    .addField('- Rank properties',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});

client.on('message', msg => {
  if(msg.content === '!invite')
  msg.reply('https://discordapp.com/api/0oauth2/authorize?client_id=616260595041304590&permissions=8&scope=bot Link to invite the bot :new_moon_with_face:')
});

 client.on("guildMemberAdd", member => {
  let welcomer = member.guild.channels.find("name","welcome")
        if(!welcomer) return;
        if(welcomer) {
           moment.locale('ar-ly');
           var h = member.user;
          let norelden = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(h.avatarURL)
          .setAuthor(h.username,h.avatarURL)
          .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
           .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true) 
           .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
       welcomer.send({embed:norelden});          
                 
   
        }
        });
		

const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
  client.guilds.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const welcome = member.guild.channels.find(channel => channel.name === "welcome");
    welcome.send(` ||${member.user.tag}|| invited by ||${inviter.tag}|| invites =  ||${invite.uses}|| `)
  });
}); 

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.author.channel == "dm") return;
    var prefix = "$"; //البريفكس
    if(message.content == prefix+"verify1"){
        if(!message.author.channel == "618106977201160194") return; //ايدي الروم التفعيل

                let log = message.guild.channels.find('name', 'verify_log'); //روم لوق لو واحد فعل نفسه تجيك معلومات انو الشخص فعل نفسه ومعلومات عنه
        //ازا تريد تضيف ارقام او احرف  مافي مشكلة ضيف
        var r1 = ["4444", "4734", "9753", "7532", "7423", "5832", "8866", "1122", "1199", "1188", "1177", "1238", "1532",
        "9877", "5555", "9238", "9374", "9988", "6611", "9877", "4341", "8422", "7434", "8853", "9997", "9999", "5385",
    "Ad82", "a824j", "wak4", "8sdb", "88sd", "8a8dw", "8adj", "adw82" , "ad823", "9933", "8sj2", "wad82"];

        var r3 = Math.floor(Math.random()*r1.length);
        var verify = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Checking..')
        .setThumbnail(message.author.avatarURL)
        .setDescription(`**Type This Numebr:**` + '``' + `n${r1[r3]}`+'``')
        .setFooter(`${message.author.username}#${message.author.discriminator}`);
        message.channel.send(verify)
        var verifed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('**Verifed**')
        .setThumbnail(message.author.avatarURL)
        .setDescription('```Done You have been Verifed```')
        .setFooter(`${message.author.username}#${message.author.discriminator}`);
        var verifedlog = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('**User has been Verifed**')
        .setThumbnail(message.author.avatarURL)
        .setDescription('```'+`User: ${message.author.username}#${message.author.discriminator}nUser ID: ${message.author.id}nUser Joined Discord At: ${moment(message.author.createdAt).format('D/MM/YYYY h:mm a')}nUser JoinedAt: ${moment(message.author.joinedAt).format('D/MM/YYYY h:mm a')}`+'```')
        .setTimestamp()
        .setFooter(`Verifed On`);
        var checknum = message.channel.awaitMessages(msg => msg.content == r1[r3], 
            {
                maxMatches: 1,
                time: 10000,
                errors: ['time']
            })

            checknum.catch(() =>{
                checknum.delete()
                message.delete()
                msg.delete()
                message.channel.send('**You are not activated. Please try again**')
            })

            checknum.then(w=> {
                message.guild.member(message.author).addRole(message.guild.roles.find("name", "Member")); //رتبة الي تجيه
                message.author.send(verifed)
                log.send(verifedlog)
                })
    }
});

client.on("message", message => {
    if(message.content.startsWith("verify2")) { // الامر
      let number = Math.floor((Math.random() * 4793) + 17); // تعريف الرقم بيكون عشوائي math.random + math.floor عشان مايكون فيه فواصل
    var Canvas = require('canvas') // تعريف الكانفاس لازم تشيله اذا كنت معرفه قبل
  , Image = new Canvas.Image // صنع صورة جديدة
  , canvas = Canvas.createCanvas(89, 50) // قياسات الصورة
  , ctx = canvas.getContext('2d');
  ctx.font = '25px Impact'; // الخط
  let args = message.content.split(" ").slice(1); // تعريف ال args
 
Image.src = canvas.toBuffer();
 
    console.log(Image);
ctx.fillText(num,17, 35); // احداثيات الرقم
 
 
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();
      message.reply('**Write the number shown in the image**')
      let filter = m => m.author.id === message.author.id; // تعريف الفلتر
      message.channel.sendFile(canvas.toBuffer()).then(m => { //يرسل الصورة
        message.channel.awaitMessages(res => res.content == `${number}` && filter, { //  محتوى الرسالة الي لازم يكتبها + لازم يكتبها بس الكاتب اذا كتب الرقم شخص ثاني مايزبط ونلاحظ ذا من خلال تعريف الفلتر
          max: 1,
          time: 60000,
          errors: ['time'],
        }).then(collected => { // اذا كتب الرقم صح
          message.reply('**You have been activated**') // يرد على العضو
          message.delete(); // يحذف الرسالة
          m.delete();
          message.member.addRole(message.guild.roles.find(c => c.name == "Member")); // الرتبة الي تبي البوت يعطيها للعضو
          message.member.removeRole(message.guild.roles.find(c => c.name == "Verified?")); // (الرتبة الي تبي البوت يشيلها من العضو (يمديك تحذف ذا السطر
          // السطر الي فوق يمديك تشيله اذا كنت تبي  البوت مايشيل منه اي رتبة بس يعطيه رتبة
        }).catch(() => {
          m.edit(`You took to long to type the number.nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
});
})
}
})

 client.on('message',message =>{
    var prefix = "!";
    if(message.content.startsWith(prefix + 'topinvite')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://2.top4top.net/p_1342q1tg91.jpg")
           message.channel.send({ embed: embed });
   
  });
   
    }
  }); 

client.on("message", message => {
  if (message.channel.type === "dm") {  

      message.channel.startTyping();  
      setTimeout(() => {  
        message.channel.stopTyping();  
      }, Math.random() * (1 - 3) + 1 * 1000);
   
  }  
});

client.on('message',async message => { // تعريف ال message
    let alias = message.content.split(" ")[0].substring(prefix.length); // تعريف alias
    let args = message.content.split(" "); // أستخدام الأرجس
    let devs = ["436918120184021012"]; // هنا تحط ايدي الديف الي مسموح لهم بـ زياده الكريدتس
    let mention = message.mentions.users.first() || message.author // تعريف المنشن
    if(alias === "setcredits") { // تعريف الكوماند
    let args = message.content.split(" "); //أستخدام الأرجس مره ثانيه
    if(!devs.includes(message.author.id)) return; // اذا واحد من الديف كتب الرسالة ولكن كانت فاضيه
    if(!args[1] || isNaN(args[1])) return message.reply("**Please Sir, Can you Type A Credits?**") // يرد عليه ويقله اكتب الكريدتس
    if(!credits[mention.id]) return; // هنا لو منشن الشخص
    credits[mention.id].credits += (+args[1]); // يزيد له  العدد
    fs.writeFileSync("./credits.json", JSON.stringify(credits));  // هنا يسجل بـ الجسون 
    console.log(credits[mention.id]) // هنا يكتب بلكاونسل بأنه زاد كريدتس للشخص الي منشنه او لنفسه
    message.reply(`**Done Sir!, I Have been Adedd Money For you!  : \`${args[1]}\`**`); // هنا يرد عليه بأنه زاد و العدد
    }
}); 

client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    var prefix = "!";

    let Addxp = Math.floor(Math.random() * 6) + 8;

    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }

    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level + 1;
    let nextLvL = xp[message.author.id].level * 1000; //كل كم اكس بي لحتا يرتفع لفله انصحكم تخلونه فوق ال الف
    xp[message.author.id].xp = curxp + Addxp;
    if(nextLvL <= xp[message.author.id].xp){
        xp[message.author.id].level = xp[message.author.id].level + 1;
        
        let lvlup = new Discord.RichEmbed()
        .setTitle('Level Up!')
        .setColor('RANDOM')
        .setDescription(`New Level: `+curlvl)
        .setTimestamp()
        .setFooter(message.author.username+'#'+message.author.discriminator);
        message.channel.send(lvlup)
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if (err) console.log(err)
    });


});
client.on('message', message =>{
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    var prefix = "!";

    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nextlvlxp = curlvl * 200;
    let difference = nextlvlxp - curxp

    if(message.content == prefix+"profile"){

        if(!xp[message.author.id]) {
            xp[message.author.id] = {
                xp: 0,
                level: 1,
            }
        }
        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
            if(err) console.log(err)
        });
        var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor('RANDOM')
        .setTitle('Your Profile.')
        .addField('XP: ', curxp, true)
        .addField('Level: ', curlvl, true)
        .setFooter(` ${difference} xp till level up `, message.author.displayAvatarURL);
        message.channel.send(embed);

    }
});

 client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' !help','دماء Bot','Bot by دماء',' !invite to invite me ',' I am in 12 Server',' FreeFire'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/دماء`);
    }, ms);
console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> TestBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
});

client.on('message', message => {
  if (message.author.bot) return;

  let args = message.content.split(" ");
  
  let command = args[0];
  
  let messagecount = args[1];
  
    if(command == prefix + "clear") {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
		message.channel.send("You need this permission`MANAGE_MESSAGES` ")
	} else if (!messagecount) {
		message.channel.send("**List the number of messages to delete**")
	}else {
		message.channel.bulkDelete(messagecount);
        message.channel.send("**Message `" + messagecount + "` Has been deleted **").then(mes => 
		mes.delete(3000)
		);    
	 }
   }
  // By Alpha Codes - AboKhalil 26/7/2019
}); 

client.on('message', message => {
var prefix = "!";//البرفكس 
if(message.channel.type === "dm") return;
if(message.author.bot) return;
   if(!rWlc[message.guild.id]) rWlc[message.guild.id] = {
    role: "member"
  }
const channel = rWlc[message.guild.id].role
  if (message.content.startsWith(prefix + "autorole")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newrole = message.content.split(' ').slice(1).join(" ")
    if(!newrole) return message.reply(`**${prefix}autorole <role name>**`)
    rWlc[message.guild.id].role = newrole
    message.channel.send(`**${message.guild.name}'s role has been changed to ${newrole}**`);
  }
fs.writeFile("./AutoRole.json", JSON.stringify(rWlc), function(e){
    if (e) throw e;
})
});
client.on("guildMemberAdd", member => {
      if(!rWlc[member.guild.id]) rWlc[member.guild.id] = {
    role: "Verified?"
  }
    const sRole = rWlc[member.guild.id].role
    let Rrole = member.guild.roles.find('name', sRole);
  member.addRole(Rrole);
 
  
      
      }); 

client.on("message", (message) => {
if (message.content.startsWith("!صوت")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
message.channel.sendMessage('**تـم إنـشاء روم صوتي**')
   
}
});
 
 
client.on("message", (message) => {
if (message.content.startsWith("!كـتاب")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('**تـم إنـشاء روم كـتابـي**')
 
}
});

client.login(process.env.BOT_TOKEN);// دماء bot
