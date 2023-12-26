module.exports = function buildCreateRemoveContractTemplateOptions
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
                throw new Error('buildCreateRemoveContractTemplateOptions must have ObjectId.');
            }

        return function createRemoveContractTemplateOptions
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
                        throw new Error('createRemoveContractTemplateOptions must have contractTemplateId.');
                    }

                const contractTemplateObjectId = new ObjectId(
                    contractTemplateId
                );

                const filter = {
                    "_id": contractTemplateObjectId
                };

                const options  = {
                    filter: filter
                }
                
                return options;
            }
    }