const agg = [
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
      'from': 'contractTypes', 
      'localField': 'contractType', 
      'foreignField': '_id', 
      'as': 'contractType'
    }
  }, {
    '$unwind': {
      'path': '$contractType', 
      'preserveNullAndEmptyArrays': true
    }
  }, {
    '$lookup': {
      'from': 'projects', 
      'localField': 'project', 
      'foreignField': '_id', 
      'as': 'project'
    }
  }, {
    '$unwind': {
      'path': '$project', 
      'preserveNullAndEmptyArrays': true
    }
  }, {
    '$addFields': {
      'projectId': '$project._id'
    }
  }, {
    '$lookup': {
      'from': 'projectTypes', 
      'localField': 'project.projectType', 
      'foreignField': '_id', 
      'as': 'project.projectType'
    }
  }, {
    '$unwind': {
      'path': '$project.projectType', 
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
          '$lookup': {
            'from': 'bankAccounts', 
            'localField': 'bankAccount', 
            'foreignField': '_id', 
            'as': 'bankAccount'
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
  }, {
    '$lookup': {
      'from': 'contractReviews', 
      'localField': '_id', 
      'foreignField': 'contract', 
      'let': {
        'contract_review_id': '$_id'
      }, 
      'pipeline': [
        {
          '$lookup': {
            'from': 'users', 
            'localField': 'user', 
            'foreignField': '_id', 
            'as': 'user'
          }
        }, {
          '$unwind': {
            'path': '$user', 
            'preserveNullAndEmptyArrays': true
          }
        }
      ], 
      'as': 'contractReviews'
    }
  }
];
