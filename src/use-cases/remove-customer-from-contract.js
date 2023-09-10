module.exports = function buildRemoveCustomerFromContract
(
    {
        removeContractCustomerDB
    }
)
    {
        if
        (
            !removeContractCustomerDB
        )
            {
                throw new Error('buildRemoveCustomerFromContract must have removeContractCustomerDB.');
            }

        return async function removeCustomerFromContract
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
                        throw new Error('removeCustomerFromContract must have contractCustomerId.');
                    }

                const removeContractCustomerDBResult = await removeContractCustomerDB(
                    {
                        contractCustomerId: contractCustomerId
                    }
                );

                return removeContractCustomerDBResult;
            }
    }