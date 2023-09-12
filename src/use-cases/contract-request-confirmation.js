module.exports = function buildContractRequestConfirmation
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
                throw new Error('buildContractRequestConfirmation must have setContractWorkflowStatusDB.');
            }

        return async function contractRequestConfirmation
        (
            {
                contractRequestConfirmationInfo
            }
        )
            {
                let contractId = contractRequestConfirmationInfo.contractId;

                const setContractWorkflowStatusDBResult = await setContractWorkflowStatusDB(
                    {
                        contractId: contractId,
                        isDraft: false,
                        isRequested: true,
                        isAccepted:false,
                        isConcluded:false,
                        isFinished: false
                    }
                );

                return setContractWorkflowStatusDBResult;

            }
    }