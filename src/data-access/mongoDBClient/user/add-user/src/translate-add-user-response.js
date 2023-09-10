module.exports = function buildTranslateAddUserResponse
()
    {
        return function translateAddUserResponse
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
                        throw new Error('translateAddUserResponse must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in translateAddUserResponse must have insertedId');
                    }

                return response.insertedId;
            }
    }