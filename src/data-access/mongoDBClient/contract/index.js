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

        
        const { setContractContent } = require('./set-contract-content')(
            {
                getDb:getDb,
                ObjectId:ObjectId
            }
        );

        

        const { getAllContractByWorkflowStatus } = require('./get-all-contract-by-workflow-status')(
            {
                getDb:getDb,
                ObjectId:ObjectId
            }
        );

        
        const { getAllContractByProjectAndStartDateAndEndDate } = require('./get-all-contract-by-project-and-startDate-and-endDate')(
            {
                getDb:getDb,
                ObjectId:ObjectId
            }
        );

        const { removeContractPayablePriceAndDiscount } = require('./remove-contract-payable-price-and-discount')(
            {
                getDb:getDb,
                ObjectId:ObjectId 
            }
        );

        

        const { removeDarftedContractById } = require('./remove-darfted-contract-by-id')(
            {
                getDb:getDb,
                ObjectId:ObjectId 
            }
        );

        const { editContractBaseInfo } = require('./edit-contract-base-info')(
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
                setContractWorkflowStatus,
                setContractContent,
                getAllContractByWorkflowStatus,
                getAllContractByProjectAndStartDateAndEndDate,
                removeContractPayablePriceAndDiscount,
                removeDarftedContractById,
                editContractBaseInfo
            }
        );

        return services;

    }