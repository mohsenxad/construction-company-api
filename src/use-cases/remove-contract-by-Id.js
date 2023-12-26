module.exports = function buildRemoveContractById
(
    {
        getContractByIdDB,
        removeDarftedContractByIdDB
    }
)
    {
        if
        (
            !getContractByIdDB
        )
            {
                throw new Error('buildRemoveContractById must have getContractByIdDB.');
            }

        if
        (
            !removeDarftedContractByIdDB
        )
            {
                throw new Error('buildRemoveContractById must have removeDarftedContractByIdDB.');
            }

        return async function removeContractById
        (
            {
                contractId
            }
        )
            {

                if
                (
                    !contractId
                )
                    {
                        throw new Error('removeContractById must have contractId.');
                    }

                const getContractByIdDBResult = await getContractByIdDB(
                    {
                        contractId: contractId
                    }
                );

                if
                (
                    getContractByIdDBResult.isDraft
                )
                    {
                        const removeDarftedContractByIdDBResult = await removeDarftedContractByIdDB(
                            {
                                contractId: contractId
                            }
                        );

                        return removeDarftedContractByIdDBResult;
                    }
                else
                    {
                        const CONTRACT_IS_NOT_IN_DARFT_MODE_ERROR_MESSAGE = `قرارداد مورد نظر در حالت پیش نویس نمیباشد و امکان حذف آن وجود ندارد.`
                        throw new Error(CONTRACT_IS_NOT_IN_DARFT_MODE_ERROR_MESSAGE)
                    }



            }
    }