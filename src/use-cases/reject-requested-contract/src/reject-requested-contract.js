module.exports = function builRejectRequestedContract
(
    {
        setContractWorkflowStatusDB
    }
)
    {
        if
        (
            !setContractWorkflowStatusDB
        )
            {
                throw new Error('builRejectRequestedContract must have setContractWorkflowStatusDB.');
            }

        return async function rejectRequestedContract
        (
            {
                rejectRequestedContractInfo
            }
        )
            {
                if
                (
                    !rejectRequestedContractInfo
                )
                    {
                        throw new Error('RejectRequestedContract must have rejectRequestedContractInfo.');
                    }

                else if
                (
                    !rejectRequestedContractInfo.contractId
                )
                    {
                        throw new Error('RejectRequestedContract rejectRequestedContractInfo must have contractId.');
                    }

                const contractId = rejectRequestedContractInfo.contractId;

                const setContractWorkflowStatusDBResult = await setContractWorkflowStatusDB(
                    {
                        contractId: contractId,
                        isDraft: true,
                        isRequested: false,
                        isAccepted:false,
                        isConcluded:false,
                        isFinished: false
                    }
                );

                //set workflow change to contract log

                return setContractWorkflowStatusDBResult;


            }
    }