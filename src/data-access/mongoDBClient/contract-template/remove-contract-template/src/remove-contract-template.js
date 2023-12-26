module.exports = function buildRemoveContractTemplate
(
    {
        getDb,
        createOptions,
        translateResponse
    }
)
    {
        if
        (
            !getDb
        )
            {
                throw new Error('buildRemoveContractTemplate must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildRemoveContractTemplate must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildRemoveContractTemplate must have translateResponse.');
            }
          
        const COLLECTION_NAME = 'contractTemplates';

        return async function removeContractTemplate
        (
            {
                contractTemplateId
            }
        )
            {
                if
                (
                    !contractTemplateId
                )
                    {
                        throw new Error('removeContractTemplate must have contractTemplateId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractTemplateId: contractTemplateId
                    }
                );

                const response = await collection.deleteOne(
                    options.filter
                )

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }