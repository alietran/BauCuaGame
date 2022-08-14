import { forInRight } from "lodash";

const initalState = {
  dsCuoc: [
    { ma: "bau", hinhAnh: "./img/gameBauCua/bau.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/gameBauCua/cua.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/gameBauCua/tom.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/gameBauCua/ca.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/gameBauCua/nai.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./img/gameBauCua/ga.png", diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: "ca", hinhAnh: "./img/gameBauCua/ca.png" },
    { ma: "nai", hinhAnh: "./img/gameBauCua/nai.png" },
    { ma: "ga", hinhAnh: "./img/gameBauCua/ga.png" },
  ],
};

const gameBauCuaReducer = (state = initalState, action) => {
  switch (action.type) {
    case "DAT_CUOC_BAU_CUA": {
      // Tìm trong ds cược , quân cược nào dc click sẽ tăng hoặc giảm điểm
      const dsCuocUpdate = [...state.dsCuoc];
      const index = dsCuocUpdate.findIndex(
        (qc) => qc.ma === action.quanCuoc.ma
      );
      if (index !== -1) {
        if (action.tangGiam) {
          if (state.tongDiem > 0) {
            dsCuocUpdate[index].diemCuoc += 100;
            state.tongDiem -= 100;
          }
        } else {
          if (dsCuocUpdate[index].diemCuoc > 0) {
            dsCuocUpdate[index].diemCuoc -= 100;
            state.tongDiem += 100;
          }
        }
      }
      state.dsCuoc = dsCuocUpdate;
      return { ...state };
    }
    case "PLAY_GAME_BAU_CUA": {
      const mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        // Tạo ra mảng ngẫu nhiên từ 0 -> 5
        let soNgauNhien = Math.floor(Math.random() * 6);
        const xucXacNgauNhien = state.dsCuoc[soNgauNhien];
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      // Xử lý tăng điểm thưởng
      mangXucXacNgauNhien.forEach((xucXac, index) => {
        let indexDS = state.dsCuoc.findIndex((qc) => qc.ma === xucXac.ma);
        if (index !== -1) {
          state.tongDiem += state.dsCuoc[indexDS].diemCuoc;
        }
      });

      //  Xử lý hoàn tiền
      state.dsCuoc.forEach((qc, index) => {
        let indexXucXacNN = mangXucXacNgauNhien.findIndex(
          (xxnn) => xxnn.ma === qc.ma
        );
        if (indexXucXacNN !== -1) {
          state.tongDiem += qc.diemCuoc;
        }
      });

      // Xử lý làm mới game
      state.dsCuoc = state.dsCuoc.map((qc, index) => {
        return { ...qc, diemCuoc: 0 };
      });

      return { ...state };
    }
    case "CHOI_LAI": {
      state.tongDiem = 1000;
      state.dsCuoc = state.dsCuoc.map((qc, index) => {
        return { ...qc, diemCuoc: 0 };
      });
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default gameBauCuaReducer;
