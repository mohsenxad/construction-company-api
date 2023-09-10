module.exports = function buildTranslateGetAllContractPaymentByContractResponse
()
    {
        return function translateGetAllContractPaymentByContractResponse
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
                        throw new Error('translateGetAllContractPaymentByContractResponse must have response.');
                    }

                return response.toArray();
            }
    }