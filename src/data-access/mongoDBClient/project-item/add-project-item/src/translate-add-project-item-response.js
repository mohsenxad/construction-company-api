module.exports = function buildTranslateAddProjectItemResponse
()
    {
        return function translateAddProjectItemResponse
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
                        throw new Error('translateAddProjectItemResponse must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in translateAddProjectItemResponse must have insertedId');
                    }

                return response.insertedId;

            }
    }