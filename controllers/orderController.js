const Order = require("../models/Order");

exports.createOrder = async (req, res) => {

 try {

  const data = req.body;

  const mappedOrder = {
    orderId: data.numeroPedido,
    value: data.valorTotal,
    creationDate: data.dataCriacao,
    items: data.items.map(item => ({
    productId: Number(item.idItem),
    quantity: item.quantidadeItem,
    price: item.valorItem
    }))
  };

  const order = new Order(mappedOrder);

  await order.save();

  res.status(201).json(order);

 } catch (error) {

  res.status(500).json({ message: "Erro ao criar pedido", error });

 }

};

exports.getOrder = async (req, res) => {

    try {

        const order = await Order.findOne({ orderId: req.params.id });

        if (!order) {
        return res.status(404).json({ message: "Pedido não encontrado" });
        }

    res.json(order);

    } catch (error) {

        res.status(500).json({ message: "Erro ao buscar pedido" });

    }

};

exports.listOrders = async (req, res) => {

   try {

        const orders = await Order.find();

        res.json(orders);

    } catch (error) {

        res.status(500).json({ message: "Erro ao listar pedidos" });

    }

};

exports.updateOrder = async (req, res) => {

    try {

        const order = await Order.findOneAndUpdate(
        { orderId: req.params.id },
        req.body,
        { new: true }
        );

        res.json(order);

    } catch (error) {

        res.status(500).json({ message: "Erro ao atualizar pedido" });

    }

};

exports.deleteOrder = async (req, res) => {

    try {

        await Order.findOneAndDelete({ orderId: req.params.id });

        res.json({ message: "Pedido deletado com sucesso" });

    } catch (error) {

        res.status(500).json({ message: "Erro ao deletar pedido" });

    }

};