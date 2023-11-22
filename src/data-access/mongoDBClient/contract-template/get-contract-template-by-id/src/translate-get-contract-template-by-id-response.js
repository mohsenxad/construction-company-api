module.exports = function buildTranslateGetContractTemplateByIdResponse
()
    {
        return function translateGetContractTemplateByIdResponse
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
                        throw new Error('translateGetContractTemplateByIdResponse must have response');
                    }
                
                return response;
            }
    }