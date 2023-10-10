[
  {
    '$addFields': {
      'contractId': '$contract'
    }
  }, {
    '$lookup': {
      'from': 'contracts', 
      'localField': 'contract', 
      'foreignField': '_id', 
      'let': {
        'contract_id': '$_id'
      }, 
      'pipeline': [
        {
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
            'let': {
              'contract_id': '$_id'
            }, 
            'pipeline': [
              {
                '$lookup': {
                  'from': 'customers', 
                  'localField': 'customer', 
                  'foreignField': '_id', 
                  'as': 'customer'
                }
              }, {
                '$unwind': {
                  'path': '$customer', 
                  'preserveNullAndEmptyArrays': true
                }
              }
            ], 
            'as': 'contractCustomers'
          }
        }
      ], 
      'as': 'contract'
    }
  }, {
    '$unwind': {
      'path': '$contract', 
      'preserveNullAndEmptyArrays': true
    }
  }, {
    '$addFields': {
      'companyId': '$contract.company'
    }
  }, {
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
    '$unwind': {
      'path': '$bankAccount', 
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
    '$sort': {
      'dueDate': -1
    }
  }
]