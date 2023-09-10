module.exports = function buildCreateGetUserCompanyAccessByIdAndUserIdOptions
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
                throw new Error('buildCreateGetUserCompanyAccessByIdAndUserIdOptions must have ObjectId.');
            }

        return function createGetUserCompanyAccessByIdAndUserIdOptions
        (
            {
                id,
                userId
            }
        )
            {

                if
                (
                    !id
                )
                    {
                        throw new Error('createGetUserCompanyAccessByIdAndUserIdOptions must have id.');
                    }

                if
                (
                    !userId
                )
                    {
                        throw new Error('createGetUserCompanyAccessByIdAndUserIdOptions must have userId.');
                    }
    
                const objectId = new ObjectId(
                    id
                );

                const userObjectId = new ObjectId(
                    userId
                );
                
                const pipeline = [
                    {
                        '$match': {
                            '_id': objectId,
                            'user': userObjectId
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