module.exports = function buildCreateAssignCustomerOptions
()
    {
        return function createAssignCustomerOptions
        (
            {
                contractId,
                customerId
            }
        )
            {
                if
                (
                    !contractId
                )
                    {
                        throw new Error('createAssignCustomerOptions must have contractId');
                    }

                if
                (
                    !customerId
                )
                    {
                        throw new Error('createAssignCustomerOptions must have customerId');
                    }
            }
    }