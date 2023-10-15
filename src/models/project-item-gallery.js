module.exports = function buildMakeProjectItemGallery
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
                throw new Error('buildMakeProjectItemGallery must have ObjectId')
            }
        return function makeProjectItemGallery
        (
            {
                projectItemId,
                filenName,
                extention
            }
        )
            {

                let projectItemMongoId;
                if 
                (
                    !projectItemId
                )
                    {
                        throw new Error('ایتم پروژه را انتخاب کنید.')
                    }
                else
                    {
                        try
                            {
                                projectItemMongoId = new ObjectId(
                                    projectItemId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات نوع ایتم پروژه صحیح نمیباشد.')
                            } 
                    }

                if 
                (
                    !filenName
                )
                    {
                        throw new Error('مقدار نام فایل را وارد کنید.')
                    }

                if 
                (
                    !extention
                )
                    {
                        throw new Error('مقدار نوع فایل واحد را وارد کنید.')
                    }


                return Object.freeze(
                    {
                        getProjectItemId: () => projectItemId,
                        getUnit: () => unit,
                        getUnitPrice: ()=> unitPrice,
                        getBlock: ()=> block,
                        getFloor: ()=> floor,
                        getBuildupArea: ()=> buildupArea,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            projectItem: projectItemMongoId,
                            filenName: filenName,
                            extention: extention
                        }
                    }

            }
    }