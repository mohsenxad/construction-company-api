module.exports = function buildCreateGetProjectItemByContractIdOptions
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
                throw new Error('buildCreateGetProjectItemByContractIdOptions must have ObjectId.');
            }
        return function createGetProjectItemByContractIdOptions
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
                        throw new Error('createGetProjectItemByContractIdOptions must have contractId.');
                    }

                const contractObjectId = new ObjectId(
                    contractId
                );

                const filter = {};

                const pipeline = [
                    {
                        "$match": {
                            "_id":contractObjectId
                        },
                    },
                    {
                        "$lookup" :{
                            from: "projectItems",
                            localField : "projectItem",
                            foreignField: "_id",
                            as: "projectItem"
                        }
                    },
                    {
                        $unwind: '$projectItem'
                    },
                    {
                        $limit: 1 
                    }
                ];


                const options = {
                    pipeline: pipeline
                }

                return options;

            }
    }