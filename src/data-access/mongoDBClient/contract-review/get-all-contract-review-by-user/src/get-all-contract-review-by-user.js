module.exports = function buildGetAllContractReviewByUser
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
                throw new Error('buildGetAllContractReviewByUser must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllContractReviewByUser must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllContractReviewByUser must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractReviews';
        return async function getAllContractReviewByUser
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
                        throw new Error('getAllContractReviewByUser must have userId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        userId: userId
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