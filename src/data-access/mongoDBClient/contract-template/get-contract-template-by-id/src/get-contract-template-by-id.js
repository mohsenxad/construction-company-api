module.exports = function buildGetContractTemplateById
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
                throw new Error('buildGetContractTemplateById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetContractTemplateById must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetContractTemplateById must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractTemplates';

        return async function getContractTemplateById
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
                        throw new Error('getContractTemplateById must have contractTemplateId.');
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

                const response = await collection.findOne(
                    options.filter
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;

            }
    }