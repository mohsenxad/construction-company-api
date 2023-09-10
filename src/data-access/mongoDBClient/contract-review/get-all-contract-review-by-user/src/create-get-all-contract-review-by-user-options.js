module.exports = function buildCreateGetAllContractReviewByUserOptions
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
                throw new Error('buildCreateGetAllContractReviewByUserOptions must have ObjectId.');
            }
        return function createGetAllContractReviewByUserOptions
        (
            {
                userId
            }
        )
            {
                if
                (
                    !userId
                )
                    {
                        throw new Error('createGetAllContractReviewByUserOptions must have userId.');
                    }

                const userObjectId = new ObjectId(
                    userId
                );
                
                
                const pipeline = [
                    {
                        '$match': {
                          'user': userObjectId
                        }
                    },
                    {
                        '$lookup': {
                            'from': 'contracts', 
                            'localField': 'contract', 
                            'foreignField': '_id', 
                            'as': 'contract'
                        }
                    },
                    {
                        '$unwind': {
                            'path': '$contract'
                        }
                    },
                    {
                        '$lookup': {
                            'from': 'contractTypes', 
                            'localField': 'contract.contractType', 
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
                            'localField': 'contract.project', 
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
                            'from': 'projectItems', 
                            'localField': 'contract.projectItem', 
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
                            'from': 'contractCustomers', 
                            'localField': 'contract._id', 
                            'foreignField': 'contract', 
                            'as': 'contractCustomers'
                        }
                    }, {
                        '$lookup': {
                            'from': 'customers', 
                            'localField': 'contractCustomers.customer', 
                            'foreignField': '_id', 
                            'as': 'customers'
                        }
                    }
                ];


                const options = {
                    pipeline: pipeline
                }

                return options;

            }
    }