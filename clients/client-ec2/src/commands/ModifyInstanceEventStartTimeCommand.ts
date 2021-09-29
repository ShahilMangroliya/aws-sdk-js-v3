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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceEventStartTimeRequest, ModifyInstanceEventStartTimeResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyInstanceEventStartTimeCommand,
  serializeAws_ec2ModifyInstanceEventStartTimeCommand,
} from "../protocols/Aws_ec2";

export interface ModifyInstanceEventStartTimeCommandInput extends ModifyInstanceEventStartTimeRequest {}
export interface ModifyInstanceEventStartTimeCommandOutput
  extends ModifyInstanceEventStartTimeResult,
    __MetadataBearer {}

/**
 * <p>Modifies the start time for a scheduled Amazon EC2 instance event.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceEventStartTimeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceEventStartTimeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstanceEventStartTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceEventStartTimeCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceEventStartTimeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyInstanceEventStartTimeCommand extends $Command<
  ModifyInstanceEventStartTimeCommandInput,
  ModifyInstanceEventStartTimeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyInstanceEventStartTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyInstanceEventStartTimeCommandInput, ModifyInstanceEventStartTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyInstanceEventStartTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyInstanceEventStartTimeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyInstanceEventStartTimeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyInstanceEventStartTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyInstanceEventStartTimeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyInstanceEventStartTimeCommandOutput> {
    return deserializeAws_ec2ModifyInstanceEventStartTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
