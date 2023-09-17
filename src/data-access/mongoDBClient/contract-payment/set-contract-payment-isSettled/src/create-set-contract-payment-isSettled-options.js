module.exports = function buildCreateSetContractPaymentIsSettledOptions
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
                throw new Error('buildCreateSetContractPaymentIsSettledOptions must have ObjectId.');
            }
        return function createSetContractPaymentIsSettledOptions
        (
            {
                contractPaymentId,
                isSettled,
            }
        )
            {
                if
                (
                    !contractPaymentId
                )
                    {
                        throw new Error('createSetContractPaymentIsSettledOptions must have contractPaymentId.');
                    }

                if
                (
                    typeof isSettled !== "boolean"
                )
                    {
                        throw new Error('createSetContractPaymentIsSettledOptions must have isSettled.');
                    }

                const contractPaymentObjectId = new ObjectId(
                    contractPaymentId
                );

                const filter = {
                    "_id": contractPaymentObjectId
                };

                const update = 
                {
                    $set:{
                        isSettled: isSettled,
                        setSettlementResultDateTime: new Date()
                    }
                };

                const options = {
                    filter:filter,
                    update: update,
                }
                
                return options;

            }
    }