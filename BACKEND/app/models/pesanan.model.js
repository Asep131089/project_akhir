module.exports = (sequelize, Sequelize) => {
  const Pesanan = sequelize.define("pesanan", {
    jumlah: {
      type: Sequelize.INTEGER,
    },
    total_harga: {
      type: Sequelize.INTEGER,
    },
    total_bayar: {
      type: Sequelize.INTEGER,
    },
    keterangan: {
      type: Sequelize.STRING,
    },
    status_bayar: {
      type: Sequelize.STRING,
    },
  });
  return Pesanan;
};
