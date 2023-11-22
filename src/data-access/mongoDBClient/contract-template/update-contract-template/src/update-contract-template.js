module.exports = function buildUpdateContractTemplate
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
                throw new Error('buildUpdateContractTemplate must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildUpdateContractTemplate must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildUpdateContractTemplate must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractTemplates';

        return async function updateContractTemplate
        (
            {
                contractTemplateId,
                contractTemplate
            }
        )
            {
                if
                (
                    !contractTemplateId
                )
                    {
                        throw new Error('updateContractTemplate must have contractTemplateId.');
                    }

                if
                (
                    !contractTemplate
                )
                    {
                        throw new Error('updateContractTemplate must have contractTemplate.');
                    }

                const db = await getDb();

                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractTemplateId: contractTemplateId,
                        contractTemplate: contractTemplate
                    }
                );

                const response = await collection.updateOne(
                    options.filter,
                    options.update
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;

            }
    }