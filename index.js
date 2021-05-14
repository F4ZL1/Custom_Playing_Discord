var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Bergabunglah Di Komunitas Kami",
assets : {
large_image : "image",
large_text : "Your Status" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "#INDOGHOST ROLEPLAY" , url : "https://discord.gg/CasW8qyEeu"},{label : "CAPITAL ROLEPLAY",url : "https://discord.gg/TXYarkzdB4"}]
}
})
})
client.login({ clientId : "APPLICATIONID" }).catch(console.error);
