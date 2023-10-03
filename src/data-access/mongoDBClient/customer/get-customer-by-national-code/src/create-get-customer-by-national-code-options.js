module.exports = function buildCreateGetCustomerByNationalCodeOptions
()
    {
        return function createGetCustomerByNationalCodeOptions
        (
            {
                nationalCodeNumber
            }
        )
            {
                if
                (
                    !nationalCodeNumber
                )
                    {
                        throw new Error('createGetCustomerByNationalCodeOptions must have nationalCodeNumber.');
                    }

                const filter = {
                    "nationalCodeNumber": nationalCodeNumber
                };

                const options = {
                    filter: filter
                }
                
                return options;
            }
    }