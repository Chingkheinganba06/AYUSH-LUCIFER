/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "animeboy",
			description: "sends pics of lumine",
			category: "weeb",
                        aliases: ["ab","at"],
			usage: `${client.config.prefix}lumine`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const images = [
			"https://wallpapercave.com/w/wp6139612.jpg",
          "https://wallpapercave.com/w/wp8879925.jpg",
          "https://wallpapercave.com/w/wp6139586.jpg",
          "https://wallpapercave.com/wp/wp6139586.jpg",
          "https://wallpapercave.com/wp/wp10436946.jpg",
          "https://wallpapercave.com/wp/wp6640451.jpg",
          "https://wallpapercave.com/wp/wp8879964.jpg",
          "https://wallpapercave.com/wp/wp7220516.jpg",
		];
		const selected = images[Math.floor(Math.random() * images.length)];
		const text = `💖(uWu)💖\n\n`;
			this.client.sendMessage( M.from, { url: selected }, MessageType.image, {
				caption: `${text}`,
			}
		);
	};
}
