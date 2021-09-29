import { Paginator } from "@aws-sdk/types";

import {
  ListCertificatesByCACommand,
  ListCertificatesByCACommandInput,
  ListCertificatesByCACommandOutput,
} from "../commands/ListCertificatesByCACommand";
import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListCertificatesByCACommandInput,
  ...args: any
): Promise<ListCertificatesByCACommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCertificatesByCACommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListCertificatesByCACommandInput,
  ...args: any
): Promise<ListCertificatesByCACommandOutput> => {
  // @ts-ignore
  return await client.listCertificatesByCA(input, ...args);
};
export async function* paginateListCertificatesByCA(
  config: IoTPaginationConfiguration,
  input: ListCertificatesByCACommandInput,
  ...additionalArguments: any
): Paginator<ListCertificatesByCACommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCertificatesByCACommandOutput;
  while (hasNext) {
    input.marker = token;
    input["pageSize"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
