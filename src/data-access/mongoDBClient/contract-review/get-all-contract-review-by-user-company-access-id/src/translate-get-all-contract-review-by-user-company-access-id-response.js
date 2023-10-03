module.exports = function buildTranslateGetAllContractReviewByUserCompanyAccessIdResponse
()
    {
        return async function translateGetAllContractReviewByUserCompanyAccessIdResponse
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
                        throw new Error('translateGetAllContractReviewByUserCompanyAccessIdResponse must have response.');
                    }

                return await response.toArray();
            }
    }