module.exports = function buildAddContractPayment
(
    {
        addContractPaymentDB,
        makeContractPaymentDeposit,
        makeContractPaymentCheque,
        makeContractPaymentDicker,
        makeContractPaymentDeed
    }
)
    {
        if
        (
            !addContractPaymentDB
        )
            {
                throw new Error('buildAddContractPayment must have addContractPaymentDB.');
            }

        if
        (
            !makeContractPaymentDeposit
        )
            {
                throw new Error('buildAddContractPayment must have makeContractPaymentDeposit.');
            }

        if
        (
            !makeContractPaymentCheque
        )
            {
                throw new Error('buildAddContractPayment must have makeContractPaymentCheque.');
            }

        if
        (
            !makeContractPaymentDicker
        )
            {
                throw new Error('buildAddContractPayment must have makeContractPaymentDicker.');
            }

        if
        (
            !makeContractPaymentDeed
        )
            {
                throw new Error('buildAddContractPayment must have makeContractPaymentDeed.');
            }
            
        return async function addContractPayment
        (
            {
                contractPaymentDepositInfo,
                contractPaymentChequeInfo,
                contractPaymentDickerInfo,
                contractPaymentDeedInfo
            }
        )
            {
                if
                (
                    !contractPaymentDepositInfo &&
                    !contractPaymentChequeInfo &&
                    !contractPaymentDickerInfo && 
                    !contractPaymentDeedInfo
                )
                    {
                        throw new Error('addContractPayment must have at least one of contractPaymentInfo.');
                    }
                
                let contractPayment;

                if
                (
                    contractPaymentDepositInfo
                )
                    {
                        contractPayment = makeContractPaymentDeposit(
                            contractPaymentDepositInfo
                        )
                    }

                if
                (
                    contractPaymentChequeInfo
                )
                    {
                        contractPayment = makeContractPaymentCheque(
                            contractPaymentChequeInfo
                        )
                    }

                if
                (
                    contractPaymentDickerInfo
                )
                    {
                        contractPayment = makeContractPaymentDicker(
                            contractPaymentDickerInfo
                        )
                    }

                if
                (
                    contractPaymentDeedInfo
                )
                    {
                        contractPayment = makeContractPaymentDeed(
                            contractPaymentDeedInfo
                        )
                    }


                const addContractPaymentDBResult = await addContractPaymentDB(
                    {
                        contractPayment: contractPayment
                    }
                );

                return addContractPaymentDBResult;

            }
    }