module.exports = function buildTranslateGetAllProjectTypeResponse
()
    {
        return function translateGetAllProjectTypeResponse
        (
            {
                response
            }
        )
            {
                return response.toArray();
            }
    }