import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Bayar() {
  return (
    <div className="mt-4 text-center">
      <Image src="/assets/images/sukses.png" width="500" />
      <h2>Sukses Pesan</h2>
      <p style={{ marginBottom: "5px", marginLeft: "13rem" }}>
        Terima Kasih Sudah Memesan{" "}
      </p>
      <Button
        // style={{ marginBottom: "100px" }}
        variant="primary"
        as={Link}
        to="/pesanan"
      >
        Kembali
      </Button>
    </div>
  );
}

export default Bayar;
