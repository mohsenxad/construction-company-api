module.exports = function buildTranslateAddUserCompanyAccessResponse
()
    {
        return function translateAddUserCompanyAccessResponse
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
                        throw new Error('translateAddUserCompanyAccessResponse must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in translateAddUserCompanyAccessResponse must have insertedId');
                    }

                return response.insertedId;
            }
    }