module.exports = function buildCreateAddSystemLogOptions
()
    {
        return function createAddSystemLogOptions
        (
            {
                systemLog
            }
        )
            {

                if
                (
                    !systemLog
                )
                    {
                        throw new Error('createAddSystemLogOptions must have systemLog');
                    }

                const document = systemLog.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }