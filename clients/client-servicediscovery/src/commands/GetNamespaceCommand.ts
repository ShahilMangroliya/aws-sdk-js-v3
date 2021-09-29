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

import { GetNamespaceRequest, GetNamespaceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetNamespaceCommand,
  serializeAws_json1_1GetNamespaceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

export interface GetNamespaceCommandInput extends GetNamespaceRequest {}
export interface GetNamespaceCommandOutput extends GetNamespaceResponse, __MetadataBearer {}

/**
 * <p>Gets information about a namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new GetNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNamespaceCommandInput} for command's `input` shape.
 * @see {@link GetNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetNamespaceCommand extends $Command<
  GetNamespaceCommandInput,
  GetNamespaceCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceDiscoveryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetNamespaceCommandInput, GetNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "GetNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetNamespaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetNamespaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetNamespaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetNamespaceCommandOutput> {
    return deserializeAws_json1_1GetNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
