module.exports = function buildCreateGetAllPBankAccountOptions
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
                throw new Error('buildCreateGetAllPBankAccountOptions must have ObjectId.');
            }
        return function createGetAllPBankAccountOptions
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
                        throw new Error('createGetAllPBankAccountOptions must have companyId.');
                    }

                const companyObjectId = new ObjectId(
                    companyId
                );


                const pipeline = [
                    {
                        '$match': {
                          'company': companyObjectId
                        }
                    },
                    {
                        $unset: [
                            'registerDate',
                        ]
                    },
                    {
                        "$lookup" :{
                            from: "banks",
                            localField : "bank",
                            foreignField: "_id",
                            as: "bank"
                        }
                    },
                    {
                        "$unwind": '$bank'
                    }
                ];


                const options = {
                    pipeline: pipeline
                }

                return options;
            }
    }