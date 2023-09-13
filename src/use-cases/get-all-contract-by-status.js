module.exports = function buildGetAllContractByStatus
(
    {
        getAllContractByWorkflowStatusDB
    }
)
    {
        if
        (
            !getAllContractByWorkflowStatusDB
        )
            {
                throw new Error('buildGetAllContractByStatus must have getAllContractByWorkflowStatusDB.');
            }
        return async function getAllContractByStatus
        (
            {
                status,
                companyId
            }
        )
            {
                let workflowStatusParameters = {
                    companyId: companyId,
                    isDraft : false,
                    isRequested: false,
                    isAccepted: false,
                    isConcluded: false,
                    isFinished: false
                }

                if
                (
                    !status
                )
                    {
                        throw new Error('getAllContractByStatus must have status.');
                    }

                if
                (
                    status == "draft"
                )
                    {
                        workflowStatusParameters.isDraft = true;
                    }
                else if
                (
                    status == "requested"
                )
                    {
                        workflowStatusParameters.isRequested = true;
                    }
                else if
                (
                    status == "accepted"
                )
                    {
                        workflowStatusParameters.isAccepted = true;
                    }
                else if
                (
                    status == "concluded"
                )
                    {
                        workflowStatusParameters.isConcluded = true;
                    }
                else if
                (
                    status == "finished"
                )
                    {
                        workflowStatusParameters.isFinished = true;
                    }
                else
                    {
                        throw new Error(`getAllContractByStatus | filter status is not defined ${status}`);
                    }


                const getAllContractByWorkflowStatusResult = await getAllContractByWorkflowStatusDB(
                    workflowStatusParameters
                );

                return getAllContractByWorkflowStatusResult;
            }
    }