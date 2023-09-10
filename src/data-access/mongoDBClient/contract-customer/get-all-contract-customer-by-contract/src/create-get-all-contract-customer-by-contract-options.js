module.exports = function buildCreateGetAllContractCustomerByContractOptions
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
                throw new Error('buildCreateGetAllContractCustomerByContractOptions must have ObjectId.');
            }
        return function createGetAllContractCustomerByContractOptions
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
                        throw new Error('createGetAllContractCustomerByContractOptions must have contractId.');
                    }
    
                const contractObjectId = new ObjectId(
                    contractId
                );
                
                const pipeline = [
                    {
                        '$match': {
                          'contract': contractObjectId
                        }
                    },
                    {
                        "$lookup" :{
                            from: "customers",
                            localField : "customer",
                            foreignField: "_id",
                            as: "customer"
                        }
                    },
                    {
                        "$unwind": '$customer'
                    }
                ];


                const options = {
                    pipeline: pipeline
                }

                return options;

            }
    }