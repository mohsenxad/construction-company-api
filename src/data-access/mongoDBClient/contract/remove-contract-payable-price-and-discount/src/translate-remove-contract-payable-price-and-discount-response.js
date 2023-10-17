module.exports = function buildTranslateRemoveContractPayablePriceAndDiscountResponse
()
    {
        return function translateRemoveContractPayablePriceAndDiscountResponse
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
                        throw new Error('translateRemoveContractPayablePriceAndDiscountResponse must have response');
                    }
                
                return response;
            }
    }