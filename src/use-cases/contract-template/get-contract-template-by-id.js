module.exports = function buildGetContractTemplateById
(
    {
        getContractTemplateByIdDB
    }
)
    {
        if
        (
            !getContractTemplateByIdDB
        )
            {
                throw new Error('buildGetContractTemplateById must have getContractTemplateByIdDB.');
            }
        return async function getContractTemplateById
        (
            {
                contractTemplateId
            }
        )
            {
                if
                (
                    !contractTemplateId
                )
                    {
                        throw new Error('getContractTemplateById must have contractTemplateId.');
                    }

                const getContractTemplateByIdDBResult = await getContractTemplateByIdDB(
                    {
                        contractTemplateId: contractTemplateId
                    }
                );

                return getContractTemplateByIdDBResult;
            }
    }