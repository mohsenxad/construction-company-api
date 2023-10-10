module.exports = function buildGetAllContractByProjectAndStartDateAndEndDate
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
                throw new Error('buildGetAllContractByProjectAndStartDateAndEndDate must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllContractByProjectAndStartDateAndEndDate must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllContractByProjectAndStartDateAndEndDate must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractsFullDetail';

        return async function getAllContractByProjectAndStartDateAndEndDate
        (
            {
                projectId,
                startDate,
                endDate
            }
        )
            {
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        projectId: projectId,
                        startDate: startDate,
                        endDate: endDate
                    }
                );

                const response = await collection.find(
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