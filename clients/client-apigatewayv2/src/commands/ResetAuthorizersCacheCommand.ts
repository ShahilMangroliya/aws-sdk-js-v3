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

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { ResetAuthorizersCacheRequest } from "../models/models_0";
import {
  deserializeAws_restJson1ResetAuthorizersCacheCommand,
  serializeAws_restJson1ResetAuthorizersCacheCommand,
} from "../protocols/Aws_restJson1";

export interface ResetAuthorizersCacheCommandInput extends ResetAuthorizersCacheRequest {}
export interface ResetAuthorizersCacheCommandOutput extends __MetadataBearer {}

/**
 * <p>Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ResetAuthorizersCacheCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ResetAuthorizersCacheCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new ResetAuthorizersCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetAuthorizersCacheCommandInput} for command's `input` shape.
 * @see {@link ResetAuthorizersCacheCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ResetAuthorizersCacheCommand extends $Command<
  ResetAuthorizersCacheCommandInput,
  ResetAuthorizersCacheCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetAuthorizersCacheCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetAuthorizersCacheCommandInput, ResetAuthorizersCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "ResetAuthorizersCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetAuthorizersCacheRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetAuthorizersCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ResetAuthorizersCacheCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetAuthorizersCacheCommandOutput> {
    return deserializeAws_restJson1ResetAuthorizersCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
