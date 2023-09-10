module.exports = function buildGetContractReviewById
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
                throw new Error('buildGetContractReviewById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetContractByReviewId must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetContractByReviewId must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractReviews';

        return async function getContractReviewById
        (
            {
                contractReviewId  
            }
        )
            {

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractReviewId: contractReviewId
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