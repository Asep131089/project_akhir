const db = require("../models");
const Keranjang = db.keranjangs;
const Op = db.Sequelize.Op;



// create
exports.create = (req, res) => {

   // validasi request
//    if(!req.body.nama){
//     res.status(400).send({
//         message: "nama tidak boleh kosong"
//     });
//     return;
// }

    // create
    const keranjang = {
      jumlah: req.body.jumlah,
      total_harga: req.body.total_harga,
      productId: req.body.productId,
    };
  
    // simpan ke database
    Keranjang.create(keranjang)
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
  const jumlah = req.query.jumlah;
  var condition = jumlah ? { jumlah: { [Op.like]: `%${jumlah}%` } } : null;

  Keranjang.findAll({
    where: condition,
    include :
    [
    "products"                    
    ]
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
exports.findOne = (req,res)=>{
  const id = req.params.id

  Keranjang.findByPk(id,{include:["products"]}).then(data=>{
    if (data){
      res.send(data);
    }else {
      res.status(404).send(
        {message : "data keranjang tdk ditemukan"}
      );
    }

  }).catch(err=>{
    res.status(500).send(
        {message : "error Server"}
    );
  })
}

// update
exports.update = (req, res) => {
  const id = req.params.id;
  Keranjang.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: " keranjang sukses di update",
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
}

// delete

exports.delete = (req,res)=>{       // req = request dan res = respon 
  const id = req.params.id
  Keranjang.destroy({
      where: {id : id}
  }).then(num=> {
      if (num == 1){
          res.send({
              message : "berhasil delete"
          })
      }else {
          res.send({
              message : "tidak berhasil delete"
          })
      }
  }). catch(err =>{
      res.status(500).send({
          message : "tidak berhasil delete. server error"
      })
  })

}