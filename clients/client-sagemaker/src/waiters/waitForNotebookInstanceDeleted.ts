import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeNotebookInstanceCommand,
  DescribeNotebookInstanceCommandInput,
} from "../commands/DescribeNotebookInstanceCommand";
import { SageMakerClient } from "../SageMakerClient";

const checkState = async (
  client: SageMakerClient,
  input: DescribeNotebookInstanceCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeNotebookInstanceCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.NotebookInstanceStatus;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ValidationException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilNotebookInstanceDeleted instead. waitForNotebookInstanceDeleted does not throw error in non-success cases.
 */
export const waitForNotebookInstanceDeleted = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeNotebookInstanceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNotebookInstanceCommand for polling.
 */
export const waitUntilNotebookInstanceDeleted = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeNotebookInstanceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
