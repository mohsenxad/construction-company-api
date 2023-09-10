module.exports = function buildGetAllContractPaymentByCompanyAndFromDateAndToDate
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
                throw new Error('buildGetAllContractPaymentByContract must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllContractPaymentByContract must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllContractPaymentByContract must have translateResponse.');
            }

        const COLLECTION_NAME = 'contractPaymentsFullDetail';

        return async function getAllContractPaymentByCompanyAndFromDateAndToDate
        (
            {
                companyId,
                fromDate,
                toDate
            }
        )
            {
                if
                (
                    !companyId
                )
                    {
                        throw new Error('getAllContractPaymentByCompanyAndFromDateAndToDate must have companyId.');
                    }

                if
                (
                    !fromDate
                )
                    {
                        throw new Error('getAllContractPaymentByCompanyAndFromDateAndToDate must have fromDate.');
                    }

                if
                (
                    !toDate
                )
                    {
                        throw new Error('getAllContractPaymentByCompanyAndFromDateAndToDate must have toDate.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        companyId:companyId,
                        fromDate: fromDate,
                        toDate: toDate
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