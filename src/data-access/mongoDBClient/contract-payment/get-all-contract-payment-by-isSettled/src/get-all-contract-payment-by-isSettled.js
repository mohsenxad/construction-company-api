module.exports = function buildGetAllContractPaymentByIsSettled
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
                throw new Error('buildGetAllContractPaymentByIsSettled must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllContractPaymentByIsSettled must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllContractPaymentByIsSettled must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractPaymentsFullDetail';

        return async function getAllContractPaymentByIsSettled
        (
            {
                companyId,
                isSettled
            }
        )
            {
                if
                (
                    !companyId
                )
                    {
                        throw new Error('getAllContractPaymentByIsSettled must have companyId.');
                    }

                if
                (
                    typeof isSettled !== "boolean"
                )
                    {
                        throw new Error('getAllContractPaymentByIsSettled must have isSettled.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        companyId:companyId,
                        isSettled: isSettled
                    }
                );

                const response = await collection.find(
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