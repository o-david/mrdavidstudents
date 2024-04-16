import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  publisher: { type: String, required: true },
  releaseDate: { type: String, required: true },
});

const Game = mongoose.model('Game', gameSchema);

export default Game;