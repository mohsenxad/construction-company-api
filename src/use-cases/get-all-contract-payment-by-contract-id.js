module.exports = function buildGetAllContractPaymentByContractId
(
    {
        getAllContractPaymentByContractDB
    }
)
    {
        if
        (
            !getAllContractPaymentByContractDB
        )
            {
                throw new Error('buildGetAllContractPaymentByContractId must have getAllContractPaymentByContractDB.');
            }
        return async function getAllContractPaymentByContractId
        (
            {
                contractId
            }
        )
            {
                if
                (
                    !contractId
                )
                    {
                        throw new Error('getAllContractPaymentByContractId must have contractId.');
                    }

                const getAllContractPaymentByContractDBResult = await getAllContractPaymentByContractDB(
                    {
                        contractId: contractId
                    }
                );

                return getAllContractPaymentByContractDBResult;
            }
    }