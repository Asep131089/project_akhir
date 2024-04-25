const db = require("../models");
const Customer = db.customers;
const Op = db.Sequelize.Op;

// create
exports.create = (req, res) => {
  // create
  const customer = {
    nama: req.body.nama,
    jenis_kelamin: req.body.jenis_kelamin,
    alamat: req.body.alamat,
    kota: req.body.kota,

    
  };

  // simpan ke database
  Customer.create(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "terjadi error",
      });
    });
};

//read all
exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama ? { nama: { [Op.like]: `%${nama}%` } } : null;

  Customer.findAll({
    where: condition,
    include: ["pesanan"],
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

// mencari data per id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Customer.findByPk(id, { include: ["pesanan"] })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: "data pesanan tdk ditemukan" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error Server" });
    });
};

// update
exports.update = (req, res) => {
  const id = req.params.id;
  Customer.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: " Pesanan sukses di update",
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
  Customer.destroy({
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
