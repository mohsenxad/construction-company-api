module.exports = function buildTranslateGetProjectItemByContractIdResponse
()
    {
        return function translateGetProjectItemByContractIdResponse
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
                        throw new Error('translateGetProjectItemByContractIdResponse must have response');
                    }
                
                if
                (
                    response[0]&&
                    response[0]["projectItem"]
                )
                    {
                        return response[0]["projectItem"];
                    }
                else
                    {
                        return {};
                    }
                

            }
    }