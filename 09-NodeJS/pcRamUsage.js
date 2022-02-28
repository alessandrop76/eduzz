const os = require('os');
const{platform, arch, totalmem, freemem} = os;

const tRam = parseInt(totalmem);
const fRam = parseInt(freemem);
const usage = fRam/tRam*100;

    const stats = {
    'Sistema Operacional': platform(),
    'Arquitetura': arch(),
    'Memoria RAM': `${parseInt(totalmem)} MB`,
    'Memoria Livre': `${parseInt(freemem)} MB`,
    'Memoria usada': `${usage.toFixed(2)} %`,
};

console.table(stats);

module.exports = stats;