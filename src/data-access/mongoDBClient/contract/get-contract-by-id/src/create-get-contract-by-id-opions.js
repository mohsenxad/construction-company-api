module.exports = function buildCreateGetContractByIdOpions
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
                throw new Error('buildCreateGetContractByIdOpions must have ObjectId.');
            }
        return function createGetContractByIdOpions
        (
            {
                contractId
            }
        )
            {

                if
                (
                    !contractId
                )
                    {
                        throw new Error('createGetContractByIdOpions must have contractId.');
                    }

                const contractObjectId = new ObjectId(
                    contractId
                );

                const filter = {
                    "_id": contractObjectId
                };

                const pipeline = [
                    {
                        '$match': {
                          '_id': contractObjectId
                        }
                    },
                    {
                        '$lookup': {
                            'from': 'projectItems', 
                            'localField': 'projectItem', 
                            'foreignField': '_id', 
                            'as': 'projectItem'
                        }
                    },
                    {
                        '$unwind': {
                            'path': '$projectItem'
                        }
                    },
                    {
                        '$lookup': {
                            'from': 'contractTypes', 
                            'localField': 'contractType', 
                            'foreignField': '_id', 
                            'as': 'contractType'
                        }
                    },
                    {
                        '$unwind': {
                            'path': '$contractType'
                        }
                    },
                    {
                        '$lookup': {
                            'from': 'projects', 
                            'localField': 'project', 
                            'foreignField': '_id', 
                            'as': 'project'
                        }
                    },
                    {
                        '$unwind': {
                            'path': '$project'
                        }
                    },
                    {
                        '$lookup': {
                            'from': 'projectTypes', 
                            'localField': 'project.projectType', 
                            'foreignField': '_id', 
                            'as': 'projectType'
                        }
                    },
                    {
                        '$unwind': {
                            'path': '$projectType'
                        }
                    },
                    {
                        '$lookup': {
                            'from': 'contractCustomers', 
                            'localField': '_id', 
                            'foreignField': 'contract', 
                            'as': 'contractCustomers'
                        }
                    },
                    {
                        '$lookup': {
                            'from': 'customers', 
                            'localField': 'contractCustomers.customer', 
                            'foreignField': '_id', 
                            'as': 'customers'
                        }
                    },
                    {
                        '$lookup': {
                            'from': 'contractPayments', 
                            'localField': '_id', 
                            'foreignField': 'contract', 
                            'as': 'contractPayments'
                        }
                    },
                    {
                        '$lookup': {
                            'from': 'contractPaymentMethods', 
                            'localField': 'contractPayments.contractPaymentMethod', 
                            'foreignField': '_id', 
                            'as': 'contractPayments.contractPaymentMethod'
                        }
                    }
                ];


                const options = {
                    pipeline: pipeline,
                    filter: filter
                }
                
                return options;
            }
    }