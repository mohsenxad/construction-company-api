module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        const { addSystemLog } = require('./add-system-log')
        (
            {
                getDb: getDb
            } 
        );

        const services = Object.freeze(
            {
                addSystemLog
            }
        );

        return services;

    }