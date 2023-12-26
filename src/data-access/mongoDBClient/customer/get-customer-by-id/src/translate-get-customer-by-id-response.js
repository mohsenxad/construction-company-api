module.exports = function buildTranslateGetCustomerByIdResponse
()
    {
        return function translateGetCustomerByIdResponse
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
                        throw new Error('translateGetCustomerByIdResponse must have response');
                    }
                
                return response;
            }
    }