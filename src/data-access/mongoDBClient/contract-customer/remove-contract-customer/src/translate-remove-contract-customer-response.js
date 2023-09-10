module.exports = function buildTranslateRemoveContractCustomerResponse
()
    {
        return function translateRemoveContractCustomerResponse
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
                        throw new Error('translateRemoveContractCustomerResponse must have response');
                    }
                // else if
                // (
                //     response &&
                //     !response.insertedId
                // )
                //     {
                //         throw new Error('response in translateRemoveContractCustomerResponse must have insertedId');
                //     }

                
                return response;
            }
    }