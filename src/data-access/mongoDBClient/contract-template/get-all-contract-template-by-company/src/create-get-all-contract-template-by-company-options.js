module.exports = function buildCreateGetAllContractTemplateByCompanyOptions
(
    {
        ObjectId
    }
)
    {
        if
        (
            !ObjectId
        )
            {
                throw new Error('buildCreateGetAllContractTemplateByCompanyOptions must have ObjectId.');
            }

        return function createGetAllContractTemplateByCompanyOptions
        (
            {
                companyId
            }
        )
            {

                const companyObjectId = new ObjectId(
                    companyId
                );


                const filter = {
                    company: companyObjectId
                }


                const options = {
                    filter: filter
                }

                return options;
            }
    }