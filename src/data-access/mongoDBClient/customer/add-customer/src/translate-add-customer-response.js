module.exports = function buildTranslateAddCustomerResponse
()
    {
        return function translateAddCustomerResponse
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
                        throw new Error('translateAddCustomerResponse must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in translateAddCustomerResponse must have insertedId');
                    }

                return response.insertedId;
            }
    }