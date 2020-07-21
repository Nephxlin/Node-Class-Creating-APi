const os = require('os')

setInterval( () => {

    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() /1024 / 1024)
    const percets = parseInt((mem/total)*100)

    const stats = {
        free:  `${mem}MB`,
        total: `${total}MB`,
        usage: `${percets}%`
    }
    console.clear()
    console.log("==== PC STATS ====")
    console.table(stats)

}, 1000)


