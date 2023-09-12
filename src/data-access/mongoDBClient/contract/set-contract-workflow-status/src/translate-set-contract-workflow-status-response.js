module.exports = function buildTranslateSetContractWorkflowStatusResponse
()
    {
        return function translateSetContractWorkflowStatusResponse
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
                        throw new Error('translateSetContractWorkflowStatusResponse must have response');
                    }
                
                return response;
            }
    }