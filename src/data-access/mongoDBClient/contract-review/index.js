module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        const { addContractReview } = require('./add-contract-review')
        (
            {
                getDb: getDb
            } 
        );

        // const { removeContractCustomer } = require('./remove-contract-customer')
        // (
        //     {
        //         getDb: getDb
        //     } 
        // );


        
        const { getAllContractReviewByContract } = require('./get-all-contract-review-by-contract')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        const { getContractReviewById } = require('./get-contract-review-by-id')
        (
            {
                getDb:getDb,
                ObjectId: ObjectId
            }
        )

        

        const { setContractReviewReviewResult } = require('./set-contract-review-review-result')
        (
            {
                getDb:getDb,
                ObjectId: ObjectId
            }
        )

        
        const { getAllContractReviewByUserCompanyAccessId } = require('./get-all-contract-review-by-user-company-access-id')
        (
            {
                getDb:getDb,
                ObjectId: ObjectId
            }
        );


        

        const { removeContractReview } = require('./remove-contract-review')
        (
            {
                getDb:getDb,
                ObjectId: ObjectId
            }
        );

        const services = Object.freeze(
            {
                addContractReview,
                removeContractReview,
                getContractReviewById,
                setContractReviewReviewResult,
                getAllContractReviewByContract,
                getAllContractReviewByUserCompanyAccessId
            }
        );

        return services;

    }