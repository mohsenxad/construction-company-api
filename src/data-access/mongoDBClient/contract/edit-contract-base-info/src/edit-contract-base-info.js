module.exports = function buildEditContractBaseInfo
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
                throw new Error('buildEditContractBaseInfo must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildEditContractBaseInfo must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildEditContractBaseInfo must have translateResponse.');
            }

        const COLLECTION_NAME = 'contracts';
        
        return async function editContractBaseInfo
        (
            {
                contractId,
				contractNumber,
				contractDate,
				contractDateShamsi,
				contractFinishDate,
				contractFinishDateShamsi
            }
        )
            {
                if
                (
                    !contractId
                )
                    {
                        throw new Error('editContractBaseInfo must have contractId.');
                    }

                if
                (
                    !contractNumber
                )
                    {
                        throw new Error('editContractBaseInfo must have contractNumber.');
                    }

                if
                (
                    !contractDate
                )
                    {
                        throw new Error('editContractBaseInfo must have contractDate.');
                    }

                if
                (
                    !contractDateShamsi
                )
                    {
                        throw new Error('editContractBaseInfo must have contractDateShamsi.');
                    }

                if
                (
                    !contractFinishDate
                )
                    {
                        throw new Error('editContractBaseInfo must have contractFinishDate.');
                    }

                if
                (
                    !contractFinishDateShamsi
                )
                    {
                        throw new Error('editContractBaseInfo must have contractFinishDateShamsi.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        contractId: contractId,
                        contractNumber: contractNumber,
                        contractDate: contractDate,
                        contractDateShamsi: contractDateShamsi,
                        contractFinishDate: contractFinishDate,
                        contractFinishDateShamsi: contractFinishDateShamsi
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