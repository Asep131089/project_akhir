const db = require("../models");
const Pesanan = db.pesanans;
const Op = db.Sequelize.Op;

// create
exports.create = (req, res) => {
  // create
  const pesanan = {
    jumlah: req.body.jumlah,
    total_harga: req.body.total_harga,
    productId: req.body.productId,
    customerId: req.body.customerId,
    total_bayar: req.body.total_bayar,
    keterangan: req.body.keterangan,
    status_bayar:`belum bayar`
  };

  // simpan ke database
  Pesanan.create(pesanan)
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
  const total_bayar = req.query.total_bayar;
  var condition = total_bayar
    ? { total_bayar: { [Op.like]: `%${total_bayar}%` } }
    : null;

  Pesanan.findAll({
    where: condition,
    include: ["customer", "products"],
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

  Pesanan.findByPk(id, { include: ["customer"] })
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
  Pesanan.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: " pesanan sukses di update",
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
  Pesanan.destroy({
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
