module.exports = function buildTranslateGetContractByIdResponse
()
    {
        return async function translateGetContractByIdResponse
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
                        throw new Error('translateGetContractByIdResponse must have response');
                    }
                
                    return response;

                    // const result = await response.toArray();

                    // if
                    // (
                    //     result &&
                    //     result[0]
                    // )
                    //     {
                    //         return result[0];
                    //     }
                    // else
                    //     {
                    //         return [];
                    //     }
            }
    }