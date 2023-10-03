module.exports = function buildGetAllContractReviewByUserCompanyAccessId
(
    {
        getDb,
        createOptions,
        translateResponse
    }
)
    {

        if
        (
            !getDb
        )
            {
                throw new Error('buildGetAllContractReviewByUserCompanyAccessId must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllContractReviewByUserCompanyAccessId must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllContractReviewByUserCompanyAccessId must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractReviews';
        return async function getAllContractReviewByUserCompanyAccessId
        (
            {
                userCompanyAccessId
            }
        )
            {
                if
                (
                    !userCompanyAccessId
                )
                    {
                        throw new Error('getAllContractReviewByUserCompanyAccessId must have userCompanyAccessId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        userCompanyAccessId: userCompanyAccessId
                    }
                );

                const response = await collection.aggregate(
                    options.pipeline
                )

                const result = await translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }