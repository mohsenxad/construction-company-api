module.exports = function buildCreateUpdateContractTemplateOptions
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
                throw new Error('buildCreateUpdateContractTemplateOptions must have ObjectId.');
            }
            
        return function createUpdateContractTemplateOptions
        (
            {
                contractTemplateId,
                contractTemplate
            }
        )
            {
                const contractTemplateObjectId = new ObjectId(
                    contractTemplateId
                );


                const filter = {
                    "_id": contractTemplateObjectId
                };

                const update = {
                    $set: contractTemplate.toBson()
                }
                
                const options = {
                    filter:filter,
                    update: update,
                }
                
                return options;
            }
    }