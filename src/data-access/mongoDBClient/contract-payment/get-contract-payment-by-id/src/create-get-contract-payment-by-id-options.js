module.exports = function buildCreateGetContractPaymentByIdOptions
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
                throw new Error('buildCreateGetContractPaymentByIdOptions must have ObjectId.');
            }
            
        return function createGetContractPaymentByIdOptions
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
                        throw new Error('createGetContractPaymentByIdOptions must have contractPaymentId.');
                    }

                const contractPaymentObjectId = new ObjectId(
                    contractPaymentId
                );

                const filter = {
                    "_id": contractPaymentObjectId
                };

                const options = {
                    filter: filter
                }
                
                return options;
            }
    }