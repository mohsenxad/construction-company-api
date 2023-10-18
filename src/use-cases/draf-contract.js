module.exports = function buildDrafContract
(
    {
        addContractDB,
        makeContract,
        addSystemLog
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

        if
        (
            !addSystemLog
        )
            {
                throw new Error('buildDrafContract must have addSystemLog.');
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

                console.log(contractInfo);

                const addSystemLogResult = await addSystemLog(
                    {
                        systemLogInfo:{
                            userId:contractInfo.userId,
                            action: "drafContract",
                            rowData:  contract.toBson(),
                            objectId: addContractDBResult,
                            objectType: "contracts"
                        }   
                    }
                );

                return addContractDBResult;
            }
    }