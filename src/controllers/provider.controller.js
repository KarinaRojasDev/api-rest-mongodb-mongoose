const Provider = require("../models/Providers");

//GET
const getProviders = async (req, res) => {
    try {
        const providers = await Provider.find();
        res.status(200).json(providers);
    } catch (err) {
      console.log(err);
    }
}

//GET ID
const getProviderId = async (req, res) => {
    const id = req.params.id;

    try {
        const provider = await Provider.findById(id);

        if(!provider){
            return res.status(404).json({ message: "El provider no existe" });

        }
        res.json(provider);
    } catch (err) {
      console.log(err);
    }
}

//POST 
const createProvider = async(req, res) => {
    try {
        const provider = await Provider.create(req.body);
        const savedProvider = await provider.save();

        res.status(201).json({
          message: "proveedor creado",
          provider: savedProvider,
        });

    } catch (err) {
      console.log(err);
    }
}

//PUT
const updateProvider = async(req,res)=> {
    const id = req.params.id;
    try {
        const updateProvider = await Provider.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        res.json(updateProvider);
    } catch (err) {
      console.log(err);
    }
}

//DELETE
const deleteProvider = async (req, res) => {
    const id = req.params.id;
    try {
        const provider = await Provider.findByIdAndDelete(id);
        res.json(provider);
    } catch (err) {
      console.log(err);
    }
}


module.exports = {
  getProviders,
  getProviderId,
  createProvider,
  updateProvider,
  deleteProvider,
};