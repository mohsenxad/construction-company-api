module.exports = function buildCreateGetAllContractByProjectAndStartDateAndEndDateOptions
(
    {
        ObjectId
    }
)
    {
        if
        (
            !ObjectId
        )
            {
                throw new Error('buildCreateGetAllContractByProjectAndStartDateAndEndDateOptions must have ObjectId.');
            }

        return function createGetAllContractByProjectAndStartDateAndEndDateOptions
        (
            {
                projectId,
                startDate,
                endDate
            }
        )
            {

                

                const projectObjectId = new ObjectId(
                    projectId
                );


                const filter = {
                    projectId: projectObjectId,
                    contractDate: {
                        $gte: new Date(startDate),
                        $lte: new Date(endDate)
                    }
                }


                const options = {
                    filter: filter
                }

                return options;
            }
    }