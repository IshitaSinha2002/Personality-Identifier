<h1>Personality Identifier – Personality Type Prediction System</h1>

<h3>Project Overview</h3>
<p>
Personality Identifier is a full-stack machine learning application designed to analyze user responses and predict personality traits based on the Big Five (OCEAN) model.
The system collects user inputs through an interactive questionnaire, processes them using trained ML models, and generates a personality type along with detailed trait scores.
</p>

<h4>Dataset:</h4>
<p>https://www.kaggle.com/datasets/tunguz/big-five-personality-test</p>

<h3>Tech Stack</h3>
<ul>
  <li>Front-end: ReactJS, CSS</li>
  <li>Back-end: Python, Flask, Flask-CORS</li>
  <li>Machine Learning: Gradient Boosting Regressor, Feature Engineering, Data Preprocessing</li>
</ul>

<h3>Home Page</h3>
<p>
Designed a clean and modern landing page introducing the personality assessment system, guiding users to begin the test with clear instructions and intuitive navigation.
</p>

<h3>Questionnaire Page</h3>
<p>
Developed an interactive questionnaire interface where users respond to personality-based statements using a Likert scale (1–5).
</p>
<ul>
  <li>Real-time answer selection and deselection</li>
  <li>Dynamic progress bar tracking</li>
  <li>Questions grouped by personality traits</li>
</ul>

<p>
This creates a smooth and engaging experience instead of a static form.
</p>

<h3>Results Page</h3>
<p>
Built a dynamic results page that displays:
</p>
<ul>
  <li><b>Predicted Personality Type</b> (e.g., ENFP)</li>
  <li><b>Trait Scores</b> across all five dimensions</li>
  <li><b>Insights</b> derived from user responses</li>
</ul>

<p>
The UI highlights key outputs clearly for better readability and interpretation.
</p>

<h3>Model Training Implementation Details</h3>

<ol>
  <li><b>Data Processing:</b>
    <ul>
      <li>Loaded tab-separated dataset</li>
      <li>Cleaned column formatting</li>
      <li>Removed unnecessary metadata columns (e.g., _E fields)</li>
      <li>Handled missing values</li>
      <li>Applied reverse scoring to specific questions</li>
    </ul>
  </li>

  <li><b>Feature Engineering:</b>
    <ul>
      <li>Grouped questions into five traits:
        <ul>
          <li>Openness</li>
          <li>Conscientiousness</li>
          <li>Extraversion</li>
          <li>Agreeableness</li>
          <li>Neuroticism</li>
        </ul>
      </li>
      <li>Computed trait scores using averages</li>
      <li>Removed same-trait features during training to avoid data leakage</li>
    </ul>
  </li>

  <li><b>Model Development:</b>
    <ul>
      <li>Gradient Boosting Regressor</li>
    </ul>
  </li>

  <li><b>Training Process:</b>
    <ul>
      <li>Sampled dataset for faster training</li>
      <li>Split data into training and testing sets (80/20)</li>
      <li>Trained separate models for each trait</li>
    </ul>
  </li>

  <li><b>Model Training:</b>
    <ul>
      <li>Implemented using Scikit-learn</li>
      <li>Maintained feature consistency between training and inference</li>
      <li>Saved trained models using pickle</li>
    </ul>
  </li>

  <li><b>Evaluation Metrics:</b>
    <ul>
      <li>R² Score – measures explained variance</li>
      <li>RMSE – measures prediction error</li>
    </ul>
  </li>

  <li><b>Model Performance:</b>
    <table border="1" cellpadding="6" cellspacing="0">
      <thead>
        <tr>
          <th>Trait</th>
          <th>R² Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Extraversion</td>
          <td>~0.37</td>
        </tr>
        <tr>
          <td>Agreeableness</td>
          <td>~0.29</td>
        </tr>
        <tr>
          <td>Openness</td>
          <td>~0.21</td>
        </tr>
        <tr>
          <td>Conscientiousness</td>
          <td>~0.18</td>
        </tr>
        <tr>
          <td>Neuroticism</td>
          <td>~0.17</td>
        </tr>
      </tbody>
    </table>
  </li>
</ol>

<h3>Backend Implementation</h3>

<ol>
  <li><b>Framework and Setup:</b>
    <ul>
      <li>Developed REST APIs using Flask</li>
      <li>Enabled CORS for frontend-backend communication</li>
      <li>Structured backend for modularity</li>
    </ul>
  </li>

  <li><b>Model Integration:</b>
    <ul>
      <li>Loaded trained models for each trait</li>
      <li>Maintained feature order using saved mappings</li>
      <li>Ensured consistency between training and inference</li>
    </ul>
  </li>

  <li><b>Prediction Logic:</b>
    <ul>
      <li>Received user input from frontend</li>
      <li>Converted input into model-compatible format</li>
      <li>Generated predictions for all five traits</li>
      <li>Mapped trait scores to personality type (e.g., ENFP)</li>
    </ul>
  </li>
</ol>

<h3>Application Flow</h3>
<pre>
User Input (React UI)
        ↓
Answer Mapping
        ↓
Flask API (/predict)
        ↓
ML Models (5 regressors)
        ↓
Trait Scores
        ↓
Personality Mapping
        ↓
Result Page
</pre>

<h3>Challenges and Learnings</h3>
<ul>
  <li>Identified and resolved data leakage issues</li>
  <li>Handled feature mismatch between training and inference</li>
  <li>Resolved CORS issues in frontend-backend communication</li>
  <li>Built a realistic ML pipeline with proper evaluation</li>
</ul>

<h3>Future Improvements</h3>
<ul>
  <li>Improve question-to-feature mapping</li>
  <li>Add visual charts for trait representation</li>
  <li>Enhance personality insights</li>
  <li>Deploy the application</li>
</ul>

<h3>Author</h3>
<p>
Ishita Sinha<br>
Data Analyst @ Boston Scientific<br>
Machine Learning Enthusiast
</p>
