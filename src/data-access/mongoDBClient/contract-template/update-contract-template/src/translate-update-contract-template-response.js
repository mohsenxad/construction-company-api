module.exports = function buildTranslateUpdateContractTemplateResponse
()
    {
        return function translateUpdateContractTemplateResponse
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
                        throw new Error('translateUpdateContractTemplateResponse must have response');
                    }
                
                return response;
            }
    }