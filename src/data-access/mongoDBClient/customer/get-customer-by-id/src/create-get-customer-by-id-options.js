module.exports = function buildCreateGetCustomerByIdOptions
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
                throw new Error('buildCreateGetCustomerByIdOptions must have ObjectId.');
            }

        return function createGetCustomerByIdOptions
        (
            {
                customerId
            }
        )
            {
                if
                (
                    !customerId
                )
                    {
                        throw new Error('createGetCustomerByIdOptions must have customerId.');
                    }

                const customerObjectId = new ObjectId(
                    customerId
                );

                const filter = {
                    "_id": customerObjectId
                };

                const options = {
                    filter: filter
                }
                
                return options;
            }
    }