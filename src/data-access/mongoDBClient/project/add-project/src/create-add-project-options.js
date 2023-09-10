module.exports = function buildCreateAddProjectOptions
()
    {
        return function createAddProjectOptions
        (
            {
                project
            }
        )
            {

                if
                (
                    !project
                )
                    {
                        throw new Error('createAddProjectOptions must have project');
                    }

                const document = project.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }