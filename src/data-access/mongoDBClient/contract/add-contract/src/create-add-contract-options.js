module.exports = function buildCreateAddContractOptions
()
    {
        return function createAddContractOptions
        (
            {
                contract
            }
        )
            {
                if
                (
                    !contract
                )
                    {
                        throw new Error('createAddContractOptions must have contract');
                    }
                
                const document = contract.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }