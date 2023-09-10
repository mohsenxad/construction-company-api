module.exports = function buildCreateGetAllContractOptions
(
    {
        ObjectId
    }
)
    {
        if
        (
            !ObjectId
        )
            {
                throw new Error('buildCreateGetAllContractOptions must have ObjectId.');
            }
        return function createGetAllContractOptions
        (
            {
                companyId
            }
        )
            {
                if
                (
                    !companyId
                )
                    {
                        throw new Error('createGetAllContractOptions must have companyId.');
                    }

                const companyObjectId = new ObjectId(
                    companyId
                );


                const filter = {
                    company : companyObjectId
                }


                const options = {
                    filter: filter
                }

                return options;
            }
    }