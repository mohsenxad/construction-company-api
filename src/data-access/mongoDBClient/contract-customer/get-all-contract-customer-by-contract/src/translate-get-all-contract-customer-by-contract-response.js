module.exports = function buildTranslateGetAllContractCustomerByContractResponse
()
    {
        return function translateGetAllContractCustomerByContractResponse
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
                        throw new Error('translateGetAllContractCustomerByContractResponse must have response.');
                    }

                return response.toArray();
            }
    }