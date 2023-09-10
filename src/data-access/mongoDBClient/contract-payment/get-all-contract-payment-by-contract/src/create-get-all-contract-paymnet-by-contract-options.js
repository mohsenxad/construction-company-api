module.exports = function buildCreateGetAllContractPaymentByContractOptions
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
                throw new Error('buildCreateGetAllContractPaymentByContractOptions must have ObjectId.');
            }
        return function createGetAllContractPaymentByContractOptions
        (
            {
                contractId
            }
        )
            {
                if
                (
                    !contractId
                )
                    {
                        throw new Error('createGetAllContractPaymentByContractOptions must have contractId.');
                    }

                
                const contractObjectId = new ObjectId(
                    contractId
                );
                    

                const filter = {
                    "contractId": contractObjectId
                };

                const options = {
                    filter: filter
                }
                
                return options; 

               

            }
    }