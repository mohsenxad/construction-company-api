module.exports = function buldTranslateGetAllUserCompanyAccessListByUserResponse
()
    {
        return function translateGetAllUserCompanyAccessListByUserResponse
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
                        throw new Error('translateGetAllUserCompanyAccessListByUserResponse must have response.');
                    }

                return response.toArray();
            }
    }