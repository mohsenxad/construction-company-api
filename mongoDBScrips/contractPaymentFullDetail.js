const agg = [
  {
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
    '$addFields': {
      'contractId': '$contract._id'
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
      'as': 'bankAccount'
    }
  }, {
    '$unwind': {
      'path': '$bankAccount', 
      'preserveNullAndEmptyArrays': true
    }
  }
];