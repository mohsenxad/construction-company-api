const buildTranslateAddProjectItemGalleryResponse = require('./src/translate-add-project-item-gallery-response');
const buildCreateAddProjectItemGalleryOptions = require('./src/create-add-project-item-gallery-options');
const buildAddProjectItemGallery = require('./src/add-project-item-gallery');

module.exports = function
(
    {
        getDb
    }
)
    {
        
        const translateAddProjectItemGalleryResponse = buildTranslateAddProjectItemGalleryResponse();

        const createAddProjectItemGalleryOptions = buildCreateAddProjectItemGalleryOptions();

        const addProjectItemGallery = buildAddProjectItemGallery(
            {
                getDb: getDb,
                createOptions: createAddProjectItemGalleryOptions,
                translateResponse: translateAddProjectItemGalleryResponse
            }
        );

        const servies = Object.freeze(
            {
                addProjectItemGallery
            }
        );

        return servies;
    }