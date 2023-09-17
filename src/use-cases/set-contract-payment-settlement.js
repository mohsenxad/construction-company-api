module.exports = function buildSetContractPaymentSettlement
(
    {
        setContractPaymentIsSettledDB
    }
)
    {
        if
        (
            !setContractPaymentIsSettledDB
        )
            {
                throw new Error('buildSetContractPaymentSettlement must have setContractPaymentIsSettledDB.');
            }
        return async function setContractPaymentSettlement
        (
            {
                setContractPaymentSettlementInfo
            }
        )
            {
                if
                (
                    !setContractPaymentSettlementInfo
                )
                    {
                        throw new Error('setContractPaymentSettlement must have setContractPaymentSettlementInfo.');
                    }
                else  if
                (
                    !setContractPaymentSettlementInfo.contractPaymentId
                )
                    {
                        throw new Error('setContractPaymentSettlement setContractPaymentSettlementInfo must have contractPaymentId.');
                    }
                else  if
                (
                    typeof setContractPaymentSettlementInfo.isSettled !== "boolean"
                )
                    {
                        throw new Error('setContractPaymentSettlement setContractPaymentSettlementInfo must have isSettled.');
                    }

                const contractPaymentId  = setContractPaymentSettlementInfo.contractPaymentId;
                const isSettled = setContractPaymentSettlementInfo.isSettled;

                const setContractPaymentIsSettledResult = await setContractPaymentIsSettledDB(
                    {
                        contractPaymentId: contractPaymentId,
                        isSettled: isSettled,
                    }
                );

                return setContractPaymentIsSettledResult;
            }
    }