const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: [true, "Es obligatorio el nombre de la empresa"],
      trim: true,
    },

    CIF: {
      type: String,
      required: [true, "Es obligatorio el CIF"],
      trim: true,
      unique: true,
    },

    address: {
      type: String,
      required: [true, "Es obligatoria la dirección"],
      trim: true,
    },

    url_web: {
      type: String,
      trim: true,
      default: "Sin web",
    },
  },
  {
    timestamps: true,
  },
);

const Provider = mongoose.model("Provider", providerSchema);
module.exports = Provider;