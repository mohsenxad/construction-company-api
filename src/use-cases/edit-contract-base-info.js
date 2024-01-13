module.exports = function buildEditContractBaseInfo
(
    {
        editContractBaseInfoDB
    }
)
    {
        if
        (
            !editContractBaseInfoDB
        )
            {
                throw new Error('buildEditContractBaseInfo must have editContractBaseInfoDB.');
            }
            
        return async function editContractBaseInfo
        (
            {
                editContractBaseInfoRequest
            }
        )
            {

                if
                (
                    !editContractBaseInfoRequest
                )
                    {
                        throw new Error('editContractBaseInfo must have editContractBaseInfoRequest.');
                    }

                const editContractBaseInfoDBResult = await editContractBaseInfoDB(
                    {
                        contractId: editContractBaseInfoRequest.contractId,
                        contractNumber: editContractBaseInfoRequest.contractNumber,
                        contractDate: editContractBaseInfoRequest.contractDate,
                        contractDateShamsi: editContractBaseInfoRequest.contractDateShamsi,
                        contractFinishDate: editContractBaseInfoRequest.contractFinishDate,
                        contractFinishDateShamsi: editContractBaseInfoRequest.contractFinishDateShamsi,
                    }
                );

                return editContractBaseInfoDBResult;

                    
            }
    }