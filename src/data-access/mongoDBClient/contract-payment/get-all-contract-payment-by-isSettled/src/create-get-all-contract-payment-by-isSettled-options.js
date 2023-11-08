module.exports = function buildCreateGetAllContractPaymentByIsSettledOptions
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
                throw new Error('buildCreateGetAllContractPaymentByIsSettledOptions must have ObjectId.');
            }

        return function createGetAllContractPaymentByIsSettledOptions
        (
            {
                companyId,
                isSettled
            }
        )
            {
                if
                (
                    !companyId
                )
                    {
                        throw new Error('createGetAllContractPaymentByIsSettledOptions must have companyId.');
                    }

                if
                (
                    typeof isSettled !== "boolean"
                )
                    {
                        throw new Error('createGetAllContractPaymentByIsSettledOptions must have isSettled.');
                    }

                const companyObjectId = new ObjectId(
                    companyId
                );

                const filter = {
                    "companyId": companyObjectId,
                    "isSettled": isSettled,
                    "contract.isAccepted":true
                };

                const options = {
                    filter: filter
                }
                
                return options; 
            }
    }