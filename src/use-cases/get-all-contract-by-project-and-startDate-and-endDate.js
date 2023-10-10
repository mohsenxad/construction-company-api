module.exports = function buildGetAllContractByProjectAndStartDateAndEndDate
(
    {
        getAllContractByProjectAndStartDateAndEndDateDB
    }
)
    {
        if
        (
            !getAllContractByProjectAndStartDateAndEndDateDB
        )
            {
                throw new Error('buildGetAllContractByProjectAndStartDateAndEndDate must have getAllContractByProjectAndStartDateAndEndDateDB.');
            }
        return async function getAllContractByProjectAndStartDateAndEndDate
        (
            {
                getAllContractByProjectAndStartDateAndEndDateInfo
            }
        )
            {
                getAllContractByProjectAndStartDateAndEndDate
                if
                (
                    !getAllContractByProjectAndStartDateAndEndDateInfo
                )
                    {
                        throw new Error('getAllContractByProjectAndStartDateAndEndDate must have getAllContractByProjectAndStartDateAndEndDate.');
                    }
                else
                    {
                        if
                        (
                            !getAllContractByProjectAndStartDateAndEndDateInfo.projectId
                        )
                            {
                                throw new Error('getAllContractByProjectAndStartDateAndEndDate getAllContractByProjectAndStartDateAndEndDateInfo must have projectId.');
                            }
        
                        if
                        (
                            !getAllContractByProjectAndStartDateAndEndDateInfo.startDate
                        )
                            {
                                throw new Error('getAllContractByProjectAndStartDateAndEndDate getAllContractByProjectAndStartDateAndEndDateInfo must have startDate.');
                            }
        
                            if
                        (
                            !getAllContractByProjectAndStartDateAndEndDateInfo.endDate
                        )
                            {
                                throw new Error('getAllContractByProjectAndStartDateAndEndDate  getAllContractByProjectAndStartDateAndEndDateInfo must have endDate.');
                            }
                    }

                

                const getAllContractByProjectAndStartDateAndEndDateDBResult = await getAllContractByProjectAndStartDateAndEndDateDB(
                    {
                        projectId: getAllContractByProjectAndStartDateAndEndDateInfo.projectId,
                        startDate: getAllContractByProjectAndStartDateAndEndDateInfo.startDate,
                        endDate: getAllContractByProjectAndStartDateAndEndDateInfo.endDate
                    }
                );

                return getAllContractByProjectAndStartDateAndEndDateDBResult;
            }
    }