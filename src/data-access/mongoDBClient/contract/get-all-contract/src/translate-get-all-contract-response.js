module.exports = function buildTranslateGetAllContractResponse
()
    {
        return function translateGetAllContractResponse
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
                        throw new Error('translateGetAllContractResponse must have response');
                    }
                return response.toArray();
            }
    }