module.exports = function buildTranslateSetContractContentResponse
()
    {
        return function translateSetContractContentResponse
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
                        throw new Error('translateSetContractContentResponse must have response');
                    }
                
                return response;
            }
    }