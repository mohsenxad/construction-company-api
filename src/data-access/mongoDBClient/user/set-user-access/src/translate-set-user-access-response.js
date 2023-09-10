module.exports = function buildTranslateSetUserAccessResponse
()
    {
        return function translateSetUserAccessResponse
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
                        throw new Error('translateSetUserAccessResponse must have response');
                    }
                
                return response;
            }
    }