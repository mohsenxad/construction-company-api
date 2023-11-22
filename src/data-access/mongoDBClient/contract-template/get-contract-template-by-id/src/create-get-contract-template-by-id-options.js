module.exports = function buildCreateGetContractTemplateByIdOptions
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
                throw new Error('buildCreateGetContractTemplateByIdOptions must have ObjectId.');
            }
        return function createGetContractTemplateByIdOptions
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
                        throw new Error('createGetContractTemplateByIdOptions must have contractTemplateId.');
                    }

                const contractTemplateObjectId = new ObjectId(
                    contractTemplateId
                );

                const filter = {
                    "_id": contractTemplateObjectId
                };

                const options = {
                    filter: filter
                }
                
                return options;
            }
    }