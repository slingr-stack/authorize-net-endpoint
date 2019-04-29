//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
//  This file is generated with authorize-net/gen/gen-authorize-net-helpers.js  //
//                                                                              //
//  Tue Dec 04 2018 15:30:41 GMT-0300 (-03)                                     //
//////////////////////////////////////////////////////////////////////////////////


endpoint.test = {};

endpoint.test.authenticateTestRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"authenticateTestRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["authenticateTestRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['authenticateTestRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.paymentTransaction = {};

endpoint.paymentTransaction.createTransactionRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"createTransactionRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["createTransactionRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['createTransactionRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.paymentTransaction.updateSplitTenderGroupRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"updateSplitTenderGroupRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["updateSplitTenderGroupRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['updateSplitTenderGroupRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile = {};

endpoint.customerProfile.createCustomerProfileRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"createCustomerProfileRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["createCustomerProfileRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['createCustomerProfileRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.getCustomerProfileRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"getCustomerProfileRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["getCustomerProfileRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['getCustomerProfileRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.getCustomerProfileIdsRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"getCustomerProfileIdsRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["getCustomerProfileIdsRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['getCustomerProfileIdsRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.updateCustomerProfileRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"updateCustomerProfileRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["updateCustomerProfileRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['updateCustomerProfileRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.deleteCustomerProfileRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"deleteCustomerProfileRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["deleteCustomerProfileRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['deleteCustomerProfileRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.createCustomerPaymentProfileRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"createCustomerPaymentProfileRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["createCustomerPaymentProfileRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['createCustomerPaymentProfileRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.getCustomerPaymentProfileRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"getCustomerPaymentProfileRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["getCustomerPaymentProfileRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['getCustomerPaymentProfileRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.getCustomerPaymentProfileListRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"getCustomerPaymentProfileListRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["getCustomerPaymentProfileListRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['getCustomerPaymentProfileListRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.validateCustomerPaymentProfileRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"validateCustomerPaymentProfileRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["validateCustomerPaymentProfileRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['validateCustomerPaymentProfileRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.updateCustomerPaymentProfileRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"updateCustomerPaymentProfileRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["updateCustomerPaymentProfileRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['updateCustomerPaymentProfileRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.deleteCustomerPaymentProfileRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"deleteCustomerPaymentProfileRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["deleteCustomerPaymentProfileRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['deleteCustomerPaymentProfileRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.createCustomerShippingAddressRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"createCustomerShippingAddressRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["createCustomerShippingAddressRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['createCustomerShippingAddressRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.getCustomerShippingAddressRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"getCustomerShippingAddressRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["getCustomerShippingAddressRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['getCustomerShippingAddressRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.updateCustomerShippingAddressRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"updateCustomerShippingAddressRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["updateCustomerShippingAddressRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['updateCustomerShippingAddressRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.deleteCustomerShippingAddressRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"deleteCustomerShippingAddressRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["deleteCustomerShippingAddressRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['deleteCustomerShippingAddressRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.customerProfile.createCustomerProfileFromTransactionRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"createCustomerProfileFromTransactionRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["createCustomerProfileFromTransactionRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['createCustomerProfileFromTransactionRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.recurringBilling = {};

endpoint.recurringBilling.ARBCreateSubscriptionRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"ARBCreateSubscriptionRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["ARBCreateSubscriptionRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['ARBCreateSubscriptionRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.recurringBilling.ARBGetSubscriptionRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"ARBGetSubscriptionRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["ARBGetSubscriptionRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['ARBGetSubscriptionRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.recurringBilling.ARBGetSubscriptionStatusRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"ARBGetSubscriptionStatusRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["ARBGetSubscriptionStatusRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['ARBGetSubscriptionStatusRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.recurringBilling.ARBUpdateSubscriptionRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"ARBUpdateSubscriptionRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["ARBUpdateSubscriptionRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['ARBUpdateSubscriptionRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.recurringBilling.ARBCancelSubscriptionRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"ARBCancelSubscriptionRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["ARBCancelSubscriptionRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['ARBCancelSubscriptionRequest'].");
	return endpoint._post({path:'', body: obj });
};

endpoint.recurringBilling.ARBGetSubscriptionListRequest = function(params) {
	var auth = endpoint.utils.merchantAuthentication();
	var obj = {
		"ARBGetSubscriptionListRequest": {
			"merchantAuthentication": {
				"name": auth.name,
				"transactionKey": auth.transactionKey
			}
		}
	};
	if(params){
		for(var i in params) {
			obj["ARBGetSubscriptionListRequest"][i] = params[i];
		}
	}
	sys.logs.debug("Sending request ['ARBGetSubscriptionListRequest'].");
	return endpoint._post({path:'', body: obj });
};