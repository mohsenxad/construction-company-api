const builRejectRequestedContract = require('./src/reject-requested-contract');

module.exports = function
(
   {
        setContractWorkflowStatusDB
   }
)
    {

        const rejectRequestedContract = builRejectRequestedContract(
            {
                setContractWorkflowStatusDB: setContractWorkflowStatusDB
            }
        );

        const services = Object.freeze(
            {
                rejectRequestedContract
            }
        );

        return services;

    }