module.exports = function buildGetAllUserCompanyAccessByCompany
(
    {
        getDb,
        createOptions,
        translateResponse
    }
)
    {

        if
        (
            !getDb
        )
            {
                throw new Error('buildGetAllUserCompanyAccessByCompany must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllUserCompanyAccessByCompany must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllUserCompanyAccessByCompany must have translateResponse.');
            }

        const COLLECTION_NAME = 'userCompanyAccess';

        return async function getAllUserCompanyAccessByCompany
        (
            {
                companyId
            }
        )
            {
                if
                (
                    !companyId
                )
                    {
                        throw new Error('getAllUserCompanyAccessByCompany must have companyId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        companyId:companyId
                    }
                );

                const response = await collection.aggregate(
                    options.pipeline
                )

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;


            }
    }