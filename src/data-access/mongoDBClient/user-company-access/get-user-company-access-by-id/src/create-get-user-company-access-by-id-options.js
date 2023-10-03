module.exports = function buildCreateGetUserCompanyAccessByIdOptions
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
                throw new Error('buildCreateGetUserCompanyAccessByIdOptions must have ObjectId.');
            }

        return function createGetUserCompanyAccessByIdOptions
        (
            {
                id
            }
        )
            {

                if
                (
                    !id
                )
                    {
                        throw new Error('createGetUserCompanyAccessByIdOptions must have id.');
                    }
    
                const objectId = new ObjectId(
                    id
                );

                const pipeline = [
                    {
                        '$match': {
                            '_id': objectId
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