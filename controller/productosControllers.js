const controlador={
    productos:(req,res)=>{
        res.render('productos');
    },

    carrito:(req,res)=>{
        res.render('carrito')
    }
}

module.exports = controlador;