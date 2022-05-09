require('dotenv').config();
const { Telegraf, Markup  } = require('telegraf');
const express = require('express')
const expressApp = express()
const { textoRedes, textoGuia, textoBienvenida, botonPantalla1, botonPantalla2, urlDocument } = require('./cambios');
const { rss, trigger } = require('./helper');
const port = process.env.PORT || 3000


expressApp.get('/', (req, res) => {
  res.send('Hello World!')
})
expressApp.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.action('guia', (ctx) => {

    ctx.reply(`${textoGuia} 
    
${urlDocument}`)
    // enviar documento 
})

bot.action('redes', (ctx) => {
    ctx.replyWithMarkdown(textoRedes, rss)
})

bot.hears('📕 Guia gratuita', (ctx) => {

    ctx.reply(`${textoGuia}

${urlDocument}`)
    // enviar documento 
})

bot.command('bienvenida', (ctx) => {
    ctx.replyWithMarkdown(textoBienvenida, Markup.keyboard([
        [botonPantalla1],
        [botonPantalla2],
    ]))
})
    
bot.hears('📱  Redes sociales', (ctx) => {
    ctx.replyWithMarkdown(textoRedes, rss)
})

// // escribir mensaje de bienvenida cuando alguien ingresa al grupo
bot.use(async (ctx) => {
    // botones markup
    // Detectar mensajes restringidos
    const mensajesBan = await ctx.getChat().then(chat => chat.permissions.can_send_messages)

    // if () {
    //     ctx.reply('Los mensajes estan inhabilitados en este grupo')
    // }
    if (ctx.update?.message?.new_chat_member) {
        
        
        if (mensajesBan) {
            ctx.replyWithMarkdown(textoBienvenida, Markup.keyboard([
                [botonPantalla1],
                [botonPantalla2],
            ]))
        }

        if (mensajesBan == false) {
            ctx.reply(textoBienvenida, trigger)
        }

    }
})
bot.hears(/./, (ctx) => ctx.reply('Hello'))
bot.startPolling()
