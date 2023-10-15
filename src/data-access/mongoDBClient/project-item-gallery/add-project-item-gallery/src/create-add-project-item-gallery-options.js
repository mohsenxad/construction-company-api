module.exports = function buildCreateAddProjectItemGalleryOptions
()
    {
        return function createAddProjectItemGalleryOptions
        (
            {
                projectItemGallery
            }
        )
            {

                if
                (
                    !projectItemGallery
                )
                    {
                        throw new Error('createAddProjectItemGalleryOptions must have projectItemGallery');
                    }

                const document = projectItemGallery.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }