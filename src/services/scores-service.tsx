import { db } from "../firebase";

const ScoresService = {
  async getScores() {
    return db
      .collection("scores")
      .get()
      .then((scores: any) => {
        let _scores = [];
        scores.forEach((score: any) => {
          _scores.push(score.data());
        });
        return scores;
      });
  },

  observeScores(callback: any) {
    db.collection("scores").onSnapshot(callback);
  },

  async insertScore(score: any) {
    db.collection("scores").add(score);
  },
};

export default ScoresService;
