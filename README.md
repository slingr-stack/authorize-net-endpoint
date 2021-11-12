---
title: Authorize.Net endpoint
keywords: 
last_updated: November 21, 2018
tags: []
summary: "Detailed description of the API for Authorize.Net endpoint."
sidebar: extensions_sidebar
permalink: endpoints_authorizenet.html
folder: extensions
---

## Overview

All requests to Authorize.Net API (Application Programming Interface) are sent via the HTTP POST method to one of our 
API endpoint URLs. 
 
All calls to the Authorize.Net API require merchant authentication. 
[Sign up for a sandbox account](https://developer.authorize.net/hello_world/sandbox/) to quickly get started.

## Configuration

You need to set the endpoint environment to use, `sandbox` or `production`. Each one need the API login id and transaction key. 

### Webhook URL

This is the URL you should configure for webhooks in Authorize.Net. Please refer to the [webhooks documentation](https://developer.authorize.net/api/reference/features/webhooks.html) 
for more information on how to configure them.

### API Endpoint

You set how endpoint is working on. Sandbox API Endpoint or Production API Endpoint.

### API login id

The API Login ID provide the merchant authentication required for access to the payment gateway.

### Transaction key

The Transaction Key together provide the merchant authentication required for access to the payment gateway.


## Javascript API

In most cases you will be using the provided shortcuts to access the API or you can use the  API
directly by doing an HTTP request.

Check [API Documentation](https://developer.authorize.net/api/reference/index.html) for more information.

### Shortcuts

Instead of having to use the generic HTTP methods, you can make use of the shortcuts provided in the endpoint. These
shortcuts follow these rules:

- **Set merchantAuthentication automatically**: when use shortcuts the API login id and transaction key is added from endpoint settings.  

- **Following features are provided as namespaces**: `Payment Transactions` `Customer Profile` `Recurring Billing`

- **First key used in request is used as method name**

- **Additional parameters or body are sent in the last param as JSON**: if the method accepts more parameters or it 
  allows to send a body, that will be sent as parameter.
 
Given following request
```json
{
    "createTransactionRequest": {
        "merchantAuthentication": {
            "name": "5M7n2Te9fNTn",
            "transactionKey": "9bQyQq9BHd3744z6"
        },
        "refId": "123456",
        "transactionRequest": {
            "transactionType": "authCaptureTransaction",
            "amount": "5",
            "payment": { ... },
            "lineItems": { ... },
            ...
        }
    }
}
``` 

Use following helper

```js
endpoint.paymentTransaction.createTransactionRequest({
    "refId": "123456",
    "transactionRequest": {
        "transactionType": "authCaptureTransaction",
        "amount": "5",
        "payment": { ... },
        "lineItems": { ... },
        ...
    }
})
```


## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
