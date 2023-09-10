module.exports = function buildMakeContractReview
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
                throw new Error('buildMakeContractReview must have ObjectId')
            }
        return function makeContractReview
        (
            {
                userId,
                contractId,
                registerDateTime = new Date()
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

                let contractMongoId;
                if 
                (
                    !contractId
                )
                    {
                        throw new Error('قرارداد را انتخاب کنید.');
                    }
                else
                    {
                        try
                            {
                                contractMongoId = new ObjectId(
                                    contractId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات قرارداد صحیح نمیباشد')
                            }
                    }

                return Object.freeze(
                    {
                        geUserId:() => userId,
                        getContractId:() => contractId,
                        getRegisterDateTime:() => registerDateTime,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            user: userMongoId,
                            contract: contractMongoId,
                            registerDateTime: registerDateTime,
                        }
                    }
            }
    }