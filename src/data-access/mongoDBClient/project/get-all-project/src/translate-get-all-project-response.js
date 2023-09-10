module.exports = function buildTranslateGetAllProjectResponse
()
    {
        return function translateGetAllProjectResponse
        (
            {
                response
            }
        )
            {
                return response.toArray();
            }
    }