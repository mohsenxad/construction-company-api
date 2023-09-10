module.exports = function buildTranslateRemoveContractPaymentResponse
()
    {
        return function translateRemoveContractPaymentResponse
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
                        throw new Error('translateRemoveContractPaymentResponse must have response');
                    }
                
                return response;
            }
    }