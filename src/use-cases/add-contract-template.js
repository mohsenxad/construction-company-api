module.exports = function buildAddContractTemplate
(
    {
        makeContractTemplate,
        addContractTemplateDB
    }
)
    {
        if
        (
            !makeContractTemplate
        )
            {
                throw new Error('buildAddContractTemplate must have makeContractTemplate.');
            }

        if
        (
            !addContractTemplateDB
        )
            {
                throw new Error('buildAddContractTemplate must have addContractTemplateDB.');
            }
        return async function addContractTemplate
        (
            {
                contractTemplateInfo
            }
        )
            {
                if
                (
                    !contractTemplateInfo
                )
                    {
                        throw new Error('addContractTemplate must have contractTemplateInfo.');
                    }
                else if
                (
                    !contractTemplateInfo.title
                )
                    {
                        throw new Error('addContractTemplate contractTemplateInfo must have title.');
                    }
                else if
                (
                    !contractTemplateInfo.htmlContent
                )
                    {
                        throw new Error('addContractTemplate contractTemplateInfo must have htmlContent.');
                    }
                else if
                (
                    !contractTemplateInfo.companyId
                )
                    {
                        throw new Error('addContractTemplate contractTemplateInfo must have companyId.');
                    }
                    

                const contractTemplate = await makeContractTemplate(
                    contractTemplateInfo
                );

                const addContractTemplateDBResult = await addContractTemplateDB(
                    {
                        contractTemplate: contractTemplate
                    }
                );

                return addContractTemplateDBResult;
                
            }
    }