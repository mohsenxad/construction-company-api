module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        const { addContract } = require('./add-contract')
        (
            {
                getDb: getDb
            } 
        );

        const { assignCustomer } = require('./assign-customer')
        (
            {
                getDb: getDb
            } 
        );

        const { getContractById } = require('./get-contract-by-id')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );

        const { getAllContract } = require('./get-all-contract')(
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        const { removeContractProjectItem } = require('./remove-contract-projectItem')(
            {
                getDb: getDb,
                ObjectId:ObjectId
            }
        );

        
        const { setContractProjectAndProjectItem } = require('./set-contract-project-and-projectItem')(
            {
                getDb: getDb,
                ObjectId:ObjectId
            }
        );

        

        const { setContractPayablePriceAndDiscount } = require('./set-contract-payable-price-and-discount')(
            {
                getDb: getDb,
                ObjectId:ObjectId
            }
        );

        const { getAllContractByProject } = require('./get-all-contract-by-project')(
            {
                getDb:getDb,
                ObjectId:ObjectId
            }
        );

        
        const { setContractWorkflowStatus } = require('./set-contract-workflow-status')(
            {
                getDb:getDb,
                ObjectId:ObjectId
            }
        );


        const services = Object.freeze(
            {
                addContract,
                assignCustomer,
                getContractById,
                getAllContract,
                removeContractProjectItem,
                setContractProjectAndProjectItem,
                setContractPayablePriceAndDiscount,
                getAllContractByProject,
                setContractWorkflowStatus
            }
        );

        return services;

    }