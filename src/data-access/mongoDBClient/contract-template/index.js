module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {

        const { addContractTemplate } = require('./add-contract-template')(
            {
                getDb:getDb
            }
        );

        const { getAllContractTemplateByCompany } = require('./get-all-contract-template-by-company')(
            {
                getDb: getDb,
                ObjectId:ObjectId
            }
        );

        const { getContractTemplateById } = require('./get-contract-template-by-id')(
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        const { updateContractTemplate } = require('./update-contract-template')(
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        )


        const services = Object.freeze(
            {
                addContractTemplate,
                getAllContractTemplateByCompany,
                getContractTemplateById,
                updateContractTemplate
            }
        );

        return services;

    }