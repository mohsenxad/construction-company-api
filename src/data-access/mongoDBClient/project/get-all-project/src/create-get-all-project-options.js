module.exports = function buildCreateGetAllProjectOptions
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
                throw new Error('buildCreateGetAllProjectOptions must have ObjectId.');
            }

        return function createGetAllProjectOptions
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
                        '$lookup': {
                            'from': 'projectTypes', 
                            'localField': 'projectType', 
                            'foreignField': '_id', 
                            'as': 'projectType'
                        }
                      },
                    {
                        '$unwind': {
                            'path': '$projectType'
                        }
                    }
                ];


                const options = {
                    pipeline: pipeline
                }

                return options;
            }
    }