module.exports = function buildGetAllContractTemplate
(
    {
        getAllContractTemplateByCompanyDB
    }
)
    {
        if
        (
            !getAllContractTemplateByCompanyDB
        )
            {
                throw new Error('buildGetAllContractTemplate must have getAllContractTemplateByCompanyDB.');
            }
        return async function getAllContractTemplate
        (
            {
                companyId
            }
        )
            {
                if
                (
                    !companyId
                )
                    {
                        throw new Error('getAllContractTemplate must have companyId.');
                    }

                
                const getAllContractTemplateByCompanyDBREsult = await getAllContractTemplateByCompanyDB(
                    {
                        companyId: companyId
                    }
                );

                return getAllContractTemplateByCompanyDBREsult;
            }
    }