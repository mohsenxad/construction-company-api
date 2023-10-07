module.exports = function buildTransalteRemoveContractReviewResponse
()
    {
        return function transalteRemoveContractReviewResponse
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
                        throw new Error('transalteRemoveContractReviewResponse must have response');
                    }
                
                return response;
            }
    }