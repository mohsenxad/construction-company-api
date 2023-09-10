module.exports = function buildTranslateGetContractReviewByIdResponse
()
    {
        return async function translateGetContractReviewByIdResponse
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
                        throw new Error('translateGetContractReviewByIdResponse must have response');
                    }
                
                const result = await response.toArray();

                if
                (
                    result &&
                    result[0]
                )
                    {
                        return result[0];
                    }
                else
                    {
                        return [];
                    }

            }
    }