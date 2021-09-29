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
import {
  ModifyInstanceCapacityReservationAttributesRequest,
  ModifyInstanceCapacityReservationAttributesResult,
} from "../models/models_4";
import {
  deserializeAws_ec2ModifyInstanceCapacityReservationAttributesCommand,
  serializeAws_ec2ModifyInstanceCapacityReservationAttributesCommand,
} from "../protocols/Aws_ec2";

export interface ModifyInstanceCapacityReservationAttributesCommandInput
  extends ModifyInstanceCapacityReservationAttributesRequest {}
export interface ModifyInstanceCapacityReservationAttributesCommandOutput
  extends ModifyInstanceCapacityReservationAttributesResult,
    __MetadataBearer {}

/**
 * <p>Modifies the Capacity Reservation settings for a stopped instance. Use this action to configure an
 * 			instance to target a specific Capacity Reservation, run in any <code>open</code> Capacity Reservation with matching
 * 			attributes, or run On-Demand Instance capacity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceCapacityReservationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceCapacityReservationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstanceCapacityReservationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceCapacityReservationAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceCapacityReservationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyInstanceCapacityReservationAttributesCommand extends $Command<
  ModifyInstanceCapacityReservationAttributesCommandInput,
  ModifyInstanceCapacityReservationAttributesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyInstanceCapacityReservationAttributesCommandInput) {
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
  ): Handler<
    ModifyInstanceCapacityReservationAttributesCommandInput,
    ModifyInstanceCapacityReservationAttributesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyInstanceCapacityReservationAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyInstanceCapacityReservationAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyInstanceCapacityReservationAttributesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyInstanceCapacityReservationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyInstanceCapacityReservationAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyInstanceCapacityReservationAttributesCommandOutput> {
    return deserializeAws_ec2ModifyInstanceCapacityReservationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
