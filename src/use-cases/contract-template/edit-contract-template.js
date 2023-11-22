module.exports = function buildEditContractTemplate
(
    {
        makeContractTemplate,
        editContractTemplateDB
    }
)
    {
        if
        (
            !makeContractTemplate
        )
            {
                throw new Error('buildEditContractTemplate must have makeContractTemplate.');
            }

        if
        (
            !editContractTemplateDB
        )
            {
                throw new Error('buildEditContractTemplate must have editContractTemplateDB.');
            }

        return async function editContractTemplate
        (
            {
                contractTemplateId,
                updateContractTemplateInfo,
            }
        )
            {
                if
                (
                    !contractTemplateId
                )
                    {
                        throw new Error('editContractTemplate must have contractTemplateId.');
                    }

                if
                (
                    !updateContractTemplateInfo
                )
                    {
                        throw new Error('editContractTemplate must have updateContractTemplateInfo.');
                    }

                const contractTemplate = await makeContractTemplate(
                    updateContractTemplateInfo
                );

                const editContractTemplateDBResult = await editContractTemplateDB(
                    {
                        contractTemplateId: contractTemplateId,
                        contractTemplate: contractTemplate
                    }
                );

                return editContractTemplateDBResult;
            }
    }