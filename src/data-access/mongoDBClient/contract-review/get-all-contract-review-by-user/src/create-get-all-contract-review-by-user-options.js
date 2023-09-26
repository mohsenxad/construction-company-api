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
                    // {
                    //     '$lookup': {
                    //         'from': 'contracts', 
                    //         'localField': 'contract', 
                    //         'foreignField': '_id', 
                    //         'as': 'contract'
                    //     }
                    // },
                    // {
                    //     '$unwind': {
                    //         'path': '$contract'
                    //     }
                    // },
                    // {
                    //     '$lookup': {
                    //         'from': 'contractTypes', 
                    //         'localField': 'contract.contractType', 
                    //         'foreignField': '_id', 
                    //         'as': 'contractType'
                    //     }
                    // },
                    // {
                    //     '$unwind': {
                    //         'path': '$contractType'
                    //     }
                    // },
                    // {
                    //     '$lookup': {
                    //         'from': 'projects', 
                    //         'localField': 'contract.project', 
                    //         'foreignField': '_id',
                    //         'let': {
                    //             'project_id': '$_id'
                    //         }, 
                    //         'pipeline': [
                    //             {
                    //             '$lookup': {
                    //                 'from': 'projectTypes', 
                    //                 'localField': 'projectType', 
                    //                 'foreignField': '_id', 
                    //                 'as': 'projectType'
                    //             }
                    //             }, {
                    //             '$unwind': {
                    //                 'path': '$projectType', 
                    //                 'preserveNullAndEmptyArrays': true
                    //             }
                    //             }
                    //         ],  
                    //         'as': 'project'
                    //     }
                    // },
                    // {
                    //     '$unwind': {
                    //         'path': '$project'
                    //     }
                    // },
                    // {
                    //     '$lookup': {
                    //         'from': 'projectItems', 
                    //         'localField': 'contract.projectItem', 
                    //         'foreignField': '_id', 
                    //         'as': 'projectItem'
                    //     }
                    // },
                    // {
                    //     '$unwind': {
                    //         'path': '$projectItem'
                    //     }
                    // },
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