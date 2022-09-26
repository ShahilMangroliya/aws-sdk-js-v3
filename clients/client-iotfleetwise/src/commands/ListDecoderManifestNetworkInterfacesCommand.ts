// smithy-typescript generated code
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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import {
  ListDecoderManifestNetworkInterfacesRequest,
  ListDecoderManifestNetworkInterfacesRequestFilterSensitiveLog,
  ListDecoderManifestNetworkInterfacesResponse,
  ListDecoderManifestNetworkInterfacesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListDecoderManifestNetworkInterfacesCommand,
  serializeAws_json1_0ListDecoderManifestNetworkInterfacesCommand,
} from "../protocols/Aws_json1_0";

export interface ListDecoderManifestNetworkInterfacesCommandInput extends ListDecoderManifestNetworkInterfacesRequest {}
export interface ListDecoderManifestNetworkInterfacesCommandOutput
  extends ListDecoderManifestNetworkInterfacesResponse,
    __MetadataBearer {}

/**
 * <p> Lists the network interfaces specified in a decoder manifest. </p>
 *         <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListDecoderManifestNetworkInterfacesCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListDecoderManifestNetworkInterfacesCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new ListDecoderManifestNetworkInterfacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDecoderManifestNetworkInterfacesCommandInput} for command's `input` shape.
 * @see {@link ListDecoderManifestNetworkInterfacesCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class ListDecoderManifestNetworkInterfacesCommand extends $Command<
  ListDecoderManifestNetworkInterfacesCommandInput,
  ListDecoderManifestNetworkInterfacesCommandOutput,
  IoTFleetWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDecoderManifestNetworkInterfacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDecoderManifestNetworkInterfacesCommandInput, ListDecoderManifestNetworkInterfacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "ListDecoderManifestNetworkInterfacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDecoderManifestNetworkInterfacesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDecoderManifestNetworkInterfacesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDecoderManifestNetworkInterfacesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0ListDecoderManifestNetworkInterfacesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDecoderManifestNetworkInterfacesCommandOutput> {
    return deserializeAws_json1_0ListDecoderManifestNetworkInterfacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}