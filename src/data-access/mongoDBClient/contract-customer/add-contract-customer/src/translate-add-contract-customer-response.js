module.exports = function buildTranslateAddContractCustomerResponse
()
    {
        return function translateAddContractCustomerResponse
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
                        throw new Error('addContractCustomer must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in addContractCustomer must have insertedId');
                    }

                
                return response.insertedId;
            }
    }