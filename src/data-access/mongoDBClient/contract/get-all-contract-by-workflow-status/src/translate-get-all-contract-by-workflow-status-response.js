module.exports = function buildTranslateGetAllContractByWorkflowStatusResponse
()
    {
        return function translateGetAllContractByWorkflowStatusResponse
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
                        throw new Error('translateGetAllContractByWorkflowStatusResponse must have response');
                    }
                return response.toArray();
            }
    }