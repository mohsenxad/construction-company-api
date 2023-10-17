module.exports = function buildRemoveContractPayablePriceAndDiscount
(
    {
        removeContractPayablePriceAndDiscountDB
    }
)
    {
        if
        (
            !removeContractPayablePriceAndDiscountDB
        )
            {
                throw new Error('buildRemoveContractPayablePriceAndDiscount must have removeContractPayablePriceAndDiscountDB.');
            }

        return async function removeContractPayablePriceAndDiscount
        (
            {
                removeContractPayablePriceAndDiscountInfo
            }
        )
            {

                if
                (
                    !removeContractPayablePriceAndDiscountInfo
                )
                    {
                        throw new Error('removeContractPayablePriceAndDiscount must have removeContractPayablePriceAndDiscountInfo.');
                    }
                else if
                (
                    !removeContractPayablePriceAndDiscountInfo.contractId 
                )
                    {
                        throw new Error('removeContractPayablePriceAndDiscount removeContractPayablePriceAndDiscountInfo must have contractId.');
                    }

                const contractId = removeContractPayablePriceAndDiscountInfo.contractId;

                const removeContractPayablePriceAndDiscountDBResult = await removeContractPayablePriceAndDiscountDB(
                    {
                        contractId: contractId
                    }
                );

                return removeContractPayablePriceAndDiscountDBResult;
            }
    }