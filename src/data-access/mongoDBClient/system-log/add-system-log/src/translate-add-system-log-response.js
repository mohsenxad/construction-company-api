module.exports = function buildTranslateAddSystemLogResponse
()
    {
        return function translateAddSystemLogResponse
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
                        throw new Error('translateAddSystemLogResponse must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in translateAddSystemLogResponse must have insertedId');
                    }

                return response.insertedId;

            }
    }