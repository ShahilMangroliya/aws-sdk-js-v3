import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBucketMetricsConfiguration } from "../model/GetBucketMetricsConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBucketMetricsConfigurationInput } from "../types/GetBucketMetricsConfigurationInput";
import { GetBucketMetricsConfigurationOutput } from "../types/GetBucketMetricsConfigurationOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/GetBucketMetricsConfigurationInput";
export * from "../types/GetBucketMetricsConfigurationOutput";
export * from "../types/GetBucketMetricsConfigurationExceptionsUnion";

export class GetBucketMetricsConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBucketMetricsConfigurationInput,
      OutputTypesUnion,
      GetBucketMetricsConfigurationOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBucketMetricsConfigurationInput,
    GetBucketMetricsConfigurationOutput,
    Blob
  >();

  constructor(readonly input: GetBucketMetricsConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBucketMetricsConfigurationInput,
    GetBucketMetricsConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: GetBucketMetricsConfiguration
    };
    stack.add(
      __aws_sdk_bucket_endpoint_middleware.bucketEndpointMiddleware({
        forcePathStyle: configuration.forcePathStyle,
        preformedBucketEndpoint: configuration.bucketEndpoint,
        useAccelerateEndpoint: configuration.useAccelerateEndpoint,
        useDualstackEndpoint: configuration.useDualstackEndpoint
      }),
      {
        step: "build",
        priority: 0
      }
    );
    stack.add(
      __aws_sdk_middleware_header_default.headerDefault({
        "Content-Type": "application/octet-stream"
      }),
      {
        step: "build",
        priority: -50,
        tags: { "Content-Type": true }
      }
    );
    return stack.resolve(
      handler<
        GetBucketMetricsConfigurationInput,
        GetBucketMetricsConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
