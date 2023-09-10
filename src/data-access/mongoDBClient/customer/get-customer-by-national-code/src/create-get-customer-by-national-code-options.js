module.exports = function buildCreateGetCustomerByNationalCodeOptions
()
    {
        return function createGetCustomerByNationalCodeOptions
        (
            {
                natinalCodeNumber
            }
        )
            {
                if
                (
                    !natinalCodeNumber
                )
                    {
                        throw new Error('createGetCustomerByNationalCodeOptions must have natinalCodeNumber.');
                    }

                const filter = {
                    "natinalCodeNumber": natinalCodeNumber
                };

                const options = {
                    filter: filter
                }
                
                return options;
            }
    }