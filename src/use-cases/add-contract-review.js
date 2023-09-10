module.exports = function buildAddContractReview
(
    {
        addContractReviewDB,
        makeContractReview
    }
)
    {
        if
        (
            !addContractReviewDB
        )
            {
                throw new Error('buildAddContractReview must have addContractReviewDB.');
            }

        if
        (
            !makeContractReview
        )
            {
                throw new Error('buildAddContractReview must have makeContractReview.');
            }

        return async function addContractReview
        (
            {
                contractReviewInfo
            }
        )
            {
                if
                (
                    !contractReviewInfo
                )
                    {
                        throw new Error('addContractReview must have contractReviewInfo.');
                    }
                
                const contractReview = await makeContractReview(
                    contractReviewInfo
                );

                const addContractReviewDBResult = await addContractReviewDB(
                    {
                        contractReview: contractReview
                    }
                );

                return addContractReviewDBResult;

            }
    }