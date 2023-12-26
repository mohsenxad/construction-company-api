module.exports = function buildRemoveProjectById
(
    {
        removeProjectByIdDB,
        getAllContractByProjectDB
    }
)
    {
        if
        (
            !removeProjectByIdDB
        )
            {
                throw new Error('buildRemoveProjectById must have removeProjectByIdDB.');
            }

        return async function removeProjectById
        (
            {
                projectId
            }
        )
            {
                if
                (
                    !projectId
                )
                    {
                        throw new Error('removeProjectById must have projectId.');
                    }

                const getAllContractByProjectDBResult = await getAllContractByProjectDB(
                    {
                        projectId: projectId
                    }
                );


                if
                (
                    getAllContractByProjectDBResult &&
                    getAllContractByProjectDBResult.length != 0
                )
                    {
                        const removeProjectByIdErrorMessage = `حذف پروژه به دلیل وجود ${getAllContractByProjectDBResult.length} قرارداد مرتبط ، امکانپذیر نمیباشد. ابتدا قرارداد های مرتبط با این پروژه را اصلاح کنید و بعد اقدام به حذف پروژه نمایید.`;
                        throw new Error(removeProjectByIdErrorMessage);
                    }
                else
                    {
                        const removeProjectByIdDBResult = await removeProjectByIdDB(
                            {
                                projectId: projectId
                            }
                        );

                        return removeProjectByIdDBResult;
                    }

                
            }
    }