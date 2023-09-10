module.exports = function buildDrafContract
(
    {
        addContractDB,
        makeContract
    }
)
    {
        if
        (
            !addContractDB
        )
            {
                throw new Error('buildDrafContract must have addContractDB.');
            }

        if
        (
            !makeContract
        )
            {
                throw new Error('buildDrafContract must have makeContract.');
            }

        return async function drafContract
        (
            {
                contractInfo
                
            }
        )
            {

                if
                (
                    !contractInfo
                )
                    {
                        throw new Error('drafContract must have contractInfo.');
                    }


                const contract = await makeContract(
                    contractInfo
                );

                const addContractDBResult = await addContractDB(
                    {
                        contract:contract
                    }
                );

                return addContractDBResult;
            }
    }