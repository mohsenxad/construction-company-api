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
                                    'let': {
                                        'project_id': '$_id'
                                    }, 
                                    'pipeline': [
                                        {
                                        '$lookup': {
                                            'from': 'projectTypes', 
                                            'localField': 'projectType', 
                                            'foreignField': '_id', 
                                            'as': 'projectType'
                                        }
                                        }, {
                                        '$unwind': {
                                            'path': '$projectType', 
                                            'preserveNullAndEmptyArrays': true
                                        }
                                        }
                                    ], 
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
                                  }, { 
                                    '$lookup': {
                                        'from': 'contractCustomers', 
                                        'localField': '_id', 
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
                                }, {
                                    '$lookup': {
                                        'from': 'contractPayments', 
                                        'localField': '_id', 
                                        'foreignField': 'contract', 
                                        'let': {
                                            'contract_id': '$_id'
                                        }, 
                                        'pipeline': [
                                            {
                                                '$lookup': {
                                                    'from': 'contractPaymentMethods', 
                                                    'localField': 'contractPaymentMethod', 
                                                    'foreignField': '_id', 
                                                    'as': 'contractPaymentMethod'
                                                }
                                            }, {
                                                '$unwind': {
                                                    'path': '$contractPaymentMethod', 
                                                    'preserveNullAndEmptyArrays': true
                                                }
                                            }, {
                                                '$lookup': {
                                                    'from': 'bankAccounts', 
                                                    'localField': 'bankAccount', 
                                                    'foreignField': '_id', 
                                                    'let': {
                                                        'bankAccount_id': '$_id'
                                                    }, 
                                                    'pipeline': [
                                                        {
                                                            '$lookup': {
                                                                'from': 'banks', 
                                                                'localField': 'bank', 
                                                                'foreignField': '_id', 
                                                                'as': 'bank'
                                                            }
                                                        }, {
                                                            '$unwind': {
                                                                'path': '$bank', 
                                                                'preserveNullAndEmptyArrays': true
                                                            }
                                                        }
                                                    ], 
                                                    'as': 'bankAccount'
                                                }
                                            }, {
                                                '$lookup': {
                                                    'from': 'banks', 
                                                    'localField': 'bank', 
                                                    'foreignField': '_id', 
                                                    'as': 'bank'
                                                }
                                            }, {
                                                '$unwind': {
                                                    'path': '$bank', 
                                                    'preserveNullAndEmptyArrays': true
                                                }
                                            }, {
                                                '$unwind': {
                                                    'path': '$bankAccount', 
                                                    'preserveNullAndEmptyArrays': true
                                                }
                                            }
                                        ], 
                                        'as': 'contractPayments'
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
                ];


                const options = {
                    pipeline: pipeline
                }

                return options;
            }
    }