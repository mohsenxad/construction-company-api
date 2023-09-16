module.exports = function buildTranslateGetAllContractTemplateByCompanyResponse
()
    {
        return function translateGetAllContractTemplateByCompanyResponse
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
                        throw new Error('translateGetAllContractTemplateByCompanyResponse must have response');
                    }
                return response.toArray();
            }
    }