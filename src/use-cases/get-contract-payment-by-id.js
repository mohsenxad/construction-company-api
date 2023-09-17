module.exports = function buildGetContractPaymentById
(
    {
        getContractPaymentByIdDB
    }
)
    {
        if
        (
            !getContractPaymentByIdDB
        )
            {
                throw new Error('buildGetContractPaymentById must have getContractPaymentByIdDB.');
            }
        return async function getContractPaymentById
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
                        throw new Error('getContractPaymentById must have contractPaymentId.');
                    }

                const getContractPaymentByIdDBResult = await getContractPaymentByIdDB(
                    {
                        contractPaymentId: contractPaymentId
                    }
                );

                return getContractPaymentByIdDBResult;

            }
    }