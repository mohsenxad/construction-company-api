module.exports = function buildRemovePaymentFromContract
(
    {
        removeContractPaymentDB
    }
)
    {
        if
        (
            !removeContractPaymentDB
        )
            {
                throw new Error('buildRemovePaymentFromContract must have removeContractPaymentDB.');
            }

        return async function removePaymentFromContract
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
                        throw new Error('removePaymentFromContract must have contractPaymentId.');
                    }

                const removeContractPaymentDBResult = await removeContractPaymentDB(
                    {
                        contractPaymentId: contractPaymentId
                    }
                );

                return removeContractPaymentDBResult;
            }
    }