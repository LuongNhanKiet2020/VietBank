import * as React from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Grid, OutlinedInput, InputAdornment } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Máy sấy tóc Sunhouse", "10 mã dự phòng", "10"),
  createData("", "", ""),
  createData("", "", ""),
];
const DayList = [
  { title: "20/12/2022 - 30/12/2022", year: 1994 },
  { title: "20/12/2022 - 30/12/2022", year: 1972 },
  { title: "20/12/2022 - 30/12/2022", year: 1974 },
];
const BranchList = [
  { title: "VIETBANK - HOCHiMINH", year: 1994 },
  { title: "VIETBANK - HOCHiMINH", year: 1972 },
  { title: "VIETBANK - HOCHiMINH", year: 1974 },
];
const Baocao = () => {
  const DayProps = {
    options: DayList,
    getOptionLabel: (option) => option.title,
  };
  const BranchProps = {
    options: BranchList,
    getOptionLabel: (option) => option.title,
  };
  return (
    <Paper>
      <Box component="form" noValidate autoComplete="off" padding="20px">
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            spacing={2}
          >
            <Grid item>
              <Box sx={{ minWidth: 250 }}>
                <Autocomplete
                  {...DayProps}
                  id="disable-close-on-select"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Từ ngày - Đến ngày"
                      variant="standard"
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ minWidth: 250 }}>
                <Autocomplete
                  {...BranchProps}
                  id="disable-close-on-select"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Chi nhánh"
                      variant="standard"
                    />
                  )}
                />
              </Box>
            </Grid>
            <Button
              sx={{
                margin: "16px 0 0 16px",
                padding: "2px 11px",
                borderRadius: "4px",
                border: "solid 2px #0162e4",
                fontWeight: 650,
              }}
            >
              Tìm kiếm
            </Button>
          </Grid>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={2}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item>
                <Button variant="outlined">Xuất dữ liệu</Button>
              </Grid>
              <Grid item>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <OutlinedInput
                    sx={{ height: "36px" }}
                    id="outlined-adornment-weight"
                    placeholder="Tìm kiếm..."
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <TableContainer component={Paper} sx={{ width: "100%", mt: 3 }}>
            <Table sx={{}} aria-label="simple table">
              <TableHead
                sx={{
                  border: "solid 1px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#fff",
                }}
              >
                <TableRow>
                  <TableCell>Chọn quà</TableCell>
                  <TableCell>Yêu cầu</TableCell>
                  <TableCell>Số lượng&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Baocao;
