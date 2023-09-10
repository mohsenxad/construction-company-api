module.exports = function buildGetAllContractPaymentFromDateAndToDate
(
    {
        getAllContractPaymentByCompanyAndFromDateAndToDateDB
    }
)
    {
        if
        (
            !getAllContractPaymentByCompanyAndFromDateAndToDateDB
        )
            {
                throw new Error('getAllContractPaymentFromDateAndToDate must have getAllContractPaymentByCompanyAndFromDateAndToDateDB.');
            }
        return async function getAllContractPaymentFromDateAndToDate
        (
            {
                filterInfo
            }
        )
            {

                if
                (
                    !filterInfo
                )
                    {
                        throw new Error('getAllContractPaymentFromDateAndToDate must have filterInfo.');
                    }

                const fromDate = filterInfo.fromDate;
                const toDate = filterInfo.toDate;
                const companyId = filterInfo.companyId;

                if
                (
                    !fromDate
                )
                    {
                        throw new Error('getAllContractPaymentFromDateAndToDate filterInfo must have fromDate.');
                    }

                if
                (
                    !toDate
                )
                    {
                        throw new Error('getAllContractPaymentFromDateAndToDate filterInfo must have toDate.');
                    }

                if
                (
                    !companyId
                )
                    {
                        throw new Error('getAllContractPaymentFromDateAndToDate filterInfo must have companyId.');
                    }

                const getAllContractPaymentByCompanyAndFromDateAndToDateDBResult = await getAllContractPaymentByCompanyAndFromDateAndToDateDB(
                    {
                        companyId:companyId,
                        fromDate: fromDate,
                        toDate: toDate
                    }
                );

                return getAllContractPaymentByCompanyAndFromDateAndToDateDBResult;
            }
    }