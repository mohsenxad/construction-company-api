module.exports = function buildTranslateSetContractPayablePriceAndDiscountResponse
()
    {
        return function translateSetContractPayablePriceAndDiscountResponse
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
                        throw new Error('translateSetContractPayablePriceAndDiscountResponse must have response');
                    }
                
                return response;
            }
    }