module.exports = function buildGetAllUserCompanyAccessByFilter
(
    {
        getAllUserCompanyAccessByIsContractReviewerDB
    }
)
    {
        if
        (
            !getAllUserCompanyAccessByIsContractReviewerDB
        )
            {
                throw new Error('buildGetAllUserCompanyAccessByFilter must have getAllUserCompanyAccessByIsContractReviewerDB.');
            }
        return async function getAllUserCompanyAccessByFilter
        (
            {
                filter,
                companyId
            }
        )
            {

                if
                (
                    !filter
                )
                    {
                        throw new Error('getAllUserCompanyAccessByFilter must have filter.');
                    }

                if
                (
                    !companyId
                )
                    {
                        throw new Error('getAllUserCompanyAccessByFilter must have companyId.');
                    }

                if
                (
                    filter=='contractReviewer'
                )
                    {
                        const getAllUserCompanyAccessByIsContractReviewerDBResult = await getAllUserCompanyAccessByIsContractReviewerDB(
                            {
                                companyId: companyId,
                                isContractReviewer: true
                            }
                        );

                        return getAllUserCompanyAccessByIsContractReviewerDBResult;
                    }
                else
                    {
                        throw new Error(`getAllUserCompanyAccessByFilter unknow filter|${filter}`);
                    }

            }
    }