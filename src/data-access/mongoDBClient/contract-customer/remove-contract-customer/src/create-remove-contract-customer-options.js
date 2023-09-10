module.exports = function buildCreateRemoveContractCustomerOptions
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
                throw new Error('buildCreateRemoveContractCustomerOptions must have ObjectId.');
            }
        return function createRemoveContractCustomerOptions
        (
            {
                contractCustomerId
            }
        )
            {
                if
                (
                    !contractCustomerId
                )
                    {
                        throw new Error('createRemoveContractCustomerOptions must have contractCustomerId.');
                    }

                const contractCustomerObjectId = new ObjectId(
                    contractCustomerId
                );

                const filter = {
                    "_id": contractCustomerObjectId
                };

                const options  = {
                    filter: filter
                }
                
                return options;
            }
    }