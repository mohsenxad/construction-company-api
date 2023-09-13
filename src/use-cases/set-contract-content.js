module.exports = function buildSetContractContent
(
    {
        setContractContentDB
    }
)
    {
        if
        (
            !setContractContentDB
        )
            {
                throw new Error('buildSetContractContent must have setContractContentDB.');
            }

        return async function setContractContent
        (
            {
                setContractContentInfo  
            }
        )
            {

                let contractId = setContractContentInfo.contractId;
                let content = setContractContentInfo.content;
                

                const setContractContentDBResult = await setContractContentDB(
                    {
                        contractId: contractId,
                        content: content
                    }
                );

                return setContractContentDBResult;
            }
    }