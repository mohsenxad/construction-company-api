module.exports = function buildTranslateEditContractBaseInfoResponse
()
    {
        return function translateEditContractBaseInfoResponse
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
                        throw new Error('translateEditContractBaseInfoResponse must have response');
                    }
                
                return response;
            }
    }