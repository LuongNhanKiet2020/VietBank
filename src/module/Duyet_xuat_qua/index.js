import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Mã KH", width: 70 },
  { field: "TenKH", headerName: "Tên KH", width: 130 },
  { field: "ChiDinhNhan", headerName: "Chỉ định nhận", width: 130 },
  {
    field: "SLMaDuThuong",
    headerName: "SL mã dự thưởng",
    width: 70,
  },
  {
    field: "SLTangKhachHangMoi",
    headerName: "SL tặng khách hàng mới",
    width: 100,
  },
  { field: "SLTangSinhNhat", headerName: "SL tặng sinh nhật", width: 100 },
  { field: "QuaTang", headerName: "Quà tặng", width: 70 },
  { field: "TaiKhoan", headerName: "Tài khoản", width: 70 },
  { field: "SoTien", headerName: "Số tiền", width: 70 },
  { field: "KyHan", headerName: "Kỳ hạn", width: 70 },
  { field: "LaiSuatTK", headerName: "Lãi suất TK", width: 90 },
  { field: "NgayMoCIF", headerName: "Ngày mở CIF ", width: 100 },
  { field: "UserThucHien", headerName: "User thực hiện", width: 100 },
  { field: "NgayXuat", headerName: "Ngày xuất", width: 70 },
  { field: "Thaotac", headerName: "Thao tác", width: 70 },
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
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: "100%",
  height: "36px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
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
  justifyContent: "right",
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

const Duyetxuatqua = () => {
  return (
    <Grid container spacing={3}>
      
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            <Button variant="outlined" color="error">
              Từ chối
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="success">
              Chấp thuận
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Xuất dữ liệu</Button>
          </Grid>
          <Grid item>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Tìm khách hàng"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
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
export default Duyetxuatqua;
