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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { RequestValidator, UpdateRequestValidatorRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRequestValidatorCommand,
  serializeAws_restJson1UpdateRequestValidatorCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateRequestValidatorCommandInput extends UpdateRequestValidatorRequest {}
export interface UpdateRequestValidatorCommandOutput extends RequestValidator, __MetadataBearer {}

/**
 * <p>Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateRequestValidatorCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateRequestValidatorCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateRequestValidatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRequestValidatorCommandInput} for command's `input` shape.
 * @see {@link UpdateRequestValidatorCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateRequestValidatorCommand extends $Command<
  UpdateRequestValidatorCommandInput,
  UpdateRequestValidatorCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRequestValidatorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRequestValidatorCommandInput, UpdateRequestValidatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "UpdateRequestValidatorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRequestValidatorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RequestValidator.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRequestValidatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRequestValidatorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRequestValidatorCommandOutput> {
    return deserializeAws_restJson1UpdateRequestValidatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
