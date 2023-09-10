module.exports = function buildSetContractReviewReviewResult
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
                throw new Error('buildSetContractReviewReviewResult must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildSetContractReviewReviewResult must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildSetContractReviewReviewResult must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractReviews';

        return async function setContractReviewReviewResult
        (
            {
                contractReviewId,
                isApproved,
                isRejected,
            }
        )
            {
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractReviewId: contractReviewId,
                        isApproved: isApproved,
                        isRejected: isRejected,
                    }
                );

                const response = await collection.updateOne(
                    options.filter,
                    options.update
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }