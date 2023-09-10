module.exports = function buildTranslateGetAllContractTypeResponse
()
    {
        return function translateGetAllContractTypeResponse
        (
            {
                response
            }
        )
            {
                return response.toArray();
            }
    }