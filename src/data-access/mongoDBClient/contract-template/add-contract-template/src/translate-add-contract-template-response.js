module.exports = function buildTranslateAddContractTemplateResponse
()
    {
        return function translateAddContractTemplateResponse
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
                        throw new Error('translateAddContractTemplateResponse must have response');
                    }
                
                return response;
            }
    }