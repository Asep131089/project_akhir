module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    // "customer" ini adalah nama untuk tabel nantinya
    nama: {
      type: Sequelize.STRING,
    },
    jenis_kelamin: {
      type: Sequelize.STRING,
    },
    alamat: {
      type: Sequelize.STRING,
    },
    kota: {
      type: Sequelize.STRING,
    },
  });
  return Customer;
};
