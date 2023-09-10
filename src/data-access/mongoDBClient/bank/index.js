module.exports = function
(
    {
        getDb
    }
)
    {

        const { getAllBank } = require('./get-all-bank')
        (
            {
                getDb: getDb
            } 
        );

        const services = Object.freeze(
            {
                getAllBank
            }
        );

        return services;

    }