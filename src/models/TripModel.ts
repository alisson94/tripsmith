import mongoose from 'mongoose'

const ActivitySchema = new mongoose.Schema({
  nome: { type: String, required: true },
  horario: { type: String, required: true },
  descricao: { type: String, required: true },
  categoria: { type: String, required: true },
  preco: { type: String, required: true }
})

const DaySchema = new mongoose.Schema({
  dia: { type: Number, required: true },
  resumo: { type: String, required: true },
  atividades: [ActivitySchema]
})

const HotelSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  faixa_preco: { type: String, required: true },
  endereco_bairro: { type: String, required: true }
})

const TripSchema = new mongoose.Schema({
  city: { type: String, required: true },
  days: { type: Number, required: true },
  titulo_viagem: { type: String, required: true },
  cidade_geo: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  recomendacoes_hoteis: [HotelSchema],
  dias: [DaySchema],
  created_at: { type: Date, default: Date.now }
})

export default mongoose.models.Trip || mongoose.model('Trip', TripSchema)