module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    // "category" ini adalah nama untuk tabel nantinya
    nama: {
      type: Sequelize.STRING,
    },
  });
  return Category;
};
