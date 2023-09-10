module.exports = function buildMakeProject
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
                throw new Error('buildMakeProject must have ObjectId')
            }

        return async function makeProject
        (
            {
                companyId,
                title,
                projectTypeId,
                address,
                isActive = true
            }
        )
            {
                let companyMongoId;
            
                if 
                (
                    !companyId
                )
                    {
                        throw new Error('شرکت را انتخاب کنید.')
                    }
                else
                    {
                        try
                            {
                                companyMongoId = new ObjectId(
                                    companyId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات شرکت صحیح نمیباشد.')
                            }
                    }


                if 
                (
                    !title
                )
                    {
                        throw new Error('عنوان پروژه را وارد کنید.')
                    }

                let projectTypeMongoId;

                if 
                (
                    !projectTypeId
                )
                    {
                        throw new Error('نوع پروژه را انتخاب کنید.')
                    }
                else
                    {
                        try
                            {
                                projectTypeMongoId = new ObjectId(
                                    projectTypeId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات نوع پروژه صحیح نمیباشد.')
                            } 
                    }

                if 
                (
                    !address
                )
                    {
                        throw new Error('آدرس پروژه را وارد کنید.')
                    }

                let defaultUnitPriceNumber = undefined;


                return Object.freeze(
                    {
                        getCompanyId: ()=> companyId,
                        getTitle: () => title,
                        getProjectTypeId: () => projectTypeId,
                        getAddress: ()=> address,
                        getIsActive: ()=> isActive,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            company: companyMongoId,
                            title: title,
                            projectType: projectTypeMongoId,
                            address: address,
                            isActive: isActive
                        }
                    }
            }
    }