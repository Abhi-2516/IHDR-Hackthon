import os
import pandas as pd
import google.generativeai as genai
import matplotlib.pyplot as plt
import seaborn as sns
from flask import Flask, render_template, request

app = Flask(__name__, static_folder='static')

# Set up Gemini API Key (Replace with actual key)
genai.configure(api_key="AIzaSyBFijCMOGtfOuNdkt3LmU2hvQSCkyOv60g")

# Ensure necessary directories exist
UPLOAD_FOLDER = "uploads"
STATIC_FOLDER = "static"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(STATIC_FOLDER, exist_ok=True)

# Function to get concise AI insights
def get_ai_insights(data):
    prompt = f"""
    Provide a **brief summary** (4-5 lines max) of the dataset:
    - Key patterns
    - Major trends
    - Any noticeable anomalies

    Data:
    {data.head(10).to_string(index=False)}
    """

    response = genai.GenerativeModel("models/gemini-1.5-flash-001").generate_content(prompt)

    # Clean up AI-generated insights (remove excessive formatting)
    clean_text = response.text.replace("*", "").strip().split("\n")[:5]  # Limit to 5 lines
    return " ".join(clean_text)  # Convert list to a single string


# Function to generate visualizations
def generate_visualizations(df):
    image_paths = {}

    # 1. Age Distribution Histogram
    plt.figure(figsize=(8, 6))
    sns.histplot(df["Age"], bins=10, kde=True, color="skyblue")
    plt.title("Age Distribution", fontsize=14, fontweight="bold")
    plt.xlabel("Age", fontsize=12)
    plt.ylabel("Count", fontsize=12)
    
    age_plot_path = os.path.join(STATIC_FOLDER, "age_distribution.png")
    plt.savefig(age_plot_path)
    plt.close()
    image_paths["age_plot"] = "static/age_distribution.png"

    # 2. Disease Frequency Bar Chart
    disease_counts = df["Diseases Detected"].str.split(", ").explode().value_counts()

    plt.figure(figsize=(10, 6))
    sns.barplot(x=disease_counts.index, y=disease_counts.values, palette="viridis")
    plt.xticks(rotation=45, ha="right")
    plt.title("Most Common Diseases", fontsize=14, fontweight="bold")
    plt.xlabel("Disease", fontsize=12)
    plt.ylabel("Frequency", fontsize=12)

    disease_plot_path = os.path.join(STATIC_FOLDER, "disease_frequency.png")
    plt.savefig(disease_plot_path)
    plt.close()
    image_paths["disease_plot"] = "static/disease_frequency.png"

    return image_paths


@app.route("/", methods=["GET", "POST"])
def upload_file():
    if request.method == "POST":
        file = request.files["file"]
        if file.filename.endswith(".csv"):
            filepath = os.path.join(UPLOAD_FOLDER, file.filename)
            file.save(filepath)

            # Read CSV and process insights
            df = pd.read_csv(filepath)

            # Generate AI insights
            ai_insights = get_ai_insights(df)

            # Generate Visualizations
            image_paths = generate_visualizations(df)

            return render_template(
                "results.html",
                insights=ai_insights,
                image_paths=image_paths
            )

    return render_template("upload.html")


if __name__ == "__main__":
    app.run(debug=True)
