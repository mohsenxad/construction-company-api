module.exports = function buildMakeContractTemplate
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
                throw new Error('buildMakeContractTemplate must have ObjectId.');
            }
         return async function makeContractTemplate
        (
            {
                companyId,
                title,
                htmlContent,
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
                        throw new Error('عنوان قالب قرارداد را وارد کنید.')
                    }


                if 
                (
                    !htmlContent
                )
                    {
                        throw new Error('محتوای قالب قرارداد را وارد کنید.')
                    }


                return Object.freeze(
                    {
                        getCompanyId: ()=> companyId,
                        getTitle: () => title,
                        getHtmlContent: ()=> htmlContent,
                        getIsActive: ()=> isActive,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            title: title,
                            htmlContent: htmlContent,
                            isActive: isActive,
                            company: companyMongoId,
                        }
                    }
            }
    }