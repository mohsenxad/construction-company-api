module.exports = function buildTranslateGetUserCompanyAccessByIdAndUserIdResponse
()
    {
        return async function translateGetUserCompanyAccessByIdAndUserIdResponse
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
                        throw new Error('translateGetUserCompanyAccessByIdAndUserIdResponse must have response.');
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