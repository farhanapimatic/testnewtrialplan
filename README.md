# Getting started

This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/).
You will also need to download and link [angular-moment](https://cdnjs.cloudflare.com/ajax/libs/angular-moment/1.0.1/angular-moment.min.js) and [moment.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js) with your project because the SDK internally uses moment.js.

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `SwaggerPetstoreLib` folder inside the scripts folder.
+ If any of the Custom Types in your API have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will need to download angular-moment and moment.js. Move these 2 files into the `scripts` folder as well.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=Swagger%20Petstore-Angular&projectName=SwaggerPetstoreLib)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=Swagger%20Petstore-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
var app = angular.module('myApp', []);
app.controller('testController', function($scope) 
{

});
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Angular Project</title>
	<script></script>
</head>

<body>
</body>

</html>
```

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=Swagger%20Petstore-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
<script src="scripts/angular.min.js" ></script>
```
If any of the Custom Types that you have defined have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will also need to link to angular-moment and moment.js like:
```html
<script src="scripts/angular.min.js" ></script>
<script src="scripts/moment.min.js" ></script>
<script src="scripts/angular-moment.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
<head>
    ...
    <!-- Helper files -->
    <script src="scripts/SwaggerPetstoreLib/Module.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Configuration.js"></script>
    <script src="scripts/SwaggerPetstoreLib/ModelFactory.js"></script>
    <script src="scripts/SwaggerPetstoreLib/ObjectMapper.js"></script>
    <script src="scripts/SwaggerPetstoreLib/APIHelper.js"></script>
    <script src="scripts/SwaggerPetstoreLib/OAuthManager.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Http/Client/HttpContext.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Http/Client/HttpClient.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Http/Request/HttpRequest.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Http/Response/HttpResponse.js"></script>

    <!-- API Controllers -->
    <script src="scripts/SwaggerPetstoreLib/Controllers/BaseController.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Controllers/PetController.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Controllers/StoreController.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Controllers/UserController.js"></script>


    <!-- Models -->
    <script src="scripts/SwaggerPetstoreLib/Models/BaseModel.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/Order.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/User.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/Category.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/Tag.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/Pet.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/ApiResponse.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/StatusEnum.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/Status1Enum.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/Status2Enum.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/OAuthScopeEnum.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/OAuthToken.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/OAuthProviderErrorEnum.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/OAuthScopeEnum.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/OAuthToken.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/OAuthProviderErrorEnum.js"></script>

    ...
</head>
```
> The `Module.js` file should be imported before the other files. After `Module.js`, `Configuration.js` should be imported.
> The `ModelFactory.js` file is needed by `ObjectMapper.js` file. The `ObjectMapper` in turn, is needed by `BaseController.js`.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
<head>
	...
	<script src="scripts/app.js"></script>
</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
...
<body ng-app="myApp">
	<div ng-controller="testController">
		...
	</div>
	...
</body>
...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
var app = angular.module('myApp', ['SwaggerPetstoreLib']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Initialization


The Angular Application can be initialized as following:
```JavaScript
var app = angular.module('myApp', [SwaggerPetstoreLib]);
// now controllers/services can be created which import
// the factories provided by the sdk
```
### Authentication
In order to setup authentication and initialization of the Angular App, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthClientId | OAuth 2 Client ID |
| oAuthRedirectUri | OAuth 2 Redirection endpoint or Callback Uri |



```js
var app = angular.module('myApp', [SwaggerPetstoreLib]);

app.run(function(Configuration) {
    // Configuration parameters and credentials
    Configuration.oAuthClientId = 'oAuthClientId'; // OAuth 2 Client ID
    Configuration.oAuthRedirectUri = 'oAuthRedirectUri'; // OAuth 2 Redirection endpoint or Callback Uri
    
});
```


You must now authorize the client.

### Authorizing your client

Your application must obtain user authorization before it can execute an endpoint call. The SDK uses OAuth 2.0 Implicit Grant to obtain a user's consent to perform an API request on user's behalf.
The entire flow of building the authorization URL, obtaining consent from the user and storing the access token is handled by the SDK itself.


`retrieveAndSetAccessToken()` method will be called in order to obtain and set the access token in the `Configuration`.  You must pass the **[scopes](#scopes)** (for which you need permission to access) in this function.  

Calling this method will open up the consent screen.

### Consent screen and access token retrieval
Once the user responds to the consent request, the OAuth 2.0 server responds to your application's access request by redirecting the user to the redirect URI specified in Configuration.

The redirect URI will receive the access token as the token argument in the URL fragment. This is how it will look

```
https://example.com/oauth/callback#token=XXXXXXXXXXXXXXXXXXXXXXXXX
```

The access token must be extracted by client-side JavaScript code.

`OAuthCallbackScript.js` is the script which retrieves the access token and passes it as an event data to the window which actually opened up the consent screen. You can simply link this with a html file to handle access token retrieval.

```html
<script src="OAuthCallbackScript.js"></script>
```




### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the `SwaggerPetstoreLib/Models/OAuthScopeEnum` enumeration.

| Scope Name | Description |
| --- | --- |
| `WRITEPETS` | modify pets in your account |
| `READPETS` | read your pets |


### Complete Example

In order to set up the client side script which extracts the access token from the uri, perform the following steps:
+ Link the `OAuthCallbackScript.js` to the html file which is served at the registered redirect_uri for the application.

For example, if the redirect_uri is `http://localhost/callback.html`, create `callback.html` in the root of the project folder. And add the following content:

#### `callback.html`

```html
<!DOCTYPE html>
<html>

<head>
    <title>OAuthTest</title>

</head>


<body>
    <script src="scripts/OAuthCallbackScript.js"></script>
</body>

</html>
```

This will ensure that the access token which will be received at `http://localhost/callback.html` will be retrieved by the `OAuthCallbackScript.js`.

After setting up as above, here's how the Implicit Grant flow can be executed.

#### `app.js`

```JavaScript
var app = angular.module('OAuthTest', ['SwaggerPetstoreLib']);

app.controller('oauthClientController', function($scope, OAuthManager, OAuthScopeEnum) {
    if (OAuthManager.isTokenRetrievedAndSet()) {
        // token already set, make API calls
    } else {
        var scopes = [OAuthScopeEnum.WRITEPETS, OAuthScopeEnum.READPETS];
        var promise = OAuthManager.retrieveAndSetAccessToken(scopes, '', true);
        promise.then(function(success) {
            // client successfully authorized
            // make API calls as required
        });
    }
});
```

#### `index.html`
```html
<!DOCTYPE html>
<html>

<head>
    <title>OAuthTest</title>
    <meta charset="UTF8">

    <script src="scripts/angular.min.js"></script>

    <script src="scripts/SwaggerPetstoreLib/Module.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Configuration.js"></script>
    <script src="scripts/SwaggerPetstoreLib/ModelFactory.js"></script>
    <script src="scripts/SwaggerPetstoreLib/ObjectMapper.js"></script>
    <script src="scripts/SwaggerPetstoreLib/APIHelper.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Servers.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Environments.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Http/Client/HttpContext.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Http/Request/HttpRequest.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Http/Response/HttpResponse.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Http/Client/RequestClient.js"></script>

    <!-- API Controllers -->
    <script src="scripts/SwaggerPetstoreLib/Controllers/BaseController.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Controllers/PetController.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Controllers/StoreController.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Controllers/UserController.js"></script>


    <!-- Models -->
    <script src="scripts/SwaggerPetstoreLib/Models/BaseModel.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/Order.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/User.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/Category.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/Tag.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/Pet.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/ApiResponse.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/StatusEnum.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/Status1Enum.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/Status2Enum.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/OAuthScopeEnum.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/OAuthToken.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/OAuthProviderErrorEnum.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/OAuthScopeEnum.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/OAuthToken.js"></script>
    <script src="scripts/SwaggerPetstoreLib/Models/OAuthProviderErrorEnum.js"></script>


    <script src="scripts/SwaggerPetstoreLib/OAuthManager.js"></script>
    <script src="scripts/app.js"></script>

</head>


<body ng-app="OAuthTest">
    <div ng-controller="oauthClientController">

    </div>
</body>

</html>
```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [PetController](#pet_controller)
* [StoreController](#store_controller)
* [UserController](#user_controller)

## <a name="pet_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PetController") PetController

### Get singleton instance

The singleton instance of the ``` PetController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, PetController, Pet, ApiResponse){
	});
```

### <a name="add_pet"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.addPet") addPet

> Add a new pet to the store


```javascript
function addPet(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Pet object that needs to be added to the store |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController){
        var body = new Pet({"key":"value"});


		var result = PetController.addPet(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 405 | Invalid input |




### <a name="update_pet"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.updatePet") updatePet

> Update an existing pet


```javascript
function updatePet(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Pet object that needs to be added to the store |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController){
        var body = new Pet({"key":"value"});


		var result = PetController.updatePet(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Pet not found |
| 405 | Validation exception |




### <a name="find_pets_by_status"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.findPetsByStatus") findPetsByStatus

> Multiple status values can be provided with comma separated strings


```javascript
function findPetsByStatus(status)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| status |  ``` Required ```  ``` Collection ```  | Status values that need to be considered for filter |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController, Pet){
        var status = [ Object.keys(Status2Enum)[0] ];


		var result = PetController.findPetsByStatus(status);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid status value |




### <a name="find_pets_by_tags"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.findPetsByTags") findPetsByTags

> Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.


```javascript
function findPetsByTags(tags)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| tags |  ``` Required ```  ``` Collection ```  | Tags to filter by |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController, Pet){
        var tags = ['tags'];


		var result = PetController.findPetsByTags(tags);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid tag value |




### <a name="get_pet_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.getPetById") getPetById

> Returns a single pet


```javascript
function getPetById(petId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| petId |  ``` Required ```  | ID of pet to return |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController, Pet){
        var petId = 22;


		var result = PetController.getPetById(petId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Pet not found |




### <a name="update_pet_with_form"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.updatePetWithForm") updatePetWithForm

> Updates a pet in the store with form data


```javascript
function updatePetWithForm(petId, name, status)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| petId |  ``` Required ```  | ID of pet that needs to be updated |
| name |  ``` Optional ```  | Updated name of the pet |
| status |  ``` Optional ```  | Updated status of the pet |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController){
        var petId = 22;
        var name = 'name';
        var status = 'status';


		var result = PetController.updatePetWithForm(petId, name, status);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 405 | Invalid input |




### <a name="delete_pet"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.deletePet") deletePet

> Deletes a pet


```javascript
function deletePet(petId, apiKey)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| petId |  ``` Required ```  | Pet id to delete |
| apiKey |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController){
        var petId = 22;
        var apiKey = api_key;


		var result = PetController.deletePet(petId, apiKey);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Pet not found |




### <a name="upload_file"></a>![Method: ](https://apidocs.io/img/method.png ".PetController.uploadFile") uploadFile

> uploads an image


```javascript
function uploadFile(petId, additionalMetadata, file)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| petId |  ``` Required ```  | ID of pet to update |
| additionalMetadata |  ``` Optional ```  | Additional data to pass to server |
| file |  ``` Optional ```  | file to upload |



#### Example Usage

```javascript


	app.controller("testController", function($scope, PetController, $http, ApiResponse){
        var petId = 22;
        var additionalMetadata = 'additionalMetadata';
        var file = "";


		$http.get(url).then(function(successData){
            file = successData;
            var result = PetController.uploadFile(petId, additionalMetadata, file);
        //Function call returns a promise
            result.then(function(success){
    			//success case
    			//getting context of response
    			console.log(success.getContext());
    		},function(err){
    			//failure case
    		});
    
    	}, function(errorData){
    
    	});
	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="store_controller"></a>![Class: ](https://apidocs.io/img/class.png ".StoreController") StoreController

### Get singleton instance

The singleton instance of the ``` StoreController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, StoreController, Order){
	});
```

### <a name="get_inventory"></a>![Method: ](https://apidocs.io/img/method.png ".StoreController.getInventory") getInventory

> Returns a map of status codes to quantities


```javascript
function getInventory()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, StoreController){


		var result = StoreController.getInventory();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_place_order"></a>![Method: ](https://apidocs.io/img/method.png ".StoreController.createPlaceOrder") createPlaceOrder

> Place an order for a pet


```javascript
function createPlaceOrder(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | order placed for purchasing the pet |



#### Example Usage

```javascript


	app.controller("testController", function($scope, StoreController, Order){
        var body = new Order({"key":"value"});


		var result = StoreController.createPlaceOrder(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid Order |




### <a name="get_order_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".StoreController.getOrderById") getOrderById

> For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions


```javascript
function getOrderById(orderId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderId |  ``` Required ```  | ID of pet that needs to be fetched |



#### Example Usage

```javascript


	app.controller("testController", function($scope, StoreController, Order){
        var orderId = 22;


		var result = StoreController.getOrderById(orderId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Order not found |




### <a name="delete_order"></a>![Method: ](https://apidocs.io/img/method.png ".StoreController.deleteOrder") deleteOrder

> For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors


```javascript
function deleteOrder(orderId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| orderId |  ``` Required ```  | ID of the order that needs to be deleted |



#### Example Usage

```javascript


	app.controller("testController", function($scope, StoreController){
        var orderId = 22;


		var result = StoreController.deleteOrder(orderId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid ID supplied |
| 404 | Order not found |




[Back to List of Controllers](#list_of_controllers)

## <a name="user_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UserController") UserController

### Get singleton instance

The singleton instance of the ``` UserController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, UserController, User){
	});
```

### <a name="create_user"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.createUser") createUser

> This can only be done by the logged in user.


```javascript
function createUser(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Created user object |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController){
        var body = new User({"key":"value"});


		var result = UserController.createUser(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | successful operation |




### <a name="create_users_with_array_input"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.createUsersWithArrayInput") createUsersWithArrayInput

> Creates list of users with given input array


```javascript
function createUsersWithArrayInput(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  ``` Collection ```  | List of user object |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController){
        var body = [{"key":"value"}].map(function(elem) {
        return new User(elem);
    });


		var result = UserController.createUsersWithArrayInput(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | successful operation |




### <a name="create_users_with_list_input"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.createUsersWithListInput") createUsersWithListInput

> Creates list of users with given input array


```javascript
function createUsersWithListInput(body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  ``` Collection ```  | List of user object |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController){
        var body = [{"key":"value"}].map(function(elem) {
        return new User(elem);
    });


		var result = UserController.createUsersWithListInput(body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | successful operation |




### <a name="get_login_user"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.getLoginUser") getLoginUser

> Logs user into the system


```javascript
function getLoginUser(username, password)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| username |  ``` Required ```  | The user name for login |
| password |  ``` Required ```  | The password for login in clear text |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController){
        var username = 'username';
        var password = 'password';


		var result = UserController.getLoginUser(username, password);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid username/password supplied |




### <a name="get_logout_user"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.getLogoutUser") getLogoutUser

> Logs out current logged in user session


```javascript
function getLogoutUser()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController){


		var result = UserController.getLogoutUser();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 0 | successful operation |




### <a name="get_user_by_name"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.getUserByName") getUserByName

> Get user by user name


```javascript
function getUserByName(username)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| username |  ``` Required ```  | The name that needs to be fetched. Use user1 for testing. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController, User){
        var username = 'username';


		var result = UserController.getUserByName(username);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid username supplied |
| 404 | User not found |




### <a name="update_user"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.updateUser") updateUser

> This can only be done by the logged in user.


```javascript
function updateUser(username, body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| username |  ``` Required ```  | name that need to be updated |
| body |  ``` Required ```  | Updated user object |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController){
        var username = 'username';
        var body = new User({"key":"value"});


		var result = UserController.updateUser(username, body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid user supplied |
| 404 | User not found |




### <a name="delete_user"></a>![Method: ](https://apidocs.io/img/method.png ".UserController.deleteUser") deleteUser

> This can only be done by the logged in user.


```javascript
function deleteUser(username)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| username |  ``` Required ```  | The name that needs to be deleted |



#### Example Usage

```javascript


	app.controller("testController", function($scope, UserController){
        var username = 'username';


		var result = UserController.deleteUser(username);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Invalid username supplied |
| 404 | User not found |




[Back to List of Controllers](#list_of_controllers)



