const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subCategorySchema = new Schema({
	name: { type: String, required: true },
	sign: { type: String, required: true },
	color: { type: String, required: true },
	count: { type: Number, required: true }
})

const categorySchema = new Schema({
    name: { type: String, required: true },
    sign: { type: String, required: true },
    color: { type: String, required: true },
    count: { type: Number, required: true },
    subCategories: {
        type: Array,
	    required: true,
        of : subCategorySchema
    }
})

const accountSchema = new Schema({
    accountName: { type: String, required: true },
    accountType: { type: String, required: true },
    count: { type: Number, required: true },
	accountSignColor: { type: [String, String], required: true }
})

const transactionSchema = new Schema ({
    transactionType: { type: String, required: true },
    transactionDate: { type: Date, required: true },
	transactionAccount: { type: String, required: true },
	transactionAmount: { type: Number, required: true },
	transactionTransferAccount: { _id: String },
    transactionDescription: { type : String },
    transactionCategory: { type : String },
    subCategory: { type : String }
})

const storiesSchema = new Schema({
    img: Buffer,
    header: String,
    description: String,
    background: Buffer
})

const Account = new mongoose.model('Card', accountSchema)
const Transaction = new mongoose.model('Transaction', transactionSchema)
const Category = new mongoose.model('Category', categorySchema)
const Story = new mongoose.model('Story', storiesSchema)

module.exports = {
    schemes: {
    categorySchema,
    accountSchema,
    transactionSchema,
    storiesSchema,
    },
    models: {
        Account,
        Transaction,
        Category,
        Story,
    }
}