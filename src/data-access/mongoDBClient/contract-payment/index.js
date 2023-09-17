module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        const { addContractPayment } = require('./add-contract-payment')
        (
            {
                getDb: getDb
            } 
        );

        const { getAllContractPaymentByContract } = require('./get-all-contract-payment-by-contract')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        
        const { getAllContractPaymentByCompanyAndFromDateAndToDate } = require('./get-all-contract-payment-by-company-and-fromDate-and-toDate')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        const { removeContractPayment } = require('./remove-contract-payment')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );

        const { getContractPaymentById } = require('./get-contract-payment-by-id')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        const { setContractPaymentIsSettled } = require('./set-contract-payment-isSettled')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        
        const { getAllContractPaymentByIsSettled } = require('./get-all-contract-payment-by-isSettled')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        const services = Object.freeze(
            {
                addContractPayment,
                getAllContractPaymentByContract,
                getAllContractPaymentByCompanyAndFromDateAndToDate,
                removeContractPayment,
                getContractPaymentById,
                setContractPaymentIsSettled,
                getAllContractPaymentByIsSettled
            }
        );

        return services;

    }