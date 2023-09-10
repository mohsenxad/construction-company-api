module.exports = function buildCreateSetContractPayablePriceAndDiscountOptions
(
    {
        ObjectId
    }
)
    {
        if
        (
            !ObjectId
        )
            {
                throw new Error('buildCreateSetContractPayablePriceAndDiscountOptions must have ObjectId.');
            }

        return function createSetContractPayablePriceAndDiscountOptions
        (
            {
                contractId,
                payablePrice,
                discount,
            }
        )
            {
                if
                (
                    !contractId
                )
                    {
                        throw new Error('createSetContractPayablePriceAndDiscountOptions must have contractId.');
                    }

                if
                (
                    !payablePrice
                )
                    {
                        throw new Error('createSetContractPayablePriceAndDiscountOptions must have payablePrice.');
                    }

                if
                (
                    typeof discount !== "number"
                )
                    {
                        throw new Error('createSetContractPayablePriceAndDiscountOptions must have discount.');
                    }

                const contractObjectId = new ObjectId(
                    contractId
                );

                const filter = {
                    "_id": contractObjectId
                };

                const update = {
                    $set: {
                        payablePrice: payablePrice,
                        discount:discount,
                    }
                }
                
                const options = {
                    filter:filter,
                    update: update,
                }
                
                return options;

            }
    }