module.exports = function buildCreateGetAllUserCompanyAccessByCompanyOptions
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
                throw new Error('buildCreateGetAllUserCompanyAccessByCompanyOptions must have ObjectId.');
            }

        return function createGetAllUserCompanyAccessByCompanyOptions
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
                        throw new Error('createGetAllUserCompanyAccessByCompanyOptions must have companyId.');
                    }

                const companyObjectId = new ObjectId(
                    companyId
                );


                const pipeline = [
                    {
                        '$match': {
                          'company': companyObjectId,
                        }
                    },
                    {
                        "$lookup" :{
                            from: "users",
                            localField : "user",
                            foreignField: "_id",
                            as: "user"
                        }
                    },
                    {
                        "$unwind": '$user'
                    }
                ];


                const options = {
                    pipeline: pipeline
                }

                return options;
            }
    }