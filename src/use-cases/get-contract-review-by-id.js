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

                if
                (
                    !contractReviewId
                )
                    {
                        throw new Error('getContractReviewById must have contractReviewId.');
                    }

                const getContractReviewByIdDBResult = await getContractReviewByIdDB(
                    {
                        contractReviewId: contractReviewId
                    }
                );

                return getContractReviewByIdDBResult;

            }
    }