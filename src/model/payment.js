const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const payment_schema = mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  card_type: {
    type: String,
    required: true,
  },
  cc_number: {
    type: String,
    required: true,
  },
  sec_code: {
    type: String,
    required: true,
  },
  expiration_month: {
    type: String,
    required: true,
  },
  expiration_year: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model("Payment", payment_schema);

module.exports = {
  Payment,
};
