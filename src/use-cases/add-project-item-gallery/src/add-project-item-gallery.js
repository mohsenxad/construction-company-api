module.exports = function buildAddProjectItemGallery
(
    {
        addProjectItemGalleryDB,
        makeProjectItemGallery
    }
)
    {
        if
        (
            !addProjectItemGalleryDB
        )
            {
                throw new Error('buildAddProjectItemGallery must have addProjectItemGalleryDB.');
            }

        if
        (
            !makeProjectItemGallery
        )
            {
                throw new Error('buildAddProjectItemGallery must have makeProjectItemGallery.');
            }
            
        return async function addProjectItemGallery
        (
            {
                addProjectItemGalleryInfo
            }
        )
            {
                if
                (
                    !addProjectItemGalleryInfo
                )
                    {
                        throw new Error('addProjectItemGallery must have addProjectItemGalleryInfo.');
                    }

                const projectItemGallery = await makeProjectItemGallery(
                    addProjectItemGalleryInfo
                );

                const addProjectItemGalleryDBResult = await addProjectItemGalleryDB(
                    {
                        projectItemGallery:projectItemGallery
                    }
                );

                return addProjectItemGalleryDBResult;
                // copy file to storage
                // add item to DB

            }
    }