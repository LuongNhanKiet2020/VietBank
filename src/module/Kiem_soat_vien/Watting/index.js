import { Box } from "@mui/system";
import React from "react";
import { Grid, Button,  FormControl,
  OutlinedInput,
  InputAdornment,Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody} from "@mui/material";
import Divider from '@mui/material/Divider';
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function createData(
  id,
  TenKH,
  ChiDinhNhan,
  SLMaDuThuong,
  SLTangKhachHangMoi,
  SLTangSinhNhat,
  QuaTang,
  TaiKhoan,
  SoTien,
  KyHan,
  LaiSuatTK,
  NgayMoCIF,
  UserThucHien,
  NgayXuat
) {
  return {
    id,
    TenKH,
    ChiDinhNhan,
    SLMaDuThuong,
    SLTangKhachHangMoi,
    SLTangSinhNhat,
    QuaTang,
    TaiKhoan,
    SoTien,
    KyHan,
    LaiSuatTK,
    NgayMoCIF,
    UserThucHien,
    NgayXuat,
  };
}
const data = [
  createData(
    "0028",
    "HO THI ANH",
    "MADUTHUONG",
    10,
    0,
    5,
    100,
    100,
    0,
    "nam sau",
    0,
    "09/07/2022",
    "vbsuper11",
    "09/07/2022"
  ),
  createData(
    "0028",
    "HO THI ANH",
    "MADUTHUONG",
    10,
    0,
    5,
    100,
    100,
    0,
    "nam sau",
    0,
    "09/07/2022",
    "vbsuper11",
    "09/07/2022"
  ),
  createData(
    "0028",
    "HO THI ANH",
    "MADUTHUONG",
    10,
    0,
    5,
    100,
    100,
    0,
    "nam sau",
    0,
    "09/07/2022",
    "vbsuper11",
    "09/07/2022"
  ),
  createData(
    "0028",
    "HO THI ANH",
    "MADUTHUONG",
    10,
    0,
    5,
    100,
    100,
    0,
    "nam sau",
    0,
    "09/07/2022",
    "vbsuper11",
    "09/07/2022"
  ),
];
const KiemsoatvienOnWaitting = ()=>{
    return (
        <Grid container spacing={3}>
  <Box sx={{ml:3}}>   
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="flex-start">
          <Grid item>
            <Button variant="contained">
              Đang chờ duyệt
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined"  >
              Đã duyệt
            </Button>
          </Grid>
          
        </Grid>
      </Box>
      

      <Divider sx={{mt:2}} />
    </Box> 
      <Grid item xs={12} >
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
          <Grid item>
            <Button sx={{
                        margin: "0 0 16px 0 0",
                        padding: "9px 41px",
                        borderRadius: "4px",
                        border: "solid 2px #ff0000",
                        fontWeight: 650,
                        color:"red"
                      }} >
              Từ chối
            </Button>
          </Grid>
          <Grid item>
            <Button sx={{margin: "0 0 16px 0 0",
                        padding: "9px 41px",
                        borderRadius: "4px",
                        border: "solid 2px #4cb050",
                        fontWeight: 650,
                        color:"#4cb050"}}>
              Chấp thuận
            </Button>
          </Grid>
          <Grid item>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                sx={{ height: "48px" }}
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

      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 2000 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Mã KH&nbsp;</TableCell>
                <TableCell align="center">Tên KH &nbsp;</TableCell>
                <TableCell align="center">Chỉ định nhận&nbsp;</TableCell>
                <TableCell align="center">SL mã dự thưởng&nbsp;</TableCell>
                <TableCell align="center">
                  SL tặng khách hàng mới&nbsp;
                </TableCell>
                <TableCell align="center">SL tặng sinh nhật&nbsp;</TableCell>
                <TableCell align="center">Quà tặng&nbsp;</TableCell>
                <TableCell align="center">Tài khoản&nbsp;</TableCell>
                <TableCell align="center">Số tiền&nbsp;</TableCell>
                <TableCell align="center">Kỳ hạn&nbsp;</TableCell>
                <TableCell align="center">Lãi suất TK&nbsp;</TableCell>
                <TableCell align="center">Ngày mở CIF&nbsp;</TableCell>
                <TableCell align="center">User thực hiện&nbsp;</TableCell>
                <TableCell align="center">Ngày xuất&nbsp;</TableCell>
                <TableCell align="center">Thao tác&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.TenKH}</TableCell>
                  <TableCell align="center">{row.ChiDinhNhan}</TableCell>
                  <TableCell align="center">{row.SLMaDuThuong}</TableCell>
                  <TableCell align="center">{row.SLTangKhachHangMoi}</TableCell>
                  <TableCell align="center">{row.SLTangSinhNhat}</TableCell>
                  <TableCell align="center">{row.QuaTang}</TableCell>
                  <TableCell align="center">{row.TaiKhoan}</TableCell>
                  <TableCell align="center">{row.SoTien}</TableCell>
                  <TableCell align="center">{row.KyHan}</TableCell>
                  <TableCell align="center">{row.LaiSuatTK}</TableCell>
                  <TableCell align="center">{row.NgayMoCIF}</TableCell>
                  <TableCell align="center">{row.UserThucHien}</TableCell>
                  <TableCell align="center">{row.NgayXuat}</TableCell>
                  <TableCell align="center">
                    <IconButton color="success">
                      <CheckCircleIcon />
                    </IconButton>
                    <IconButton sx={{ color: "red" }}>
                      <HighlightOffIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Grid>
    </Grid>
    )
}
export default KiemsoatvienOnWaitting;