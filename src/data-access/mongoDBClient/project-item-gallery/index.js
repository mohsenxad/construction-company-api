module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        const { addProjectItemGallery } = require('./add-project-item-gallery')
        (
            {
                getDb: getDb
            } 
        );

        const services = Object.freeze(
            {
                addProjectItemGallery
            }
        );

        return services;

    }