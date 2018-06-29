import { RichEmbed, MessageEmbed } from "discord.js";
export declare var msgEmbedToRich: discordjsEmbedConverter.MsgToRich;
export default msgEmbedToRich;
export var messageEmbedToRich: discordjsEmbedConverter.MsgToRich;
export var richToMsgEmbed: discordjsEmbedConverter.RichToMsg;
export var richToMessageEmbed: discordjsEmbedConverter.RichToMsg;

declare namespace discordjsEmbedConverter {
  type RichToMsg = (richEmbed: RichEmbed) => MessageEmbed;
  type MsgToRich = {
    (msgEmbed: MessageEmbed): RichEmbed;
    messageEmbedToRich: MsgToRich;
    msgEmbedToRich: MsgToRich;
    richToMessageEmbed: RichToMsg;
    richToMsgEmbed: RichToMsg;
    version: number;
  }
}
