module.exports = function buildCreateGetAllUserCompanyAccessByIsContractReviewerOptions
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
                throw new Error('buildCreateGetAllUserCompanyAccessByIsContractReviewerOptions must have ObjectId.');
            }

        return function createGetAllUserCompanyAccessByIsContractReviewerOptions
        (
            {
                companyId,
                isContractReviewer
            }
        )
            {
                if
                (
                    !companyId
                )
                    {
                        throw new Error('createGetAllUserCompanyAccessByIsContractReviewerOptions must have companyId.');
                    }

                if
                (
                    typeof isContractReviewer !== "boolean"
                )
                    {
                        throw new Error('createGetAllUserCompanyAccessByIsContractReviewerOptions must have isContractReviewer.');
                    }

                const companyObjectId = new ObjectId(
                    companyId
                );


                const pipeline = [
                    {
                        '$match': {
                          'company': companyObjectId,
                          "isContractReviewer": isContractReviewer
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