module.exports = function buildCreateGetAllContractReviewByContractOptions
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
                throw new Error('buildCreateGetAllContractReviewByContractOptions must have ObjectId.');
            }
        return function createGetAllContractReviewByContractOptions
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
                        throw new Error('createGetAllContractReviewByContractOptions must have contractId.');
                    }

                const contractObjectId = new ObjectId(
                    contractId
                );
                
                
                const pipeline = [
                    {
                        '$match': {
                          'contract': contractObjectId
                        }
                    },
                    {
                        '$lookup': {
                            'from': 'users', 
                            'localField': 'user', 
                            'foreignField': '_id', 
                            'as': 'user'
                        }
                    },
                    {
                        '$unwind': {
                            'path': '$user'
                        }
                    }
                ];


                const options = {
                    pipeline: pipeline
                }

                return options;

            }
    }