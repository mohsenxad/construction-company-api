module.exports = function buildTranslateGetAllContractReviewByContractResponse
()
    {
        return async function translateGetAllContractReviewByContractResponse
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
                        throw new Error('translateGetAllContractReviewByContractResponse must have response.');
                    }

                return await response.toArray();
            }
    }