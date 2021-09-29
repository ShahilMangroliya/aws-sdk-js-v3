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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetEffectivePoliciesRequest, GetEffectivePoliciesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetEffectivePoliciesCommand,
  serializeAws_restJson1GetEffectivePoliciesCommand,
} from "../protocols/Aws_restJson1";

export interface GetEffectivePoliciesCommandInput extends GetEffectivePoliciesRequest {}
export interface GetEffectivePoliciesCommandOutput extends GetEffectivePoliciesResponse, __MetadataBearer {}

/**
 * <p>Gets a list of the policies that have an effect on the authorization behavior of the
 *          specified device when it connects to the IoT device gateway.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetEffectivePolicies</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetEffectivePoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetEffectivePoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetEffectivePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEffectivePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetEffectivePoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetEffectivePoliciesCommand extends $Command<
  GetEffectivePoliciesCommandInput,
  GetEffectivePoliciesCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEffectivePoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEffectivePoliciesCommandInput, GetEffectivePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetEffectivePoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEffectivePoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEffectivePoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEffectivePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEffectivePoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEffectivePoliciesCommandOutput> {
    return deserializeAws_restJson1GetEffectivePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
