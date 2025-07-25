module.exports = {
    PORT: process.env.PORT || 4000,
    IP: process.env.IP || null,
    DB: 'to-do', // Cloudant database name
    CLOUDANT_APIKEY: process.env.CLOUDANT_APIKEY || 'YOUR_CLOUDANT_APIKEY',
    CLOUDANT_URL: process.env.CLOUDANT_URL || 'YOUR_CLOUDANT_URL',
};
