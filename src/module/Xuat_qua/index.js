import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { experimentalStyled as styled } from "@mui/material/styles";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const rows = [
  createData("Máy sấy tóc Sunhouse", "10 mã dự phòng", "10"),
  createData("", "", ""),
  createData("", "", ""),
];
const CustomerInfoList = [
  "Tên khách hàng",
  "Mã khách hàng",
  "Ngày mở CIF",
  "CMND",
  "Ngày sinh",
  "Loại khách hàng",
  "Số tiền gửi",
  "Kỳ hạn",
  "Lãi suất TK",
  "Doanh số tiền gửi",
  "SL tặng dự thưởng tặng khách hàng mới",
  "SL ặng dự thưởng tặng sinh nhật",
];
const Xuatqua = () => {
  return (
    <Container maxWidth="100%">
      <Box
        component="form"
        // sx={{ "& .MuiTextField-root": { m: 1, width: "23ch" } }}
        noValidate
        autoComplete="off"
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            id="standard-number"
            label="Mã dự thưởng *"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <Button variant="outlined">Kiểm tra</Button>
        </Stack>
        <Grid item xs={12} spacing={2} sx={{mt:3}}>
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 800,
            }}
          >
            <Typography sx={{ color: "#1976D2", fontWeight: "bold" }}>
              Mã dự thưởng : 000021649848
            </Typography>
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 280,
                marginTop: 3,
              }}
            >
              <Typography sx={{ color: "#1976D2", fontWeight: "bold" }}>
                Thông tin khách hàng
              </Typography>
              <Divider/>
              <Box sx={{ flexGrow: 1,mt:3 }}>
                <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {CustomerInfoList.map((text, index) => (
                    <Grid item xs={3} key={index}>
                      <TextField
                        id="standard-number"
                        label={text}
                        type="text"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="standard"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 400,
                marginTop: 3,
              }}
            >
               <Typography sx={{ color: "#1976D2", fontWeight: "bold" }}>
                Nhận quà
              </Typography>
              <Divider/>
              <Box sx={{ flexGrow: 1,mt:3 }}>
                <Grid container spacing={2} justifyContent="flex-start">
                  <Grid item>
                    <TextField
                      id="standard-number"
                      label="Số lượng tặng dự thưởng tặng sinh nhật"
                      type="text"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  justifyContent="flex-start"
                  sx={{ mt: 1 }}
                >
                  <Grid item>
                    <TextField
                      id="standard-number"
                      label="Số lượng tặng dự thưởng tặng sinh nhật"
                      type="text"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="standard-number"
                      label="Số lượng tặng dự thưởng tặng sinh nhật"
                      type="text"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item>
                  <Button variant="outlined">Thêm</Button>
                  </Grid>
                </Grid>
                <TableContainer component={Paper} sx={{ width: "70%",mt:3 }}>
                <Table sx={{}} aria-label="simple table">
                  <TableHead>
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
              </Box>
            </Paper>
          </Paper>
        </Grid>
      </Box>
    </Container>
  );
};

export default Xuatqua;
