module.exports = function buildTranslateGetUserCompanyAccessByIdResponse
()
    {
        return async function translateGetUserCompanyAccessByIdResponse
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
                        throw new Error('translateGetUserCompanyAccessByIdResponse must have response.');
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