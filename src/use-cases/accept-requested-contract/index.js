const builAcceptRequestedContract = require('./src/accept-requested-contract');

module.exports = function
(
   {
        setContractWorkflowStatusDB
   }
)
    {

        const acceptRequestedContract = builAcceptRequestedContract(
            {
                setContractWorkflowStatusDB: setContractWorkflowStatusDB
            }
        );

        const services = Object.freeze(
            {
                acceptRequestedContract
            }
        );

        return services;

    }