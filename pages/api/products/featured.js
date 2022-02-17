export default function handler(req, res) {
  res.status(200).json({
    featured: [
      { product: "Coffee table", price: 249.99, id: "0" },
      { product: "Chenille Sofa", price: 430.0, id: "1" },
      { product: "King's chair", price: 89.99, id: "2" },
    ],
  });
}
