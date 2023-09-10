module.exports = function buildTranslateRemoveContractProjectItemResponse
()
    {
        return function translateRemoveContractProjectItemResponse
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
                        throw new Error('translateRemoveContractProjectItemResponse must have response');
                    }
                
                return response;
            }
    }