module.exports = function buildTranslateRemoveDarftedContractByIdResponse
()
    {
        return function translateRemoveDarftedContractByIdResponse
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
                        throw new Error('translateRemoveDarftedContractByIdResponse must have response');
                    }
                
                return response;
            }
    }