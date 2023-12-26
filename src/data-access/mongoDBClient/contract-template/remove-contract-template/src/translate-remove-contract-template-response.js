module.exports = function buildTransalteRemoveContractTemplateResponse
()
    {
        return function transalteRemoveContractTemplateResponse
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
                        throw new Error('transalteRemoveContractTemplateResponse must have response');
                    }
                
                return response;
            }
    }