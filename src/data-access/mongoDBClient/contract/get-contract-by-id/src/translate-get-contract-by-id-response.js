module.exports = function buildTranslateGetContractByIdResponse
()
    {
        return async function translateGetContractByIdResponse
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
                        throw new Error('translateGetContractByIdResponse must have response');
                    }
                
                    return response;

            }
    }