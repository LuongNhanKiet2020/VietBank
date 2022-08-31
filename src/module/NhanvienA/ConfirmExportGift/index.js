import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";
import TablePagination from "@mui/material/TablePagination";
// import Buttons from "./Buttons";
// import { List } from "@mui/material/List";
// import { useEffect } from "react";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// ES2015 module syntax
import { PDFExport } from "@progress/kendo-react-pdf";

const columns = [
  { id: "id", align: "center", label: "id", minWidth: 20 },
  { id: "TenKH", align: "center", label: "TenKH", minWidth: 130 },
  { id: "ChiDinhNhan", align: "center", label: "ChiDinhNhan", minWidth: 10 },
  { id: "SLMaDuThuong", label: "ChiDinhNhan", minWidth: 10 },
  { id: "SLTangKhachHangMoi", label: "SLTangKhachHangMoi", minWidth: 10 },
  { id: "SLTangSinhNhat", label: "SLTangSinhNhat", minWidth: 10 },
  { id: "QuaTang", label: "QuaTang", minWidth: 10 },
  { id: "TaiKhoan", label: "TaiKhoan", minWidth: 10 },
  { id: "SoTien", label: "SoTien", minWidth: 40 },
  { id: "KyHan", label: "KyHan", minWidth: 40 },
  { id: "LaiSuatTK", label: "LaiSuatTK", minWidth: 40 },
  { id: "NgayMoCIF", label: "NgayMoCIF", minWidth: 40 },
  { id: "UserThucHien", label: "UserThucHien", minWidth: 40 },
  { id: "NgayXuat", label: "NgayXuat", minWidth: 40 },
  { id: "Thaotac", align: "center", label: "Thaotac", minWidth: 120 },
];

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

// list1.id = 1
// list1.TenKH="123"
// console.log(typeof list1)
// var list2 = [];
// list2.push(list1);
// list2.push(list1);
// console.log(list2)
const Duyetxuatqua = () => {
  alert()
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [status, setStatus] = React.useState("unchecked");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid container spacing={3}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setStatus("unchecked")}
            >
              Từ chối
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="success"
              onClick={() => setStatus("checked")}
            >
              Chấp thuận
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={exportPDFWithComponent}>Xuất dữ liệu</Button>
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
      
      <Grid item xs={12}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <PDFExport ref={pdfExportComponent} paperSize="A4">
          <TableContainer width={false} component={Paper} sx={{ mx: "auto" }}>
            <Table
              aria-label="simple table"
              fixHeader={false}
              sx={{ tableLayout: "auto" }}
            >
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      sx={{ width: 100 }}
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.TenKH}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.ChiDinhNhan}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.SLMaDuThuong}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.SLTangKhachHangMoi}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.SLTangSinhNhat}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.QuaTang}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.TaiKhoan}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.SoTien}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.KyHan}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.LaiSuatTK}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.NgayMoCIF}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.UserThucHien}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.NgayXuat}
                  </TableCell>
                  {status === "checked" ? (
                    <TableCell align="center">
                      <IconButton color="success">
                        <CheckCircleIcon />
                      </IconButton>
                    </TableCell>
                  ) : (
                    <TableCell align="center">
                      <IconButton sx={{ color: "red" }}>
                        <HighlightOffIcon />
                      </IconButton>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </Table>
          </TableContainer>
          </PDFExport>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Duyetxuatqua;
