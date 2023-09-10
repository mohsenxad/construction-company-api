module.exports = function buildTranslateAddBankAccountResponse
()
    {
        return function translateAddBankAccountResponse
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
                        throw new Error('translateAddBankAccountResponse must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in translateAddBankAccountResponse must have insertedId');
                    }

                
                return response.insertedId;
            }
    }