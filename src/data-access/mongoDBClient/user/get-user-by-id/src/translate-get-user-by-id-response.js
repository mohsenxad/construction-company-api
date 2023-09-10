module.exports = function buildTranslateGetUserByIdResponse
()
    {
        return function translateGetUserByIdResponse
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
                        throw new Error('translateGetUserByIdResponse must have response');
                    }
                
                return response;
            }
    }