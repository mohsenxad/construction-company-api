module.exports = function buildCreateRemoveContractPayablePriceAndDiscountOptions
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
                throw new Error('buildCreateRemoveContractPayablePriceAndDiscountOptions must have ObjectId.');
            }

        return function createRemoveContractPayablePriceAndDiscountOptions
        (
            {
                contractId
            }
        )
            {
                if
                (
                    !contractId
                )
                    {
                        throw new Error('createRemoveContractPayablePriceAndDiscountOptions must have contractId.');
                    }

                const contractObjectId = new ObjectId(
                    contractId
                );

                const filter = {
                    "_id": contractObjectId
                };

                const update = {
                    $unset: {
                        payablePrice: "",
                        discount: "" 
                    }
                }
                
                const options = {
                    filter:filter,
                    update: update,
                }
                
                return options;

            }
    }