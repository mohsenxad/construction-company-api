module.exports = function buildGetAllContractPaymentByFilter
(
    {
        getAllContractPaymentByIsSettledDB
    }
)
    {
        if
        (
            !getAllContractPaymentByIsSettledDB
        )
            {
                throw new Error('buildGetAllContractPaymentByFilter must have getAllContractPaymentByIsSettledDB.');
            }
        return async function getAllContractPaymentByFilter
        (
            {
                filter,
                companyId
            }
        )
            {

                if
                (
                    !filter
                )
                    {
                        throw new Error('getAllContractPaymentByFilter must have filter.');
                    }

                if
                (
                    !companyId
                )
                    {
                        throw new Error('getAllContractPaymentByFilter must have companyId.');
                    }

                if
                (
                    filter=='notSettled'
                )
                    {
                        const getAllContractPaymentByIsSettledDBResult = await getAllContractPaymentByIsSettledDB(
                            {
                                companyId: companyId,
                                isSettled: false
                            }
                        );

                        return getAllContractPaymentByIsSettledDBResult;
                    }
                else
                    {
                        throw new Error(`getAllContractPaymentByFilter unknow filter|${filter}`);
                    }

            }
    }