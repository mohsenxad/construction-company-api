module.exports = function buildGetAllContractReviewByUserCompanyAccessId
(
    {
        getAllContractReviewByUserCompanyAccessIdDB
    }
)
    {
        if
        (
            !getAllContractReviewByUserCompanyAccessIdDB
        )
            {
                throw new Error('buildGetAllContractReviewByUserCompanyAccessId must have getAllContractReviewByUserCompanyAccessIdDB.');
            }
        return async function getAllContractReviewByUserCompanyAccessId
        (
            {
                userCompanyAccessId
            }
        )
            {
                if
                (
                    !userCompanyAccessId
                )
                    {
                        throw new Error('getAllContractReviewByUserCompanyAccessId must have userCompanyAccessId.');
                    }

                

                const getAllContractReviewByUserCompanyAccessIdDBResult = await getAllContractReviewByUserCompanyAccessIdDB(
                    {
                        userCompanyAccessId: userCompanyAccessId
                    }
                );

                return getAllContractReviewByUserCompanyAccessIdDBResult;
            }
    }