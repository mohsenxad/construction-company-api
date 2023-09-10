module.exports = function buildTranslateAssignCustomerResponse
()
    {
        return function translateAssignCustomerResponse
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
                        throw new Error('translateAssignCustomerResponse must have response');
                    }
                // else if
                // (
                //     response &&
                //     !response.insertedId
                // )
                //     {
                //         throw new Error('response in translateAddContractResponse must have insertedId');
                //     }

                
                return response;
            }
    }