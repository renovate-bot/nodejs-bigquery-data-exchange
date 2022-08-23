// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START analyticshub_v1beta1_generated_AnalyticsHubService_ListDataExchanges_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource path of the DataExchanges.
   *  e.g. `projects/myproject/locations/US`.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of results to return in a single response page. Leverage
   *  the page tokens to iterate through the entire collection.
   */
  // const pageSize = 1234
  /**
   *  Page token, returned by a previous call, to request the next page of
   *  results.
   */
  // const pageToken = 'abc123'

  // Imports the Dataexchange library
  const {AnalyticsHubServiceClient} = require('@google-cloud/bigquery-data-exchange').v1beta1;

  // Instantiates a client
  const dataexchangeClient = new AnalyticsHubServiceClient();

  async function callListDataExchanges() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dataexchangeClient.listDataExchangesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListDataExchanges();
  // [END analyticshub_v1beta1_generated_AnalyticsHubService_ListDataExchanges_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
