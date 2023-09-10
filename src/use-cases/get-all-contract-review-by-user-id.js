module.exports = function buildGetAllContractReviewByUserId
(
    {
        getAllContractReviewByUserDB
    }
)
    {
        if
        (
            !getAllContractReviewByUserDB
        )
            {
                throw new Error('buildGetAllContractReviewByUserId must have getAllContractReviewByUserDB.');
            }
        return async function getAllContractReviewByUserId
        (
            {
                userId
            }
        )
            {
                if
                (
                    !userId
                )
                    {
                        throw new Error('getAllContractReviewByUserId must have userId.');
                    }

                

                const getAllContractReviewByUserDBResult = await getAllContractReviewByUserDB(
                    {
                        userId: userId
                    }
                );

                return getAllContractReviewByUserDBResult;
            }
    }