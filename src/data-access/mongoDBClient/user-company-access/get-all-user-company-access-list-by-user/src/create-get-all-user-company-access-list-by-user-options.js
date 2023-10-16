module.exports = function buldCreateGetAllUserCompanyAccessListByUserOptions
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
                throw new Error('buldCreateGetAllUserCompanyAccessListByUserOptions must have ObjectId.');
            }

        return function createGetAllUserCompanyAccessListByUserOptions
        (
            {
                userId
            }
        )
            {
                if
                (
                    !userId
                )
                    {
                        throw new Error('createGetAllUserCompanyAccessListByUserOptions must have userId.');
                    }
    
                const userObjectId = new ObjectId(
                    userId
                );
                
                const pipeline = [
                    {
                        '$match': {
                          'user': userObjectId,
                          'isActive':true
                        }
                    },
                    {
                        "$lookup" :{
                            from: "companies",
                            localField : "company",
                            foreignField: "_id",
                            as: "company"
                        }
                    },
                    {
                        "$unwind": '$company'
                    }
                ];


                const options = {
                    pipeline: pipeline
                }

                return options;
            }
    }