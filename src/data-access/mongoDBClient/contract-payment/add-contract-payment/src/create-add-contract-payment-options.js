module.exports = function buildCreateAddContractPaymentOptions
()
    {
        return function createAddContractPaymentOptions
        (
            {
                contractPayment
            }
        )
            {

                if
                (
                    !contractPayment
                )
                    {
                        throw new Error('createAddContractPaymentOptions must have contractPayment');
                    }

                const document = contractPayment.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }