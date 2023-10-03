module.exports = function buildTranslateGetAllUserCompanyAccessByIsContractReviewerReponse
()
    {
        return function translateGetAllUserCompanyAccessByIsContractReviewerReponse
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
                        throw new Error('translateGetAllUserCompanyAccessByIsContractReviewerReponse must have response.');
                    }

                return response.toArray();
            }
    }