module.exports = function buildCreateGetAllContractByWorkflowStatusOptions
(
    {
        ObjectId
    }
)
    {
        if
        (
            !ObjectId
        )
            {
                throw new Error('buildCreateGetAllContractByWorkflowStatusOptions must have ObjectId.');
            }

        return function createGetAllContractByWorkflowStatusOptions
        (
            {
                companyId,
                isDraft,
                isRequested,
                isAccepted,
                isConcluded,
                isFinished
            }
        )
            {
                if
                (
                    !companyId
                )
                    {
                        throw new Error('createGetAllContractByWorkflowStatusOptions must have companyId.');
                    }

                const companyObjectId = new ObjectId(
                    companyId
                );

                const filter = {
                    company: companyObjectId,
                    isDraft: isDraft,
                    isRequested: isRequested,
                    isAccepted: isAccepted,
                    isConcluded: isConcluded,
                    isFinished: isFinished
                }


                const options = {
                    filter: filter
                }

                return options;
            }
    }