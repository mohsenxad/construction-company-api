var jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const buildAddBankAccount = require('./add-bank-account');
const buildAddProject = require('./add-project');
const buildAddCustomer = require('./add-customer');
const buildDrafContract = require('./draf-contract');
const buildAddContractPayment = require('./add-contract-payment');
const buildAddProjectItem = require('./add-project-item');
const buildAssignCustomerToContract = require('./assign-customer-to-contract');
const buildGetAllProjects = require('./get-all-projects');
const buildGetAllBanks = require('./get-all-banks');
const buildGetAllBankAccounts = require('./get-all-bank-accounts');
const buildGetAllContractPaymentMethods = require('./get-all-contract-payment-methods');
const buildGetAllContractTypes = require('./get-all-contract-types');
const buildGetAllProjectTypes = require('./get-all-project-types');
const buildGetProjectById = require('./get-project-by-id');
const buildGetContractById = require('./get-contract-by-id');
const buildGetAllContractCustomerByContractId = require('./get-all-contract-customer-by-contract-id');
const buildGetAllContractPaymentByContractId = require('./get-all-contract-payment-by-contract-id');
const buildFindCustomerByNationalCode = require('./find-customer-by-national-code');
const buildGetAllContracts = require('./get-all-contract');
const buildGetProjectItemByContractId = require('./get-projectItem-by-contract-id');
const buildRemoveContractProjectItem = require('./remove-contract-projectItem');
const buildSetContractProjectAndProjectItem = require('./set-contract-project-and-projectItem');
const buildSetContractPayablePriceAndDiscount = require('./set-contract-payable-price-and-discount');
const buildGetAllUsers = require('./get-all-users');
const buildAddUser = require('./add-user');
const buildGetAllContractByProject = require('./get-all-contract-by-project');
const buildGetUserById = require('./get-user-by-id');
const buildSetUserAccess = require('./set-user-access');
const buildAddContractReview = require('./add-contract-review');
const buildGetAllContractReviewByUserCompanyAccessId = require('./get-all-contract-review-by-user-company-access-id');
const buildGetAllContractReviewByContractId = require('./get-all-contract-review-by-contract-id');
const buildGetContractReviewById = require('./get-contract-review-by-id')
const buildSetContractReviewReviewResult = require('./set-contract-review-review-result');
const buildRemoveCustomerFromContract = require('./remove-customer-from-contract');
const buildGetAllCompanies = require('./get-all-company');
const buildGetAllUserCompanyAccessByUserId = require('./get-all-user-company-access-by-user-id');
const buildLogin = require('./login');
const buildGetUserFromToken = require('./get-user-from-token');
const buildAuthorization = require('./authorization');
const buildGetAllContractPaymentFromDateAndToDate = require('./get-all-contract-payment-fromDate-and-toDate');
const buildRemovePaymentFromContract = require('./remove-payment-from-contract');
const buildContractRequestConfirmation = require('./contract-request-confirmation');
const buildSetContractContent = require('./set-contract-content');
const buildGetAllContractByStatus = require('./get-all-contract-by-status');
//const buildAddContractTemplate = require('./add-contract-template');
const buildGetAllContractTemplate = require('./contract-template/get-all-contract-template');
const buildGetContractPaymentById = require('./get-contract-payment-by-id');
const buildSetContractPaymentSettlement = require('./set-contract-payment-settlement');
const buildGetAllContractPaymentByFilter = require('./get-all-contract-payment-by-filter');
const buildGetAllUserCompanyAccessByFilter = require('./get-all-user-company-access-by-filter');
const buildGetUserCompanyAccessById = require('./get-user-company-access-by-id');
const buildGetAllUserCompanyAccessByCompany = require('./get-all-user-company-access-by-company');
const buildRemoveContractReview = require('./remove-contrract-review');
const buildGetAllContractByProjectAndStartDateAndEndDate = require('./get-all-contract-by-project-and-startDate-and-endDate');
const buildGenerateRandomFilename = require('./generate-random-filename');
const buildRemoveContractPayablePriceAndDiscount = require('./remove-contract-payable-price-and-discount');
const buildAddSystemLog = require('./add-system-log');
const buildAddUserCompanyAccess = require('./add-user-company-access');
const buildRemoveProjectById = require('./remove-project-by-id');
const buildRemoveContractById = require('./remove-contract-by-Id');
const buildGetCustomerById = require('./get-customer-by-id');
const buildEditCustomer = require('./edit-customer');

module.exports = function
(
    {
        mongoDb_credentials,
        JWT_SECRET

    }
    
)
    {

        const dataAccess = require('../data-access')(
            {
                mongoDb_credentials: mongoDb_credentials
            }
        );

        const models = require('../models')();

        const addSystemLog = buildAddSystemLog(
            {
                makeSystemLog: models.makeSystemLog,
                addSystemLogDB: dataAccess.mongo.systemLog.addSystemLog
            }
        );

        const addBankAccount = buildAddBankAccount(
            {
                addBankAccountDB: dataAccess.mongo.bankAccount.addBankAccount,
                makeBankAccount: models.makeBankAccount
            }
        );

        const addProject = buildAddProject(
            {
                addProjectDB: dataAccess.mongo.project.addProject,
                makeProject: models.makeProject
            }
        );

        const addCustomer = buildAddCustomer(
            {
                addCustomerDB: dataAccess.mongo.customer.addCustomer,
                makeCustomer: models.makeCustomer
            }
        );

        const drafContract = buildDrafContract(
            {
                addContractDB: dataAccess.mongo.contract.addContract,
                makeContract: models.makeContract,
                addSystemLog: addSystemLog
            }
        );

        const addContractPayment = buildAddContractPayment(
            {
                addContractPaymentDB: dataAccess.mongo.contractPayment.addContractPayment,
                makeContractPaymentDeposit: models.makeContractPaymentDeposit,
                makeContractPaymentCheque: models.makeContractPaymentCheque,
                makeContractPaymentDicker: models.makeContractPaymentDicker,
                makeContractPaymentDeed: models.makeContractPaymentDeed
            }
        );

        const addProjectItem = buildAddProjectItem(
            {
                addProjectItemDB: dataAccess.mongo.projectItem.addProjectItem,
                makeLandParcelProjectItem: models.makeLandParcelProjectItem,
                makeResidentialProjectItem: models.makeResidentialProjectItem
            }
        );

        const assignCustomerToContract = buildAssignCustomerToContract(
            {
                addContractCustomerDB: dataAccess.mongo.contractCustomer.addContractCustomer,
                makeContractCustomer: models.makeContractCustomer
            }
        );

        const getAllProjects = buildGetAllProjects(
            {
                getAllProjectDB: dataAccess.mongo.project.getAllProject
            }
        );

        const getAllBanks = buildGetAllBanks(
            {
                getAllBankDB: dataAccess.mongo.bank.getAllBank
            }
        );

        const getAllBankAccounts = buildGetAllBankAccounts(
            {
                getAllBankAccountDB: dataAccess.mongo.bankAccount.getAllBankAccount
            }
        );

        const getAllContractPaymentMethods = buildGetAllContractPaymentMethods(
            {
                getAllContractPaymentMethodDB: dataAccess.mongo.contractPaymentMethod.getAllContractPaymentMethods
            }
        );

        const getAllContractTypes = buildGetAllContractTypes(
            {
                getAllContractTypeDB: dataAccess.mongo.contractType.getAllContractType
            }
        );

        const getAllProjectTypes = buildGetAllProjectTypes(
            {
                getAllProjectTypeDB: dataAccess.mongo.projectType.getAllProjectType
            }
        );

        const getProjectById = buildGetProjectById
        (
            {
                getProjectByIdDB: dataAccess.mongo.project.getProjectById
            }
        );

        const getContractById = buildGetContractById(
            {
                getContractByIdDB: dataAccess.mongo.contract.getContractById
            }
        );

        const getAllContractCustomerByContractId = buildGetAllContractCustomerByContractId(
            {
                getAllContractCustomerByContractDB: dataAccess.mongo.contractCustomer.getAllContractCustomerByContract
            }
        );

        const getAllContractPaymentByContractId = buildGetAllContractPaymentByContractId(
            {
                getAllContractPaymentByContractDB: dataAccess.mongo.contractPayment.getAllContractPaymentByContract
            }
        );

        const findCustomerByNationalCode = buildFindCustomerByNationalCode(
            {
                getCustomerByNationalCodeDB: dataAccess.mongo.customer.getCustomerByNationalCode
            }
        );

        const getAllContracts = buildGetAllContracts(
            {
                getAllContractDB: dataAccess.mongo.contract.getAllContract
            }
        );

        const getProjectItemByContractId = buildGetProjectItemByContractId(
            {
                getProjectItemByContractDB: dataAccess.mongo.projectItem.getProjectItemByContractId
            }
        );

        const removeContractProjectItem = buildRemoveContractProjectItem(
            {
                removeContractProjectItemDB: dataAccess.mongo.contract.removeContractProjectItem
            }
        );

        const  setContractProjectAndProjectItem = buildSetContractProjectAndProjectItem(
            {
                setContractProjectAndProjectItemDB: dataAccess.mongo.contract.setContractProjectAndProjectItem
            }
            
        );

        const setContractPayablePriceAndDiscount = buildSetContractPayablePriceAndDiscount(
            {
                setContractPayablePriceAndDiscountDB: dataAccess.mongo.contract.setContractPayablePriceAndDiscount
            }
        );

        const getAllUsers = buildGetAllUsers(
            {
                getAllUserDB: dataAccess.mongo.user.getAllUser
            }
        );

        const addUser = buildAddUser(
            {
                makeUser: models.makeUser,
                addUserDB: dataAccess.mongo.user.addUser
            }
        );

        const getAllContractByProject = buildGetAllContractByProject(
            {
                getAllContractByProjectDB: dataAccess.mongo.contract.getAllContractByProject
            }
        );

        const getUserById = buildGetUserById(
            {
                getUserByIdDB: dataAccess.mongo.user.getUserById
            }
        );

        const setUserAccess = buildSetUserAccess(
            {
                setUserCompanyAccessPermissionDB: dataAccess.mongo.userCompanyAccess.setUserCompanyAccessPermission
            }
        )

        const addContractReview = buildAddContractReview(
            {
                addContractReviewDB: dataAccess.mongo.contractReview.addContractReview,
                makeContractReview: models.makeContractReview
            }
        );

        const getAllContractReviewByUserCompanyAccessId = buildGetAllContractReviewByUserCompanyAccessId(
            {
                getAllContractReviewByUserCompanyAccessIdDB: dataAccess.mongo.contractReview.getAllContractReviewByUserCompanyAccessId
            }
        );

        

        const getAllContractReviewByContractId = buildGetAllContractReviewByContractId(
            {
                getAllContractReviewByContractDB: dataAccess.mongo.contractReview.getAllContractReviewByContract
            }
        );

        const getContractReviewById = buildGetContractReviewById(
            {
                getContractReviewByIdDB: dataAccess.mongo.contractReview.getContractReviewById
            }
        );

        const setContractReviewReviewResult = buildSetContractReviewReviewResult(
            {
                setContractReviewReviewResultDB:dataAccess.mongo.contractReview.setContractReviewReviewResult
            }
        );

        const removeCustomerFromContract = buildRemoveCustomerFromContract(
            {
                removeContractCustomerDB: dataAccess.mongo.contractCustomer.removeContractCustomer
            }
        );

        const getAllCompanies = buildGetAllCompanies(
            {
                getAllCompanyDB: dataAccess.mongo.company.getAllCompany
            }
        );

        
        const getAllUserCompanyAccessByUserId = buildGetAllUserCompanyAccessByUserId(
            {
                getAllUserCompanyAccessByUserDB: dataAccess.mongo.userCompanyAccess.getAllUserCompanyAccessListByUser
            }
        );

        const login = buildLogin(
            {
                jwt:jwt,
                JWT_SECRET: JWT_SECRET,
                getUserByUsernameAndPasswordDB: dataAccess.mongo.user.getUserByUsernameAndPassword
            }
        );

        const getUserFromToken = buildGetUserFromToken(
            {
                jwt: jwt,
                JWT_SECRET: JWT_SECRET
            }
        );

        const authorization = buildAuthorization(
            {
                getUserCompanyAccessByIdAndUserIdDB: dataAccess.mongo.userCompanyAccess.getUserCompanyAccessByIdAndUserId
            }
        );

        const getAllContractPaymentFromDateAndToDate = buildGetAllContractPaymentFromDateAndToDate(
            {
                getAllContractPaymentByCompanyAndFromDateAndToDateDB: dataAccess.mongo.contractPayment.getAllContractPaymentByCompanyAndFromDateAndToDate
            }
        );

        const removePaymentFromContract = buildRemovePaymentFromContract(
            {
                removeContractPaymentDB: dataAccess.mongo.contractPayment.removeContractPayment
            }
        );

        const contractRequestConfirmation = buildContractRequestConfirmation(
            {
                setContractWorkflowStatusDB: dataAccess.mongo.contract.setContractWorkflowStatus
            }
        );

        const setContractContent = buildSetContractContent(
            {
                setContractContentDB: dataAccess.mongo.contract.setContractContent
            }
        );

        const getAllContractByStatus = buildGetAllContractByStatus(
            {
                getAllContractByWorkflowStatusDB: dataAccess.mongo.contract.getAllContractByWorkflowStatus
            }
        );

        const { acceptRequestedContract } = require('./accept-requested-contract')(
            {
                setContractWorkflowStatusDB: dataAccess.mongo.contract.setContractWorkflowStatus
            }
        );

        const { rejectRequestedContract } = require('./reject-requested-contract')(
            {
                setContractWorkflowStatusDB: dataAccess.mongo.contract.setContractWorkflowStatus
            }
        );

        // const addContractTemplate = buildAddContractTemplate(
        //     {
        //         addContractTemplateDB: dataAccess.mongo.contractTemplate.addContractTemplate,
        //         makeContractTemplate: models.makeContractTemplate
        //     }
        // )

        const getAllContractTemplate = buildGetAllContractTemplate(
            {
                getAllContractTemplateByCompanyDB: dataAccess.mongo.contractTemplate.getAllContractTemplateByCompany
            }
        );

        const getContractPaymentById = buildGetContractPaymentById(
            {
                getContractPaymentByIdDB: dataAccess.mongo.contractPayment.getContractPaymentById
            }
        );

        const setContractPaymentSettlement = buildSetContractPaymentSettlement(
            {
                setContractPaymentIsSettledDB: dataAccess.mongo.contractPayment.setContractPaymentIsSettled
            }
        );

        const getAllContractPaymentByFilter = buildGetAllContractPaymentByFilter(
            {
                getAllContractPaymentByIsSettledDB: dataAccess.mongo.contractPayment.getAllContractPaymentByIsSettled
            }
        );

        const getAllUserCompanyAccessByFilter = buildGetAllUserCompanyAccessByFilter(
            {
                getAllUserCompanyAccessByIsContractReviewerDB: dataAccess.mongo.userCompanyAccess.getAllUserCompanyAccessByIsContractReviewer
            }
        );

        const getUserCompanyAccessById = buildGetUserCompanyAccessById(
            {
                getUserCompanyAccessByIdDB: dataAccess.mongo.userCompanyAccess.getUserCompanyAccessById
            }
        );

        const getAllUserCompanyAccessByCompany = buildGetAllUserCompanyAccessByCompany(
            {
                getAllUserCompanyAccessByCompanyDB: dataAccess.mongo.userCompanyAccess.getAllUserCompanyAccessByCompany
            }
        );

        const removeContractReview = buildRemoveContractReview(
            {
                removeContractReviewDB: dataAccess.mongo.contractReview.removeContractReview
            }
        );

        

        const getAllContractByProjectAndStartDateAndEndDate = buildGetAllContractByProjectAndStartDateAndEndDate(
            {
                getAllContractByProjectAndStartDateAndEndDateDB: dataAccess.mongo.contract.getAllContractByProjectAndStartDateAndEndDate
            }
        );

        const {addProjectItemGallery} = require('./add-project-item-gallery')(
            {

                addProjectItemGalleryDB: dataAccess.mongo.projectItemGallery.addProjectItemGallery,
                makeProjectItemGallery: models.makeProjectItemGallery
            }
        );

        const generateRandomFilename = buildGenerateRandomFilename(
            {
                uuidv4:uuidv4 
            }
        );

        const removeContractPayablePriceAndDiscount = buildRemoveContractPayablePriceAndDiscount(
            {
                removeContractPayablePriceAndDiscountDB: dataAccess.mongo.contract.removeContractPayablePriceAndDiscount
            }
        );

        const addUserCompanyAccess = buildAddUserCompanyAccess(
            {
                addUserCompanyAccessDB: dataAccess.mongo.userCompanyAccess.addUserCompanyAccess,
                makeUserCompanyAccess: models.makeUserCompanyAccess
            }
        );

        const contractTemplateUseCases = require('./contract-template')(
            {
                getContractTemplateByIdDB: dataAccess.mongo.contractTemplate.getContractTemplateById,
                addContractTemplateDB: dataAccess.mongo.contractTemplate.addContractTemplate,
                makeContractTemplate: models.makeContractTemplate,
                getAllContractTemplateByCompanyDB: dataAccess.mongo.contractTemplate.getAllContractTemplateByCompany,
                editContractTemplateDB: dataAccess.mongo.contractTemplate.updateContractTemplate,
                removeContractTemplateDB: dataAccess.mongo.contractTemplate.removeContractTemplate
            }
        );

        const removeProjectById = buildRemoveProjectById(
            {
                getAllContractByProjectDB: dataAccess.mongo.contract.getAllContractByProject,
                removeProjectByIdDB: dataAccess.mongo.project.removeProject
            }
        );

        const removeContractById = buildRemoveContractById(
            {
                getContractByIdDB: dataAccess.mongo.contract.getContractById,
                removeDarftedContractByIdDB: dataAccess.mongo.contract.removeDarftedContractById
            }
        );

        const getCustomerById = buildGetCustomerById(
            {
                getCustomerByIdDB: dataAccess.mongo.customer.getCustomerById
            }
        );

        

        const editCustomer = buildEditCustomer(
            {
                editCustomerDB:dataAccess.mongo.customer.editCustomer,
                makeCustomer: models.makeCustomer
            }
        );

        const services = Object.freeze(
            {
                addBankAccount,
                addProject,
                addCustomer,
                drafContract,
                addContractPayment,
                addProjectItem,
                assignCustomerToContract,
                getAllProjects,
                getAllBanks,
                getAllBankAccounts,
                getAllContractPaymentMethods,
                getAllContractTypes,
                getAllProjectTypes,
                getProjectById,
                getContractById,
                getAllContractCustomerByContractId,
                getAllContractPaymentByContractId,
                findCustomerByNationalCode,
                getAllContracts,
                getProjectItemByContractId,
                removeContractProjectItem,
                setContractProjectAndProjectItem,
                setContractPayablePriceAndDiscount,
                getAllUsers,
                addUser,
                getAllContractByProject,
                getUserById,
                setUserAccess,
                addContractReview,
                getAllContractReviewByUserCompanyAccessId,
                getAllContractReviewByContractId,
                getContractReviewById,
                setContractReviewReviewResult,
                removeCustomerFromContract,
                getAllCompanies,
                getAllUserCompanyAccessByUserId,
                login,
                getUserFromToken,
                authorization,
                getAllContractPaymentFromDateAndToDate,
                removePaymentFromContract,
                contractRequestConfirmation,
                setContractContent,
                getAllContractByStatus,
                acceptRequestedContract,
                rejectRequestedContract,
                //addContractTemplate,
                getAllContractTemplate,
                getContractPaymentById,
                setContractPaymentSettlement,
                getAllContractPaymentByFilter,
                getAllUserCompanyAccessByFilter,
                getUserCompanyAccessById,
                getAllUserCompanyAccessByCompany,
                removeContractReview,
                getAllContractByProjectAndStartDateAndEndDate,
                addProjectItemGallery,
                generateRandomFilename,
                removeContractPayablePriceAndDiscount,
                addUserCompanyAccess,
                contractTemplateUseCases,
                removeProjectById,
                removeContractById,
                getCustomerById,
                editCustomer
            }
        );
        
        return services;
    }