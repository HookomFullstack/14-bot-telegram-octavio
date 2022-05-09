const { botonTexto1, botonTexto2, TextoPantalla1, urlPantalla1, TextoPantalla2, urlPantalla2, TextoPantalla3, urlPantalla3 } = require("./cambios")

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

module.exports = {
    trigger,
    rss
}