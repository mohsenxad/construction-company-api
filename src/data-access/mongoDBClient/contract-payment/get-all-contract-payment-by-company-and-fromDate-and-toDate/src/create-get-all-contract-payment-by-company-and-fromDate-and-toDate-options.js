module.exports = function buildCreateGetAllContractPaymentByCompanyAndFromDateAndToDateOptions
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
                throw new Error('buildCreateGetAllContractPaymentByCompanyAndFromDateAndToDateOptions must have ObjectId.');
            }
        return function createGetAllContractPaymentByCompanyAndFromDateAndToDateOptions
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
                        throw new Error('createGetAllContractPaymentByCompanyAndFromDateAndToDateOptions must have companyId.');
                    }

                if
                (
                    !fromDate
                )
                    {
                        throw new Error('createGetAllContractPaymentByCompanyAndFromDateAndToDateOptions must have fromDate.');
                    }

                if
                (
                    !toDate
                )
                    {
                        throw new Error('createGetAllContractPaymentByCompanyAndFromDateAndToDateOptions must have toDate.');
                    }

                const companyObjectId = new ObjectId(
                    companyId
                );

                const filter = {
                    "companyId": companyObjectId,
                    "dueDate":{
                        $gte: new Date(fromDate),
                        $lte: new Date(toDate)
                    },
                    "contract.isAccepted":true
                };

                const options = {
                    filter: filter
                }
                
                return options; 
            }
    }