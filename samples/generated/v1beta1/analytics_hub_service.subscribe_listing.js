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

function main(name) {
  // [START analyticshub_v1beta1_generated_AnalyticsHubService_SubscribeListing_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the listing to subscribe to.
   *  e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456`.
   */
  // const name = 'abc123'
  /**
   *  BigQuery destination dataset to create for the subscriber.
   */
  // const destinationDataset = {}

  // Imports the Dataexchange library
  const {AnalyticsHubServiceClient} = require('@google-cloud/bigquery-data-exchange').v1beta1;

  // Instantiates a client
  const dataexchangeClient = new AnalyticsHubServiceClient();

  async function callSubscribeListing() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await dataexchangeClient.subscribeListing(request);
    console.log(response);
  }

  callSubscribeListing();
  // [END analyticshub_v1beta1_generated_AnalyticsHubService_SubscribeListing_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
