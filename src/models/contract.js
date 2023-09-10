module.exports = function buildMakeContract
(
    {
        ObjectId
    }
)
    {
        return function makeContract
        (
            {
                companyId,
                contractTypeId,
                contractNumber,
                contractDate,
                contractDateShamsi,
                contractFinishDate,
                contractFinishDateShamsi,
                createDateTime = new Date(),
                isDraft = true,
            }
        )
            {
                let contractTypeMongoId;
                
                if 
                (
                    !contractTypeId
                )
                    {
                        throw new Error('نوع قرارداد را انتخاب کنید.')
                    }
                else
                    {
                        try
                            {
                                contractTypeMongoId = new ObjectId(
                                    contractTypeId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات نوع قرارداد صحیح نمیباشد.')
                            }
                    }

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
                    !contractNumber
                )
                    {
                        throw new Error('شماره قرارداد را وارد کنید.')
                    }
                
                if 
                (
                    !contractDate
                )
                    {
                        throw new Error('تاریخ قرارداد را وارد کنید.')
                    }

                if 
                (
                    !contractDateShamsi
                )
                    {
                        throw new Error('تاریخ شمسی قرارداد را وارد کنید.')
                    }

                if 
                (
                    !contractFinishDate
                )
                    {
                        throw new Error('تاریخ پایان قرارداد را وارد کنید.')
                    }

                if 
                (
                    !contractFinishDateShamsi
                )
                    {
                        throw new Error('تاریخ شمسی پایان قرارداد را وارد کنید.')
                    }

                    

                return Object.freeze(
                    {
                        getCompanyId: ()=> companyId,
                        getContractTypeId: () => contractTypeId,
                        getContractNumber: () => contractNumber,
                        getContractDate: () => contractDate,
                        getContractDateShamsi: ()=> contractDateShamsi,
                        getContractFinishDate: () => contractFinishDate,
                        getContractFinishDateShamsi: ()=> contractFinishDateShamsi,
                        getCreateDateTime: () => createDateTime,
                        getIsDraft: () => isDraft,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            company: companyMongoId,
                            contractType: contractTypeMongoId,
                            contractNumber: contractNumber,
                            contractDate: new Date(contractDate),
                            contractDateShamsi: contractDateShamsi,
                            contractFinishDate: new Date(contractFinishDate),
                            contractFinishDateShamsi: contractFinishDateShamsi,
                            createDateTime: createDateTime,
                            isDraft: isDraft
                        }
                    }
            }
    }