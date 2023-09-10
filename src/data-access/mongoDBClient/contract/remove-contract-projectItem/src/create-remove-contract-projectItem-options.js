module.exports = function buildCreateRemoveContractProjectItemOptions
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
                throw new Error('buildCreateRemoveContractProjectItemOptions must have ObjectId.');
            }
        
        return function createRemoveContractProjectItemOptions
        (
            {
                contractId
            }
        )
            {

                if
                (
                    !contractId
                )
                    {
                        throw new Error('createRemoveContractProjectItemOptions must have contractId.');
                    }

                const contractObjectId = new ObjectId(
                    contractId
                );

                const filter = {
                    "_id": contractObjectId
                };

                const update = {
                    $unset: {
                        projectItem:"",
                        project:"",
                    }
                }
                
                const options = {
                    filter:filter,
                    update: update,
                }
                
                return options;
            }
    }