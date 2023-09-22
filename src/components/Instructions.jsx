import { Box, Link, Typography } from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { LoadingButton } from "@mui/lab";
import styled from "@emotion/styled";

const codeBlockStyle = {
  padding: 1,
  mt: 1,
  mb: 1,
  color: "grey.800",
  border: "1px solid",
  borderColor: "grey.300",
  borderRadius: 2,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Instructions(props) {
  return (
    <Box sx={{ ...codeBlockStyle }}>
      <Typography variant="body1" component="span" paragraph>
        <div>
          1. Download and extract Intel® Memory Latency Checker from{" "}
          <Link href="https://www.intel.com/content/www/us/en/developer/articles/tool/intelr-memory-latency-checker.html">
            here
          </Link>
          .
        </div>
        <div>
          2. Open CMD as administrator and CD to the directory where mlc.exe is
          located.
        </div>
        <div>
          3. Run the command below to benchmark 3 trials, the tool will average
          the results. Change the amount of trials and file name if desired.
        </div>
        <Box sx={{ ...codeBlockStyle, width: "fit-content", ml: 2 }}>
          <Typography variant="body1">
            for /L %i in (1, 1, 3) do (mlc.exe --loaded_latency -t10 {">>"}{" "}
            result.txt)
          </Typography>
        </Box>
        <div>4. Upload the files to this page to visualize the results.</div>
      </Typography>
      <LoadingButton
        component="label"
        variant="contained"
        loading={props.isParsingFiles}
        loadingPosition="end"
        sx={{ ml: 2, mt: 1 }}
        endIcon={<CloudUploadIcon />}
      >
        Upload Results
        <VisuallyHiddenInput
          type="file"
          multiple
          onChange={(e) => {
            props.parseFiles(Array.from(e.target.files));
          }}
        />
      </LoadingButton>
    </Box>
  );
}
