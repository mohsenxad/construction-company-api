module.exports = function buildTranslateGetAllContractByProjectResponse
()
    {
        return function translateGetAllContractByProjectResponse
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
                        throw new Error('translateGetAllContractByProjectResponse must have response');
                    }
                return response.toArray();
            }
    }