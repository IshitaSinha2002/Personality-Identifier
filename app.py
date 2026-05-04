from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

# ---------------- LOAD MODELS ----------------

traits = ['extraversion','agreeableness','conscientiousness','neuroticism','openness']

models = {}
for trait in traits:
    with open(f"{trait}_model.pkl", "rb") as f:
        models[trait] = pickle.load(f)

# Load feature mapping
with open("feature_cols.pkl", "rb") as f:
    feature_cols_map = pickle.load(f)

# ---------------- PERSONALITY MAPPING ----------------

def map_to_personality(scores):
    E = "E" if scores["extraversion"] >= 3 else "I"
    N = "N" if scores["openness"] >= 3 else "S"
    F = "F" if scores["agreeableness"] >= 3 else "T"
    P = "P" if scores["conscientiousness"] < 3 else "J"
    return E + N + F + P

# ---------------- PREDICT ROUTE ----------------

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json  # dict of answers

    predictions = {}

    for trait in traits:
        features = feature_cols_map[trait]

        # Extract values in correct order
        input_vector = [data[col] for col in features]
        input_array = np.array(input_vector).reshape(1, -1)

        pred = models[trait].predict(input_array)[0]
        predictions[trait] = round(float(pred), 2)

    personality = map_to_personality(predictions)

    return jsonify({
        "traits": predictions,
        "personality": personality
    })

# ---------------- RUN ----------------

if __name__ == "__main__":
    app.run(debug=True)