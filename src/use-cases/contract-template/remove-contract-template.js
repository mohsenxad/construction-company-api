module.exports = function buildRemoveContractTemplate
(
    {
        removeContractTemplateDB
    }
)
    {
        if
        (
            !removeContractTemplateDB
        )
            {
                throw new Error('buildRemoveContractTemplate must have removeContractTemplateDB.');
            }

        return async function removeContractTemplate
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
                        throw new Error('removeContractTemplate must have contractTemplateId.');
                    }

                const removeContractTemplateDBResult = await removeContractTemplateDB(
                    {
                        contractTemplateId: contractTemplateId
                    }
                );

                return removeContractTemplateDBResult;

            }
    }