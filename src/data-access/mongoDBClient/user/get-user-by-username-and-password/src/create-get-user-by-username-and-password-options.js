module.exports = function buildCreateGetUserByUsernameAndPasswordOptions
()
    {
        return function createGetUserByUsernameAndPasswordOptions
        (
            {
                username,
                password
            }
        )
            {
                if
                (
                    !username
                )
                    {
                        throw new Error('createGetUserByUsernameAndPasswordOptions must have username.');
                    }

                if
                (
                    !password
                )
                    {
                        throw new Error('createGetUserByUsernameAndPasswordOptions must have password.');
                    }

                const filter = {
                    "username": username,
                    "password": password,
                };

                const options = {
                    filter: filter
                }
                
                return options;
            }
    }