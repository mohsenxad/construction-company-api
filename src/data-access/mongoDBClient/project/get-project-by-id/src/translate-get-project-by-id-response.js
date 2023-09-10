module.exports = function buildTranslateGetProjectByIdResponse
()
    {
        return function translateGetProjectByIdResponse
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
                        throw new Error('translateGetProjectByIdResponse must have response');
                    }
                
                return response;
            }
    }