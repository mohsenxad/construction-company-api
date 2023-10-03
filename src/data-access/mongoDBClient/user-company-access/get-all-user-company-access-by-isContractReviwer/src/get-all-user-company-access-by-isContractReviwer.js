module.exports = function buildGetAllUserCompanyAccessByIsContractReviewer
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
                throw new Error('buildGetAllUserCompanyAccessByIsContractReviewer must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllUserCompanyAccessByIsContractReviewer must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllUserCompanyAccessByIsContractReviewer must have translateResponse.');
            }

        const COLLECTION_NAME = 'userCompanyAccess';

        return async function getAllUserCompanyAccessByIsContractReviewer
        (
            {
                companyId,
                isContractReviewer
            }
        )
            {
                if
                (
                    !companyId
                )
                    {
                        throw new Error('getAllUserCompanyAccessByIsContractReviewer must have companyId.');
                    }

                if
                (
                    typeof isContractReviewer !== "boolean"
                )
                    {
                        throw new Error('getAllUserCompanyAccessByIsContractReviewer must have isContractReviewer.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        companyId:companyId,
                        isContractReviewer: isContractReviewer
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