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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { DeleteAnomalyMonitorRequest, DeleteAnomalyMonitorResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAnomalyMonitorCommand,
  serializeAws_json1_1DeleteAnomalyMonitorCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteAnomalyMonitorCommandInput extends DeleteAnomalyMonitorRequest {}
export interface DeleteAnomalyMonitorCommandOutput extends DeleteAnomalyMonitorResponse, __MetadataBearer {}

/**
 * <p>Deletes a cost anomaly monitor. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DeleteAnomalyMonitorCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DeleteAnomalyMonitorCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new DeleteAnomalyMonitorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnomalyMonitorCommandInput} for command's `input` shape.
 * @see {@link DeleteAnomalyMonitorCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteAnomalyMonitorCommand extends $Command<
  DeleteAnomalyMonitorCommandInput,
  DeleteAnomalyMonitorCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAnomalyMonitorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAnomalyMonitorCommandInput, DeleteAnomalyMonitorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "DeleteAnomalyMonitorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAnomalyMonitorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAnomalyMonitorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAnomalyMonitorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAnomalyMonitorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAnomalyMonitorCommandOutput> {
    return deserializeAws_json1_1DeleteAnomalyMonitorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
