module.exports = function buildCreateAddContractTemplateOptions
()
    {
        return function createAddContractTemplateOptions
        (
            {
                contractTemplate
            }
        )
            {
                if
                (
                    !contractTemplate
                )
                    {
                        throw new Error('createAddContractTemplateOptions must have contractTemplate');
                    }
                
                const document = contractTemplate.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }