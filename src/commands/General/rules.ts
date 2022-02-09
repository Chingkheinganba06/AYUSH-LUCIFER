import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "rules",
			description: "FOLLOE THESE RULES IF YOU DONT WANNA BE BAN OR REMOVED ",
			category: "general",
			usage: `${client.config.prefix}rules`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://media.tenor.com/videos/8d1f36c507f4d7b6093d39fc1c873ee2/mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption🌟:`_*----🎀[Rule]🎀----*_\n\n❌*DONT ASK FOR THE SCRIPT*🚫\n*>>>* use !support to get the Official group link in your dm\n*--->*  If you want to chat with Star you can use *!tada/chat (your text)* both are different ai chat bots\n*--->* If you want to add Star Chan in your group the contact the owner by *!owner/!mods* \n*--->* Dont use wrong command, use the command given in the *help list* \n*--->* Dont spam the bot with commands if the bot is not responding, its means the bot maybe offline or facing internet issue. \n*--->* Dont Dm the bot \n\n*IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BAN SOON* 🚫 `,
			}
		);
	};
}
