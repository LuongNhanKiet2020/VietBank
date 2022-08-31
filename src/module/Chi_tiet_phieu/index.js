import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Grid, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Mã KH", width: 70 },
  { field: "TenKH", headerName: "Tên KH", width: 130 },
  { field: "ChiDinhNhan", headerName: "Quà tặng", width: 130 },
  { field: "SLMaDuThuong", headerName: "Tài khoản", width: 100 },
  { field: "SLTangKhachHangMoi", headerName: "Số tiền", width: 100 },
  { field: "SLTangSinhNhat", headerName: "Kỳ hạn", width: 100 },
  { field: "QuaTang", headerName: "Lãi suất TK", width: 100 },
  { field: "TaiKhoan", headerName: "Ngày mở CIF", width: 100 },
  { field: "SoTien", headerName: "Chỉ định nhận", width: 110 },
  { field: "Thaotac", headerName: "Thao tác", width: 100 },
];

const rows = [
  {
    id: "0028",
    TenKH: "HO THI ANH",
    ChiDinhNhan: "MADUTHUONG",
    SLMaDuThuong: 10,
    SLTangKhachHangMoi: 0,
    SLTangSinhNhat: 5,
    QuaTang: 100,
    TaiKhoan: 100,
    SoTien: 0,
    KyHan: "namsau",
    LaiSuatTK: 0,
    NgayMoCIF: "09/07/2022",
    UserThucHien: "vbsuper11",
    NgayXuat: "09/07/2022",
  },  {
    id: "0030",
    TenKH: "HO THI ANH",
    ChiDinhNhan: "MADUTHUONG",
    SLMaDuThuong: 10,
    SLTangKhachHangMoi: 0,
    SLTangSinhNhat: 5,
    QuaTang: 100,
    TaiKhoan: 100,
    SoTien: 0,
    KyHan: "namsau",
    LaiSuatTK: 0,
    NgayMoCIF: "09/07/2022",
    UserThucHien: "vbsuper11",
    NgayXuat: "09/07/2022",
  },
  {
    id: "0031",
    TenKH: "HO THI ANH",
    ChiDinhNhan: "MADUTHUONG",
    SLMaDuThuong: 10,
    SLTangKhachHangMoi: 0,
    SLTangSinhNhat: 5,
    QuaTang: 100,
    TaiKhoan: 100,
    SoTien: 0,
    KyHan: "namsau",
    LaiSuatTK: 0,
    NgayMoCIF: "09/07/2022",
    UserThucHien: "vbsuper11",
    NgayXuat: "09/07/2022",
  },
  {
    id: "0032",
    TenKH: "HO THI ANH",
    ChiDinhNhan: "MADUTHUONG",
    SLMaDuThuong: 10,
    SLTangKhachHangMoi: 0,
    SLTangSinhNhat: 5,
    QuaTang: 100,
    TaiKhoan: 100,
    SoTien: 0,
    KyHan: "namsau",
    LaiSuatTK: 0,
    NgayMoCIF: "09/07/2022",
    UserThucHien: "vbsuper11",
    NgayXuat: "09/07/2022",
  },
  {
    id: "0033",
    TenKH: "HO THI ANH",
    ChiDinhNhan: "MADUTHUONG",
    SLMaDuThuong: 10,
    SLTangKhachHangMoi: 0,
    SLTangSinhNhat: 5,
    QuaTang: 100,
    TaiKhoan: 100,
    SoTien: 0,
    KyHan: "namsau",
    LaiSuatTK: 0,
    NgayMoCIF: "09/07/2022",
    UserThucHien: "vbsuper11",
    NgayXuat: "09/07/2022",
  },
  {
    id: "0034",
    TenKH: "HO THI ANH",
    ChiDinhNhan: "MADUTHUONG",
    SLMaDuThuong: 10,
    SLTangKhachHangMoi: 0,
    SLTangSinhNhat: 5,
    QuaTang: 100,
    TaiKhoan: 100,
    SoTien: 0,
    KyHan: "namsau",
    LaiSuatTK: 0,
    NgayMoCIF: "09/07/2022",
    UserThucHien: "vbsuper11",
    NgayXuat: "09/07/2022",
  },
  {
    id: "0029",
    TenKH: "HO THI ANH",
    ChiDinhNhan: "MADUTHUONG",
    SLMaDuThuong: 35,
    SLTangKhachHangMoi: 0,
    SLTangSinhNhat: 5,
    QuaTang: 100,
    TaiKhoan: 100,
    SoTien: 0,
    KyHan: "namsau",
    LaiSuatTK: 0,
    NgayMoCIF: "09/07/2022",
    UserThucHien: "vbsuper11",
    NgayXuat: "09/07/2022",
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid black",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Chitietphieu = () => {
  return (
<Grid container spacing={3}>
      
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="flex-start">
          <Grid item>
            <Button variant="contained">
              Đang chờ duyệt
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined"  color="error">
              Đã huỷ
            </Button>
          </Grid>
          
        </Grid>
      </Box>

      <Grid item xs={12}>

          <div style={{ height: 250, width: "100%" }}>
            <DataGrid
              sx={{ width: "100%" }}
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[3]}
              checkboxSelection
            />
          </div>

      </Grid>
    </Grid>
  );
};
export default Chitietphieu;
