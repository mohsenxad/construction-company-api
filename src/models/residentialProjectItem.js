module.exports = function buildMakeResidentialProjectItem
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
                throw new Error('buildMakeResidentialProjectItem must have ObjectId')
            }
        return function makeResidentialProjectItem
        (
            {
                projectId,
                unit,
                unitPrice,
                block,
                floor,
                buildupArea
            }
        )
            {

                let projectMongoId;
                if 
                (
                    !projectId
                )
                    {
                        throw new Error('پروژه را انتخاب کنید.')
                    }
                else
                    {
                        try
                            {
                                projectMongoId = new ObjectId(
                                    projectId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات نوع پروژه صحیح نمیباشد.')
                            } 
                    }

                if 
                (
                    !unit
                )
                    {
                        throw new Error('مقدار واحد را وارد کنید.')
                    }

                if 
                (
                    !unitPrice
                )
                    {
                        throw new Error('مقدار مبلغ واحد را وارد کنید.')
                    }

                if 
                (
                    !buildupArea
                )
                    {
                        throw new Error('مقدار زیربنا را وارد کنید')
                    }
                    
                    
                if 
                (
                    !floor
                )
                    {
                        throw new Error('مقدار طبقه را وارد کنید')
                    }
                    

                return Object.freeze(
                    {
                        getProjectId: () => projectId,
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
                            project: projectMongoId,
                            unit: unit,
                            unitPrice: unitPrice,
                            block: block,
                            floor: floor,
                            buildupArea: buildupArea
                        }
                    }

            }
    }