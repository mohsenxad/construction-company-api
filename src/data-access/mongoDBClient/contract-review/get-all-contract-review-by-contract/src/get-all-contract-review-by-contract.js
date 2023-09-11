module.exports = function buildGetAllContractReviewByContract
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
                throw new Error('buildGetAllContractReviewByContract must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllContractReviewByContract must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllContractReviewByContract must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractReviews';
        return async function getAllContractReviewByContract
        (
            {
                contractId
            }
        )
            {
                if
                (
                    !contractId
                )
                    {
                        throw new Error('getAllContractReviewByContract must have contractId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractId: contractId
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