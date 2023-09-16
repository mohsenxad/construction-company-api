module.exports = function buildAddContractTemplate
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
                throw new Error('buildAddContractTemplate must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildAddContractTemplate must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildAddContractTemplate must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractTemplates';

        return async function addContractTemplate
        (
            {
                contractTemplate
            }
        )
            {
                if
                (
                    !contractTemplate
                )
                    {
                        throw new Error('addContractTemplate must have contractTemplate.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractTemplate: contractTemplate
                    }
                );

                const response = await collection.insertOne(
                    options.document
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }