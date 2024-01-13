module.exports = function buildCreateEditContractBaseInfoOptions
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
                throw new Error('buildCreateEditContractBaseInfoOptions must have ObjectId.');
            }

        return function createEditContractBaseInfoOptions
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
                        throw new Error('createEditContractBaseInfoOptions must have contractId.');
                    }

                if
                (
                    !contractNumber
                )
                    {
                        throw new Error('createEditContractBaseInfoOptions must have contractNumber.');
                    }

                if
                (
                    !contractDate
                )
                    {
                        throw new Error('createEditContractBaseInfoOptions must have contractDate.');
                    }

                if
                (
                    !contractDateShamsi
                )
                    {
                        throw new Error('createEditContractBaseInfoOptions must have contractDateShamsi.');
                    }

                if
                (
                    !contractFinishDate
                )
                    {
                        throw new Error('createEditContractBaseInfoOptions must have contractFinishDate.');
                    }

                if
                (
                    !contractFinishDateShamsi
                )
                    {
                        throw new Error('createEditContractBaseInfoOptions must have contractFinishDateShamsi.');
                    }

                const contractObjectId = new ObjectId(
                    contractId
                );

                const filter = {
                    "_id": contractObjectId
                };

                const update = {
                    $set: {
                        contractNumber: contractNumber,
                        contractDate: contractDate,
                        contractDateShamsi: contractDateShamsi,
                        contractFinishDate: contractFinishDate,
                        contractFinishDateShamsi: contractFinishDateShamsi,
                    }
                }
                
                const options = {
                    filter:filter,
                    update: update,
                }
                
                return options;
                
            }
    }