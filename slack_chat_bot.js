var Botkit = require('botkit');

var controller = Botkit.slackbot();

var bot = controller.spawn({

  token: "<slack_bot_token>"

})

bot.startRTM(function(err,bot,payload) {

  if (err) {

    throw new Error('Could not connect to Slack');

  }

});

controller.hears(["Hello","Hi"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {

  bot.reply(message,'Hello, how are you today?');

});

