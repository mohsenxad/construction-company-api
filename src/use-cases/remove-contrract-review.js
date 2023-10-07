module.exports = function buildRemoveContractReview
(
    {
        removeContractReviewDB
    }
)
    {
        if
        (
            !removeContractReviewDB
        )
            {
                throw new Error('buildRemoveContractReview must have removeContractReviewDB.');
            }

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

                const removeContractReviewDBResult = await removeContractReviewDB(
                    {
                        contractReviewId: contractReviewId
                    }
                );

                return removeContractReviewDBResult;
            }
    }