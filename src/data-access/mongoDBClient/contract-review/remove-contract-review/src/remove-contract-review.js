module.exports = function buildRemoveContractReview
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
                throw new Error('buildRemoveContractReview must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildRemoveContractReview must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildRemoveContractReview must have translateResponse.');
            }
          
        const COLLECTION_NAME = 'contractReviews';

        return async function removeContractReview
        (
            {
                contractReviewId
            }
        )
            {
                if
                (
                    !contractReviewId
                )
                    {
                        throw new Error('removeContractReview must have contractReviewId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractReviewId: contractReviewId
                    }
                );

                const response = await collection.deleteOne(
                    options.filter
                )

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }