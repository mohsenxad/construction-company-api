module.exports = function buildCreateSetContractWorkflowStatusOptions
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
                throw new Error('buildCreateSetContractWorkflowStatusOptions must have ObjectId.');
            }

        return function createSetContractWorkflowStatusOptions
        (
            {
                contractId,
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
                    !contractId
                )
                    {
                        throw new Error('createSetContractWorkflowStatusOptions must have contractId.');
                    }

                const contractObjectId = new ObjectId(
                    contractId
                );

                const filter = {
                    "_id": contractObjectId
                };

                let setValue = 
                    {
                        isDraft: isDraft,
                        isRequested: isRequested,
                        isAccepted: isAccepted,
                        isConcluded: isConcluded,
                        isFinished: isFinished
                    };
                if
                (
                    isDraft == false &&
                    isRequested == true &&
                    isAccepted == false &&
                    isConcluded == false &&
                    isFinished == false 
                )
                    {
                        setValue.requestDateTime = new Date();
                    }
                else if
                (
                    isDraft == false &&
                    isRequested == false &&
                    isAccepted == true &&
                    isConcluded == false &&
                    isFinished == false 
                )
                    {
                        setValue.acceptDateTime = new Date();
                    }
                else if
                (
                    isDraft == true &&
                    isRequested == false &&
                    isAccepted == false &&
                    isConcluded == false &&
                    isFinished == false 
                )
                    {
                        setValue.rejectDateTime = new Date();
                    }
                else if
                (
                    isDraft == false &&
                    isRequested == false &&
                    isAccepted ==  false &&
                    isConcluded == true &&
                    isFinished == false 
                )
                    {
                        setValue.concludDateTime = new Date();
                    }
                else if
                (
                    isDraft == false &&
                    isRequested == false &&
                    isAccepted ==  false &&
                    isConcluded ==  false&&
                    isFinished == true 
                )
                    {
                        setValue.finishDateTime = new Date();
                    }
                else
                    {
                        throw new Error(`createSetContractWorkflowStatusOptions unkonown state|isDraft:${isDraft}|isRequested:${isRequested}|isAccepted:${isAccepted}|isConcluded:${isConcluded}|isFinished:${isFinished}|`);
                    }
                
                const update = 
                {
                    $set:setValue
                };

                const options = {
                    filter:filter,
                    update: update,
                }
                
                return options;
            }
    }