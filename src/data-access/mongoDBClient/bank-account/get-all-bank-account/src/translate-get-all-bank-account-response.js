module.exports = function buildTranslateGetAllBankAccountResponse
()
    {
        return function translateGetAllBankAccountResponse
        (
            {
                response
            }
        )
            {
                return response.toArray();
            }
    }