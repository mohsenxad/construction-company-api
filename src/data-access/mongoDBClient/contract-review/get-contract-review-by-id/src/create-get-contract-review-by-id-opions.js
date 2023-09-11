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
                            'let':{
                              'contract_id': '$_id'
                            },
                            'pipeline':[
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
                                      'path': '$contractType', 
                                      'preserveNullAndEmptyArrays': true
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
                                      'path': '$project', 
                                      'preserveNullAndEmptyArrays': true
                                    }
                                },
                                  {
                                  '$lookup': {
                                    'from': 'projectItems', 
                                    'localField': 'projectItem', 
                                    'foreignField': '_id', 
                                    'as': 'projectItem'
                                  }
                                }, {
                                    '$unwind': {
                                      'path': '$projectItem', 
                                      'preserveNullAndEmptyArrays': true
                                    }
                                  }
                                ],
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