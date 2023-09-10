module.exports = function buildTranslateAddProjectResponse
()
    {
        return function translateAddProjectResponse
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
                        throw new Error('translateAddProjectResponse must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in translateAddProjectResponse must have insertedId');
                    }

                return response.insertedId;

            }
    }