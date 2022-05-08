const { Telegraf, Markup  } = require('telegraf');
const { botonTexto1, botonTexto2, urlPantalla1, urlPantalla2, urlPantalla3, TextoPantalla1, TextoPantalla2, TextoPantalla3, textoRedes, textoGuia, textoBienvenida, botonPantalla1, botonPantalla2, urlDocument } = require('./cambios');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_API);

const trigger = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: botonTexto1,
                    callback_data: 'redes'
                }
            ],
            [
                {
                    text: botonTexto2,
                    callback_data: 'guia'
                }
            ]
        ]
    }
} 
const rss = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: TextoPantalla1,
                    url: urlPantalla1
                },
                {
                    text: TextoPantalla2,
                    url: urlPantalla2
                },
                {
                    text: TextoPantalla3,
                    url: urlPantalla3
                },
            ]
        ]
    }
} 
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


bot.launch();