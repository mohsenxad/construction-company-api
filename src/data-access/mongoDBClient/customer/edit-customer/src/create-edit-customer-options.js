module.exports = function buildCreateEditCustomerOptions
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
                throw new Error('buildCreateEditCustomerOptions must have ObjectId.');
            }
        return function createEditCustomerOptions
        (
            {
                customerId,
                customer
            }
        )
            {
                if
                (
                    !customerId
                )
                    {
                        throw new Error('createEditCustomerOptions must have customerId.');
                    }

                if
                (
                    !customer
                )
                    {
                        throw new Error('createEditCustomerOptions must have customer.');
                    }

                const customerObjectId = new ObjectId(
                    customerId
                );

                const filter = {
                    "_id": customerObjectId
                };

                const update = {
                    $set: customer.toBson()
                }
                
                const options = {
                    filter:filter,
                    update: update,
                }
                
                return options;
            }
    }