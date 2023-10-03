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
                            'from': 'userCompanyAccess', 
                            'localField': 'userCompanyAccess', 
                            'foreignField': '_id', 
                            'let':
                                {
                                    contract_review_id: "$_id",
                                },
                            'pipeline':
                                [
                                  {
                                    '$lookup':
                                        {
                                            'from': "users",
                                            'localField': "user",
                                            'foreignField': "_id",
                                            'as':'user'
                                        }
                                  },
                                  {
                                    '$unwind':
                                        {
                                            'path': "$user",
                                            'preserveNullAndEmptyArrays': true,
                                        },
                                  },
                                ],
                            'as': 'userCompanyAccess'
                        }
                    },
                    {
                        '$unwind': {
                            'path': '$userCompanyAccess'
                        }
                    }
                ];


                const options = {
                    pipeline: pipeline
                }

                return options;

            }
    }