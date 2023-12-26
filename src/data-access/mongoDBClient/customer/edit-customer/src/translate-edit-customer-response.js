module.exports = function buildTranslateEditCustomerResponse
()
    {
        return function translateEditCustomerResponse
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
                        throw new Error('translateEditCustomerResponse must have response');
                    }
                
                return response;
            }
    }