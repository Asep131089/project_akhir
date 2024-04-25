module.exports = (sequelize, Sequelize) => {
  const Keranjang = sequelize.define("keranjang", {
    // "category" ini adalah nama untuk tabel nantinya
    jumlah: {
      type: Sequelize.INTEGER,
    },
    total_harga: {
      type: Sequelize.INTEGER,
    },
  });
  return Keranjang;
};
