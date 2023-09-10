module.exports = function buildCreateAddContractReviewOptions
()
    {
        return function createAddContractReviewOptions
        (
            {
                contractReview
            }
        )
            {
                if
                (
                    !contractReview
                )
                    {
                        throw new Error('createAddContractReviewOptions must have contractReview');
                    }
                const document = contractReview.toBson()

                const options = {
                    document: document
                };

                return options;
            }
    }