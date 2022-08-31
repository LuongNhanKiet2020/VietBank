import Layout from "../layout";
import Duyetxuatqua from "../module/NhanvienA/ConfirmExportGift";
import Xuatqua from "../module/NhanvienA/ExportGift";
import NhanvienBOnWaiting from "../module/NhanvienB/Watting";
import NhanvienBConfirmed from '../module/NhanvienB/Confirmed'
import KiemsoatvienOnWaitting from '../module/Kiem_soat_vien/Watting/index';
import KiemsoatvienConfirmed from '../module/Kiem_soat_vien/Confirmed/index';
import HOConfirmed from '../module/HO/Confirmed';
import HODelete from '../module/HO/Delete';
import Baocao from '../module/HO/Report';
import UseAPI from '../module/Test_Use_api'
import SignIn from '../module/SignIn'
import {Navigate} from "react-router-dom";

const routes = [
    {
      path: "/",
      element: <Navigate to="/XuatquamathuongA" />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "XuatquamathuongA",
          element: <Xuatqua />, //checked
        },
        {
          path: "DuyetxuatquamaA",
          element: <Duyetxuatqua />, //checked
        },
        {
          path: "DangDuyetB",
          element: <NhanvienBOnWaiting />, //checked
        },
        {
          path: "DaduyetB",
          element: <NhanvienBConfirmed />, //checked
        },
        {
          path: "DangDuyetC",
          element: <KiemsoatvienOnWaitting />, //checked
        },
        {
          path: "DaduyetC",
          element: <KiemsoatvienConfirmed />, //checked
        },
        {
          path: "DuyetD",
          element: <HOConfirmed />,
        },
        {
          path: "XoaD",
          element: <HODelete />,
        },
        {
          path: "BaocaoD",
          element: <Baocao />,
        },
        {
          path: "getAPI",
          element: <UseAPI />, // Bỏ qua
        },
        {
          path: "Login",
          element: <SignIn />, // Bỏ qua
        },
      ],
    },
  ];
export default routes  