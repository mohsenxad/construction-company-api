module.exports = function buildCreateAddContractCustomerOptions
()
    {
        return function createAddContractCustomerOptions
        (
            {
                contractCustomer
            }
        )
            {
                if
                (
                    !contractCustomer
                )
                    {
                        throw new Error('createAddContractCustomerOptions must have contractCustomer');
                    }
                const document = contractCustomer.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }