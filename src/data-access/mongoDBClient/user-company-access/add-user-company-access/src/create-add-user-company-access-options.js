module.exports = function buildCreateAddUserCompanyAccessOptions
()
    {
        return function createAddUserCompanyAccessOptions
        (
            {
                userCompanyAccess
            }
        )
            {

                if
                (
                    !userCompanyAccess
                )
                    {
                        throw new Error('createAddUserCompanyAccessOptions must have userCompanyAccess');
                    }

                const document = userCompanyAccess.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }