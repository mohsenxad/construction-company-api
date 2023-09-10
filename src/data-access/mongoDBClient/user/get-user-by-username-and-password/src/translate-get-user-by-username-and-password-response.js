module.exports = function buildTranslateGetUserByUsernameAndPasswordResponse
()
    {
        return function translateGetUserByUsernameAndPasswordResponse
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
                        throw new Error('transalteGetCustomerByNationalCodeResponse must have response');
                    }
                
                return response;
            }
    }