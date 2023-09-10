module.exports = function buildTranslateSetContractProjectAndProjectItemResponse
()
    {
        return function translateSetContractProjectAndProjectItemResponse
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
                        throw new Error('translateSetContractProjectAndProjectItemResponse must have response');
                    }
                
                return response;
            }
    }