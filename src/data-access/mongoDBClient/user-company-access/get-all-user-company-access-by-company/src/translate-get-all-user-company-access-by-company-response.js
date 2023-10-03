module.exports = function buildTranslateGetAllUserCompanyAccessByCompanyReponse
()
    {
        return function translateGetAllUserCompanyAccessByCompanyReponse
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
                        throw new Error('translateGetAllUserCompanyAccessByCompanyReponse must have response.');
                    }

                return response.toArray();
            }
    }