module.exports = function buildTranslateSetUserCompanyAccessPermissionResponse
()
    {
        return function translateSetUserCompanyAccessPermissionResponse
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
                        throw new Error('translateSetUserCompanyAccessPermissionResponse must have response');
                    }
                
                return response;
            }
    }