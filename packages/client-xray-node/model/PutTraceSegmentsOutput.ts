import { _UnprocessedTraceSegmentList } from "./_UnprocessedTraceSegmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutTraceSegmentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UnprocessedTraceSegments: {
      shape: _UnprocessedTraceSegmentList
    }
  }
};
