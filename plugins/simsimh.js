/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79


Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');

if (Config.WORKTYPE == 'private') {

    QueenSew.newcmdaddtosew({pattern: 'bot ?(.*)', fromMe: true, dontAdCommandList: true, desc: Lang.BOT_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
	const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🇱🇰 ' + Config.BOTNAME + '* 😈\n\n ' + Lang.BOT +' ```' + json.messages[0].response + '```' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
	}
    });
}
else if (Config.WORKTYPE == 'public') {
         if (Config.SIMSI == 'false') {
    QueenSew.newcmdaddtosew({pattern: 'bot ?(.*)', fromMe: false, dontAdCommandList: false, desc: Lang.BOT_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
	const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🇱🇰 ' + Config.BOTNAME + '* 😈\n\n ' + Lang.BOT +' ```' + json.messages[0].response + '```' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
	}
    });
    }
 else if (Config.SIMSI == 'true') {
    QueenSew.newcmdaddtosew({on: 'text', fromMe: false, dontAdCommandList: true, delownsewcmd: false, onlyPm:true}, async (message, match) => {
    if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
	const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid,' ```' + json.messages[0].response + '```' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
	}
    });
    }
    
    QueenSew.newcmdaddtosew({ pattern: 'simi ?(.*)', desc: 'Simsimi චැට් බොට්ව ඔබගේ ප්‍රයිවට් චැට් හි චැට් බොට් ලෙස ක්‍රියා කරවීමට', fromMe: true, usage: '.simi on / off' }, (async (message, match) => {
    if (match[1] == 'on') {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['SIM_SIMI']: 'true'
                } 
            });
            await message.client.sendMessage(message.jid, '*simsimi private chat bot turned on*', MessageType.text)
    }
    else if (match[1] == 'off') {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['SIM_SIMI']: 'false'
                } 
            });
            await message.client.sendMessage(message.jid, '*simsimi private chat bot turned off*', MessageType.text)
    }
}));
}
