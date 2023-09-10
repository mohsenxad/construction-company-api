module.exports = function buildAddContractReview
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
                throw new Error('buildAddContractReview must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildAddContractReview must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildAddContractReview must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractReviews';

        return async function addContractReview
        (
            {
                contractReview
            }
        )
            {
                if
                (
                    !contractReview
                )
                    {
                        throw new Error('addContractReview must have contractReview');
                    }
                
                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractReview: contractReview
                    }
                );

                const response = await collection.insertOne(
                    options.document
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }