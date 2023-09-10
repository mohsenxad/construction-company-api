module.exports = function buildSetContractPayablePriceAndDiscount
(
    {
        setContractPayablePriceAndDiscountDB
    }
)
    {
        if
        (
            !setContractPayablePriceAndDiscountDB
        )
            {
                throw new Error('buildSetContractPayablePriceAndDiscount must have setContractPayablePriceAndDiscountDB.');
            }

        return async function setContractPayablePriceAndDiscount
        (
            {
                setPayablePriceInfo  
            }
        )
            {

                let contractId = setPayablePriceInfo.contractId;
                let discount = setPayablePriceInfo.discount;
                let payablePrice = setPayablePriceInfo.payablePrice;

                const setContractPayablePriceAndDiscountDBResult = await setContractPayablePriceAndDiscountDB(
                    {
                        contractId: contractId,
                        discount: discount,
                        payablePrice: payablePrice
                    }
                );

                return setContractPayablePriceAndDiscountDBResult;
            }
    }