// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSnapshotsCommand,
  ListSnapshotsCommandInput,
  ListSnapshotsCommandOutput,
} from "../commands/ListSnapshotsCommand";
import { RedshiftServerless } from "../RedshiftServerless";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftServerlessClient,
  input: ListSnapshotsCommandInput,
  ...args: any
): Promise<ListSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSnapshotsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RedshiftServerless,
  input: ListSnapshotsCommandInput,
  ...args: any
): Promise<ListSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.listSnapshots(input, ...args);
};
export async function* paginateListSnapshots(
  config: RedshiftServerlessPaginationConfiguration,
  input: ListSnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<ListSnapshotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSnapshotsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RedshiftServerless) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftServerlessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RedshiftServerless | RedshiftServerlessClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
