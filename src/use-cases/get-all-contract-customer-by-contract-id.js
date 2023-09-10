module.exports = function buildGetAllContractCustomerByContractId
(
    {
        getAllContractCustomerByContractDB
    }
)
    {
        if
        (
            !getAllContractCustomerByContractDB
        )
            {
                throw new Error('buildGetAllContractCustomerByContractId must have getAllContractCustomerByContractDB.');
            }
        return async function getAllContractCustomerByContractId
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
                        throw new Error('getAllContractCustomerByContractId must have contractId.');
                    }

                const getAllContractCustomerByContractDBResult = await getAllContractCustomerByContractDB(
                    {
                        contractId: contractId
                    }
                );

                return getAllContractCustomerByContractDBResult;
            }
    }