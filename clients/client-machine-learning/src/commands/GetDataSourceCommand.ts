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

import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetDataSourceInput, GetDataSourceOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetDataSourceCommand,
  serializeAws_json1_1GetDataSourceCommand,
} from "../protocols/Aws_json1_1";

export interface GetDataSourceCommandInput extends GetDataSourceInput {}
export interface GetDataSourceCommandOutput extends GetDataSourceOutput, __MetadataBearer {}

/**
 * <p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p>
 *         <p>
 *             <code>GetDataSource</code> provides results in normal or verbose format. The verbose format
 *             adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, GetDataSourceCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, GetDataSourceCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new GetDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataSourceCommandInput} for command's `input` shape.
 * @see {@link GetDataSourceCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDataSourceCommand extends $Command<
  GetDataSourceCommandInput,
  GetDataSourceCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDataSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataSourceCommandInput, GetDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "GetDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDataSourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetDataSourceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDataSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataSourceCommandOutput> {
    return deserializeAws_json1_1GetDataSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
