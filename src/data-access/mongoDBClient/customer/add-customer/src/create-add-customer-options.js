module.exports = function buildCreateAddCustomerOptions
()
    {
        return function createAddCustomerOptions
        (
            {
                customer
            }
        )
            {

                if
                (
                    !customer
                )
                    {
                        throw new Error('createAddCustomerOptions must have customer');
                    }

                const document = customer.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }