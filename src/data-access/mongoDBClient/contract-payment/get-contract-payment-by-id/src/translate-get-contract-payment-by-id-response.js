module.exports = function buildTranslateGetContractPaymentByIdResponse
()
    {
        return function translateGetContractPaymentByIdResponse
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
                        throw new Error('translateGetContractPaymentByIdResponse must have response');
                    }
                
                    return response;
            }
    }