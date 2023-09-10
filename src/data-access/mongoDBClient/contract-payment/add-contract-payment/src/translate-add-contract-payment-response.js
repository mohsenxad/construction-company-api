module.exports = function buildTranslateAddContractPaymentResponse
()
    {
        return function translateAddContractPaymentResponse
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
                        throw new Error('translateAddContractPaymentResponse must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in translateAddContractPaymentResponse must have insertedId');
                    }

                return response.insertedId;
            }
    }