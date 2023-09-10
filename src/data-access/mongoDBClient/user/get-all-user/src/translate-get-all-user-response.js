module.exports = function buildTranslateGetAllUserResponse
()
    {
        return function translateGetAllUserResponse
        (
            {
                response
            }
        )
            {
                return response.toArray();
            }
    }