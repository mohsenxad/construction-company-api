module.exports = function buildTranslateGetAllCompanyResponse
()
    {
        return function translateGetAllCompanyResponse
        (
            {
                response
            }
        )
            {
                return response.toArray();
            }
    }