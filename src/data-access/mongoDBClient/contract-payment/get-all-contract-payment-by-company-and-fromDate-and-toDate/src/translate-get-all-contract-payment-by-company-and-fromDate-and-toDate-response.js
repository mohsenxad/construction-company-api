module.exports = function buildTranslateGetAllContractPaymentByCompanyAndFromDateAndToDateResponse
()
    {
        return async function translateGetAllContractPaymentByCompanyAndFromDateAndToDateResponse
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
                        throw new Error('translateGetAllContractPaymentByCompanyAndFromDateAndToDateResponse must have response.');
                    }

                return response.toArray();
            }
    }