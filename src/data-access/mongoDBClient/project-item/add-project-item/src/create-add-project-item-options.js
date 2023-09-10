module.exports = function buildCreateAddProjectItemOptions
()
    {
        return function createAddProjectItemOptions
        (
            {
                projectItem
            }
        )
            {

                if
                (
                    !projectItem
                )
                    {
                        throw new Error('createAddProjectItemOptions must have projectItem');
                    }

                const document = projectItem.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }