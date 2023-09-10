module.exports = function buildTranslateGetAllBankResponse
()
    {
        return function translateGetAllBankResponse
        (
            {
                response
            }
        )
            {
                return response.toArray();
            }
    }