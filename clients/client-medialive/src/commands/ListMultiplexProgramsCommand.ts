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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListMultiplexProgramsRequest, ListMultiplexProgramsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListMultiplexProgramsCommand,
  serializeAws_restJson1ListMultiplexProgramsCommand,
} from "../protocols/Aws_restJson1";

export interface ListMultiplexProgramsCommandInput extends ListMultiplexProgramsRequest {}
export interface ListMultiplexProgramsCommandOutput extends ListMultiplexProgramsResponse, __MetadataBearer {}

/**
 * List the programs that currently exist for a specific multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListMultiplexProgramsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListMultiplexProgramsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListMultiplexProgramsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMultiplexProgramsCommandInput} for command's `input` shape.
 * @see {@link ListMultiplexProgramsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListMultiplexProgramsCommand extends $Command<
  ListMultiplexProgramsCommandInput,
  ListMultiplexProgramsCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMultiplexProgramsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMultiplexProgramsCommandInput, ListMultiplexProgramsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "ListMultiplexProgramsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMultiplexProgramsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMultiplexProgramsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMultiplexProgramsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListMultiplexProgramsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMultiplexProgramsCommandOutput> {
    return deserializeAws_restJson1ListMultiplexProgramsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
