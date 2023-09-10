module.exports = function buildCreateGetContractReviewByIdOpions
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
                throw new Error('buildCreateGetContractReviewByIdOpions must have ObjectId.');
            }
        return function createGetContractReviewByIdOpions
        (
            {
                contractReviewId
            }
        )
            {

                if
                (
                    !contractReviewId
                )
                    {
                        throw new Error('createGetContractReviewByIdOpions must have userId.');
                    }

                const contractReviewObjectId = new ObjectId(
                    contractReviewId
                );
                
                
                const pipeline = [
                    {
                        '$match': {
                          '_id': contractReviewObjectId
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