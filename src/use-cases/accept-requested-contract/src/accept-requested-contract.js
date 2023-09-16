module.exports = function builAcceptRequestedContract
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
                throw new Error('builAcceptRequestedContract must have setContractWorkflowStatusDB.');
            }

        return async function acceptRequestedContract
        (
            {
                acceptRequestedContractInfo
            }
        )
            {
                if
                (
                    !acceptRequestedContractInfo
                )
                    {
                        throw new Error('acceptRequestedContract must have acceptRequestedContractInfo.');
                    }

                else if
                (
                    !acceptRequestedContractInfo.contractId
                )
                    {
                        throw new Error('acceptRequestedContract acceptRequestedContractInfo must have contractId.');
                    }

                const contractId = acceptRequestedContractInfo.contractId;

                const setContractWorkflowStatusDBResult = await setContractWorkflowStatusDB(
                    {
                        contractId: contractId,
                        isDraft: false,
                        isRequested: false,
                        isAccepted:true,
                        isConcluded:false,
                        isFinished: false
                    }
                );

                //set workflow change to contract log

                return setContractWorkflowStatusDBResult;


            }
    }