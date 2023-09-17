module.exports = function buildTranslateGetAllContractPaymentByIsSettledReponse
()
    {
        return function translateGetAllContractPaymentByIsSettledReponse
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
                        throw new Error('translateGetAllContractPaymentByIsSettledReponse must have response.');
                    }

                return response.toArray();
            }
    }