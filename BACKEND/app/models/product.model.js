module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    // "product" ini adalah nama untuk tabel nantinya
    kode: {
      type: Sequelize.STRING,
    },
    nama: {
      type: Sequelize.STRING,
    },
    harga: {
      type: Sequelize.INTEGER,
    },
    is_ready: {
      type: Sequelize.STRING,
    },
    gambar: {
      type: Sequelize.STRING,
    },
  });
  return Product;
};
