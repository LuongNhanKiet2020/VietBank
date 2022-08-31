import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
// import axios from 'axios';
import React from "react";
// import {useEffect,useState} from "react";

function createData(id,name, price, number) {
  return {
    id,
    name,
    price,
    number,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

const rows = [
  // {id:0,name:"haha",price:123,number:10},
  createData(1,"Máy sấy tóc Sunhouse", 123, 10),
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
function Row(props) {
  const { row } = props;
  console.log(row.history.amount)
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.price}</TableCell>
        <TableCell align="left">{row.number}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const Xuatqua = () => {
  
  // const [user, setUser] = useState([]);
  // useEffect(()=>{
  //   const fetchData = async ()=>{
  //      return await axios({url: 'http://62d4e6735112e98e4854b660.mockapi.io/user', method: 'GET'})
  //   }
  //   fetchData()
  //   .then((response) => {  
  //     setUser([response.data]);
  //   })
  //   .catch((error) => {
  //     console.log("không có dữ liệu");
  //   });
  // }, [])
  return (
    <Grid container spacing={2}>
   
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          spacing={2}
        >
          <Grid item>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { mt: 2, width: "251.5px" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-number"
                label="Mã dự thưởng"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
            </Box>
          </Grid>

          <Button
            sx={{
              margin: "16px 0 0 16px",
              padding: "9px 19px",
              borderRadius: "4px",
              border: "solid 2px #0162e4",
              fontWeight: 650,
            }}
          >
            Kiểm tra
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} spacing={2} sx={{ mt: 3 }}>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
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

              marginTop: 3,
            }}
          >
            <Typography sx={{ color: "#1976D2", fontWeight: "bold" }}>
              Thông tin khách hàng
            </Typography>
            <Divider />
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-end"
                spacing={2}
              >
                {CustomerInfoList.map((value) => (
                  <Grid key={value} item>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { mt: 2, width: "251.5px" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="standard-number"
                        label={value}
                        type="text"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="standard"
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Paper>
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              marginTop: 3,
            }}
          >
            <Typography sx={{ color: "#1976D2", fontWeight: "bold" }}>
              Nhận quà
            </Typography>
            <Divider />
            <Box sx={{ flexGrow: 1, mt: 3 }}>
              <Grid container spacing={2} justifyContent="flex-start">
                <Grid item>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { mt: 2, width: "251.5px" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-number"
                      label="Khách hàng nhận quà và mã dự thưởng"
                      type="text"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-end"
                  spacing={2}
                >
                  {["Số lượng tặng dự thưởng tặng sinh nhật", "Số lượng"].map(
                    (value) => (
                      <Grid key={value} item>
                        <Box
                          component="form"
                          sx={{
                            "& > :not(style)": { mt: 2, width: "251.5px" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="standard-number"
                            label={value}
                            type="text"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            variant="standard"
                          />
                        </Box>
                      </Grid>
                    )
                  )}
                  <Button
                    sx={{
                      width: "92px",
                      height: "32px",
                      flexGrow: 0,
                      margin: "16px 0 0 16px",
                      padding: "9px 29px",
                      borderRadius: "4px",
                      border: "solid 2px #0162e4",
                      fontWeight: 650,
                    }}
                  >
                    Thêm
                  </Button>
                </Grid>
              </Grid>
              <TableContainer component={Paper} sx={{ width: "70%", mt: 3 }}>
                <Table  aria-label="simple table">
                  <TableHead
                    sx={{
                      border: "solid 1px rgba(0, 0, 0, 0.2)",
                      backgroundColor: "#fff",
                    }}
                  >
                    <TableRow>
                      <TableCell />
                      <TableCell>Chọn quà</TableCell>
                      <TableCell>Yêu cầu</TableCell>
                      <TableCell>Số lượng&nbsp;</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <Row key={row.id} row={row} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Xuatqua;
