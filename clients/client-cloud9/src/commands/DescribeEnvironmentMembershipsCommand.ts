import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { DescribeEnvironmentMembershipsRequest, DescribeEnvironmentMembershipsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEnvironmentMembershipsCommand,
  serializeAws_json1_1DescribeEnvironmentMembershipsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeEnvironmentMembershipsCommandInput extends DescribeEnvironmentMembershipsRequest {}
export interface DescribeEnvironmentMembershipsCommandOutput
  extends DescribeEnvironmentMembershipsResult,
    __MetadataBearer {}

/**
 * <p>Gets information about environment members for an Cloud9 development environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, DescribeEnvironmentMembershipsCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, DescribeEnvironmentMembershipsCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new DescribeEnvironmentMembershipsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEnvironmentMembershipsCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentMembershipsCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeEnvironmentMembershipsCommand extends $Command<
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput,
  Cloud9ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEnvironmentMembershipsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Cloud9ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEnvironmentMembershipsCommandInput, DescribeEnvironmentMembershipsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Cloud9Client";
    const commandName = "DescribeEnvironmentMembershipsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEnvironmentMembershipsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEnvironmentMembershipsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEnvironmentMembershipsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEnvironmentMembershipsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEnvironmentMembershipsCommandOutput> {
    return deserializeAws_json1_1DescribeEnvironmentMembershipsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
