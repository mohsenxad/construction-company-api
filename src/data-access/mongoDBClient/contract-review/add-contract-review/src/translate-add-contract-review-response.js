module.exports = function buildTranslateAddContractReviewResponse
()
    {
        return function translateAddContractReviewResponse
        (
            {
                response
            }
        )
            {
                if
                (
                    !response
                )
                    {
                        throw new Error('addContractReview must have response');
                    }
                else if
                (
                    response &&
                    !response.insertedId
                )
                    {
                        throw new Error('response in addContractReview must have insertedId');
                    }

                
                return response.insertedId;
            }
    }