import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Link from "@mui/material/Link";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
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
          2. Open CMD as administrator and CD to the directory where mlc.exe and
          mlcdrv.sys are located.
        </div>
        <div>
          3. Change the file name in the command below if desired then run it to
          start the benchmark.
        </div>
        <Box sx={{ ...codeBlockStyle, width: "fit-content", ml: 2 }}>
          <Typography variant="body1">
            mlc.exe --loaded_latency -e0 -t25 -W5 {">>"} result.txt
          </Typography>
        </Box>
        <div>
          4. To obtain an average, write multiple tests to the same text file to
          mitigate systematic error (e.g. between system restarts).
        </div>
        <div>5. Upload the files to visualize the results.</div>
      </Typography>
      <LoadingButton
        component="label"
        variant="contained"
        loading={props.isParsingFiles}
        loadingPosition="end"
        sx={{ ml: 2, mt: 1, mb: 1 }}
        endIcon={<CloudUploadIcon />}
      >
        Upload Results
        <VisuallyHiddenInput
          type="file"
          accept=".txt"
          multiple
          onChange={(e) => {
            props.parseFiles(Array.from(e.target.files));
          }}
        />
      </LoadingButton>
    </Box>
  );
}
