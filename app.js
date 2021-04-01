const config = require("./config.js");
const request = require('request');
const { VK, Keyboard } = require('vk-io');

const quick = new VK({
      token: config.token,
      pollingGroupId: config.group_id,
      apiMode: "parallel",
      apiVersion: "5.130",
      apiLimit: 1,
      language: "ru"
});

quick.updates.startPolling()

quick.updates.on('message', async (context, next) => {
      console.log(context.text)
})
