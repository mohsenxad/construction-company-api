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

        const { getAllContractReviewByUser } = require('./get-all-contract-review-by-user')
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

        const services = Object.freeze(
            {
                addContractReview,
                // removeContractCustomer,
                getAllContractReviewByUser,
                getContractReviewById,
                setContractReviewReviewResult
            }
        );

        return services;

    }