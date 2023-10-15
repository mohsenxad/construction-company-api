module.exports = function buildTranslateAddProjectItemGalleryResponse
()
    {
        return function translateAddProjectItemGalleryResponse
        (
            {
                response
            }
        )
            {
                if
                (
                    !response
                )
                    {
                        throw new Error('translateAddProjectItemGalleryResponse must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in translateAddProjectItemGalleryResponse must have insertedId');
                    }

                return response.insertedId;

            }
    }