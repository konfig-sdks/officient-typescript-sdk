<div align="left">

[![Visit Officient](./header.png)](https://officient.io)

# [Officient](https://officient.io)<a id="officient"></a>

Officient offers an intuitive HRIS which helps manage all personnel administration through our HR platform & personalized employee self-services. Manage payroll, company assets, contracts, days off, fleet, performance reviews and all employee data in one HR system. HR deserves great software and we're here to provide it.

We support our customers in transforming HR towards paperless administration and automating tedious workforce management tasks in the process. Our goal? Transform HR from an administrative, processing role, to a controlling role which fuels HR strategy across the organization.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`officient.account.getInformation`](#officientaccountgetinformation)
  * [`officient.asset.addCustomType`](#officientassetaddcustomtype)
  * [`officient.asset.createNewAsset`](#officientassetcreatenewasset)
  * [`officient.asset.getCustomTypesList`](#officientassetgetcustomtypeslist)
  * [`officient.asset.getDetail`](#officientassetgetdetail)
  * [`officient.asset.listAssets`](#officientassetlistassets)
  * [`officient.asset.remove`](#officientassetremove)
  * [`officient.asset.removeCustomType`](#officientassetremovecustomtype)
  * [`officient.asset.updateAsset`](#officientassetupdateasset)
  * [`officient.authentication.getAccessToken`](#officientauthenticationgetaccesstoken)
  * [`officient.budget.addBudgetItem`](#officientbudgetaddbudgetitem)
  * [`officient.budget.addItem`](#officientbudgetadditem)
  * [`officient.budget.deleteBudgetById`](#officientbudgetdeletebudgetbyid)
  * [`officient.budget.removeItem`](#officientbudgetremoveitem)
  * [`officient.budget.updateBudgetItem`](#officientbudgetupdatebudgetitem)
  * [`officient.calendarRequest.getDetailById`](#officientcalendarrequestgetdetailbyid)
  * [`officient.calendarRequest.listRequests`](#officientcalendarrequestlistrequests)
  * [`officient.calendarState.unlockMonthProcessed`](#officientcalendarstateunlockmonthprocessed)
  * [`officient.component.grantOneOffWage`](#officientcomponentgrantoneoffwage)
  * [`officient.component.removeOneOffWage`](#officientcomponentremoveoneoffwage)
  * [`officient.contract.createNewContract`](#officientcontractcreatenewcontract)
  * [`officient.contract.getAll`](#officientcontractgetall)
  * [`officient.contract.getDetail`](#officientcontractgetdetail)
  * [`officient.contract.getPdfLink`](#officientcontractgetpdflink)
  * [`officient.contract.requestSignature`](#officientcontractrequestsignature)
  * [`officient.costCenter.detailGet`](#officientcostcenterdetailget)
  * [`officient.costCenter.getList`](#officientcostcentergetlist)
  * [`officient.costUnit.getFunctionsDetail`](#officientcostunitgetfunctionsdetail)
  * [`officient.costUnit.listFunctions`](#officientcostunitlistfunctions)
  * [`officient.customEventType.getList`](#officientcustomeventtypegetlist)
  * [`officient.customField.editValueForObject`](#officientcustomfieldeditvalueforobject)
  * [`officient.customField.listFields`](#officientcustomfieldlistfields)
  * [`officient.department.getAllDepartments`](#officientdepartmentgetalldepartments)
  * [`officient.department.getDetail`](#officientdepartmentgetdetail)
  * [`officient.document.getDownloadUrl`](#officientdocumentgetdownloadurl)
  * [`officient.document.listRelated`](#officientdocumentlistrelated)
  * [`officient.document.remove`](#officientdocumentremove)
  * [`officient.document.uploadDocument`](#officientdocumentuploaddocument)
  * [`officient.expense.addCategory`](#officientexpenseaddcategory)
  * [`officient.expense.addExpenseWithCategory`](#officientexpenseaddexpensewithcategory)
  * [`officient.expense.deleteById`](#officientexpensedeletebyid)
  * [`officient.expense.deleteCategory`](#officientexpensedeletecategory)
  * [`officient.expense.editCategoryName`](#officientexpenseeditcategoryname)
  * [`officient.expense.getDetail`](#officientexpensegetdetail)
  * [`officient.expense.listByCategoryDetail`](#officientexpenselistbycategorydetail)
  * [`officient.expense.listByMonth`](#officientexpenselistbymonth)
  * [`officient.expense.listByYear`](#officientexpenselistbyyear)
  * [`officient.expense.listCategories`](#officientexpenselistcategories)
  * [`officient.expense.setPayoutMethodAndStatus`](#officientexpensesetpayoutmethodandstatus)
  * [`officient.expense.updateDetails`](#officientexpenseupdatedetails)
  * [`officient.function.getAllFunctions`](#officientfunctiongetallfunctions)
  * [`officient.function.getDetails`](#officientfunctiongetdetails)
  * [`officient.invitation.generateSecretUrl`](#officientinvitationgeneratesecreturl)
  * [`officient.person.addNew`](#officientpersonaddnew)
  * [`officient.person.addToCalendar`](#officientpersonaddtocalendar)
  * [`officient.person.addToCalendar_0`](#officientpersonaddtocalendar_0)
  * [`officient.person.editDetail`](#officientpersoneditdetail)
  * [`officient.person.getBudgetsByYear`](#officientpersongetbudgetsbyyear)
  * [`officient.person.getCurrentWage`](#officientpersongetcurrentwage)
  * [`officient.person.getCurrentWeeklySchedule`](#officientpersongetcurrentweeklyschedule)
  * [`officient.person.getCustomFields`](#officientpersongetcustomfields)
  * [`officient.person.getDailyCalendar`](#officientpersongetdailycalendar)
  * [`officient.person.getDetail`](#officientpersongetdetail)
  * [`officient.person.getEventTypeLimits`](#officientpersongeteventtypelimits)
  * [`officient.person.getManagerDetails`](#officientpersongetmanagerdetails)
  * [`officient.person.getMonthlyCalendar`](#officientpersongetmonthlycalendar)
  * [`officient.person.getOneOffWageComponentsByMonth`](#officientpersongetoneoffwagecomponentsbymonth)
  * [`officient.person.getPerformanceReviewsByPerson`](#officientpersongetperformancereviewsbyperson)
  * [`officient.person.getPersonalDataChanges`](#officientpersongetpersonaldatachanges)
  * [`officient.person.getVerzuimPeriods`](#officientpersongetverzuimperiods)
  * [`officient.person.getWageHistory`](#officientpersongetwagehistory)
  * [`officient.person.getYearlyCalendar`](#officientpersongetyearlycalendar)
  * [`officient.person.listAvailableComponents`](#officientpersonlistavailablecomponents)
  * [`officient.person.listBudgetItems`](#officientpersonlistbudgetitems)
  * [`officient.person.listDimonasByPerson`](#officientpersonlistdimonasbyperson)
  * [`officient.person.listPeople`](#officientpersonlistpeople)
  * [`officient.person.overwriteEvent`](#officientpersonoverwriteevent)
  * [`officient.person.removeEvent`](#officientpersonremoveevent)
  * [`officient.person.resetTimeWorked`](#officientpersonresettimeworked)
  * [`officient.person.searchByCriteria`](#officientpersonsearchbycriteria)
  * [`officient.person.setFunctionDescription`](#officientpersonsetfunctiondescription)
  * [`officient.person.updateBulkTimeWorked`](#officientpersonupdatebulktimeworked)
  * [`officient.person.updateEventTypeLimit`](#officientpersonupdateeventtypelimit)
  * [`officient.person.updateManager`](#officientpersonupdatemanager)
  * [`officient.person.updateTimeWorked`](#officientpersonupdatetimeworked)
  * [`officient.person.uploadAvatar`](#officientpersonuploadavatar)
  * [`officient.person.viewRoleHistory`](#officientpersonviewrolehistory)
  * [`officient.priorityScheme.listActivePrioritySchemesByYear`](#officientpriorityschemelistactivepriorityschemesbyyear)
  * [`officient.team.createNewTeam`](#officientteamcreatenewteam)
  * [`officient.team.editInformation`](#officientteameditinformation)
  * [`officient.team.getAllTeams`](#officientteamgetallteams)
  * [`officient.vehicle.createNew`](#officientvehiclecreatenew)
  * [`officient.vehicle.editDetails`](#officientvehicleeditdetails)
  * [`officient.vehicle.getAllVehicles`](#officientvehiclegetallvehicles)
  * [`officient.vehicle.getDetail`](#officientvehiclegetdetail)
  * [`officient.webhook.getActiveNotifications`](#officientwebhookgetactivenotifications)
  * [`officient.webhook.subscribeNotification`](#officientwebhooksubscribenotification)
  * [`officient.webhook.unsubscribeNotification`](#officientwebhookunsubscribenotification)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Officient&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Officient } from "officient-typescript-sdk";

const officient = new Officient({
  // Defining the base path is optional and defaults to https://api.officient.io
  // basePath: "https://api.officient.io",
});

const getInformationResponse = await officient.account.getInformation();

console.log(getInformationResponse);
```

## Reference<a id="reference"></a>


### `officient.account.getInformation`<a id="officientaccountgetinformation"></a>

This API will reveal information about your own account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInformationResponse = await officient.account.getInformation();
```

#### 🔄 Return<a id="🔄-return"></a>

[AccountGetInformationResponse](./models/account-get-information-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/account` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.asset.addCustomType`<a id="officientassetaddcustomtype"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCustomTypeResponse = await officient.asset.addCustomType();
```

#### 🔄 Return<a id="🔄-return"></a>

[AssetAddCustomTypeResponse](./models/asset-add-custom-type-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/assets/types/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.asset.createNewAsset`<a id="officientassetcreatenewasset"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAssetResponse = await officient.asset.createNewAsset();
```

#### 🔄 Return<a id="🔄-return"></a>

[AssetCreateNewAssetResponse](./models/asset-create-new-asset-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/assets/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.asset.getCustomTypesList`<a id="officientassetgetcustomtypeslist"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomTypesListResponse = await officient.asset.getCustomTypesList();
```

#### 🔄 Return<a id="🔄-return"></a>

[AssetGetCustomTypesListResponse](./models/asset-get-custom-types-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/assets/types/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.asset.getDetail`<a id="officientassetgetdetail"></a>

Get details about one asset

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailResponse = await officient.asset.getDetail({
  assetId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assetId: `number`<a id="assetid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AssetGetDetailResponse](./models/asset-get-detail-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/assets/{asset_id}/detail` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.asset.listAssets`<a id="officientassetlistassets"></a>

List all assets

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAssetsResponse = await officient.asset.listAssets({
  page: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.

##### personId: `number`<a id="personid-number"></a>

view only assets that belong to a specific person

#### 🔄 Return<a id="🔄-return"></a>

[AssetListAssetsResponse](./models/asset-list-assets-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/assets/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.asset.remove`<a id="officientassetremove"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeResponse = await officient.asset.remove({
  assetId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assetId: `number`<a id="assetid-number"></a>

The id of the asset that will be deleted

#### 🔄 Return<a id="🔄-return"></a>

[AssetRemoveResponse](./models/asset-remove-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/assets/{asset_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.asset.removeCustomType`<a id="officientassetremovecustomtype"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeCustomTypeResponse = await officient.asset.removeCustomType({
  assetTypeId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assetTypeId: `number`<a id="assettypeid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AssetRemoveCustomTypeResponse](./models/asset-remove-custom-type-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/assets/types/{asset_type_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.asset.updateAsset`<a id="officientassetupdateasset"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAssetResponse = await officient.asset.updateAsset({
  assetId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assetId: `number`<a id="assetid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AssetUpdateAssetResponse](./models/asset-update-asset-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/assets/{asset_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.authentication.getAccessToken`<a id="officientauthenticationgetaccesstoken"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccessTokenResponse = await officient.authentication.getAccessToken(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `string`<a id="code-string"></a>

Authorization code in case of 3 legged oauth flow

##### client_id: `string`<a id="client_id-string"></a>

client_id of your app. Can be found under \\\'my apps\\\'

##### client_secret: `string`<a id="client_secret-string"></a>

client secret of your app. Can be found under \\\'my apps\\\'

##### grant_type: `string`<a id="grant_type-string"></a>

should always be either authorization_code or refresh_token

##### refresh_token: `string`<a id="refresh_token-string"></a>

optional

#### 🔄 Return<a id="🔄-return"></a>

[AuthenticationGetAccessTokenResponse](./models/authentication-get-access-token-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.budget.addBudgetItem`<a id="officientbudgetaddbudgetitem"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addBudgetItemResponse = await officient.budget.addBudgetItem({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budget_type: `string`<a id="budget_type-string"></a>

The type of budget.

##### maximum: `number`<a id="maximum-number"></a>

The maximum amount that will be set for the budget.

##### year: `number`<a id="year-number"></a>

The year for which the budget will created.

##### employee_id: `number`<a id="employee_id-number"></a>

The id of the employee for which the budget will be created.

#### 🔄 Return<a id="🔄-return"></a>

[BudgetAddBudgetItemResponse](./models/budget-add-budget-item-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/budgets/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.budget.addItem`<a id="officientbudgetadditem"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addItemResponse = await officient.budget.addItem({
  budgetId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `number`<a id="budgetid-number"></a>

##### item_name: `string`<a id="item_name-string"></a>

##### cost: `number`<a id="cost-number"></a>

##### employee_id: `number`<a id="employee_id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BudgetAddItemResponse](./models/budget-add-item-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/budgets/{budget_id}/items/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.budget.deleteBudgetById`<a id="officientbudgetdeletebudgetbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteBudgetByIdResponse = await officient.budget.deleteBudgetById({
  budgetId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `number`<a id="budgetid-number"></a>

The id of the budget that will be deleted

#### 🔄 Return<a id="🔄-return"></a>

[BudgetDeleteBudgetByIdResponse](./models/budget-delete-budget-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/budgets/{budget_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.budget.removeItem`<a id="officientbudgetremoveitem"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeItemResponse = await officient.budget.removeItem({
  budgetId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `number`<a id="budgetid-number"></a>

##### itemId: `number`<a id="itemid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BudgetRemoveItemResponse](./models/budget-remove-item-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/budgets/{budget_id}/items/{item_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.budget.updateBudgetItem`<a id="officientbudgetupdatebudgetitem"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBudgetItemResponse = await officient.budget.updateBudgetItem({
  budgetId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budgetId: `number`<a id="budgetid-number"></a>

The id of the budget that will be edited.

##### maximum: `number`<a id="maximum-number"></a>

The new maximum amount for the budget.

#### 🔄 Return<a id="🔄-return"></a>

[BudgetUpdateBudgetItemResponse](./models/budget-update-budget-item-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/budgets/{budget_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.calendarRequest.getDetailById`<a id="officientcalendarrequestgetdetailbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailByIdResponse = await officient.calendarRequest.getDetailById({
  requestId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### requestId: `number`<a id="requestid-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/requests/{request_id}/detail` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.calendarRequest.listRequests`<a id="officientcalendarrequestlistrequests"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRequestsResponse = await officient.calendarRequest.listRequests({
  page: "0",
  status: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `string`<a id="page-string"></a>

##### status: `string`<a id="status-string"></a>

Can be either \"all\", \"pending\" or \"closed\"

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/requests/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.calendarState.unlockMonthProcessed`<a id="officientcalendarstateunlockmonthprocessed"></a>

Unlock the calendar for a month that has already been processed by your payroll provider. This is usually done to add corrections.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unlockMonthProcessedResponse =
  await officient.calendarState.unlockMonthProcessed({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### disable_lock: `boolean`<a id="disable_lock-boolean"></a>

By disabling the lock, the calendar will become unlocked.

#### 🔄 Return<a id="🔄-return"></a>

[CalendarStateUnlockMonthProcessedResponse](./models/calendar-state-unlock-month-processed-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/state/lock` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.component.grantOneOffWage`<a id="officientcomponentgrantoneoffwage"></a>

Grants a one-off wage components for a specific person, in a specific month

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const grantOneOffWageResponse = await officient.component.grantOneOffWage();
```

#### 🔄 Return<a id="🔄-return"></a>

[ComponentGrantOneOffWageResponse](./models/component-grant-one-off-wage-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/one_off/components/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.component.removeOneOffWage`<a id="officientcomponentremoveoneoffwage"></a>

Removes a one-off wage component for a specific person in a specific month, by id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeOneOffWageResponse = await officient.component.removeOneOffWage();
```

#### 🔄 Return<a id="🔄-return"></a>

[ComponentRemoveOneOffWageResponse](./models/component-remove-one-off-wage-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/one_off/components/{granted_component_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.contract.createNewContract`<a id="officientcontractcreatenewcontract"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewContractResponse = await officient.contract.createNewContract();
```

#### 🔄 Return<a id="🔄-return"></a>

[ContractCreateNewContractResponse](./models/contract-create-new-contract-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/contracts/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.contract.getAll`<a id="officientcontractgetall"></a>

Get a list of all contracts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await officient.contract.getAll({
  page: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.

#### 🔄 Return<a id="🔄-return"></a>

[ContractGetAllResponse](./models/contract-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/contracts/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.contract.getDetail`<a id="officientcontractgetdetail"></a>

Get details about one contract

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailResponse = await officient.contract.getDetail({
  contractId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contractId: `number`<a id="contractid-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/contracts/{contract_id}/detail` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.contract.getPdfLink`<a id="officientcontractgetpdflink"></a>

Get a PDF download link for any contract

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPdfLinkResponse = await officient.contract.getPdfLink({
  contractId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contractId: `number`<a id="contractid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ContractGetPdfLinkResponse](./models/contract-get-pdf-link-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/contracts/{contract_id}/pdf` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.contract.requestSignature`<a id="officientcontractrequestsignature"></a>

This API sends out an email invite requesting to sign a contract

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestSignatureResponse = await officient.contract.requestSignature();
```

#### 🔄 Return<a id="🔄-return"></a>

[ContractRequestSignatureResponse](./models/contract-request-signature-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/contracts/signature/request` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.costCenter.detailGet`<a id="officientcostcenterdetailget"></a>

Get the details of all functions or that of a single one

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const detailGetResponse = await officient.costCenter.detailGet({
  internalCode: "internalCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### internalCode: `string`<a id="internalcode-string"></a>

The internal code / GUID of the function you would like to receive information on

#### 🔄 Return<a id="🔄-return"></a>

[CostCenterDetailGetResponse](./models/cost-center-detail-get-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/cost_centers/detail/{internal_code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.costCenter.getList`<a id="officientcostcentergetlist"></a>

Get the details of all functions or that of a single one

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await officient.costCenter.getList();
```

#### 🔄 Return<a id="🔄-return"></a>

[CostCenterGetListResponseInner](./models/cost-center-get-list-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/cost_centers/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.costUnit.getFunctionsDetail`<a id="officientcostunitgetfunctionsdetail"></a>

Get the details of all functions or that of a single one

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFunctionsDetailResponse = await officient.costUnit.getFunctionsDetail({
  internalCode: "internalCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### internalCode: `string`<a id="internalcode-string"></a>

The internal code / GUID of the function you would like to receive information on

#### 🔄 Return<a id="🔄-return"></a>

[CostUnitGetFunctionsDetailResponse](./models/cost-unit-get-functions-detail-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/cost_units/detail/{internal_code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.costUnit.listFunctions`<a id="officientcostunitlistfunctions"></a>

Get the details of all functions or that of a single one

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFunctionsResponse = await officient.costUnit.listFunctions();
```

#### 🔄 Return<a id="🔄-return"></a>

[CostUnitListFunctionsResponseInner](./models/cost-unit-list-functions-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/cost_units/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.customEventType.getList`<a id="officientcustomeventtypegetlist"></a>

fetch a list of custom event types including time off types, overtime types,..

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await officient.customEventType.getList({
  year: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### year: `number`<a id="year-number"></a>

the year you want custom event type to be returned for

#### 🔄 Return<a id="🔄-return"></a>

[CustomEventTypeGetListResponse](./models/custom-event-type-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/events/types/{year}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.customField.editValueForObject`<a id="officientcustomfieldeditvalueforobject"></a>

Update the custom field value for a specific object (either a person, car, asset, contract,..)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editValueForObjectResponse =
  await officient.customField.editValueForObject({
    customFieldId: 1,
    objectType: "objectType_example",
    objectId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customFieldId: `number`<a id="customfieldid-number"></a>

Id of the custom field

##### objectType: `string`<a id="objecttype-string"></a>

type of object to be edited. It can be: employee, asset, car, contract, software_license, training_participant, training

##### objectId: `number`<a id="objectid-number"></a>

ID of the object to be edited

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldEditValueForObjectResponse](./models/custom-field-edit-value-for-object-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/custom_fields/{custom_field_id}/{object_type}/{object_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.customField.listFields`<a id="officientcustomfieldlistfields"></a>

List all custom fields in a given account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFieldsResponse = await officient.customField.listFields();
```

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldListFieldsResponse](./models/custom-field-list-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/custom_fields/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.department.getAllDepartments`<a id="officientdepartmentgetalldepartments"></a>

Get the details of all functions or that of a single one

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllDepartmentsResponse =
  await officient.department.getAllDepartments();
```

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentGetAllDepartmentsResponseInner](./models/department-get-all-departments-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/departments/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.department.getDetail`<a id="officientdepartmentgetdetail"></a>

Get the details of all functions or that of a single one

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailResponse = await officient.department.getDetail({
  internalCode: "internalCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### internalCode: `string`<a id="internalcode-string"></a>

The internal code / GUID of the function you would like to receive information on

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentGetDetailResponse](./models/department-get-detail-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/departments/detail/{internal_code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.document.getDownloadUrl`<a id="officientdocumentgetdownloadurl"></a>

This API call returns a download url for a document

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDownloadUrlResponse = await officient.document.getDownloadUrl({
  fileId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `number`<a id="fileid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DocumentGetDownloadUrlResponse](./models/document-get-download-url-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/documents/{file_id}/download` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.document.listRelated`<a id="officientdocumentlistrelated"></a>

This API call lists up all documents related to a specific object

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRelatedResponse = await officient.document.listRelated({
  objectType: "objectType_example",
  objectId: 1,
  page: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### objectType: `string`<a id="objecttype-string"></a>

pick one: employee, asset, car

##### objectId: `number`<a id="objectid-number"></a>

##### page: `number`<a id="page-number"></a>

Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/documents/{object_type}/{object_id}/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.document.remove`<a id="officientdocumentremove"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeResponse = await officient.document.remove({
  fileId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `number`<a id="fileid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DocumentRemoveResponse](./models/document-remove-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/documents/{file_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.document.uploadDocument`<a id="officientdocumentuploaddocument"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadDocumentResponse = await officient.document.uploadDocument({
  objectType: "objectType_example",
  objectId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### objectType: `string`<a id="objecttype-string"></a>

pick one: employee, asset, car

##### objectId: `number`<a id="objectid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DocumentUploadDocumentResponse](./models/document-upload-document-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/documents/{object_type}/{object_id}/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.expense.addCategory`<a id="officientexpenseaddcategory"></a>

The api end-point to add an expense nd an optional category id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCategoryResponse = await officient.expense.addCategory({
  name: "name_example",
  type: "total",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### type: `string`<a id="type-string"></a>

##### price-per-kilometer: `number`<a id="price-per-kilometer-number"></a>

##### price-per-day: `number`<a id="price-per-day-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseAddCategoryResponse](./models/expense-add-category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/expenses/categories/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.expense.addExpenseWithCategory`<a id="officientexpenseaddexpensewithcategory"></a>

The api end-point to add an expense nd an optional category id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addExpenseWithCategoryResponse =
  await officient.expense.addExpenseWithCategory({
    description: "description_example",
    employee_id: 1,
    category_id: 0,
    distance: 0,
    ride: "single",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

This is the title for the expense

##### employee_id: `number`<a id="employee_id-number"></a>

##### category_id: `number`<a id="category_id-number"></a>

For some integrations this is required not to be 0 which is the default category id

##### amount: `number`<a id="amount-number"></a>

this is the price of the expense, this is only required when using a total amount category

##### extra_information: `string`<a id="extra_information-string"></a>

##### date: `string`<a id="date-string"></a>

this is the day the expense has incurred on and is required when it is a total amount category

##### filename: `string`<a id="filename-string"></a>

this is required when you want to add an expense with a total amount category

##### file_base64: `string`<a id="file_base64-string"></a>

this is required when you want to add an expense with a total amount category

##### dates: `string`[]<a id="dates-string"></a>

this is required when you want to add an expense with a kilometer or day allowance expense category, multiple dates are also possible (ex: [\\\"24/05/2023\\\", \\\"26/05/2023\\\"])

##### distance: `number`<a id="distance-number"></a>

this is required when you want to update to a killometer allowance expense category. This is equal to the total amount of kilometers that has been done

##### ride: `string`<a id="ride-string"></a>

this is the value if it\\\'s an outward or a round journey when using kilometer allowances, this defaults to single

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseAddExpenseWithCategoryResponse](./models/expense-add-expense-with-category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/expenses/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.expense.deleteById`<a id="officientexpensedeletebyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await officient.expense.deleteById({
  expenseId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### expenseId: `number`<a id="expenseid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseDeleteByIdResponse](./models/expense-delete-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/expenses/{expense_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.expense.deleteCategory`<a id="officientexpensedeletecategory"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCategoryResponse = await officient.expense.deleteCategory({
  categoryId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### categoryId: `number`<a id="categoryid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseDeleteCategoryResponse](./models/expense-delete-category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/expenses/categories/{category_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.expense.editCategoryName`<a id="officientexpenseeditcategoryname"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editCategoryNameResponse = await officient.expense.editCategoryName({
  categoryId: 1,
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### categoryId: `number`<a id="categoryid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseEditCategoryNameResponse](./models/expense-edit-category-name-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/expenses/categories/{category_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.expense.getDetail`<a id="officientexpensegetdetail"></a>

List all expenses

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailResponse = await officient.expense.getDetail({
  expenseId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### expenseId: `number`<a id="expenseid-number"></a>

the specific id we want to see the details about

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseGetDetailResponse](./models/expense-get-detail-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/expenses/{expense_id}/detail` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.expense.listByCategoryDetail`<a id="officientexpenselistbycategorydetail"></a>

List all expenses

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByCategoryDetailResponse =
  await officient.expense.listByCategoryDetail({
    categoryId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### categoryId: `number`<a id="categoryid-number"></a>

the specific id we want to see the details about

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseListByCategoryDetailResponse](./models/expense-list-by-category-detail-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/expenses/categories/{category_id}/detail` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.expense.listByMonth`<a id="officientexpenselistbymonth"></a>

List all expenses

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByMonthResponse = await officient.expense.listByMonth({
  year: "year_example",
  month: "month_example",
  page: "0",
  includeDeleted: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### year: `string`<a id="year-string"></a>

the specific year we want to filter

##### month: `string`<a id="month-string"></a>

the specific month we want to filter this is optional

##### page: `string`<a id="page-string"></a>

optional to filter pages

##### includeDeleted: `number`<a id="includedeleted-number"></a>

this is so you can exclude any deleted expense, by default we show them (0 - 1)

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseListByMonthResponse](./models/expense-list-by-month-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/expenses/list/{year}/{month}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.expense.listByYear`<a id="officientexpenselistbyyear"></a>

List all expenses

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByYearResponse = await officient.expense.listByYear({
  year: "year_example",
  month: "month_example",
  page: "0",
  includeDeleted: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### year: `string`<a id="year-string"></a>

the specific year we want to filter

##### month: `string`<a id="month-string"></a>

the specific month we want to filter this is optional

##### page: `string`<a id="page-string"></a>

optional to filter pages

##### includeDeleted: `number`<a id="includedeleted-number"></a>

this is so you can exclude any deleted expense, by default we show them (0 - 1)

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseListByYearResponse](./models/expense-list-by-year-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/expenses/list/{year}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.expense.listCategories`<a id="officientexpenselistcategories"></a>

List all expenses

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCategoriesResponse = await officient.expense.listCategories();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/expenses/categories/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.expense.setPayoutMethodAndStatus`<a id="officientexpensesetpayoutmethodandstatus"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setPayoutMethodAndStatusResponse =
  await officient.expense.setPayoutMethodAndStatus({
    expenseId: 1,
    new_payout_method: "UNDECIDED",
    payout_status: "PAID_OUT",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### new_payout_method: `string`<a id="new_payout_method-string"></a>

##### expenseId: `number`<a id="expenseid-number"></a>

##### payout_other_reason: `string`<a id="payout_other_reason-string"></a>

##### payout_status: `string`<a id="payout_status-string"></a>

This field is required when the \\\"new\\\"payout_method\\\" is either PAYOUT_ACCOUNTING, PAYOUT_OTHER or PAYOUT_MANUALLY

##### period: `string`<a id="period-string"></a>

##### year: `string`<a id="year-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseSetPayoutMethodAndStatusResponse](./models/expense-set-payout-method-and-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/expenses/{expense_id}/updatePayout` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.expense.updateDetails`<a id="officientexpenseupdatedetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDetailsResponse = await officient.expense.updateDetails({
  expenseId: 1,
  category_id: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category_id: `number`<a id="category_id-number"></a>

For some integrations this is required not to be 0 which is the default category id

##### expenseId: `number`<a id="expenseid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseUpdateDetailsResponse](./models/expense-update-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/expenses/{expense_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.function.getAllFunctions`<a id="officientfunctiongetallfunctions"></a>

Get the details of all functions or that of a single one

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllFunctionsResponse = await officient.function.getAllFunctions();
```

#### 🔄 Return<a id="🔄-return"></a>

[FunctionGetAllFunctionsResponseInner](./models/function-get-all-functions-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/functions/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.function.getDetails`<a id="officientfunctiongetdetails"></a>

Get the details of all functions or that of a single one

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await officient.function.getDetails({
  internalCode: "internalCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### internalCode: `string`<a id="internalcode-string"></a>

The internal code / GUID of the function you would like to receive information on

#### 🔄 Return<a id="🔄-return"></a>

[FunctionGetDetailsResponse](./models/function-get-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/functions/detail/{internal_code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.invitation.generateSecretUrl`<a id="officientinvitationgeneratesecreturl"></a>

Generate a secret URL that brings a person straight to the HR self-service platform.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateSecretUrlResponse = await officient.invitation.generateSecretUrl({
  person_id: "person_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### person_id: `string`<a id="person_id-string"></a>

Officient will generate a selfservice invite link for this person

#### 🔄 Return<a id="🔄-return"></a>

[InvitationGenerateSecretUrlResponse](./models/invitation-generate-secret-url-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/people/selfservice/invite_link` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.addNew`<a id="officientpersonaddnew"></a>

Add a new person to Officient

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewResponse = await officient.person.addNew();
```

#### 🔄 Return<a id="🔄-return"></a>

[PersonAddNewResponse](./models/person-add-new-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/people/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.addToCalendar`<a id="officientpersonaddtocalendar"></a>

Add new events to a calender (eg a day off, overtime,..)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToCalendarResponse = await officient.person.addToCalendar({
  personId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonAddToCalendarResponse](./models/person-add-to-calendar-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/{person_id}/events/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.addToCalendar_0`<a id="officientpersonaddtocalendar_0"></a>

Adds events to a person's calendar based on a priority scheme of event types

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToCalendar_0Response = await officient.person.addToCalendar_0({
  personId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonAddToCalendar200Response](./models/person-add-to-calendar200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/{person_id}/priorityschemes/events/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.editDetail`<a id="officientpersoneditdetail"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editDetailResponse = await officient.person.editDetail({
  personId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonEditDetailResponse](./models/person-edit-detail-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/people/{person_id}/detail` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getBudgetsByYear`<a id="officientpersongetbudgetsbyyear"></a>

Fetches a list of budgets for a given person and year.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBudgetsByYearResponse = await officient.person.getBudgetsByYear({
  personId: 1,
  year: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

##### year: `number`<a id="year-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonGetBudgetsByYearResponse](./models/person-get-budgets-by-year-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/budgets/people/{person_id}/{year}/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getCurrentWage`<a id="officientpersongetcurrentwage"></a>

Get the current wage details for one person

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCurrentWageResponse = await officient.person.getCurrentWage({
  personId: "personId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

The person you would like to receive wage information on

#### 🔄 Return<a id="🔄-return"></a>

[PersonGetCurrentWageResponse](./models/person-get-current-wage-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/{person_id}/current` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getCurrentWeeklySchedule`<a id="officientpersongetcurrentweeklyschedule"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCurrentWeeklyScheduleResponse =
  await officient.person.getCurrentWeeklySchedule({
    personId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/people/{person_id}/weekly_schedule/current` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getCustomFields`<a id="officientpersongetcustomfields"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomFieldsResponse = await officient.person.getCustomFields({
  personId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonGetCustomFieldsResponse](./models/person-get-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/people/{person_id}/custom_fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getDailyCalendar`<a id="officientpersongetdailycalendar"></a>

List the time off, overtime & scheduled time for a single person for a single day

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDailyCalendarResponse = await officient.person.getDailyCalendar({
  personId: 1,
  year: 1,
  month: 1,
  day: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

The person you would like to receive calender information on

##### year: `number`<a id="year-number"></a>

##### month: `number`<a id="month-number"></a>

##### day: `number`<a id="day-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonGetDailyCalendarResponse](./models/person-get-daily-calendar-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/{person_id}/{year}/{month}/{day}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getDetail`<a id="officientpersongetdetail"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailResponse = await officient.person.getDetail({
  personId: "personId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonGetDetailResponse](./models/person-get-detail-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/people/{person_id}/detail` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getEventTypeLimits`<a id="officientpersongeteventtypelimits"></a>

This API can tell how many days off a certain person has in a certain year

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEventTypeLimitsResponse = await officient.person.getEventTypeLimits({
  personId: 1,
  year: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

##### year: `number`<a id="year-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonGetEventTypeLimitsResponse](./models/person-get-event-type-limits-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/{person_id}/events/types/{year}/limits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getManagerDetails`<a id="officientpersongetmanagerdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getManagerDetailsResponse = await officient.person.getManagerDetails({
  personId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonGetManagerDetailsResponse](./models/person-get-manager-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/people/{person_id}/manager` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getMonthlyCalendar`<a id="officientpersongetmonthlycalendar"></a>

List the time off, overtime & scheduled time for a single person for an entire month

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMonthlyCalendarResponse = await officient.person.getMonthlyCalendar({
  personId: 1,
  year: 1,
  month: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

The person you would like to receive calender information on

##### year: `number`<a id="year-number"></a>

##### month: `number`<a id="month-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonGetMonthlyCalendarResponse](./models/person-get-monthly-calendar-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/{person_id}/{year}/{month}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getOneOffWageComponentsByMonth`<a id="officientpersongetoneoffwagecomponentsbymonth"></a>

Fetches the one-off wage components that are granted to a person on a specific month

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneOffWageComponentsByMonthResponse =
  await officient.person.getOneOffWageComponentsByMonth({
    personId: 1,
    year: 1,
    month: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

##### year: `number`<a id="year-number"></a>

##### month: `number`<a id="month-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonGetOneOffWageComponentsByMonthResponse](./models/person-get-one-off-wage-components-by-month-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/one_off/components/{person_id}/{year}/{month}/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getPerformanceReviewsByPerson`<a id="officientpersongetperformancereviewsbyperson"></a>

show metadata for performance reviews by person. No content (notes,..) are exposed

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPerformanceReviewsByPersonResponse =
  await officient.person.getPerformanceReviewsByPerson({
    page: 0,
    personId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.

##### personId: `number`<a id="personid-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/performance_reviews/{person_id}/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getPersonalDataChanges`<a id="officientpersongetpersonaldatachanges"></a>

Get the latest delta of changes to personal data

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPersonalDataChangesResponse =
  await officient.person.getPersonalDataChanges({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sinceTimestamp: `string`<a id="sincetimestamp-string"></a>

Defaults to 1 week ago

#### 🔄 Return<a id="🔄-return"></a>

[PersonGetPersonalDataChangesResponse](./models/person-get-personal-data-changes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/people/change_history` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getVerzuimPeriods`<a id="officientpersongetverzuimperiods"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVerzuimPeriodsResponse = await officient.person.getVerzuimPeriods({
  personId: 1,
  year: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

##### year: `number`<a id="year-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonGetVerzuimPeriodsResponse](./models/person-get-verzuim-periods-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/{person_id}/verzuim/{year}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getWageHistory`<a id="officientpersongetwagehistory"></a>

Get the entire wage history for one person

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWageHistoryResponse = await officient.person.getWageHistory({
  personId: "personId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

The person you need the wage history for

#### 🔄 Return<a id="🔄-return"></a>

[PersonGetWageHistoryResponse](./models/person-get-wage-history-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/{person_id}/history` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.getYearlyCalendar`<a id="officientpersongetyearlycalendar"></a>

List the time off, overtime & scheduled time for a single person for an entire year

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getYearlyCalendarResponse = await officient.person.getYearlyCalendar({
  personId: 1,
  year: 1,
  filter: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

The person you would like to receive calender information on

##### year: `number`<a id="year-number"></a>

##### filter: `string`<a id="filter-string"></a>

can be either \'all\' or \'days_with_events\' to return only days containing events

#### 🔄 Return<a id="🔄-return"></a>

[PersonGetYearlyCalendarResponse](./models/person-get-yearly-calendar-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/{person_id}/{year}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.listAvailableComponents`<a id="officientpersonlistavailablecomponents"></a>

Fetches a list of available one-off wage components (eg bonus, expense compensation,..) for a specific person.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAvailableComponentsResponse =
  await officient.person.listAvailableComponents();
```

#### 🔄 Return<a id="🔄-return"></a>

[PersonListAvailableComponentsResponse](./models/person-list-available-components-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/wages/one_off/components/{person_id}/options/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.listBudgetItems`<a id="officientpersonlistbudgetitems"></a>

Lists the items that are in a given budget.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listBudgetItemsResponse = await officient.person.listBudgetItems({
  personId: 1,
  budgetId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

##### budgetId: `number`<a id="budgetid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonListBudgetItemsResponse](./models/person-list-budget-items-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/budgets/people/{person_id}/{budget_id}/items/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.listDimonasByPerson`<a id="officientpersonlistdimonasbyperson"></a>

Belgium only: this API allows you to list all historical DIMONA information for one person

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDimonasByPersonResponse = await officient.person.listDimonasByPerson({
  personId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonListDimonasByPersonResponse](./models/person-list-dimonas-by-person-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/legal/dimonas/{person_id}/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.listPeople`<a id="officientpersonlistpeople"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPeopleResponse = await officient.person.listPeople({
  page: 0,
  includeArchived: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.

##### includeArchived: `number`<a id="includearchived-number"></a>

Include archived people in response

#### 🔄 Return<a id="🔄-return"></a>

[PersonListPeopleResponse](./models/person-list-people-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/people/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.overwriteEvent`<a id="officientpersonoverwriteevent"></a>

Create a new event or overwrite an existing one in a personal calender (eg a day off, overtime,..)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const overwriteEventResponse = await officient.person.overwriteEvent({
  personId: "personId_example",
  year: "year_example",
  month: "month_example",
  day: "day_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

##### year: `string`<a id="year-string"></a>

##### month: `string`<a id="month-string"></a>

##### day: `string`<a id="day-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonOverwriteEventResponse](./models/person-overwrite-event-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/{person_id}/{year}/{month}/{day}/events/set` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.removeEvent`<a id="officientpersonremoveevent"></a>

Remove an event from the calender, such as a day off

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeEventResponse = await officient.person.removeEvent({
  personId: 1,
  eventId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

##### eventId: `number`<a id="eventid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonRemoveEventResponse](./models/person-remove-event-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/{person_id}/events/{event_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.resetTimeWorked`<a id="officientpersonresettimeworked"></a>

reset the time worked on a given day to the regular work schedule for one person

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resetTimeWorkedResponse = await officient.person.resetTimeWorked({
  personId: 1,
  year: 1,
  month: 1,
  day: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

##### year: `number`<a id="year-number"></a>

##### month: `number`<a id="month-number"></a>

##### day: `number`<a id="day-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/{person_id}/{year}/{month}/{day}/work/reset` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.searchByCriteria`<a id="officientpersonsearchbycriteria"></a>

search people by name, email or national number

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchByCriteriaResponse = await officient.person.searchByCriteria({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

eg John Doe

##### email: `string`<a id="email-string"></a>

eg john@doe.net

##### nationalNumber: `string`<a id="nationalnumber-string"></a>

eg 82146126684

#### 🔄 Return<a id="🔄-return"></a>

[PersonSearchByCriteriaResponseInner](./models/person-search-by-criteria-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/people/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.setFunctionDescription`<a id="officientpersonsetfunctiondescription"></a>

Set the function description for each person

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setFunctionDescriptionResponse =
  await officient.person.setFunctionDescription({
    personId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonSetFunctionDescriptionResponse](./models/person-set-function-description-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/people/{person_id}/role` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.updateBulkTimeWorked`<a id="officientpersonupdatebulktimeworked"></a>

Overwrite the amount of time worked for a set of days in bulk (eg for timetracking software integrations)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBulkTimeWorkedResponse =
  await officient.person.updateBulkTimeWorked({
    personId: 1,
    year: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

##### year: `number`<a id="year-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonUpdateBulkTimeWorkedResponse](./models/person-update-bulk-time-worked-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/{person_id}/{year}/work/bulk` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.updateEventTypeLimit`<a id="officientpersonupdateeventtypelimit"></a>

This API can update the limitations for a specific event type

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEventTypeLimitResponse =
  await officient.person.updateEventTypeLimit({
    personId: 1,
    year: 1,
    typeId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

##### year: `number`<a id="year-number"></a>

##### typeId: `number`<a id="typeid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonUpdateEventTypeLimitResponse](./models/person-update-event-type-limit-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/{person_id}/events/types/{year}/limits/{type_id}/set` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.updateManager`<a id="officientpersonupdatemanager"></a>

Who reports to who?

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateManagerResponse = await officient.person.updateManager({
  personId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonUpdateManagerResponse](./models/person-update-manager-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/people/{person_id}/manager` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.updateTimeWorked`<a id="officientpersonupdatetimeworked"></a>

Overwrite the amount of time worked on a certain day (eg for timetracking software integrations)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTimeWorkedResponse = await officient.person.updateTimeWorked({
  personId: 1,
  year: 1,
  month: 1,
  day: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

##### year: `number`<a id="year-number"></a>

##### month: `number`<a id="month-number"></a>

##### day: `number`<a id="day-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonUpdateTimeWorkedResponse](./models/person-update-time-worked-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/{person_id}/{year}/{month}/{day}/work` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.uploadAvatar`<a id="officientpersonuploadavatar"></a>

upload a photo of this person

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadAvatarResponse = await officient.person.uploadAvatar({
  personId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonUploadAvatarResponse](./models/person-upload-avatar-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/people/{person_id}/photo` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.person.viewRoleHistory`<a id="officientpersonviewrolehistory"></a>

View the role history for one person

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const viewRoleHistoryResponse = await officient.person.viewRoleHistory({
  personId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `number`<a id="personid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PersonViewRoleHistoryResponse](./models/person-view-role-history-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/roles/{person_id}/history` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.priorityScheme.listActivePrioritySchemesByYear`<a id="officientpriorityschemelistactivepriorityschemesbyyear"></a>

lists the active priority schemes for a specific year

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listActivePrioritySchemesByYearResponse =
  await officient.priorityScheme.listActivePrioritySchemesByYear({
    year: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### year: `number`<a id="year-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PrioritySchemeListActivePrioritySchemesByYearResponse](./models/priority-scheme-list-active-priority-schemes-by-year-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/calendar/events/priorityschemes/{year}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.team.createNewTeam`<a id="officientteamcreatenewteam"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTeamResponse = await officient.team.createNewTeam();
```

#### 🔄 Return<a id="🔄-return"></a>

[TeamCreateNewTeamResponse](./models/team-create-new-team-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/teams/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.team.editInformation`<a id="officientteameditinformation"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editInformationResponse = await officient.team.editInformation({
  teamId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `number`<a id="teamid-number"></a>

The ID of the team you\'d like to update

#### 🔄 Return<a id="🔄-return"></a>

[TeamEditInformationResponse](./models/team-edit-information-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/teams/{team_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.team.getAllTeams`<a id="officientteamgetallteams"></a>

List all teams

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllTeamsResponse = await officient.team.getAllTeams();
```

#### 🔄 Return<a id="🔄-return"></a>

[TeamGetAllTeamsResponse](./models/team-get-all-teams-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/teams/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.vehicle.createNew`<a id="officientvehiclecreatenew"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewResponse = await officient.vehicle.createNew();
```

#### 🔄 Return<a id="🔄-return"></a>

[VehicleCreateNewResponse](./models/vehicle-create-new-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/fleet/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.vehicle.editDetails`<a id="officientvehicleeditdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editDetailsResponse = await officient.vehicle.editDetails({
  vehicleId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vehicleId: `number`<a id="vehicleid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[VehicleEditDetailsResponse](./models/vehicle-edit-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/fleet/{vehicle_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.vehicle.getAllVehicles`<a id="officientvehiclegetallvehicles"></a>

Get a list of all vehicles in the fleet

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllVehiclesResponse = await officient.vehicle.getAllVehicles({
  page: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Controls pagination (0, 1, 2, ..) to view all results. 30 items per page.

##### personId: `number`<a id="personid-number"></a>

view only vehicles that belong to a specific person

#### 🔄 Return<a id="🔄-return"></a>

[VehicleGetAllVehiclesResponse](./models/vehicle-get-all-vehicles-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/fleet/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.vehicle.getDetail`<a id="officientvehiclegetdetail"></a>

Get details about one vehicle in the fleet

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailResponse = await officient.vehicle.getDetail({
  vehicleId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vehicleId: `number`<a id="vehicleid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[VehicleGetDetailResponse](./models/vehicle-get-detail-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/fleet/{vehicle_id}/detail` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.webhook.getActiveNotifications`<a id="officientwebhookgetactivenotifications"></a>

View currently active notifications

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getActiveNotificationsResponse =
  await officient.webhook.getActiveNotifications();
```

#### 🔄 Return<a id="🔄-return"></a>

[WebhookGetActiveNotificationsResponse](./models/webhook-get-active-notifications-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/webhooks/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.webhook.subscribeNotification`<a id="officientwebhooksubscribenotification"></a>

use this API to subscribe to notifications

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const subscribeNotificationResponse =
  await officient.webhook.subscribeNotification();
```

#### 🔄 Return<a id="🔄-return"></a>

[WebhookSubscribeNotificationResponse](./models/webhook-subscribe-notification-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/webhooks/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `officient.webhook.unsubscribeNotification`<a id="officientwebhookunsubscribenotification"></a>

Use this API to unsubscribe from notifcations

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unsubscribeNotificationResponse =
  await officient.webhook.unsubscribeNotification({
    webhookId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookId: `number`<a id="webhookid-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/1.0/webhooks/{webhook_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
