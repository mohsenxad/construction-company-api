module.exports = function buildMakeSystemLog
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
                throw new Error('buildMakeSystemLog must have ObjectId')
            }
        return function makeSystemLog
        (
            {
                userId,
                registerDateTime = new Date(),
                action,
                rowData,
                objectId,
                objectType
            }
        )
            {
                let userMongoId;

                if 
                (
                    !userId
                )
                    {
                        throw new Error('کاربر را انتخاب کنید.');
                    }
                else
                {
                    try
                        {
                            userMongoId = new ObjectId(
                                userId
                            );

                        }
                    catch (error) 
                        {
                            throw new Error('اطلاعات کاربر صحیح نمیباشد')
                        }
                }

                if 
                (
                    !action
                )
                    {
                        throw new Error('نوع فعالیت را انتخاب کنید.');
                    }

                let objectMongoId;

                if
                (
                    objectId
                )
                    {
                        try
                            {
                                objectMongoId = new ObjectId(
                                    objectId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات رفرنس صحیح نمیباشد')
                            }
                    }

                return Object.freeze(
                    {
                        getUserId:() => userId,
                        getAction:() => action,
                        getRegisterDateTime:() => registerDateTime,
                        getRowData:()=> rowData,
                        getObjectId:()=> objectId,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            user: userMongoId,
                            action: action,
                            registerDateTime: registerDateTime,
                            objectId: objectMongoId,
                            rowData: rowData
                        }
                    }
            }
    }