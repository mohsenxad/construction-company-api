module.exports = function buildCreateGetProjectItemByContractIdOptions
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
                throw new Error('buildCreateGetProjectItemByContractIdOptions must have ObjectId.');
            }
        return function createGetProjectItemByContractIdOptions
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
                        throw new Error('createGetProjectItemByContractIdOptions must have contractId.');
                    }

                const contractObjectId = new ObjectId(
                    contractId
                );

                const pipeline = [
                    {
                        "$match": {
                            "_id":contractObjectId
                        },
                    },
                    {
                        '$lookup':
                            {
                                'from': 'projectItems', 
                                'localField': 'projectItem', 
                                'foreignField': '_id', 
                                'let': {
                                'projectItem_id': '$_id'
                                }, 
                                'pipeline': [
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
                                }, {
                                    '$unwind': {
                                    'path': '$project', 
                                    'preserveNullAndEmptyArrays': true
                                    }
                                }
                                ], 
                                'as': 'projectItem'
                            }
                    },
                    {
                        '$unwind': {
                            'path': '$projectItem', 
                            'preserveNullAndEmptyArrays': true
                        }
                    },
                    {
                        '$project': {
                            'projectItem': 1
                        }
                    },
                    {
                        $limit: 1 
                    }
                ];


                const options = {
                    pipeline: pipeline
                }

                return options;

            }
    }