const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// create
exports.create = (req, res) => {
  // validasi request
  if (!req.body.nama || !req.body.categoryId) {
    res.status(400).send({
      message: "nama atau id relasi produk tidak boleh kosong",
    });
    return;
  }
  // create
  const product = {
    kode: req.body.kode,
    nama: req.body.nama,
    harga: req.body.harga,
    is_ready: req.body.is_ready,
    gambar: req.body.gambar,
    categoryId: req.body.categoryId,
  };

  // simpan ke database
  Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "terjadi error",
      });
    });
};

// read all
exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama ? { nama: { [Op.like]: `%${nama}%` } } : null;

  Product.findAll({
    where: condition,
    include: ["category"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "ada error",
      });
    });
};

//update
exports.update = (req, res) => {
  const id = req.params.id;
  Product.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: " Product sukses di update",
        });
      } else {
        res.send({
          message: "tidak bisa diupdate",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "server error",
      });
    });
};

// delete

exports.delete = (req, res) => {
  // req = request dan res = respon
  const id = req.params.id;
  Product.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "berhasil delete",
        });
      } else {
        res.send({
          message: "tidak berhasil delete",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "tidak berhasil delete. server error",
      });
    });
};

// mencari data per id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: "data Product tdk ditemukan" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error Server" });
    });
};
