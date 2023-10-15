const buildAddProjectItemGallery = require('./src/add-project-item-gallery');

module.exports =  function
(
    {
        addProjectItemGalleryDB,
        makeProjectItemGallery
    }
)
    {

        const addProjectItemGallery = buildAddProjectItemGallery(
            {
                addProjectItemGalleryDB: addProjectItemGalleryDB,
                makeProjectItemGallery: makeProjectItemGallery 
            }
        )

        const services = Object.freeze(
            {
                addProjectItemGallery
            }
        ); 

        return services;
    }