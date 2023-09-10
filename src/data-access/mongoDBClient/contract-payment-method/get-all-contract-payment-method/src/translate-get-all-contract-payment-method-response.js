module.exports = function buildTranslateGetAllContractPaymentMethodResponse
()
    {
        return function translateGetAllContractPaymentMethodResponse
        (
            {
                response
            }
        )
            {
                return response.toArray();
            }
    }