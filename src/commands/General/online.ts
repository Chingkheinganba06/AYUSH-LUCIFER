import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'Online',
            description: "Displays current omnline ",
            category: 'general',
            usage: `${client.config.prefix}online)`,
            aliases: ["here","online"],
            baseXp: 10
        })
    }

         
   run = async(M: SimplifiedMessage): Promise<void> => {
     const selected = joined.trim();
		if (!option.includes(selected))
			return void (await M.reply(
				`${
				M.chat, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, m,
				undefined,
				undefined,
				M.groupMetadata?.participants.map((user) => user.jid)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			).catch((reason: any) =>
				M.reply(`✖️ An error occurred, Reason: ${reason}`)
			));
	};
}
