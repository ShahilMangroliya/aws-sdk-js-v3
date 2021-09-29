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

import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { UpdateLifecyclePolicyRequest, UpdateLifecyclePolicyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateLifecyclePolicyCommand,
  serializeAws_restJson1UpdateLifecyclePolicyCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateLifecyclePolicyCommandInput extends UpdateLifecyclePolicyRequest {}
export interface UpdateLifecyclePolicyCommandOutput extends UpdateLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Updates the specified lifecycle policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, UpdateLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, UpdateLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new UpdateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateLifecyclePolicyCommand extends $Command<
  UpdateLifecyclePolicyCommandInput,
  UpdateLifecyclePolicyCommandOutput,
  DLMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateLifecyclePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DLMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLifecyclePolicyCommandInput, UpdateLifecyclePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DLMClient";
    const commandName = "UpdateLifecyclePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLifecyclePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateLifecyclePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateLifecyclePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateLifecyclePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLifecyclePolicyCommandOutput> {
    return deserializeAws_restJson1UpdateLifecyclePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
