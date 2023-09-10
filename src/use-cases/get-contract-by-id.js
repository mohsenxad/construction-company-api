module.exports = function buildGetContractById
(
    {
        getContractByIdDB
    }
)
    {
        if
        (
            !getContractByIdDB
        )
            {
                throw new Error('buildGetContractById must have getContractByIdDB.');
            }

        return async function getContractById
        (
            {
                contractId
            }
        )
            {

                const getContractByIdDBResult = await getContractByIdDB(
                    {
                        contractId: contractId
                    }
                );

                return getContractByIdDBResult;

            }
    }