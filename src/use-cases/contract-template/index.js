const buildGetContractTemplateById = require('./get-contract-template-by-id');
const buildAddContractTemplate = require('./add-contract-template');
const buildGetAllContractTemplate = require('./get-all-contract-template');
const buildEditContractTemplate = require('./edit-contract-template');

module.exports = function
(
    {
        getContractTemplateByIdDB,
        addContractTemplateDB,
        makeContractTemplate,
        getAllContractTemplateByCompanyDB,
        editContractTemplateDB
    }
)
    {

        const getContractTemplateById= buildGetContractTemplateById(
            {
                getContractTemplateByIdDB: getContractTemplateByIdDB
            }
        );

        const addContractTemplate = buildAddContractTemplate(
            {
                addContractTemplateDB: addContractTemplateDB,
                makeContractTemplate: makeContractTemplate
            }
        );

        const getAllContractTemplate = buildGetAllContractTemplate(
            {
                getAllContractTemplateByCompanyDB: getAllContractTemplateByCompanyDB
            }
        );

        const editContractTemplate = buildEditContractTemplate(
            {
                editContractTemplateDB: editContractTemplateDB,
                makeContractTemplate:makeContractTemplate

            }
        );

        const services = Object.freeze(
            {
                getContractTemplateById,
                addContractTemplate,
                getAllContractTemplate,
                editContractTemplate
            }
        );

        return services;
    }