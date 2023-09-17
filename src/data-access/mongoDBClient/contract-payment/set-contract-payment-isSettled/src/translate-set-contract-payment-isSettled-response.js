module.exports = function buildTransalteSetContractPaymentIsSettledResponse
()
    {
        return function transalteSetContractPaymentIsSettledResponse
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
                        throw new Error('transalteSetContractPaymentIsSettledResponse must have response');
                    }
                
                return response;
            }
    }