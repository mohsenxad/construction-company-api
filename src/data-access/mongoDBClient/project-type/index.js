module.exports = function
(
    {
        getDb
    }
)
    {

        const { getAllProjectType } = require('./get-all-project-type')
        (
            {
                getDb: getDb
            } 
        );

        const services = Object.freeze(
            {
                getAllProjectType
            }
        );

        return services;

    }