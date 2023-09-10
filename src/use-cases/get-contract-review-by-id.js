module.exports = function buildGetContractReviewById
(
    {
        getContractReviewByIdDB
    }
)
    {
        if
        (
            !getContractReviewByIdDB
        )
            {
                throw new Error('buildGetContractReviewById must have getContractReviewByIdDB.');
            }

        return async function getContractReviewById
        (
            {
                contractReviewId
            }
        )
            {

                const getContractReviewByIdDBResult = await getContractReviewByIdDB(
                    {
                        contractReviewId: contractReviewId
                    }
                );

                return getContractReviewByIdDBResult;

            }
    }