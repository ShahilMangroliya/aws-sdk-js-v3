// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { IoTFleetWiseClientConfig } from "./IoTFleetWiseClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTFleetWiseClientConfig) => ({
  apiVersion: "2021-06-17",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoTFleetWise",
  urlParser: config?.urlParser ?? parseUrl,
});