module.exports = function buildTranslateGetAllContractByProjectAndStartDateAndEndDateResponse
()
    {
        return function translateGetAllContractByProjectAndStartDateAndEndDateResponse
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
                        throw new Error('translateGetAllContractByProjectAndStartDateAndEndDateResponse must have response');
                    }
                return response.toArray();
            }
    }