module.exports = function buildTransalteRemoveProjectResponse
()
    {
        return function transalteRemoveProjectResponse
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
                        throw new Error('transalteRemoveProjectResponse must have response');
                    }
                
                return response;
            }
    }