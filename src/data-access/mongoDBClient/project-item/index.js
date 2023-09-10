module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        const { addProjectItem } = require('./add-project-item')
        (
            {
                getDb: getDb
            } 
        );

        const { getProjectItemByContractId } = require('./get-project-item-by-contract-id')(
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        )

        const services = Object.freeze(
            {
                addProjectItem,
                getProjectItemByContractId
            }
        );

        return services;

    }