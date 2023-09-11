module.exports = function buildGetAllContractReviewByContractId
(
    {
        getAllContractReviewByContractDB
    }
)
    {
        if
        (
            !getAllContractReviewByContractDB
        )
            {
                throw new Error('buildGetAllContractReviewByContractId must have getAllContractReviewByContractDB.');
            }
        return async function getAllContractReviewByContractId
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
                        throw new Error('getAllContractReviewByContractId must have contractId.');
                    }

                

                const getAllContractReviewByContractDBResult = await getAllContractReviewByContractDB(
                    {
                        contractId: contractId
                    }
                );

                return getAllContractReviewByContractDBResult;
            }
    }