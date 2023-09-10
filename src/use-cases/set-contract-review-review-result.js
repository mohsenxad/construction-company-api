module.exports = function buildSetContractReviewReviewResult
(
    {
        setContractReviewReviewResultDB
    }
)
    {
        if
        (
            !setContractReviewReviewResultDB
        )
            {
                throw new Error('buildSetContractReviewReviewResult must have setContractReviewReviewResultDB.');
            }

        return async function setContractReviewReviewResult
        (
            {
                setContractReviewReviewResultInfo
            }
        )
            {
                const contractReviewId = setContractReviewReviewResultInfo.contractReviewId;
                const isApproved = setContractReviewReviewResultInfo.isApproved;
                const isRejected = setContractReviewReviewResultInfo.isRejected;

                const setContractReviewReviewResultDBResult = await setContractReviewReviewResultDB(
                    {
                        contractReviewId: contractReviewId,
                        isApproved: isApproved,
                        isRejected: isRejected
                    }
                );

                return setContractReviewReviewResultDBResult;
            }
    }