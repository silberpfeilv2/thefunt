const chalk = require('chalk');
const moment = require('moment');
const snekfetch = require('snekfetch');

module.exports = (client,message) => {

var oynuyorkısmı = [
`🌟 Çok yakında her şey değişecek! 🌟`
];

setInterval(function() {
    var random = Math.floor(Math.random()*(oynuyorkısmı.length-0+1)+0);
    client.user.setActivity(oynuyorkısmı[random], { type: 'WATCHING' });
    }, 2 * 3000);
};

