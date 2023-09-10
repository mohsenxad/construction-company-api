module.exports = function buildTranslateGetAllContractReviewByUserResponse
()
    {
        return async function translateGetAllContractReviewByUserResponse
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
                        throw new Error('translateGetAllContractReviewByUserResponse must have response.');
                    }

                return await response.toArray();
            }
    }