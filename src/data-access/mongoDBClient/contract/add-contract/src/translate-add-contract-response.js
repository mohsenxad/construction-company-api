module.exports = function buildTranslateAddContractResponse
()
    {
        return function translateAddContractResponse
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
                        throw new Error('translateAddContractResponse must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in translateAddContractResponse must have insertedId');
                    }

                
                return response.insertedId;
            }
    }