module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        const { addProject } = require('./add-project')
        (
            {
                getDb: getDb
            } 
        );

        const { getAllProject } = require('./get-all-project')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );

        const { getProjectById } = require('./get-project-by-id')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        )

        const services = Object.freeze(
            {
                addProject,
                getAllProject,
                getProjectById
            }
        );

        return services;

    }