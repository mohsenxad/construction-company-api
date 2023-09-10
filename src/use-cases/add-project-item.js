module.exports = function buildAddProjectItem
(
    {
        addProjectItemDB,
        makeResidentialProjectItem,
        makeLandParcelProjectItem
    }
)
    {
        if
        (
            !addProjectItemDB
        )
            {
                throw new Error('buildAddProjectItem must have addProjectItemDB.');
            }

        if
        (
            !makeResidentialProjectItem
        )
            {
                throw new Error('buildAddProjectItem must have makeResidentialProjectItem.');
            }

        if
        (
            !makeLandParcelProjectItem
        )
            {
                throw new Error('buildAddProjectItem must have makeLandParcelProjectItem.');
            }

        return async function addProjectItem
        (
            {
                residentialProjectItemInfo,
                landParcelProjectItemInfo
            }
        )
            {
                if
                (
                    !residentialProjectItemInfo &&
                    !landParcelProjectItemInfo
                )
                    {
                        throw new Error('addProjectItem must have projectItemInfo.');
                    }

                // check something to decide withc item will it be
                // project Type 


                let projectItem;

                if
                (
                    residentialProjectItemInfo
                )
                    {
                        projectItem = makeResidentialProjectItem(
                            residentialProjectItemInfo
                        )
                    }
                
                if
                (
                    landParcelProjectItemInfo  
                )
                    {
                        projectItem = makeLandParcelProjectItem(
                            landParcelProjectItemInfo
                        )
                    }

                const addProjectItemDBResult = await addProjectItemDB(
                    {
                        projectItem: projectItem
                    }
                );

                return addProjectItemDBResult;
            }
    }