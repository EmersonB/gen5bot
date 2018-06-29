const botsettings = require("./botsettings.json");
const Discord = require("discord.js");
const express = require("express");
const msgEmbedToRich = require("discordjs-embed-converter");
var request = require('request');
var item_list = require("./itemlist.json")


const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", () => { //add async
  console.log("bot is ready: " + bot.user.username)
  // try{
  //   let link = await bot.generateInvite(["ADMINISTRATOR"]);
  //   console.log(link)
  // } catch(e){
  //   console.log(e.stack)
  // }
});

bot.on("message", message => {
  message.embeds.forEach((embed) => {
       // add this embed to the database, using embed.description, embed.fields, etc.
        // if there are no embeds, this code won't run.
        // console.log(embed)
    });
  if(message.author.bot){

    //console.log(message.embeds[0].url)
    //console.log(message.embeds[0].thumbnail.url)
    //console.log(message.embeds[0].fields[1].value)

    var size = message.embeds[0].fields[1].value;
    var url = message.embeds[0].url;
    var thumbnail = message.embeds[0].thumbnail.url;



    var uuid = guid()
    // var name = map_item(thumbnail)
    var JSONObj = {'size': size, 'url': url, 'thumbnail' : thumbnail, 'loc': '--', 'price': 100};
    request({
        url: "https://solecity.herokuapp.com/api/item/"+uuid.toString(),
        method: "POST",
        body: JSON.stringify(JSONObj),
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (error, response, body){
        console.log(response);
    });
  }
});

//functions
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

bot.login(botsettings.token);
// bot.login(process.env.BOT_TOKEN);
