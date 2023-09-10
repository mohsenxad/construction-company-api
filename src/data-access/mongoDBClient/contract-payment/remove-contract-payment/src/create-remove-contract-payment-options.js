module.exports = function buildCreateRemoveContractPaymentOptions
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
                throw new Error('buildCreateRemoveContractPaymentOptions must have ObjectId.');
            }
        return function createRemoveContractPaymentOptions
        (
            {
                contractPaymentId
            }
        )
            {
                if
                (
                    !contractPaymentId
                )
                    {
                        throw new Error('createRemoveContractPaymentOptions must have contractPaymentId.');
                    }

                const contractPaymentObjectId = new ObjectId(
                    contractPaymentId
                );

                const filter = {
                    "_id": contractPaymentObjectId
                };

                const options  = {
                    filter: filter
                }
                
                return options;
            }
    }