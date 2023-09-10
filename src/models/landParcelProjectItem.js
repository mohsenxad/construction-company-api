module.exports = function buildMakeLandParcelProjectItem
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
                throw new Error('buildMakeLandParcelProjectItem must have ObjectId')
            }
        return function makeLandParcelProjectItem
        (
            {
                projectId,
                unit,
                unitPrice,
                area
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
                    !area
                )
                    {
                        throw new Error('مقدار زیربنا را وارد کنید')
                    }
                    
                    

                return Object.freeze(
                    {
                        getProjectId: () => projectId,
                        getUnit: () => unit,
                        getUnitPrice: ()=> unitPrice,
                        getArea: ()=> area,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            project: projectMongoId,
                            unit: unit,
                            unitPrice: unitPrice,
                            area: area
                        }
                    }
            }
    }